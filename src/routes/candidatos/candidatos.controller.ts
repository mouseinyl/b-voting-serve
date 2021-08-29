import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { CandidatosService } from './services/candidatos/candidatos.service';

@Controller('candidatos')
export class CandidatosController {
    constructor(private candidatosS:CandidatosService){}



    
}
