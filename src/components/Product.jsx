import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { add } from "../actions/action";

export const Product = () => {
  const cart = useSelector((state) => state.updateCart);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );

    console.log("response: ", response);

    setData(response);
  };
  const send = (list) => {
    dispatch(add(list));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="ms-5 row d-flex gap-5">
        {data.length > 0 &&
          data.map((list) => (
            <Card style={{ width: "15rem", height: "fit-content" }}>
              <Card.Img
                style={{ width: "10rem", height: "10rem" }}
                variant="top"
                src={list.image}
              />
              <ListGroup variant="flush">
                <ListGroup.Item>{list.title}</ListGroup.Item>
                <ListGroup.Item>Price - ${list.price}</ListGroup.Item>
                <ListGroup.Item>Rating {list.rating.rate}</ListGroup.Item>
                <ListGroup.Item className="mb-0">
                  <Button variant="primary" onClick={() => send(list)}>
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
      </div>
    </div>
  );
};
