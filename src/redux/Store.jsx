// import { createStore} from 'redux';
// import { rootReducer } from './reducer/Reducer';

// import {composeWithDevTools } from 'redux-devtools-extension'

// const composedEngencers = composeWithDevTools()
// const store = createStore(rootReducer, composedEngencers)


// export default store;

// redux-toolkit
import {configureStore} from '@reduxjs/toolkit'
import  TodoListSlice from './reducer/AddTodoReducer'
import  filterSlice  from './reducer/FiltersTodoReducer'

 const store = configureStore({
    reducer:{
        TodoList: TodoListSlice.reducer,
        filter: filterSlice.reducer 
    }
})
export default store