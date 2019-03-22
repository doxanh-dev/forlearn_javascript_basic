const initialState =
{
    listData: [],
    data: {
        id:"",
        fullname: "",
        address: "",
        content: ""
    }
    //editing: false
}

const postReducer = (state = initialState, action) => {
    //console.log("actionPost: " + JSON.stringify(action))
    // console.log("action.data: "+ JSON.stringify(action.data))
    // console.log("initialState: "+ JSON.stringify(initialState))
    switch (action.type) {
        case 'ADD_POST':
            action.data.id = state.listData.length === 0 ? 0 : state.listData[state.listData.length - 1].id + 1;
            var newList = initialState.listData;
            newList.push(action.data)
            return { ...state, listData: newList };

        case 'DELETE_POST':
            var listData = initialState.listData;
            listData.splice(action.id, 1);
            return { ...state, listData: listData };

        case 'EDIT_POST':
            var dataEdit = initialState.listData[action.id];
            var listDataShow = initialState.listData;
            //console.log("edit: "+ JSON.stringify(dataEdit))
            return { ...state, listData: listDataShow, data: dataEdit};

        default:
            return state;
    }

}
export default postReducer;