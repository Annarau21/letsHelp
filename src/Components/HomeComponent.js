import React, { Component, useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { REVIEWS } from '../shared/reviews';


class Home extends Component {
    
    render() {

        return(
            <React.Fragment>
                <div className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>What We're About</h2>
                                <p>Wanna learn the simple things like making a fried egg or learning how to do your taxes? Anything else specific?
                                    Just ask. At least one person in this city will help you. Wanna help teach instead? Just sign up. Everyone needs 
                                    help in their life at one point. Be the person you needed when you needed them.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>Sign up for a current class</h3>
                                <Link to="/currentClasses">
                                    <Button renderAs="button">
                                        <span>Current Classes</span>
                                    </Button>
                                </Link>
                                <p>Take a look at our current classes and see if there is anything that is interesting to you.</p>
                            </div>
                            <div className="col">
                                <h3>Request a Class Topic</h3>
                                <Link to="/requestAClass">
                                    <Button renderAs="button">
                                        <span>Request A Class</span>
                                    </Button>
                                </Link>
                                <p>Don't see anything in our current classes that you are looking for? Request a class and see if a Volunteer will pick it up.</p>
                            </div>
                            <div className="col">
                                <h3>Sign up to be a Teacher</h3>
                                <Link to="/currentClasses">
                                    <Button renderAs="button">
                                        <span>Volunteer</span>
                                    </Button>
                                </Link>
                                <p>The benefits of teaching a class is to help out your community. Not only that, you 
                                will also get a free drink or snack from our cafe, <Link to="/cafe"> Cafe </Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personalStories">
                    <h2>Personal Stories</h2>
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
                </div>
                <div className="ending">
                <div className="container">
                        <div className="row">
                            <div className="col">
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                <Accordion title="Helllo" element="hhhhhhhhhh" />
                                
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
                  
        );
    }

}

function Accordion (props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="accordion">
                <h3 onClick={() => setIsOpen(!isOpen)} className="title">
                    {props.title}{(isOpen) ? "-" : "+"}
                </h3>
            </div>
            {isOpen && (
                <div className="content">
                    {props.element}
                </div>
            )}
            
        </div>
    );
}

function RenderAccordion({data}) {
    
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
