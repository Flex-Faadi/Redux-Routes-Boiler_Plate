const INITIAL_STATE={
    username:"Flex-Faadi"
}

const state = (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case "USERNAME":
            return{
                ...state,
                username:action.username
            }
        default:
            return state
            break;
    }
}

export default state