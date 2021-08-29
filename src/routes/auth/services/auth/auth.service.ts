import { Injectable } from '@nestjs/common';
import { app } from 'src/firebase-config/firebase';
import { BlockChain } from 'src/services/blochainCode/blockChain.services';

@Injectable()
export class AuthService {
    constructor() { }

    async auth(email: string, pass: string) {
        return await app.auth().signInWithEmailAndPassword(email, pass);
    }
    async register(email: string, pass: string) {
        return await app.auth().createUserWithEmailAndPassword(email, pass);
    }
    async createUser(uid) {
     
        const genesyBlock =Object.assign({},{block_1:new BlockChain().getAllBlock()}) 
        return await app.firestore().collection("Users").doc(uid).set(JSON.parse(JSON.stringify(genesyBlock)) );
    }
}
