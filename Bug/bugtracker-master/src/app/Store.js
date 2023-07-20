import Reducers from './Reducer';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: Reducers,
}) 
