import React, { useState, useEffect } from "react";
import axios from "axios";

import AuthorizeApi from '../api/AuthorizeApi';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update,setUpdate]= useState(false);

 const updateColors=()=>{
   setUpdate(!update)
 } 
      useEffect(()=>{
      AuthorizeApi()
    .get('/api/colors')
    .then(res=> setColorList(res.data) )
    .catch(err=> console.error(err))
    }, [update])

  
   
  

  

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
