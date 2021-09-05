import { Controller, Get, Req } from '@nestjs/common';
import { ResultService } from './servises/result/result.service';

@Controller('resultados')
export class ResultController {
    constructor(private result:ResultService){}
    

    @Get()
   async getResult(@Req() request){
        return await this.result.getRequest(request.query.uid)
    }
}
