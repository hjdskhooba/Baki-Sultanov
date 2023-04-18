const defaultState = {isOpen: false, id: 1}

export default (state = defaultState, action)=>{
    switch(action.type){
    case "GET_POPUP":
        return {...state, id: action.payload}
    default:
        return state
    }
}

export const setPopup = (id) => {
    return(dispatch) => {
        return dispatch({type: "GET_POPUP", payload: id})
    }
}