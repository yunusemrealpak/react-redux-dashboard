var initialState = {
    name: "App Name",
    address: "",
}
export function dashboard(state = initialState, action) {
    switch (action.type) {
        case "SET_NAME":
            return Object.assign({}, state, {
                name: action.name
            })
        case "SET_ADDRESS":
            return Object.assign({}, state, {
                address: action.address
            })
        default:
            return state
    }
}