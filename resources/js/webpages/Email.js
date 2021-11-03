import React from 'react';
import ReactDom from "react-dom";

const Email = () => {
    return(
        <div>
            {console.log(window.invite_code)}
        </div>
    );
};

export default Email;

ReactDom.render(<Email />, document.getElementById("email-invitation"));

