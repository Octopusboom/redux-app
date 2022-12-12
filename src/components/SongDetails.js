import React from "react";
import { connect } from "react-redux";

const SongDetails = ({song}) => {
    if (!song) {
        return <div>Please Select a song!</div>;
    }
    return (
    <>
    <div>Selected song detaild:</div>
        <div>{`Band: ${song.band}`}</div>
        <div>{`Title: ${song.title}`}</div>
        <div>{`Duration: ${song.duration}`}</div>
    </>
    )
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
