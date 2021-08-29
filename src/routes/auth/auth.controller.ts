import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { BlockChain } from '../../services/blochainCode/blockChain.services';

@Controller('auth')
export class AuthController {
    constructor(private authS: AuthService, private BC:BlockChain) { }

    @Post("/login")
    async auth(@Body() body) {
        let response;
       
        await this.authS
            .auth(body.email, body.pass).then((x) => { response = { data: x.user }; })
            .catch((err) => { response = err; });

        return response;
    }
    @Post("/registro")
    async registro(@Body() body) {
        let register;
        let userCreate
        await this.authS
            .register(body.email, body.pass).then((x) => { register = { data: x.user, }; })
            .catch((err) => { register = err; });
        if (register.code == "auth/email-already-in-use") {
            return { error: "Usuario existente" }
        } else {
            await this.authS.createUser(register.data.uid).then((x) => {

                userCreate = { ...register, x };
            });
            return userCreate
        }


    }
}
