
export const posts = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_POST':
            return [...state, {
                id: action.id,
                text: action.text,
                name: action.name
            }]
        default:
            return state;
    }
}

export const postFilter = (state=[], action) => {
    switch(action.type) {
        case 'POST_FILTER': {
            let obj = {
                name: action.name,
                filter: action.filter
            }
            let index = state.findIndex(each => each.name === action.name);
            if(index > -1){
                let left = state.slice(0, index);
                let right = state.slice(index+1, state.length);
                return [...left, obj, ...right];
            }
            else {
                return [...state, obj];
            }
        }
        default:
            return state;
    }
}

export const likeUnlikes = (state={}, action) => {
    switch(action.type) {
        case 'POST_VOTE':
            let obj = {
                name: action.name,
                vote: action.vote
            };
            let postId = action.postId;
            let voteList = Object.assign([], state[postId]);
            let index = voteList.findIndex(vote => vote.name === action.name);
            if(index > -1) voteList[index] = obj;
            else voteList.push(obj);
            let newState = Object.assign({}, state);
            newState[postId] = voteList;
            return newState;

        default:
        return state;
    }
}
