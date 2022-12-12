import { combineReducers } from 'redux';

// Song list reducer
const songsReducer = () => {
    return [
        {band: 'Nirvana', title: 'Smells Like Teen Spirit', duration: '4:05'},
        {band: 'Grave Worm', title: 'Fragments the death', duration: '3:15'},
        {band: 'The Beatles', title: 'Yesterday', duration: '2:05'},
        {band: 'Cypres Hill', title: 'SUperstar', duration: '3:45'},
        {band: 'The Doors', title: 'Light my fire', duration: '4:05'},
        {band: 'The Rolling Stones', title: 'Paint it black', duration: '3:05'},
    ];
};

// selectedSong is initialy null because we do not have any seong selected yet
// second argument is the action that we are going to dispatch
const selectedSongreducer = (selectedSong = null, action) => {
 // We assume that we have more than one action in our redux app so this is why we are going to use an IF statement
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

// We are going to export default combined reducers so we can use it in any file of our project
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongreducer
});
