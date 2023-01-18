import React, { Component, useEffect, useState } from 'react'
import storeItems from "../data/items.json" 
import {Row, Col, Offcanvas, Stack} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import MultiRangeSlider from "../components/MultiRangeSlider"
import "./styles.css";

type StoreProps ={
  isOpen: boolean
}



export const Store = ({isOpen}: StoreProps)=> {

  const [storeItemsArr,setStoreItemsArr] = useState([storeItems])

  

     let filteredStartPrice = 0;
     let filteredMaxPrice =9999


    return(
    <>
      <h1>Store </h1>

  
    <Row md={2} xs={1} lg={3} className="g3" >
      <div>Filter By Price</div>
      <MultiRangeSlider 
      min={0}
      max={500}
    
      onChange={({ min, max }: { min: number; max: number }) =>{
      // filteredStartPrice = min;
      // filteredMaxPrice = max;
        const filteredArray:any = storeItems.filter(item => (item.price>min) && (item.price<max))
        setStoreItemsArr(filteredArray)
    }
      }/>
    </Row>
    <Row style={{padding: "20px"}} className="g3">
    {
       storeItemsArr.map((item : any) => {
        return(
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>  
      )})}
    </Row>
   </>
 )
}

