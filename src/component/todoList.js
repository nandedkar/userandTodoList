import React from 'react';

function TodoList(props) {
    console.log('child', props.todoList);
    return (
        <React.Fragment>
            {
                props.todoList.length !== 0 ?
                    !!props.todoList &&
                    props.todoList.map((item, index) => (
                        <tr key={index} >
                            <td>{item.action}</td>
                            <td>{item.dateAdded}</td>
                            <td>{
                                <select onChange={(event) => props.changeOperation(event, index)}>
                                    <option selected={item.operation === 'Registerd'}>Registerd</option>
                                    <option selected={item.operation === 'WIP'} >WIP</option>
                                    <option selected={item.operation === 'Completed'}>Completed</option>
                                </select>
                            }
                            </td>
                            <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                        </tr>
                    ))
                    :
                    <td>Empty Todo list</td>}
        </React.Fragment>
    )
}

export default TodoList;
