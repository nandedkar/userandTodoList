import { ADD_USER, ADD_TODO, DELETE_USER, UPDATE_USER, DELETE_TODO, UPDATE_OPERATION} from './userType'

export const addUser = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}

export const deleteUser = (data) => {
    return {
        type: DELETE_USER,
        payload: data
    }
}
export const udateUser = (data, index) => {
    return {
        type: UPDATE_USER,
        payload: data, index
    }
}

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}
export const deleteTodo = (data) => {
    return{
        type: DELETE_TODO,
        payload:data
    }
}
export const updateOperation  = (data,index) => {
    return{
        type: UPDATE_OPERATION,
        payload: data,index
    }
}


export const addUserDetails = (data) => {
    return (dispatch) => {
        dispatch(addUser(data))
    }
}

export const deleteUserDetail = (data) => {
    return (dispatch) => {
        dispatch(deleteUser(data))
    }
}

export const updateUserDetails = (data, index) => {
    return (dispatch) => {
        dispatch(udateUser(data, index))
    }
}

export const addTodoDetails = (data) => {
    return (dispatch => {
        dispatch(addTodo(data))
    })
}
export const deleteTodoDetails = (data) => {
    return (
        dispatch => {
            dispatch(deleteTodo(data));
        }
    )
}

export const updateOperationStatus = (data,index) => {
    return(
        dispatch => {
            dispatch(updateOperation(data,index))
        }
    )
}