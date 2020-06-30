import { ADD_USER, ADD_TODO, DELETE_USER, UPDATE_USER, DELETE_TODO, UPDATE_OPERATION } from './userType'

const initialState = {

    userList: [],
    todoList: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            debugger
            let userItem = state.userList;
            userItem.push({ name: action.payload });
            console.log(userItem);
            return {...state,
                userList: [...userItem]
            }


        case DELETE_USER:
            let temp = state.userList;
            temp.splice(action.payload, 1);
            return {...state,
                userList: temp
            }

        case UPDATE_USER:
            let userItem1 = state.userList;
            userItem1[action.index].name = action.payload;
            return {
                ...state,
                userList: [...userItem1]
            }
        case ADD_TODO:
            let todoItem = state.todoList;
            todoItem.push(action.payload)
            return {
                ...state,
                todoList: [...todoItem]
            }
        case DELETE_TODO:
            let todoItem1 = state.todoList;
            todoItem1.splice(action.payload, 1)
            return {
                ...state,
                todoList: [...todoItem1]
            }
        case UPDATE_OPERATION:
            let todoItem2 = state.todoList;
            todoItem2[action.index].operation = action.payload;
            return{
                ...state,
                todoList: [...todoItem2]
            }
        default: return state
    }
}
export default userReducer