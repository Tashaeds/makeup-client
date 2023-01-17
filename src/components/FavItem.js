import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FavItem(props) {
  return (
    <card style={{ width: "18rem" }}>
      <card.Img variant="top" src={props.item.makeUpImg} />
      <card.Body>
        <Card.Title>{props.item.MakeUpname}</Card.Title>
        <Card.Title>{props.item.makeUpbrand}</Card.Title>
        <Card.Title>{props.item.MakeUpprice}</Card.Title>
        <Card.Text> {props.item.MakeUpdescription}</Card.Text>
        <Button
          variant="primary"
          onClick={() => props.deleteMakeUp(props.item._id)}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => props.showUpdateModalProps(props.item)}
        >
          Update
        </Button>
      </card.Body>
    </card>
  );
}

export default FavItem;
