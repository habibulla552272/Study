import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

// // State এর টাইপ
// interface PostsState {
//     isLoading: boolean;
//     isError: boolean;
//     posts: Post[];
//     error: string | null;
// }

const initialData = {
    isLoading: false,
    isError: false,
    posts: [],
    error: null,
};

// thunk function (with return type)
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const posts = await getPosts();
        return posts;
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState: initialData,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message || "An unknown error occurred";
            });
    },
});

export default postsSlice.reducer;
