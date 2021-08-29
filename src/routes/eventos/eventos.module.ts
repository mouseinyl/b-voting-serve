import { Module } from '@nestjs/common';

import { EventosController } from './eventos.controller';
import { EventosService } from './services/eventos/eventos.service';

@Module({
  controllers: [EventosController],
  providers: [EventosService]
})
export class EventsModule {}
