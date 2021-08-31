import { Controller, Get, Req, Post } from '@nestjs/common';
import { VotingService } from './services/voting/voting.service';


@Controller('voting')
export class VotingController {

    constructor(private  voting:VotingService){ }

    @Get()
    async getVotacion(@Req() request){
      return await this.voting.getVotacion(request.query.votacion)
    }

    @Post('validuser')
    async getValidUser(@Req() request){
     return await this.voting.getValidUser(request.body.votacion,request.body.votante) 
    }

    @Post('voto')
    async sendVoto(@Req() request){
      console.log(request.body , "controler")
     return await this.voting.makeVoto(request.body);
        
    }
    
}
