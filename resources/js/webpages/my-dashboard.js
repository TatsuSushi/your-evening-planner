require('../bootstrap');
import React from 'react';
import ReactDom from 'react-dom';
import HomeTable from "../components/HomeTable";
import '../../../public/css/home.css';

const MyDashboard = () => {
    console.log("events", window.events);

    return(
        <div>

            <HomeTable
                header1={"Title"}
                header2={"Venue"}
                header3={"Date & Time"}
                header4={"Participants"}
                events={window.events}
                participants={window.participants}
                userID={window.userID}
            />

        </div>
    );
};

export default MyDashboard;

ReactDom.render(<MyDashboard/>, document.getElementById("my-dashboard"));
