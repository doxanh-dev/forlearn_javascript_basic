export const addPost = (data) => (
    {
        type: 'ADD_POST',
        data,
        dataDefault: defaultDataCreate()
    }
);

export const deletePost = (id) => (
    {
        type: 'DELETE_POST',
        id
    }
);

export const editPost = (id) => (
    {
        type: 'EDIT_POST',
        id
    }
);

export const updatePost = (id, data) => (
    {
        type: 'UPDATE_POST',
        id,
        data,
        dataDefault: defaultDataCreate()
    }
);

export const clearData = () => (
    {
        type: 'CLEAR_DATA',
        dataDefault: defaultDataCreate()
    }
);

function defaultDataCreate() {
    return {
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
}