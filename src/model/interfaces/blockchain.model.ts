export interface blockChain {
  nodos: nodo[];
}

export interface nodo {
  blocks: block[];
}

export interface block {
 
  eventos: evento[];
  votantes: votante[];
  candidatos: candidato[];
  resultados: resultado[];
}

export interface evento {
  nombre: string;
  fechaInit: string;
  fechaFin: string;
  votantes: votante[];
  candidatos: candidato[];
  ref?:string;
  estado?:string;
}

export interface votante {
  id: string;
  nombre: string;
  makeVoto:boolean;
}

export interface candidato {
  nombre: string;
  apellido: string;
  partido: string;
  votos?:number
}

export interface resultado {
  evento: evento;
  estado: string;
}
