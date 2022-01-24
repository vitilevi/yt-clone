import { GET_VIDEO, SET_LOADING, SET_SELECTED_VIDEO } from "../actions/types";

const INITIAL_STATE: initialState = {
  videos: [],
  nextPageToken: '',
  prevPageToken: '',
  isLoading: false,
  selectedVideo: null
}

const rootReducer = (state = INITIAL_STATE, { type, payload }: Actions) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case GET_VIDEO:
      const { items, nextPageToken, prevPageToken } = payload;
      return {
        ...state,
        videos: [...items],
        nextPageToken,
        prevPageToken,
        isLoading: false,
        selectedVideo: items[0]
      }

    case SET_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: payload
      }

    default:
      return state
  }
};

export default rootReducer;