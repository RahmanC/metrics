import { DATA } from '../constants/dataConstant';

const initState = {
  data: {},
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
