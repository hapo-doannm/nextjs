const initState = {
    users: [
        { id: 1, name: 'kien 1' },
        { id: 2, name: 'kien 2' },
        { id: 3, name: 'kien 3' },
    ]
}

const rootReducers = (state = initState, action) => {
    switch (action.type) {

        /* --------------------------REDUX_USER -------------------------- */

        case 'DELETE_USER':
            // console.log('Delete User', action);
            var users = state.users;
            users = users.filter(item => item.id !== action.payload)
            return { ...state, users };

        case 'ADD_USER':
            // console.log('Add User ===> ', action.payload.id);
            // console.log('Add User ===> ', action.payload.name);
            let user = {
                id: action.payload.id,
                name: action.payload.name
            }
            return { ...state, users: [...state.users, user] };

        case 'UPDATE_USER':
            // console.log(action.payload.id);
            // console.log(action.payload.name);

            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].id == action.payload.id) {
                    state.users[i].name = action.payload.name
                }
            }
            // console.log('new item ==> ', state.users);
            return { ...state, users: [...state.users] };

        default:
            return state;
    }
}
export default rootReducers