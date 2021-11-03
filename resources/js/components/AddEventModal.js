import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const AddEventModal = () => {
    //Define states and modal toggles
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);

    //check validation for each field
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert(
                "Oops, there seems to be some invalid or empty fields left behind."
            );
        }

        setValidated(true);
    };

    //Modal to add event is created here
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Event
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        method="post"
                        action="/my-planner-add"
                        onSubmit={handleSubmit}
                        noValidate
                        validated={validated}
                    >
                        <input
                            type="hidden"
                            name="_token"
                            value={window.csrf}
                        />
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter event title"
                                name="title"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">You're missing your title!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                required
                                as="select"
                                type="select"
                                name="type">
                                <option value="">Select Event Type</option>
                                <option value="Movie">Movie</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Custom">Custom</option>
                            </Form.Control>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please select an option!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Venue"
                                name="venue"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">You're missing your venue!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="enter date"
                                name="date"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">You're missing your date!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                required
                                type="time"
                                placeholder="enter time"
                                name="time"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">You're missing your time!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                as={"textarea"}
                                placeholder={"Enter description of event"}
                                style={{ height: "100px" }}
                                name="description"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">You're missing your description!</Form.Control.Feedback>
                        </Form.Group>

                        <div className={"form-button"}>
                            <div>
                                <Button onClick={handleClose}>Close</Button>
                            </div>
                            <div>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddEventModal;
