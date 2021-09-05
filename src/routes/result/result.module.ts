import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './servises/result/result.service';

@Module({
  controllers: [ResultController],
  providers: [ResultService]
})
export class ResultModule {}
