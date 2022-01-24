import axios from "axios";

function fetchApi(searchedTerm: string, pageToken: string = '', maxResults: number = 25) {

  const baseUrl:string = 'https://www.googleapis.com/youtube/v3/search';

  const params: apiParams = {
    key: process.env.REACT_APP_API_KEY,
    part: 'snippet',
    type: 'video',
    q: searchedTerm,
    pageToken,
    maxResults
  };

  return axios.get(baseUrl, { params })
    .then(({ data: { items, nextPageToken, prevPageToken = null }} : fetchResponse) => ({
      items,
      nextPageToken,
      prevPageToken,
    }))
    .catch((e) => console.log(e));
}

export default fetchApi;