import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from 'react';
import '../../../public/css/TableBase.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from 'react-bootstrap/ListGroup';

const HomeTable = (props) => {
    // Define variables
    const[eventID, setEventID] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEventID = (event) =>{
        setEventID(event.target.value);
        handleShow();
    };
    // console.log('participants',props.participants);
    // console.log('userID', props.userID);

    return(
        <div>
            <div className="titles">
                <h2>My Dashboard</h2>
                <h3>Your upcoming Plans</h3>
            </div>
            {/*Table for upcoming plans*/}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>{props.header1}</th>
                    <th>{props.header2}</th>
                    <th>{props.header3}</th>
                    <th>{props.header4}</th>
                </tr>
                </thead>
                <tbody>
                {props.events.map(
                    (event, index) =>
                        <tr key={index}>
                            <td>{event.title}</td>
                            <td>{event.venue}</td>
                            <td>{event.date + " " + event.time} </td>
                            <td>
                                <Button value={event.id} onClick={getEventID}>Show Participants</Button>
                                <Modal className="my-modal" show={show} onHide={handleClose}>
                                    <input
                                        type="hidden"
                                        name="eventID"
                                        value={eventID}
                                    />
                                    <Modal.Header>
                                        <h2>Friends who are going to the event</h2>
                                    </Modal.Header>
                                    <Modal.Body>

                                    {/* If there are no friends, show no friends message, else display participating friends   */}
                                    <ListGroup>
                                    {props.participants.map((participant, index) =>
                                    {
                                        // if eventID is equal to button value and contains participantID, show participant details
                                        if(participant.event_id == eventID){
                                       return(
                                           <ListGroup.Item variant="info" key={index}>{participant.first_name + " " + participant.last_name}</ListGroup.Item>
                                       );
                                        }
                                    }
                                    )}
                                    </ListGroup>

                                    </Modal.Body>

                                </Modal>

                            </td>
                        </tr>

                )}

                </tbody>
            </Table>
        </div>
    );
};

export default HomeTable;

