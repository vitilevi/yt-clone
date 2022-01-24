import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Container } from "react-bootstrap";
import Player from '../../components/Player';
import RelatedVideos from "../../components/RelatedVideos";
import FormInput from "../../components/FormInput";
import Loading from "../../components/Loading";

class Home extends Component<HomeProps> {
  render() {
    const { isLoading } = this.props
    return (
      <Container fluid>
        <FormInput />
        <div className='text-center my-4 mx-auto'>
          {
            isLoading ? <Loading/> : (
              <div className='d-flex justify-content-center'>
                <Player/>
                <RelatedVideos />
              </div>
            )
          }
        </div>
      </Container>
    )
  }
}

const mapStateToProps = ({ isLoading }: HomeProps) => ({
  isLoading,
});

export default connect(mapStateToProps)(Home)