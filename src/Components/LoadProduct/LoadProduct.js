import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./LoadProduct.css";
import { useHistory } from "react-router";

const LoadProduct = (props) => {
    
    console.log("check", props.event);
    const {_id, name, weight, price, imageURL } = props.event;
    const history = useHistory()
   const handleBuyNow = id => {
     console.log(id);
     const url = `checkout/${id}`
     history.push(url)
   }
    return (
        <>
            <div className=" cards d-flex flex-wrap justify-content-between">
            <div className="col-md-4 col-sm-12 ">
                <Card className="singleCard" >
                    <Card.Img variant="top" className="img-fluid" src={imageURL} />
                    <Card.Body>
                        <Card.Title > {name} </Card.Title>

                        <Card.Text>
                            <Row>
                                <Col md={6}>
                                    Weight : {weight} <br />
                                    Price : ${price}
                                </Col>
                                <Col md={6} >
                                    {<Button className="btnStyle" variant="primary" onClick={()=>handleBuyNow(_id)}>Buy Now</Button>}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </>

    );
};

export default LoadProduct;
