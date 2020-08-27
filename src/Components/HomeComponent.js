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
                        <div className="row-12">
                            <div className="col p-sm-5 m-sm-5 whatAbout">
                                <h2>What We're About</h2>
                                <p>Wanna learn the simple things like making a fried egg or learning how to do your taxes? Anything else specific?
                                    Just ask. At least one person in this city will help you. Wanna help teach instead? Just sign up. Everyone needs 
                                    help in their life at one point. Be the person you needed when you needed them.
                                </p>
                            </div>
                        </div>
                        <div className="row row-content text-center">
                            <div className="col p-2 m-4">
                                <h3>Sign up for a current class</h3>
                                <Link to="/currentClasses">
                                    <Button renderAs="button" class="btn btn-lg btn-secondary">
                                        <span>Current Classes</span>
                                    </Button>
                                </Link>
                                <p>Take a look at our current classes and see if there is anything that is interesting to you.</p>
                            </div>
                            <div className="col p-2 m-4">
                                <h3>Request a Class Topic</h3>
                                <Link to="/requestAClass">
                                    <Button renderAs="button" class="btn btn-lg btn-secondary">
                                        <span>Request A Class</span>
                                    </Button>
                                </Link>
                                <p>Don't see anything in our current classes that you are looking for? Request a class and see if a Volunteer will pick it up.</p>
                            </div>
                            <div className="col p-2 m-4">
                                <h3>Sign up to be a Teacher</h3>
                                <Link to="/currentClasses">
                                    <Button renderAs="button" class="btn btn-lg btn-secondary">
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
                    <div className="container">
                        <div className="row row-content align-items-center">
                            <div className="col-12">
                                <h2>Personal Stories</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <RenderCard item={REVIEWS[0]} />
                            </div>
                            <div className="col-12 col-md-6">
                                <RenderCard item={REVIEWS[1]} />
                            </div>
                            <div className="col-12 col-md-6">
                                <RenderCard item={REVIEWS[2]} />
                            </div>
                            <div className="col-12 col-md-6">
                                <RenderCard item={REVIEWS[3]} />
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="ending">
                    <div className="container">
                        <div className="row row-content">
                            <div className="col-12">
                                <h3>Class Categories</h3>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <Accordion title="HouseHold" element1="Cleaning" element2="Cooking" />
                                <Accordion title="Financial" element1="Taxes" element2="Budgeting" />
                                <Accordion title="Education" element1="Mathematics" element2="Mathematics" />
                                <Accordion title="Foreign Language" element1="Translating Help" element2="Practicing" />
                                <Accordion title="Health" element1="Proper Nutrition" element2="Simple Exercises" />
                                <Accordion title="Social" element1="Experience Other Cultures" element2="Meeting New People" />
                                <Accordion title="Misc." element1="This" element2="and That" />
                            </div>
                            <div className="col col-12 col-sm-6">
                               <img src="assets/images/workTable.gif" />
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
                <Button className="btn btn-block" onClick={() => setIsOpen(!isOpen)} className="title" block>
                    {props.title}{(isOpen) ? " (-)" : " (+)"}
                </Button>
            </div>
            {isOpen && (
                <div className="content">
                    <ul>
                        <li>{props.element1}</li>
                        <li>{props.element2}</li>
                    </ul> 
                </div>
            )}
            
        </div>
    );
}



function RenderCard({item}) {
    return (    
        <Card>
            <CardImg className="card-img-top" src={item.image} alt={item.title} />
            <CardBody className="text-center">
                <CardTitle style={{fontWeight: 'bold'}}>{item.title}</CardTitle>
                <CardText className="text-left">{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default Home
