import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./services/auth.service";
import { Block } from "./services/blochainCode/block";
import { BlockChain } from "./services/blochainCode/blockChain.services";

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly BlockChain: BlockChain,
  ) { }

  @Post("/auth")
  async auth(@Body() body) {
    let response;

    await this.authService
      .auth(body.email, body.pass).then((x) => { response = { data: x.user }; })
      .catch((err) => { response = err; });

    return response;
  }
  @Post("/registro")
  async registro(@Body() body) {
    let response;

    await this.authService
      .register(body.email, body.pass).then((x) => { response = { data: x.user, }; })
      .catch((err) => { response = err; });

    await this.authService.createUser(response.data.uid).then((x) => {
      response = { ...response, x };
    });

    return response;
  }

  @Get("/validToken")
  validTokend() {
    return;
  }

  @Get("values")
  getValues() {
    this.BlockChain.addBlock(new Block({ hola: "x" + this.BlockChain.getAllBlock().length }))
    return { last: this.BlockChain.getLastBlock(), timeline: this.BlockChain.getAllBlock(), validation: this.BlockChain.validationChain() };
  }
}
