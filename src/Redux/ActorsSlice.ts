import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fakeDatabase, PersonType } from './FakeBD';


interface ActorState {
  actors: PersonType[];
}

const initialState: ActorState = {
  actors: fakeDatabase.persons,
}

const ActorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers:{
    setActors(state:ActorState, action: PayloadAction<PersonType[]>) {
      state.actors = action.payload;
  },
  },
  
});

export const {setActors} = ActorsSlice.actions
export default ActorsSlice.reducer;