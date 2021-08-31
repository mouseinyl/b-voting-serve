import { Injectable } from '@nestjs/common';
import { block, candidato, evento, votante } from 'src/model/interfaces/blockchain.model';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Injectable()
export class VotingService {
    private firebase = new FirebaseService()


    async getVotacion(votacion) {
        console.log(votacion)
        let uid = await this.firebase.findVotacion(votacion)
        let resultado
        await this.firebase.getData(uid).then((x: block) => {
            const _e = x.eventos.find((z) => z.ref == votacion)
            resultado = {
                candidatos: _e.candidatos,
                nombre: _e.nombre,
            }
        })
        return resultado;
    }
    async getValidUser(votacion: string, votante) {
        let resultado
        let e
        console.log(votacion, "<===")
        const uid = await this.firebase.findVotacion(votacion);
        await this.firebase.getData(uid).then((x: block) => { e = x.eventos.find((z) => z.ref == votacion) })
        console.log(e)
        if (e == undefined) {
            resultado = { message: "no exite", estado: false }
        } else {
            const _y: votante = e.votantes.find((y) => y.id == votante)
            if (_y.makeVoto == undefined) {
                resultado = { message: "puede botar", estado: true }
            } else {
                resultado = { message: "no puede botar", estado: false }
            }
        }
        return resultado;
    }

    async makeVoto({ candidato, votante, votacion }) {
        const doc = await this.firebase.findVotacion(votacion);
        let result
        const valid = await this.getValidUser(votacion, votante)
        if (valid.estado) {
            await this.firebase.getData(doc).then((x: block) => {
                const evento: evento = x.eventos.find(_evento => _evento.ref == votacion);
                evento.votantes.find((_votante) => _votante.id == votante).makeVoto = true
                if (x.resultados.find((resultado) => resultado.evento.ref == votacion) == undefined) {
                    console.log("no existe")

                    x.resultados.push({ evento: evento, estado: evento.estado })

                    x.resultados.find((resultado) => resultado.evento.ref == votacion)
                        .evento.candidatos.find((_candidato) => { if (_candidato.nombre == candidato.nombre) { _candidato.votos = 0 } })
                }
                x.resultados.find((resultado) => resultado.evento.ref == votacion).evento
                    .candidatos.find((_candidato) => { if (_candidato.nombre == candidato.nombre) { _candidato.votos++ } })
                x.resultados.find((resultado) => resultado.evento.ref == votacion).evento
                    .candidatos.find((_candidato) => { if (_candidato.nombre == candidato.nombre) { console.log(_candidato.votos) } })

                result = this.firebase.setData(doc, x);
            })
            return {
                data: { estado: true, message: "voto realizado" }
            }

        } else {
            return {
                data: valid
            }
        }
    }
}
