export const transReducer = (state:transaction[],action:action)=>{
    switch(action.type)
    {
        case "add":
            return [action.data, ...state]
        case "remove":
            return [...state.slice(0, action.delIndex),...state.slice(action.delIndex+1)]
        default:
            return state
    }
}