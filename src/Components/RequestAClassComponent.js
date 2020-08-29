import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class RequestAClass extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

            name: '',
            title: '',
            classType: '',
            contactPhone: '',
            email: '',
            typeContact: 'email',
            time: '',
            dates: '',
            adjutTime: false,
            numOfStudents: '',
            fee: 0,
            comments: '',
            approved: false,

        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <div id="requestAClass">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Request A Class</h2>
                            </div>
                            <div className="col">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="name">Name</Label>
                                        <Col>
                                            <Input type="text" id="name" name="name"
                                                placeholder="Your Name"
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="title">Class Title</Label>
                                        <Col>
                                            <Input type="text" id="title" name="title"
                                                placeholder="Title of Class"
                                                value={this.state.title}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="classType">Type of Class</Label>
                                        <Col>
                                            <Input type="select" name="classType"
                                                    value={this.state.classType}
                                                    onChange={this.handleInputChange}>
                                                <option>Household</option>
                                                <option>Finance</option>
                                                <option>Education</option>
                                                <option>Foreign Language</option>
                                                <option>Health</option>
                                                <option>Social</option>
                                                <option>Misc.</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Number of Students</Label>
                                        <Col>
                                            <Input type="text" id="numOfStudents" name="numOfStudents"
                                                placeholder="Number of Students"
                                                value={this.state.numOfStudents}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Fee for materials (This is an unpaid program and the fee should only be for materials needed.)</Label>
                                        <Col>
                                            <Input type="text" id="fee" name="fee"
                                                placeholder="$"
                                                value={this.state.fee}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="date">Dates</Label>
                                        <Col>
                                            <Input type="date" id="date" name="date"
                                                value={this.state.date}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Label>Can your date be adjusted?</Label>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row check inline>
                                        <Col>
                                            <Label check inline>
                                                <Input type="radio" id="adjustTime" name="adjustTime"
                                                    value={this.state.adjustTime}
                                                    onChange={this.handleInputChange}
                                                    />
                                                Yes
                                            </Label>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row check inline>
                                        <Col>
                                            <Label check inline>
                                                <Input type="radio" id="adjustTime" name="adjustTime"
                                                        value={this.state.adjustTime}
                                                        onChange={this.handleInputChange}
                                                    />
                                                    No
                                            </Label>
                                        </Col> 
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="contactPhone">Contact Tel.</Label>
                                        <Col>
                                            <Input type="telephone" id="contactPhone" name="contactPhone"
                                                
                                                value={this.state.contactPhone}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email">Email</Label>
                                        <Col>
                                            <Input type="email" id="email" name="email"
                                                placeholder="@"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                             />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Label>Preferred Method of Contact</Label>
                                        </Col>
                                        <Col>
                                            <Label>
                                                <Input type="checkbox" 
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                />{' '}
                                                E-mail
                                            </Label>
                                        </Col>
                                        <Col>
                                            <Label>
                                                <Input type="checkbox" 
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                />{' '}
                                                Phone
                                            </Label>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="comments">Your Comments</Label>
                                        <Col>
                                            <Input type="textarea" name="comments" id="comments"
                                                rows="4"
                                                value={this.state.comment}
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <Button onSubmit={this.handleSubmit}>Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RequestAClass;