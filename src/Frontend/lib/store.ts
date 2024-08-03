import { configureStore, createSlice } from '@reduxjs/toolkit';


const cryptoDataSlice = createSlice({
  name: 'cryptoData',
  initialState: { list: [], activeStock:'bitcoin',isFetching: false ,isLoggedIn: false},
  reducers: {
    updateList: (state,action) => {
      state.list =action.payload;
    },
    updateStock: (state,action) => {
      state.activeStock = action.payload;
    },
    setFetching:(state,action)=>{
      state.isFetching=action.payload;
    },
    setIsLoggedIn:(state,action)=>{
      state.isLoggedIn=action.payload;
    },
    addToList:(state,action)=>{
      state.list.push(action.payload);
      state.list=[...state.list];
    },
  },
});

export const { updateList, updateStock, setFetching, setIsLoggedIn,addToList } = cryptoDataSlice.actions;


const store = configureStore({
  reducer: {
    cryptoData: cryptoDataSlice.reducer,
  },
});

export default store;
