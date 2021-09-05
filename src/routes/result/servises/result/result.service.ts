import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Injectable()
export class ResultService {
    private firebase = new FirebaseService()
    constructor() { }

    async getRequest(uid) {
        const resultado = { data: [] };
        await this.firebase.getData(uid).then((x) => {
        
            x.resultados.forEach(r => {
                console.log(r)
               const i= resultado.data.push(
                    {
                        estado: r.estado,
                        evento: r.evento,
                        votos_realizado: r.evento.candidatos.map(can => can.votos != undefined ? can.votos : 0).reduce((a, b) => a + b, 0),
                        cantidad_votantes: r.evento.votantes.length
                    }
                )
               delete resultado.data[i-1].evento.votantes
            });
            console.log(resultado)

        })
        return resultado
    }
}
