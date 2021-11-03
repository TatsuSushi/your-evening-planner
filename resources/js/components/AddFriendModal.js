import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddFriendModal = (props) => {
    //Define variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //When "Add Friend" button is clicked, show modal and get user input for friend to be added with email
    return (
        <div>
            <Button
                id="add-friend-button"
                variant="primary"
                onClick={handleShow}
            >
                Add Friend
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Friend</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form method="post" action="/friend-list-add">
                        <input
                            type="hidden"
                            name="_token"
                            value={window.csrf}
                        />
                        <Form.Group className="mb-3">
                            <Form.Label>Email-Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email address"
                                name="email"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddFriendModal;
