import React, { FC, Fragment, useRef, useContext, FormEvent, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Typography, CardContent, CardActions, Button, Switch } from '@mui/material';
import { DestsContext } from '../contexts/destsContext'
import { Types } from "../reducers/destReducer";
import classes from './NewDestination.module.css';

const NewDestination: FC<{onCloseModal: () => void }>= (props) => {
  const { dispatch } = useContext(DestsContext);

  const { onCloseModal } = props
  const nameInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const addressInputRef = useRef<HTMLInputElement>(null)
  const populationInputRef = useRef<HTMLInputElement>(null)
  const nbrHotelsInputRef = useRef<HTMLInputElement>(null)
  const averageIncomeInputRef = useRef<HTMLInputElement>(null)
  const surfaceInputRef = useRef<HTMLInputElement>(null)
  const isActiveInputRef = useRef<HTMLInputElement>(null)
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const name = nameInputRef.current!.value;
    const imgUrl = imageInputRef.current!.value;
    const address = addressInputRef.current!.value;
    const isActive = isActiveInputRef.current!.checked;
    const population = Number(populationInputRef.current!.value);
    const averageIncome = Number(averageIncomeInputRef.current!.value);
    const nbrHotels = Number(nbrHotelsInputRef.current!.value);
    const surface = Number(surfaceInputRef.current!.value);
    const id = String(uuidv4());

    if(name.trim().length === 0 || imgUrl.trim().length === 0 || address.trim().length === 0 || population.toString().trim().length === 0 || averageIncome.toString().trim().length === 0 || surface.toString().trim().length === 0 || nbrHotels.toString().trim().length === 0){
      // throw error
      return;
    }
    console.log(
      id,
      name,
      imgUrl,
      address,
      isActive,
      population,
      averageIncome,
      nbrHotels,
      surface,
    )
    
    dispatch({type: Types.Add, payload: {
      id,
      name,
      imgUrl,
      address,
      isActive,
      population,
      averageIncome,
      nbrHotels,
      surface,
    }})

    onCloseModal()
  }

  const cancelHandler = (e: FormEvent) => {
    e.preventDefault()
    onCloseModal()
  }

  useEffect(() => {
    if(addressInputRef.current) addressInputRef.current.focus(); 
   }, [addressInputRef]);
  
  return (
    <Fragment>
      <CardContent>
        <form onSubmit={submitHandler}>
          <Typography variant='h5'>Ajouter une nouvelle destination</Typography>
          <div className={classes["form-group"]}>
            <input 
              ref={nameInputRef}  
              type="text" 
              placeholder="Nom de la destination" 
            />
          </div>
          <div className={classes["form-group"]}>
            <input 
              ref={addressInputRef} 
              type="text"
              placeholder="Adresse"
              autoFocus
          />
          </div>
          <div className={classes["form-group"]}>
            <input 
              ref={imageInputRef} 
              placeholder="Lien de l’image"
              type="text" 
            /> 
          </div>
          <div className={classes["form-group"]}>
            <div className={classes.details}>
              <input 
                ref={populationInputRef} 
                placeholder="Nb Habitants"
              />
              <input 
                ref={nbrHotelsInputRef} 
                placeholder="Nb Hotels" 
                type="text" 
              /> 
              <input 
                ref={averageIncomeInputRef} 
                type="text" 
                placeholder="Revenu Moy"
              /> 
              <input 
                ref={surfaceInputRef} 
                type="text"
                placeholder="Superficie"
              /> 
            </div>
          </div>
          <Switch inputRef={isActiveInputRef}/>
        </form>
      </CardContent>
      <CardActions>
        <Button onClick={cancelHandler} size="small">Cancel</Button>
        <Button onClick={submitHandler} size="small">Confirm</Button>
      </CardActions>
    </Fragment>
  )
}

export default NewDestination