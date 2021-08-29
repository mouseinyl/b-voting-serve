import { Injectable } from "@nestjs/common";
import { Block } from './block';
import { blockBase } from '../../model/const/nodo.const';


@Injectable()
export class BlockChain {
  private chain = [];
  constructor() {
      this.chain = [this.createBlockGenesis()];
  }

  private createBlockGenesis() {
    return new Block(blockBase , "0");
  }

  public getAllBlock(){
    if(this.validationChain()){
      return this.chain
    }
  }

  public getLastBlock() {
    if(this.validationChain()){
      return this.chain[this.chain.length - 1];
    }
  }

  addBlock(block: Block) {
   
    block.hashPrevio = this.getLastBlock().hash;
    block.hash = block.makeHash();
    this.chain.push(block);
    return this.getAllBlock()
  }

  validationChain(){
        
    if (this.chain.length != 1){
     

      for(let x= 1 ; x <= this.chain.length;x++ ){
        // console.log(this.chain[x])
        // if(this.chain[x].hash != this.chain[x].makeHash()){
        //   return false;
        // }
        if(this.chain[x-1].hash != this.chain[x].hashPrevio){
          return false;
        }
        return true;
      }
    }
    return true;
  }

  useThisChain(e){
    this.chain = e;
    return this.getLastBlock();
  }
  
  
  validALL(y){
    
    if(this.validationChain()){
      return y
    }else{
      return false
    }
  }
}



