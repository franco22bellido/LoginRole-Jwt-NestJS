import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
