import React from 'react';
import ReactDom from "react-dom";


const InvitationDeclined = () =>{

    return(
        <div>
            Invitation is not for you!
        </div>
    );
};

export default InvitationDeclined;

ReactDom.render(<InvitationDeclined/>, document.getElementById('invitation-declined'));
