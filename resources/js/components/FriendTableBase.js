import Table from 'react-bootstrap/Table';
import React from 'react';
import '../../../public/css/TableBase.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FriendTableBase = (props) => {

    return(
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
            {props.friends.map(
                (friend, index) =>
                    <tr key={index}>
                        <td>{friend.first_name}</td>
                        <td>{friend.last_name}</td>
                        <td>{friend.email}</td>
                        <td>
                            <Form method="post" action="/friend-list-unfriend">
                                <input type="hidden" name="_token" value={window.csrf}/>
                                <input type="hidden" name="friend-delete-id" value={friend.id}/>
                                <Button variant="danger" type="submit">Delete</Button>
                            </Form>

                        </td>
                    </tr>
            )}

            </tbody>
        </Table>
    );
};

export default FriendTableBase;
