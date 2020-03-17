import React from 'react'
import MediaCard from "./MediaCard";

import {

    Container,
    Grid,

  } from "@material-ui/core";





const cardData = [
   { title: 'Fancy', url:"https://media.giphy.com/media/U7gTVK2ch30xsUskCL/giphy.gif"},
   { title: 'Fancier', url:"https://media.giphy.com/media/S0E65fPCUecSI/giphy.gif"},
  ]


const CardData = () => {
    return (
        <Container>
          <Grid direction="row" justify="center" container spacing={3}>
              {cardData.map((data, index) =>{
               return (
                <Grid item key={index}>
                 <MediaCard data1={data}/>
                </Grid>
                 )
              })}
          </Grid>
        </Container>
    )
}

export default CardData