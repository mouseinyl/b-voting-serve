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
}

export interface votante {
  id: string;
  nombre: string;
}

export interface candidato {
  nombre: string;
  apellido: string;
  partido: string;
}

export interface resultado {
  evento: evento;
  estado: string;
}
