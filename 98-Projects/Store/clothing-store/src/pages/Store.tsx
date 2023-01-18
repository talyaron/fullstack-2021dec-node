import React from 'react'
import storeItems from "../data/items.json" 
import {Row, Col, Offcanvas, Stack} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import Container from 'react-bootstrap/Container';
import MultiRangeSlider from "../components/MultiRangeSlider"
import "./styles.css";

type StoreProps ={
  isOpen: boolean
}

export function Store({isOpen}:StoreProps){

     let filteredStartPrice = 0;
     let filteredMaxPrice =9999
    return(
    <>
      <h1>Store </h1>

  
    <Row md={2} xs={1} lg={3} className="g3" >
      <MultiRangeSlider 
      min={0}
      max={1000}
    
      onChange={({ min, max }: { min: number; max: number }) =>{
      filteredStartPrice = min;
      filteredMaxPrice = max;

    }
      }/>
    </Row>
    <Row style={{padding: "20px"}} className="g3">
    {
      storeItems.filter(item =>
        {
          return item.price >= filteredStartPrice && item.price <= filteredMaxPrice
        }).map(item => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>  
      ))}
    </Row>
   </>
 )
}

 // storeItems.map(item => (
 //   <Col key={item.id}>
 //     <StoreItem {...item} />
 //   </Col>