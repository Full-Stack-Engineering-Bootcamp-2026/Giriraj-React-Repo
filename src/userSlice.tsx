import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI'
import { useDispatch } from 'react-redux';


// First, create the thunk
export interface User{
    id:number,
    name:string,
    email:string,
    phone:number
}


interface UsersState {
  entities: User[]
  loading: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const initialState = {
  entities: [],
  loading: 'idle',
  error:null as string|null,
};

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId: number, thunkAPI) => {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!response.ok){
      throw new Error('API failed')
    }
    return await response.json();
    }
    catch(err)
    {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  },
)

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.pending, (state) => {
      // Add user to the state array
      state.loading="pending";
     
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading="succeeded";
      state.entities.push(action.payload)
    });
    builder.addCase(fetchUserById.rejected, (state,action) => {
      // Add user to the state array
      state.loading="rejected";
      // state.error=action.payload as string;  
      state.error="very funny error";
    });
  },
})
// const Dispatcher=()=>{
// const dispatch=useDispatch();
// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(1));
// }
export default usersSlice.reducer;
