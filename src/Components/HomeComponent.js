import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { REVIEWS } from '../shared/reviews';

class Home extends Component {
    
    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <RenderCard item={REVIEWS[0]} />
                    </div>
                    <div className="col">
                        <RenderCard item={REVIEWS[1]} />
                    </div>
                    <div className="col">
                        <RenderCard item={REVIEWS[2]} />
                    </div>
                    <div className="col">
                        <RenderCard item={REVIEWS[3]} />
                    </div>
                </div>
            </div>       
        );
    }

}

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.title} />
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default Home
