import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";

function Item(props) {
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const addToFav = async (makeUp) => {
    await axios.post(`${serverLink}/makeUp`, makeUp);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.img} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Title>{props.item.brand}</Card.Title>
        <Card.Title>{props.item.price}</Card.Title>
        <Card.Text> {props.item.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            addToFav(prop.item);
          }}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addToFav(prop.item);
          }}
        >
          Update
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
