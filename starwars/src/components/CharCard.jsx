import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./StarWars.css";

export default function CharCard(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            Name: {props.card.name}, Gender: {props.card.gender}
          </CardTitle>
          <CardSubtitle>Born: {props.card.birth_year}</CardSubtitle>
          <CardText>
            Height: {props.card.height} Mass: {props.card.mass} Skin:{" "}
            {props.card.skin_color}
          </CardText>
          <CardText>Created: {props.card.created}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
