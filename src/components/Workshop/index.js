import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductsPara} from './workshopElements';

export default class Workshop extends Component {
render() {
  return (
    <ProductsContainer id='Workshops'>
        <ProductsHeading>Workshops</ProductsHeading>
        <ProductsPara>“Learning and innovation go hand in hand. The arrogance of success is to think that what you did yesterday will be sufficient for tomorrow.”

William Pollard</ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg src={require("../../images/gdt.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>GD&T</ProductTitle>
                            <ProductPrice>fee: Rs.500/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>A system for defining and communicating design intent and engineering tolerances </li>
                                    <li> It uses a symbolic language on engg drawings and computer-generated 3D solid models </li>
                                    <li>That eplicitly describe nonminal geometry and it's alloable variation.</li>
                                
                                </ul>
                            </ProductDesc>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/L6Z3N2qhswbLDHkV8', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/vehicle.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>Vehicle Diagnosis</ProductTitle>
                            <ProductPrice>fee Rs.500/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>The mechanics involved with identifying and assessing problems that may negatively affect nominal operation of vehicle </li>
                                    <li>Scan your car's components and systems to  check for issues with components like engine,transmission,oil tank etc...</li>
                                
                                </ul>
                            </ProductDesc>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/L6Z3N2qhswbLDHkV8', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
          
                
        </ProductWrapper>
    </ProductsContainer>
  )
}}
