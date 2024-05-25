export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // REMOVE after finsih developing...
  // token:
  //   "BQAmOoNk5KM2lpM7ARRjHSVkjaG7Jv96JGG0nXsa7pj9TYQ7HSSQLiruJweT0CH6hlDZiuTWQzFqvMxZl9Cqus7vaGfoET2JqM99cSpQHIPTwnFrG1Jk1aPMXe3ptAFTOvUjwlvBRDbuvnj0aluSJo6H7YnN_JDd_NYds52owxbAyS6Af2FdZMnfoovzCgnnZCmwDO_iXXE3d0HuPL2K",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
