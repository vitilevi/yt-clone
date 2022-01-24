interface Actions {
  type: string,
  payload: any
}

type VideoType = {
  id: {
    videoId: string
  }
  snippet: {
    description: string,
    title: string,
    thumbnails: {
      medium: {
        url: string
      }
    }
  }
}

interface initialState {
  videos: VideoType[],
  nextPageToken: string,
  prevPageToken: string | null,
  isLoading: boolean,
  selectedVideo: VideoType | null
}

interface apiParams {
  key: string | undefined,
  part: string,
  type: string,
  q: string,
  pageToken: string,
  maxResults: number
}

interface getVideoPayload {
  items: VideoType[],
  nextPageToken: string,
  prevPageToken: string | null
}

interface fetchResponse {
  data: getVideoPayload
}

type FormInputState = {
  searchedWord: string,
}

type FormInputProps = {
  fetchVideo: (string) => void,
}

type HomeProps = {
  isLoading: boolean
}

type PlayerProps = {
  selectedVideo: VideoType
}

type RelatedVideosProps = {
  videos: VideoType[]
}

type RelatedVideoCardProps = {
  video: VideoType,
  setSelectedVideo: (VideoType) => void
}

type Dispatch = (any) => void

type EventKey = {
  key: string
}