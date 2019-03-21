const initialState = 
    {   listData: [],
        data:{
            fullname:"",
            address:"",
            content:""
        },
        //editing: false
    }

const postReducer = (state = initialState, action) => {
    // console.log("actionPost: "+ JSON.stringify(action))
    // console.log("action.data: "+ JSON.stringify(action.data))
    // console.log("initialState: "+ JSON.stringify(initialState))
    switch(action.type){
        case 'ADD_POST':
            var newList = initialState.listData;
            console.log("newData: "+ JSON.stringify(newList))
            newList.push(action.data)
            return {...state, listData: newList};
        default: 
            return state;
    }
    
}
export default postReducer;