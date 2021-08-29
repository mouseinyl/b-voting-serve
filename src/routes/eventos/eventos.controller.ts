import { Body, Controller, Get, Headers, Param, Post, Req } from '@nestjs/common';
import { EventosService } from './services/eventos/eventos.service';

@Controller('eventos')
export class EventosController {
    constructor(private eventosS:EventosService){}


    @Get()
    getEventos(@Req() request){
   
       if(request.query.evento != undefined && request.query.uid){
         return this.eventosS.getEvent(request.query.uid,request.query.evento)

      }else{
         return this.eventosS.getEvents(request.query.uid)
       }

    }
   @Post('iniciar')
    async IniciarEventos(@Req() request){
      
         return await this.eventosS.InitEvent(request.query.uid,request.query.name_event)
    }

    @Post('stop')
    async stopEventos(@Req() request){
       
         return await this.eventosS.stopEvent(request.query.uid,request.query.name_event)
    }

    @Post("crear")
    async createEvento(@Req() request, @Body() body){
      
       return await this.eventosS.createEvento(request.query.uid, body)
        
    }
}
