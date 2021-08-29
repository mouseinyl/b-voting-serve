
import * as sha256 from "crypto-js/sha256";

export class Block {
    public hash;
    private time
    constructor(
        public data,
        public hashPrevio = ""
        ) {
        this.time = new Date();
        this.hash = this.makeHash();
    }

    makeHash() {
        return sha256(
            this.time + this.hashPrevio + JSON.stringify(this.data),
        ).toString();
    }
}