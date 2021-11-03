require("../bootstrap");
import React, { useState } from "react";
import ReactDom from "react-dom";
import FriendTableBase from "../components/FriendTableBase";
import "../../../public/css/friend-list.css";
import AddFriendModal from "../components/AddFriendModal";

const FriendList = () => {
    console.log(window.friends);
    if (window.status) {
        alert(window.status);
    }

    return (
        <div>
            <div className="titles">
                <h2>Friend List</h2>
                <h4>Find your friends if they have an account!</h4>
            </div>
            <FriendTableBase
                header1={"First Name"}
                header2={"Last Name"}
                header3={"Email Address"}
                header4={"Actions"}
                friends={window.friends}
            />

            <div id="modal-container" className="d-inline-flex p2 flex-row-reverse">
                <AddFriendModal />
            </div>

        </div>
    );
};

export default FriendList;

ReactDom.render(<FriendList />, document.getElementById("friend-list"));
