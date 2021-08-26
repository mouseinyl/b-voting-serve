import { Injectable } from "@nestjs/common";
import { Block } from './block';


@Injectable()
export class BlockChain {
  private chain = [];
  constructor() {
    this.chain = [this.createBlockGenesis()];
  }

  private createBlockGenesis() {
    return new Block({ pan: "hola" }, "0");
  }
  public getAllBlock(){
    return this.chain
  }
  public getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block: Block) {
    block.hashPrevio = this.getLastBlock().hash;
    block.hash = block.makeHash();
    this.chain.push(block);
  }

  validationChain(){
    for(let x= 1 ; x <= this.chain.length;x++ ){
      if(this.chain[x].hash != this.chain[x].makeHash()){
        return false;
      }
      if(this.chain[x-1].hash != this.chain[x].hashPrevio){
        return false;
      }
      return true;
    }
    
  }
}



