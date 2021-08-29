import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './services/auth/auth.service';
import { BlockChain } from '../../services/blochainCode/blockChain.services';

@Module({
  controllers: [AuthController],
  providers: [AuthService,BlockChain]
})
export class AuthModule {}
