import React, {Component} from "react";
import MyCard from "./Card.js";
import { cards } from '../mock/api.js';
import {Row} from "reactstrap";

export default class CardList extends Component {
  render() {
    return (
        <div>
          <Row>
            {cards.map((card) => <MyCard card={card} />)}
          </Row>
        </div>
    );
  }
}