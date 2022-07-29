export type DestType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
  population: number;
  nbrHotels: number;
  averageIncome: number;
  surface: number;
  isActive: boolean;
}

export interface IDest {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
  population: number;
  nbrHotels: number;
  averageIncome: number;
  surface: number;
  isActive: boolean;
}

export type DestContextType = {
  dests: IDest[];
  addDest: (dest: IDest) => void;
};