const initState = {
  posts: [
    {id: '1', title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
    {id: '2', title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
    {id: '3', title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"},
    {id: '4', title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"},
    {id: '5', title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt sed↵alias aut fugi…sse voluptatibus quis↵est aut tenetur dolor neque"}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPost = state.posts.filter(post => {
      return action.id !== post.id
    })
    return {
      ...state,
      posts: newPost
    }
  }
  return state
}

export default rootReducer