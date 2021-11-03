import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import EventInput from "./EventInput";

const EventForm = () => {
    // define variables
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    const [validated, setValidated] = useState(false);


    //check validation for each field
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert("Oops, there seems to be some invalid or empty fields left behind.")
        }

        setValidated(true);
    };

    // Controls parts of form to show
    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    //Display alert messages
    if (window.status && (window.status !== "null")) {
        alert(window.status);
        window.status= null;
    }

    // Add selected friend to another table, the back-end will receive which email to send an invitation to
    const AddFriendToSelectedTable = (event) => {
        event.preventDefault();
        setSelectedFriends([
            ...selectedFriends,
            friendEmail
        ]);
        setFriendEmail("");
    };

    //Get selected friend email value
    const getSelectedFriend = (event) => {
        setFriendEmail(event.target.value);
    };

    //Removed a selected friend
    const handleRemoveFriend = (event) => {
        const email = event.target.value;
        setSelectedFriends(
            selectedFriends.filter((friend) => friend !== email)
        );
    };

    // Uncomment to show list of friends for debugging purposes
    // useEffect(() => {
    //     console.log("effect", window.friends);
    // }, []);

    // Multi-step form created here
    const multiForm = () => {
        return (
            <div>
                {/*Page 1*/}
                <div className={step === 1 ? "show" : "hide"}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            <h2>Event Title</h2>
                        </Form.Label>
                        <h5>Give an exciting name for your event!</h5>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter your event title here"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">You're missing your title!</Form.Control.Feedback>
                    </Form.Group>
                    <Button onClick={nextStep} variant="primary">
                        Next
                    </Button>
                </div>

                {/*Page 2*/}
                <div className={step === 2 ? "show" : "hide"}>
                    <EventInput
                        type={type}
                        setType={setType}
                        venue={venue}
                        setVenue={setVenue}
                        Date={date}
                        setDate={setDate}
                        time={time}
                        setTime={setTime}
                        description={description}
                        setDescription={setDescription}
                    />

                    <div>
                        <Button onClick={prevStep} variant="primary">
                            Back
                        </Button>
                        <Button onClick={nextStep} variant="primary">
                            Next
                        </Button>
                    </div>
                </div>

                {/*Page 3*/}
                <div className={step === 3 ? "show" : "hide"}>
                    <Form.Group as={Row} className="mb-3">
                        <h2>Invite People</h2>
                        <Col sm={5}>
                            <input type="hidden" name="friend-invite-email" value={selectedFriends.join(",")} />
                            <Form.Control
                                required
                                as="select"
                                type="select"
                                onChange={getSelectedFriend}
                            >
                                <option value="">
                                    Pick someone on your friend list
                                </option>
                                {window.friends.map((friend, index) => (

                                    <option key={index} value={friend.email}>
                                    {friend.email +
                                    " (" +
                                    friend.first_name +
                                    " " +
                                    friend.last_name +
                                    ")"}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Can't make an event without a friend right?</Form.Control.Feedback>
                        </Col>
                        <Col sm={1}>
                            <Button
                                variant="primary"
                                id="add-friend-button"
                                onClick={AddFriendToSelectedTable}
                            >
                                Add
                            </Button>
                        </Col>
                    </Form.Group>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Friend No.</th>
                                <th>Email Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log("selectedFriends " , selectedFriends)}
                            {selectedFriends.map((friend, index) => (
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{friend}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            id="remove-button"
                                            size="sm"
                                            value={friend}
                                            onClick={handleRemoveFriend}
                                        >
                                            X
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div>
                        <Button onClick={prevStep} variant="primary">
                            Back
                        </Button>
                        <Button onClick={nextStep} variant="primary">
                            Next
                        </Button>
                    </div>
                </div>

                {/*Page 4*/}
                <div className={step === 4 ? "show" : "hide"}>
                    <h2>Overview for {title}</h2>
                    <div id="overview-section">
                        <div id="overview-form">
                            <h5>{title}</h5>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Type:
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue={type}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Venue:
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue={venue}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Date:
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue={date}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Time:
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue={time}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Description:
                                </Form.Label>
                                <Col sm="5">
                                    <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue={description}
                                    />
                                </Col>
                            </Form.Group>
                        </div>
                    </div>

                    <div id="overview-section">
                        <h5>Friends To Invite</h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedFriends.map((friend, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{friend}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <Button onClick={prevStep} variant="primary">
                        Back
                    </Button>

                    <Button variant="primary" type="submit">
                        Confirm
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Form
                method="post"
                action="/make-event-add"
                className="create-event-form"
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
            >
                <input type="hidden" name="_token" value={window.csrf} />

                {multiForm()}
            </Form>
        </div>
    );
};

export default EventForm;
