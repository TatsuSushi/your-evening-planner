import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActivityInput = (props) => {
    const titleID = `activity-title-${props.index}`;
    const typeID = `activity-type-${props.index}`;
    const venueID = `activity-venue-${props.index}`;
    const dateID = `activity-date-${props.index}`;
    const timeID = `activity-time-${props.index}`;
    const descriptionID = `activity-description-${props.index}`;

    return (
        <div key={props.index}>
            <Form.Group className="mb-3">
                <Form.Label>Activity Title:</Form.Label>
                <h5>Give an exciting name for your event!</h5>
                <Form.Control
                    type="text"
                    placeholder="Enter your activity title here"
                    name="activity-title"
                    data-id={props.index}
                    id={titleID}
                    onChange={(e) => props.setActivityTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={1}>
                    Type:
                </Form.Label>
                <Col sm={5}>
                    <Form.Select
                        name="event-type"
                        id={typeID}
                        onChange={(e) => props.setActivityType(e.target.value)}
                    >
                        <option value="">Select Event Type</option>
                        <option value="Movie">Movie</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Custom">Custom</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={1}>
                    Venue:
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type="text"
                        placeholder="Enter venue here"
                        name="activity-venue"
                        data-id={venueID}
                        id={venueID}
                        onChange={e => props.setActivityVenue(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={1}>
                    Date:
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type="date"
                        placeholder="enter date"
                        name="activity-date"
                        id={dateID}
                        onChange={e => props.setActivityDate(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={1}>
                    Time:
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type="time"
                        placeholder="enter time"
                        name="activity-time"
                        id={timeID}
                        onChange={e => props.setActivityTime(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={1}>
                    Description:
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter description of activity"
                        style={{ height: "100px" }}
                        name="activity-description"
                        id={descriptionID}
                        onChange={e => props.setActivityDescription(e.target.value)}
                    />
                </Col>
            </Form.Group>
        </div>
        //})
    );
};

export default ActivityInput;
