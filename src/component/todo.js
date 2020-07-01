import React, { useState } from 'react';
import TodoList from './todoList';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Button} from "antd";
import "antd/dist/antd.css";
import { addTodoDetails, deleteTodoDetails,updateOperationStatus } from '../redux';

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

function Todo(props) {

    const [action, setaction] = useState('');
    const [date, setDate] = useState('');

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const data = useSelector(state => state.user.todoList);
    console.log('Todo', data);
    const dispatch = useDispatch(action);

    function openModal() {
        setIsOpen(true);
        setaction('');
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
        let tempObject = {};
        tempObject.action = action;
        tempObject.dateAdded = date;
        tempObject.operation = 'Registerd';
        dispatch(addTodoDetails(tempObject));
        closeModal();
    }

    const deleteTodoFun = (index) => {
        dispatch(deleteTodoDetails(index));
    }

    const changeOperationFun = (event,index) => {
        dispatch(updateOperationStatus(event.target.value,index));
        console.log(event);
    }
    return (
        <div className='todo-wrapper'>
            <Button type="default" onClick={openModal}>Add TODO</Button>
            <table>
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>DateAdded</th>
                        <th>Operation</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <TodoList
                        todoList={data}
                        deleteTodo={deleteTodoFun}
                        changeOperation={changeOperationFun}
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

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Add Todo Item</h2>
                <button className='close-button' onClick={closeModal}>close</button>
                <form onSubmit={onSubmitModal}>
                    <label>Action</label>
                    <input
                        onChange={(event) => setaction(event.target.value)}
                        placeholder="Action" required={true} />
                    <input
                        type='date'
                        onChange={(event) => setDate(event.target.value)} />
                    <input type="submit" value="Submit" />
                </form>
            </Modal>
        </div>
    )
}



export default Todo;

