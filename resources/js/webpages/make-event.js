require('../bootstrap');
import React, {useState} from "react";
import ReactDom from 'react-dom';
import '../../../public/css/make-event.css';
import EventForm from "../components/EventForm";
const MakeEvent = () => {
    return(
        <div>
            <div className="titles">
                <h2>Make an Event & Invite Friends!</h2>
                <h5>If you have not added any friends yet, please go to Friend list and make friends!</h5>
            </div>
        <EventForm />
        </div>
    );
};

export default MakeEvent;

ReactDom.render(<MakeEvent/>, document.getElementById('make-event'));
