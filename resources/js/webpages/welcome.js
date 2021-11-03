require('../bootstrap');
import React from 'react';
import ReactDom from 'react-dom';
import '../../../public/css/welcome.css';

const Welcome = () => {

    return (
        <div id="container" >
            <h1>Welcome to Your Evening Planner!</h1>
            <p>your one stop to group planning</p>
            <p>Plan your events. Invite your friends. All in one place! </p>

        </div>
    );
};

export default Welcome;

ReactDom.render(<Welcome/>, document.getElementById('welcome'));
