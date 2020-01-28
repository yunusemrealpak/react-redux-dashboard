const initialState = {
    selectedItem : '',
};

export function sidebarReducer(state=initialState, {type, payload}){
    switch (type) {
        case 'CHANGE_ITEM':
            return {
                selectedItem : payload
            }
        default:
            return state;
    }
}