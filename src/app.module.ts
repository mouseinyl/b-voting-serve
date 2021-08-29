import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from './routes/auth/auth.module';
import { EventsModule } from './routes/eventos/eventos.module';
import { CandidatosService } from './routes/candidatos/services/candidatos/candidatos.service';
import { CandidatosModule } from './routes/candidatos/candidatos.module';


@Module({
  imports: [AuthModule, EventsModule, CandidatosModule, ],
  controllers: [AppController,  ],
  providers: [AppService, CandidatosService],
})
export class AppModule {}
// 
// UserController]UserModule