import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ======================
// USER TYPE
// ======================
export interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
}

// ======================
// STATE TYPE
// ======================
interface UsersState {
  entities: User[];
  loading: 'idle' | 'pending' | 'succeeded' | 'rejected';
  error: string | null;
}

// ======================
// INITIAL STATE
// ======================
const initialState: UsersState = {
  entities: [],
  loading: 'idle',
  error: null,
};

// ======================
// FETCH USER BY ID
// ======================
export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId: number, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`);

      if (!response.ok) {
        throw new Error('API failed');
      }

      return await response.json();
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ======================
// CREATE USER
// ======================
export const createUser = createAsyncThunk(
  'users/create',
  async (
    { name, email, phone }: { name: string; email: string; phone: number },
    thunkAPI
  ) => {
    try {
      const response = await fetch(`http://localhost:3001/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) {
        throw new Error('Unable to create user');
      }

      return await response.json();
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ======================
// DELETE USER
// ======================
export const deleteUser = createAsyncThunk(
  'users/delete',
  async (userId: number, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Unable to delete user');
      }

      // return deleted user id
      return userId;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ======================
// SLICE
// ======================
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    // ----------------------
    // FETCH USER
    // ----------------------
    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.entities.push(action.payload);
    });

    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.payload as string;
    });

    // ----------------------
    // CREATE USER
    // ----------------------
    builder.addCase(createUser.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.entities.push(action.payload);
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.payload as string;
    });

    // ----------------------
    // DELETE USER
    // ----------------------
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = 'succeeded';

      state.entities = state.entities.filter(
        (user) => user.id !== action.payload
      );
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export default usersSlice.reducer;