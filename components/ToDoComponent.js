import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import shortid from "shortid";
import { CheckIcon } from '@chakra-ui/icons'

function ListItemToDO(props) {

    const [state, setState] = useState(props.checked);

    const changeState = useCallback(() => {
        setState(!state);
        props.onClick(props.index, !state)
    },[state])

    return <ListItem
        onClick={changeState}
    >
        <ListIcon as={state ? CheckIcon : null}
            color="green.400"
        >
        </ListIcon>
        
        {props.text}
    </ListItem>
}

export default function ToDoComponent() {

    const todo_list = useSelector(store => store);
    const dispatch = useDispatch();

    const setChecked = useCallback((index, checked) => {
        let new_list = todo_list;
        new_list[index].checked = checked;
        dispatch({ type: "CHANGE_VALUE", value: new_list })
    },[todo_list])
    
    return <List>
        {todo_list.map((item, index) => {
            return <ListItemToDO
                key={shortid.generate()}
                text={item.text}
                index={index}
                onClick={setChecked}
                checked={item.checked}
            >
            </ListItemToDO>
        })}
    </List>
}

/*
    <ul
        style={{
            padding: "10px"
        }}
    >
        {
            todo_list.map(item => <li key={shortid.generate()}>{item}</li>)
        }
    </ul>
*/