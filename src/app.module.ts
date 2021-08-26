import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthService } from "./services/auth.service";

// import { UserModule } from "./user/user.module";
import { BlockChain } from "./services/blochainCode/blockChain.services";
// import { UserController } from "./user/user.controller";

@Module({
  imports: [],
  controllers: [AppController, ],
  providers: [AppService, AuthService,BlockChain],
})
export class AppModule {}
// 
// UserController]UserModule