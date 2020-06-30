import React, { useRef } from 'react';

import { Button, Divider } from "antd";
import "antd/dist/antd.css";

const ShowUser = (props) => {

    const textInput = useRef(null);
    const saveUserFun = (index) => {
        props.SaveUser(textInput.current.value, index);

    }

    return (
        
        props.userList && props.userList.map((user, index) => (
            <React.Fragment>
                {props.editableUser.indexOf(index) === -1 ?
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>
                            <Button type='Link' onClick={() => props.editUser(index)}>Edit</Button>
                            <Divider type='vertical'></Divider>
                            <Button type='Primary' onClick={() => props.deleteUser(index)}>Delete</Button>
                        </td>
                    </tr>
                    :
                    <tr key={index}>
                        <td><input defaultValue={user.name}

                            ref={textInput}
                        ></input></td>
                        <td>
                            <button onClick={() => saveUserFun(index)}>Save</button>
                            <span>|</span>
                            <button onClick={() => props.cancelEdit(index)}>Cancel</button>
                        </td>
                    </tr>
                }
            </React.Fragment>
        ))
    )
}

export default ShowUser;
