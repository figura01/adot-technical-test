import React, { createContext, useReducer, Dispatch, FC } from "react";
import { DestActions, destReducer } from '../reducers/destReducer'
import { DestType } from '../types/dest'

type Props = {
  children?: React.ReactNode
};

type InitialStateType = {
  dests: DestType[];
};

const initialState = {
  dests: [],
};

const DestsContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<DestActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { dests }: InitialStateType,
  action: DestActions
) => ({
  dests: destReducer(dests, action),
});

const DestsProvider: FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(mainReducer, initialState);
  
  return (
    <DestsContext.Provider value={{state, dispatch}}>
      {children}
    </DestsContext.Provider>
  )
}

export { DestsProvider, DestsContext };