import { createStore } from "redux";

const INITIAL_STATE = [];

function todo_list(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TO_LIST':
            return [ ...state, action.value ]
        case 'CHANGE_VALUE':
            return [ ...action.value ]
        default: 
            return state
    }
}

const list_store = createStore(todo_list);

export default list_store