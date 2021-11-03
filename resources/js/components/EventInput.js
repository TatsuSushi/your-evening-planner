import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EventInput = (props) => {
    //Input fields for event, state of values from fields are changed from parent class via props
    return (
        <div key={props.index}>
            {/*Type*/}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Type:
                </Form.Label>
                <Col sm={6}>
                    <Form.Control
                        required
                        as="select"
                        type="select"
                        name="type"
                        onChange={(e) => props.setType(e.target.value)}
                    >
                        <option value="">Select Event Type</option>
                        <option value="Movie">Movie</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Custom">Custom</option>
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please select an option!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            {/*Venue*/}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Venue:
                </Form.Label>
                <Col sm={6}>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter venue here"
                        name="venue"
                        onChange={(e) => props.setVenue(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">You're missing your venue!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            {/*Date*/}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Date:
                </Form.Label>
                <Col sm={6}>
                    <Form.Control
                        required
                        type="date"
                        placeholder="enter date"
                        name="date"
                        onChange={(e) => props.setDate(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">You're missing your date!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            {/*Time*/}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Time:
                </Form.Label>
                <Col sm={6}>
                    <Form.Control
                        required
                        type="time"
                        placeholder="enter time"
                        name="time"
                        onChange={(e) => props.setTime(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">You're missing your time!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            {/*Description*/}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Description:
                </Form.Label>
                <Col sm={6}>
                    <Form.Control
                        required
                        as="textarea"
                        placeholder="Enter description of activity"
                        style={{ height: "100px" }}
                        name="description"
                        onChange={(e) => props.setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">You're missing your description!</Form.Control.Feedback>
                </Col>
            </Form.Group>
        </div>
    );
};

export default EventInput;
