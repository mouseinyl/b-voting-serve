import { Injectable } from '@nestjs/common';
import { app } from 'src/firebase-config/firebase';
import { BlockChain } from '../blochainCode/blockChain.services';
import { Block } from '../blochainCode/block';
import e from 'express';

@Injectable()
export class FirebaseService {
    public fireStore
    public User;
    private bc: BlockChain = new BlockChain()
    constructor() {
        this.fireStore = app.firestore();
        this.User = this.fireStore.collection('Users')
    }

    deleteUserData(uid) {
        app.firestore().collection("Users").doc(uid).delete()
    }

    async findVotacion(votacion) {
        console.log(votacion)
        let resul
        await (await app.firestore().collection('Users').get()).docs.forEach(
            (x) => {
                const i = x.data().block_1.length - 1;
                const lastBlock = x.data().block_1[i];
                const find = lastBlock.data.eventos.find((z) => z.ref == votacion)
                if (find != undefined) { resul = x.id }
            }
        )
        return resul;
    }

    async getData(uid) {
        let data

        await this.User.doc(uid).get().then((x) => {

            data = this.bc.useThisChain(x.data().block_1)
        })
        return data.data
    }
    async setData(uid, data) {
        let value
        await this.User.doc(uid).get().then(() => {
            value = this.bc.addBlock(new Block(data))
        });
        await this.User.doc(uid).update({ block_1: JSON.parse(JSON.stringify(value)) })
        return true
    }

  

    // 
    async getEventosDB(uid) {
        let events
        await this.getData(uid).then((x) => { events = x.eventos })
        return events;
    }

    async createEventoDB(uid, evento) {
        // let events 
        await this.getData(uid).then((x) => {
            x.eventos.push(Object.assign(evento, { estado: "sin Iniciar" }));
            this.setData(uid, x).then(y => { })
        })
        return { message: "creado" };
    }

    async initEventoDB(uid, evento_name) {
        // let events 
        let resulte
        await this.getData(uid).then((x) => {
            const evento = x.eventos.filter((z) => z.nombre == evento_name)
            evento[0].estado = "iniciado"
            evento[0] = Object.assign(evento[0], { ref: 'b-voting@' + evento[0].nombre.replace(" ", "-") })
            resulte = x
        })
        await this.setData(uid, resulte).then(y => { })
        return { message: "creado" };
    }
    async stopEventoDB(uid, evento_name) {
        console.log("aqui")
        let resulte
        await this.getData(uid).then((x) => {
            const evento = x.eventos.filter((z) => z.nombre == evento_name)
            evento[0].estado = "no iniciado"
            evento[0].ref = ''
            resulte = x
        })
        await this.setData(uid, resulte).then(y => { })
        return { message: "creado" };
    }


    // 


}
