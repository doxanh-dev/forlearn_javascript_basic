const initialState =
{
    listData: [],
    data: {
        id: "",
        fullname: "",
        address: "",
        content: ""
    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            action.data.id = state.listData.length === 0 ? 0 : state.listData[state.listData.length - 1].id + 1;
            var newList = initialState.listData;
            newList.push(action.data)
            return { ...state, listData: newList, data: initialState.data };

        case 'DELETE_POST':
            var listData = initialState.listData;
            listData.splice(action.id, 1);
            return { ...state, listData: listData };

        case 'EDIT_POST':
            var dataEdit = initialState.listData[action.id];
            var listDataShow = initialState.listData;
            return { ...state, listData: listDataShow, data: dataEdit };

        case 'UPDATE_POST':
            var listDataUP = initialState.listData;
            listDataUP[action.id] = action.data;
            return { ...state, listData: listDataUP, data: initialState.data };

        default:
            return state;
    }

}
export default postReducer;