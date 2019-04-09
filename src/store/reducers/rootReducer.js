import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import data from './reducer';

const rootReducer = combineReducers({
  data,
  toastr
});

export default rootReducer;
