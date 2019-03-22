export const addPost = (data) => (
    //console.log("action: "+ JSON.stringify(data)),
    {
    type: 'ADD_POST',
    data
});

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