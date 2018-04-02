/**
 * Created by Administrator on 2018/4/2.
 */
import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col} from "reactstrap";

export default class MyCard extends Component {
    render() {
        const { card } = this.props;

        return (
            <Col xs="6" sm="4" className="mt30" >
                <Card>
                    <CardImg top width="100%" src= { card.url } alt= { card.imgDescribe } />
                    <CardBody>
                        <CardTitle>{ card.title }</CardTitle>
                        <CardSubtitle>{ card.subtitle }</CardSubtitle>
                        <CardText>{ card.describe }</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}