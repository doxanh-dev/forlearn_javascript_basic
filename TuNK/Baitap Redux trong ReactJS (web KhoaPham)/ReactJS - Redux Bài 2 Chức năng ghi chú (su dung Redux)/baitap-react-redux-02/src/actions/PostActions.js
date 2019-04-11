export const addPost = (data) => (
    {
        type: 'ADD_POST',
        data
    }
);

export const removeNote = (id) => (
    {
        type: 'REMOVE_NOTE',
        id
    }
);