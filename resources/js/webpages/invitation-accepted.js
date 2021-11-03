import React from 'react';
import ReactDom from "react-dom";
import '../../../public/css/invitation-accepted.css';


const InvitationAccepted = () =>{

    return(
        <div id="body">
            <h2>Invitation successfully accepted!</h2>
            <p>Please go to either home page or your planner to check out your updated event details!</p>
        </div>
    );
};

export default InvitationAccepted;

ReactDom.render(<InvitationAccepted/>, document.getElementById('invitation-accepted'));
