

const getInitialState = () => ({
  fetching: false,
  fetched: false,
  hits: [],
  error: null,
});

const app = (state = getInitialState(), action) => {
  switch(action.type) {
    case 'FETCH_DATA_START':
      return {...state, ...action.payload}; 
    case 'RECEIVE_DATA':
      return {
        ...state, 
        fetching: false,
        fetched: true,
        hits: action.payload.data.hits
      };
    case 'FETCH_DATA_ERROR':
      return {...state, fetching: false, error: action.payload}
    default: 
      return state;
  }
};

export default app;