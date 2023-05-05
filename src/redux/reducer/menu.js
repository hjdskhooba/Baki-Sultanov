const defaultState = {open: false};

export default (state = defaultState, action)=>{
    switch(action.type){
    case "TOGGLE_MENU":
        return {...state, open: !state.open}
    default:
        return state;
    }
}

export const openMenu = () => {
    return(dispatch) => {
        return dispatch({type: "TOGGLE_MENU"})
    }
}