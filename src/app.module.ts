import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from './routes/auth/auth.module';
import { EventsModule } from './routes/eventos/eventos.module';
import { VotingModule } from './routes/voting/voting.module';

@Module({
  imports: [AuthModule, EventsModule, VotingModule,  ],
  controllers: [AppController,  ],
  providers: [AppService, ],
})
export class AppModule {}
// 
// UserController]UserModule