let postId = 0;

export const submitPost = (text, name) => ({
    type: 'SUBMIT_POST',
    id: postId++,
    name,
    text
});

export const showPostFilter = (filter, name) => ({
    type: 'POST_FILTER',
    name,
    filter
});

export const voteOnPost = (postId, name, vote) => ({
    type: 'POST_VOTE',
    name,
    postId,
    vote
});

export const PostFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_SELF: 'SHOW_SELF' 
};

export const VOTE = {
    LIKE: 'LIKE',
    UNLIKE: 'UNLIKE'
};