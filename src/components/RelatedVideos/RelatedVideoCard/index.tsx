import React, {Component} from 'react';
import { connect } from 'react-redux'
import { setSelectedVideo } from "../../../redux/actions";

class RelatedVideoCard extends Component<RelatedVideoCardProps> {
  render() {
    const { video, setSelectedVideo } = this.props
    return (
      <div
        className='d-flex related-videos-wrapper py-4'
        onClick={ () => setSelectedVideo(video) }
        style={{ cursor: "pointer"}}
      >
        <img
          className='related-videos-wrapper-image'
          src={ video.snippet.thumbnails.medium.url }
          alt={ `Thumbnail do video ${video.snippet.title}` }
        />
        <p className='p-2'>{ video.snippet.title }</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setSelectedVideo: (payload: any) => dispatch(setSelectedVideo(payload))
})

export default connect(null, mapDispatchToProps)(RelatedVideoCard);