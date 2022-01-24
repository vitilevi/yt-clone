import React, {Component} from 'react';
import { connect } from 'react-redux';
import RelatedVideoCard from "./RelatedVideoCard";
import _ from 'lodash'

class RelatedVideos extends Component<RelatedVideosProps> {
  render() {
    const { videos } = this.props;
    return _.keys(videos).length === 0? <>{''}</> : (
      <div className="d-flex flex-column">
        {
          _(videos)
            .filter((_el, i) => i !== 0)
            .map((video) => (
              <RelatedVideoCard key={video.id.videoId} video={video}/>
            ))
            .value()
        }
      </div>
    );
  }
}

const mapStateToProps = ({ videos }: any) => ({
  videos
});

export default connect(mapStateToProps)(RelatedVideos)