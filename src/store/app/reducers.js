

const getInitialState = () => ({
  fetching: false,
  fetched: false,
  data: null,
  hits: [],
  error: null,
});

const app = (state = getInitialState(), action) => {
  switch(action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state, 
        fetching: true
      }; 
    case 'FETCH_DATA_ERROR':
      return {
        ...state, 
        fetching: false,
        error: action.error
      };
    case 'RECIEVE_DATA':
      return {
        ...state,
        fetching: false,
        fetched: true,
        hits: [...state.hits, ...action.hits]
      };
    default: 
      return state;
  }
};

export default app;