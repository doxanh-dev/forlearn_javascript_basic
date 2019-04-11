const initialState =
{
    list: [],
    noteItem: "",
    showFlag: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            var list = initialState.list;
            list.push(action.data);
            return { ...state, list: list }

        case "REMOVE_NOTE":
            var listNote = initialState.list;
            listNote.splice(action.id, 1);
            return { ...state, list: listNote }

        default:
            return state;
    }

}
export default postReducer;