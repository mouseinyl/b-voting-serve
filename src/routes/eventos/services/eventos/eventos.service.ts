import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase/firebase.service';


@Injectable()
export class EventosService {
    private firebase = new FirebaseService()
    constructor(

    ) { }
    // eventos
    async getEvents(uid: string) {
        return { data: await this.firebase.getEventosDB(uid) }
    }
    async getEvent(uid:string, filter){
        let data
        await this.firebase.getEventosDB(uid).then((x:any[])=>{
         data = x.find((y)=> y.nombre == filter);
      })
        return { data }
    }
    async createEvento(uid: string,evento) {
        return { data: await this.firebase.createEventoDB(uid,evento) }
    }

    async InitEvent(uid: string,evento){
        return { data: await this.firebase.initEventoDB(uid,evento) }

    }
    async stopEvent(uid: string,evento){
        return { data: await this.firebase.stopEventoDB(uid,evento) }

    }

}
