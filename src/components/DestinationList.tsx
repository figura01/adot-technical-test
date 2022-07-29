import React, { useContext, FC } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DestsContext } from '../contexts/destsContext'
import DestinationItem from './DestinationItem'

import { DestType } from '../types/dest'

import classes from './DestinationList.module.css'

const DestinationList: FC = (props) => {
  const { state } = useContext(DestsContext);

  

  return (
    <ul className={classes["destination-list"]}>
      {state.dests.length > 0 && state.dests.map((destination: DestType) => {
        return (
          <DestinationItem key={destination.id} destination={destination} />
        )
      })}
    </ul>
  )
}

export default DestinationList;