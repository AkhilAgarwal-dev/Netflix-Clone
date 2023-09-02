import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null, 
        trailerVideo: null
    },
    reducers:{
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPopularMovies:(state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
           state.trailerVideo = action.payload;
        }


    }
});
export const { addNowPlayingMovies, addTrailerVideo, addNowPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;