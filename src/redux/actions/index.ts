import {GET_VIDEO, SET_LOADING, SET_SELECTED_VIDEO} from "./types";
import fetchYTApi from "../../services/fetchYTApi";

export const getVideo = (payload: string) => ({
  type: GET_VIDEO,
  payload,
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setSelectedVideo = (payload: any) => ({
  type: SET_SELECTED_VIDEO,
  payload
})

export const fetchVideo = (payload: any) => (dispatch: any) => {
  dispatch(setLoading());
  return fetchYTApi(payload)
    .then((res: any) => {
      dispatch(getVideo(res))
    })
}