import React, { useState, FC } from 'react';
import { Card, CardContent, CardMedia, Typography, Divider, Switch } from '@mui/material';
import { green } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

import classes from './DestinationItem.module.css';
import { DestType } from '../types/dest';
const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[400],
    '&:hover': {
      backgroundColor: alpha(green[400], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[400],
  },
}));

const DestinationItem: FC<{destination: DestType}> = ({destination}) => {
  const {imgUrl, isActive, name, address, population, nbrHotels, averageIncome, surface} = destination

  const [checked, setChecked] = useState<Boolean>(isActive)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <li className={classes["destination-item"]}>
    <Card sx={{ width: 355 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <div className={classes["content-card"]}>
          <div className={classes.header}>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {address}
            </Typography>
          </div>
          <GreenSwitch 
            checked={Boolean(checked)}
            onChange={handleChange}
            size="small"
            color={"success"}
          />
        </div>
        
      </CardContent>
      <Divider />

      <ul className={classes["detail-list"]}>
        <li className={classes["detail-item"]}>
          {population.toFixed(2)}
          <span>Habitants</span>
        </li>
        <li className={classes["detail-item"]}>
          {nbrHotels}
          <span>Habitants</span>
        </li>
        <li className={classes["detail-item"]}>
          {averageIncome}
          <span>Revenu Moy</span>
        </li>
        <li className={classes["detail-item"]}>
          {surface}
          <span>km²</span>
        </li>
      </ul>
    </Card>
  </li>
}

export default DestinationItem;