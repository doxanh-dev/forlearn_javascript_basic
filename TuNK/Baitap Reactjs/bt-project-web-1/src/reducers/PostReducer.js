const initialState = {
    listData: [],
    data: {
        id:"",
        fullname:"",
        address:"",
        class:"",
        gender:"",
        hobby:[],
        note:""
    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default postReducer;