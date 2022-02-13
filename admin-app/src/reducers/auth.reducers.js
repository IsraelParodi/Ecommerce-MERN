import {authConstants} from "../actions/constants";
import {useDispatch} from "react-redux";

const initState = {
    name: 'Israel'
};


export default (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            };
            break;
    }

    return state;
}