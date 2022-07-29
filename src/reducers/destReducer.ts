type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Add = 'ADD_DEST',
}

// Dest

type DestType = {
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

type DestPayload = {
  [Types.Add] : {
    id: string;
    name: string;
    imgUrl: string;
    address: string;
    population: number;
    nbrHotels: number;
    averageIncome: number;
    surface: number;
    isActive: boolean;
  };
}

export type DestActions = ActionMap<DestPayload>[keyof ActionMap<DestPayload>];

export const destReducer = (state: DestType[], action: DestActions) => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          imgUrl: action.payload.imgUrl,
          address: action.payload.address,
          population: action.payload.population,
          nbrHotels: action.payload.nbrHotels,
          averageIncome: action.payload.averageIncome,
          surface: action.payload.surface,
          isActive: action.payload.isActive
        }
      ]
    default:
      return state;
  }
}
