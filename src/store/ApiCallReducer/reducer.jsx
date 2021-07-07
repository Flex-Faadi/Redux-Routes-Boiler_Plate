const INITIAL_STATE={
    todos:[]
}

const state = (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case "GETTODOS":
            return {
                ...state,
                todos:action.todos
            }
        default:
            return state
    }
}

export default state