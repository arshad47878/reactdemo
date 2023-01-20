import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [showItems, setShowItems] = useState([]);

  function AddData(data){
    
    const el = cart.filter((e)=>(
      e.id===data.id
    ))
    if(el.length===0){
      setCart([...cart,data])
    }
    else{
      alert("product already exist")
    }
    
  }
  console.log(cart);

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setData(data);
    console.log('data', data);
  };

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
    <Grid sx={{ flexGrow: 1 }} container spacing={3} >
      {data.map((Data, index) => (
        <Grid item spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <Paper variant="outlined" >
              <img src={Data.image} />
            </Paper>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  <h2>{Data.title}</h2>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <h2>{Data.description}</h2>
                </Typography>
                <Typography gutterBottom variant='h8' component='div'>
                  <h2>{Data.price}</h2>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary' onClick={()=>AddData(Data)}>
                ADD TO CART
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
  )
}

export default Home