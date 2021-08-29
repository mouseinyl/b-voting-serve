import { Module } from '@nestjs/common';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './services/candidatos/candidatos.service';

@Module({
  controllers: [CandidatosController],
  providers:[CandidatosService]
})
export class CandidatosModule {}
