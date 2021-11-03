require("../bootstrap");
import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../../../public/css/my-planner.css";
import AddEventModal from "../components/AddEventModal";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from 'moment';

const MyPlanner = () => {
    //Define variables for hooks states
    const [weekend, setWeekend] = useState(true);
    const calendarRef = useRef(null);
    const [eventDetail, setEventDetail] = useState("");
    const [eventTitle, setEventTitle] = useState("");
    const [eventID, setEventID] = useState("");
    const [validated, setValidated] = useState(false);
    const [date, setDate] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Alert messages conditionally  received from back-end
    if (window.status && (window.status !== "null")) {
        alert(window.status);
        window.status= null;
    }

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

    const Sidebar = () => {
        return (
            <div id={"sidebar"}>
                <div id={"sidebar-section"}>
                    <label>
                        <input
                            type="checkbox"
                            checked={weekend}
                            onChange={HandleWeekendsToggler}
                        />
                        toggle weekends
                    </label>
                </div>
                <AddEventModal />
            </div>
        );
    };

    const HandleWeekendsToggler = () => {
        setWeekend(!weekend);
    };

    // Gather necessary event details from JSON
    const GetEventDetails = (selectedEvent) => {
        setEventTitle(selectedEvent.event.title);
        setEventDetail(selectedEvent.event.extendedProps);
        setEventID(selectedEvent.event._def.publicId);
        setDate(moment(selectedEvent.event._instance.range.start).format('yyyy-MM-DD'));
    };
    // console.log('eventID', eventID);
    //  console.log('eventDetail', eventDetail);
    //console.log('date',date);

    // Calendar component
    return (
        <div id={"calendar-container"}>
            <Sidebar />
            <div id={"calendar-body"}>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth",
                    }}
                    editable={false}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    droppable={true}
                    eventClick={(selectedEvent) => {
                        GetEventDetails(selectedEvent);
                        handleShow();
                    }}
                    events={events}
                    weekends={weekend}
                />
                {/*Modal of selected event*/}
                <Modal className="my-modal" show={show} onHide={handleClose}>
                    <Modal.Header>Event Details</Modal.Header>
                    <Modal.Body>
                        <Form
                            method="post"
                            action="/my-planner-edit"
                            onSubmit={handleSubmit}
                            noValidate
                            validated={validated}
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value={window.csrf}
                            />
                            <input
                                type="hidden"
                                name="eventID"
                                value={eventID}
                            />
                            <Form.Group className="mb-3">
                                <Form.Label>Title:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="title"
                                    defaultValue={eventTitle}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">You're missing your title!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Type:</Form.Label>
                                <Form.Control
                                    required
                                    as="select"
                                    type="select"
                                    name="type"
                                    defaultValue={eventDetail.event_type}
                                >
                                    <option value="">Select Event Type</option>
                                    <option value="Movie">Movie</option>
                                    <option value="Restaurant">
                                        Restaurant
                                    </option>
                                    <option value="Custom">Custom</option>
                                </Form.Control>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please select an option!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb3">
                                <Form.Label>Venue:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="venue"
                                    defaultValue={eventDetail.venue}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">You're missing your venue!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    name="date"
                                    defaultValue={date}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">You're missing your date!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Time</Form.Label>
                                <Form.Control
                                    required
                                    type="time"
                                    name="time"
                                    defaultValue={eventDetail.time}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">You're missing your time!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    required
                                    as={"textarea"}
                                    style={{ height: "100px" }}
                                    name="description"
                                    defaultValue={eventDetail.description}
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
                                        Update
                                    </Button>
                                </div>
                                <div>
                                    <Button id="delete" variant="danger"  type="submit" formAction="/my-planner-delete" formMethod="post" >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default MyPlanner;
ReactDom.render(<MyPlanner />, document.getElementById("my-planner"));
