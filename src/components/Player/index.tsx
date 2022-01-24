import React, {Component} from 'react';
import { connect } from "react-redux";
import _ from 'lodash'

class Player extends Component<PlayerProps> {
  render() {
    const { selectedVideo }: PlayerProps = this.props;
    return (
      <div className='player-wrapper mx-4'>
        {
          selectedVideo ? (
            <>
              <iframe
                title="ytplayer"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${ _.get(selectedVideo, 'id.videoId') }?autoplay=1`}
                frameBorder="0"
              />
              <p className='video-description p-3 mx-auto'>{ _.get(selectedVideo, 'snippet.description') }</p>
            </>
          ) : <h2>no video selected...</h2>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ selectedVideo }: PlayerProps) => ({
  selectedVideo
});

export default connect(mapStateToProps)(Player);