require('../bootstrap');
import React, {useState} from "react";
import ReactDom from 'react-dom';
import '../../../public/css/create-poll.css';

const CreatePoll = () => {
    return(
        <div>
            <p>poll contents here</p>
        </div>
    );
};

export default CreatePoll;

ReactDom.render(<CreatePoll/>, document.getElementById('create-poll'));
