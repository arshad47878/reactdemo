import React from 'react'
import {ImageList,ImageListItem} from '@mui/material'


const image = () => {
  const itemData =[
    {img:'https://www.cookforindia.com/wp-content/uploads/2016/08/ghevar.jpg',
     name:'Ghewar'},
     {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYAxbDdhzAfKjAHlGDuqsU7XdYsZGIgSQJQ&usqp=CAU',
     name:'Ras malai'},
     {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iSCNV52vfzl0DW22c4eYH1ZPtt0U0Y3t6g&usqp=CAU',
     name:'Malai Roll'}
     
]
  return (
    <div>
    <ImageList sx={{ width: 1850, height: 1000 }} cols={3} rowHeight={950}>
            {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"/>
        </ImageListItem>
         ))}
    </ImageList>
    </div>
  )
}

export default image

