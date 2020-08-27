import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

class RequestAClass extends Component {
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
                                <Form>
                                    <FormGroup row>
                                        <Label>Name</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Class Title</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Zipcode</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Type of Class</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                        <p>Add ?</p>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Number of Students</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Fee for materials (This is an unpaid program and the fee should only be for materials needed.)</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Dates</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Can your date be adjusted?</Label>
                                        <Col>
                                            <Input />
                                            <p>add check</p>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Contact Tel.</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Email</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Preferred Method of Contact</Label>
                                        <Col>
                                            <Input />
                                            <p>add check</p>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Your Comments</Label>
                                        <Col>
                                            <Input />
                                        </Col>
                                    </FormGroup>
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