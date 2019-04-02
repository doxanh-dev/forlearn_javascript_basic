const initialState = {
    listData: [],
    data: {
        id: "",
        fullname: "",
        address: "",
        class: "",
        gender: "",
        hobby: [],
        hiddenHobby: "",
        note: ""
    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            action.data.id = state.listData.length === 0 ? 0 : state.listData[state.listData.length - 1].id + 1;
            var list = initialState.listData;
            list.push(action.data);
            return { ...state, listData: list, data: action.dataDefault.data }

        case "DELETE_POST":
            var listData = initialState.listData;
            listData.splice(action.id, 1);
            return { ...state, listData: listData }

        case "EDIT_POST":
            var dataEdit = initialState.listData[action.id];
            var listDataShow = initialState.listData;
            return { ...state, listData: listDataShow, data: dataEdit }

        case "UPDATE_POST":
            var listDataUp = initialState.listData;
            listDataUp[action.id] = action.data;
            return { ...state, listData: listDataUp, data: action.dataDefault.data }

        default:
            return state;
    }
}
export default postReducer;