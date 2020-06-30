import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from "antd";
import "antd/dist/antd.css";

import { addUserDetails, deleteUserDetail, updateUserDetails } from '../redux';
import Modal from 'react-modal';

import ShowUser from '../component/showUser'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function User(props) {
    const [user, setUser] = useState('');
    const [edit, setedit] = useState([])

    useEffect(() => {
        console.log('useEffect', edit);
    }, [edit]);
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        setUser('');
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#1890ff';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function onSubmitModal(event) {
        event.preventDefault();
        props.addUserDetails(user);
        closeModal();
    }
    const deleteUserFun = (index) => {
        console.log(index);
        props.deleteUserDetail(index);
    }
    const editUserFun = (index) => {
        console.log(index);
        if (edit.indexOf(index) === -1) {
            setedit([...edit, index]);
        }

    }
    const cancelEditFun = (index) => {
        setedit(edit.filter(item => item !== index));
    }
    const saveUserFun = (updatedUser, index) => {
        console.log('updatedUser', updatedUser);
        console.log('index', index);
        props.updateUserDetails(updatedUser, index)
        cancelEditFun(index);
    }

    return (
        <div className='User-wrapper'>
            <Button type="default" onClick={openModal}>Create User</Button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ShowUser
                        userList={props.user.userList}
                        editableUser={edit}
                        deleteUser={deleteUserFun}
                        editUser={editUserFun}
                        cancelEdit={cancelEditFun}
                        SaveUser={saveUserFun}
                    />
                </tbody>
            </table>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}>

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Add User</h2>
                <button className='close-button' onClick={closeModal}>close</button>
                <form onSubmit={onSubmitModal}>
                    <input
                        onChange={(event) => setUser(event.target.value)}
                        placeholder="Name" required={true} />
                    <input type="submit" value="Submit" />
                </form>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


const mapDispatchToProps = (dispatch) => {
    console.log('insied mapdispatchtoprops')
    return {
        addUserDetails: (data) => dispatch(addUserDetails(data)),
        updateUserDetails: (data, index) => dispatch(updateUserDetails(data, index)),
        deleteUserDetail: (data) => dispatch(deleteUserDetail(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
