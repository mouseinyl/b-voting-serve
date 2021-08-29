import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Injectable()
export class CandidatosService {
    private firebase = new FirebaseService()

    constructor(){}

   

}
