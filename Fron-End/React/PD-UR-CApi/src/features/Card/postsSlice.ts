import { createSlice } from "@reduxjs/toolkit";

const initialData={
    isLoading:false,
    isError:false,
    posts:[],
    error:null,
}
 
const postsSlice=createSlice({
    name:'post',
    initialState: initialData,
    reducers:{
        
    }
})

export default postsSlice.reducer;
// export { }= postsSlice.actions;