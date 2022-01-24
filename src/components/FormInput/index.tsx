import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchVideo } from "../../redux/actions";
import _ from 'lodash'

class FormInput extends Component<FormInputProps, FormInputState> {
  constructor(props: FormInputProps) {
    super(props)
    this.state = {
      searchedWord: ''
    }
  }

  handleFetchVideo = ({ key }: EventKey) => {    
    const { fetchVideo } = this.props
    const { searchedWord } = this.state
    if(key === 'Enter') {
      fetchVideo(searchedWord)
      console.log('chamou')
    }
  }

  handleInputChange = (value: string) => {
    this.setState({ searchedWord: value })
  }

  // debounced = () =>  _.debounce(() => this.handleFetchVideo(), 2000)
  // fazAlgo = (debounce: any) => {
  //   debounce()
  //   debounce.cancel()
  // }

  render() {
    const { searchedWord } = this.state;
    // const debounced = _.throttle(() => this.handleFetchVideo(), 2000)
    return (
      <div className="form-group search-input-wrapper">
        <label htmlFor="searchWord" className="form-label">
        </label>
        <input
          type="text"
          id="searchWord"
          value={ searchedWord }
          onChange={ ({ target: { value } }) => this.handleInputChange(value) }
          onKeyUp={ (e) => this.handleFetchVideo(e) }
          className="form-control search-input"
          placeholder="Search for a video..."
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchVideo: (payload: string) => dispatch(fetchVideo(payload))
})

export default connect(null, mapDispatchToProps)(FormInput);