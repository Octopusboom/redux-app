import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <div className="ui button primary" onClick={()=>this.props.selectSong(song)}>Select</div>
          </div>
          <div className="content">{song.band}<br />{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// The name is just a convention - you will see this name in the documentation
// The state argument is the entire state object from the Redux store. In our case will be the songs list and the selected song
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// connect is a function that returns a function and it is also a component
export default connect(mapStateToProps, {selectSong})(SongList);