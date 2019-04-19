

const getInitialState = () => ({
  url: 'https://hn.algolia.com/api/v1/search?query=&page=0&tags=story',
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
    case 'FETCH_FROM': 
      return {
        ...state,
        url: action.url
      }
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
        hits: action.hits
      };
    default: 
      return state;
  }
};



export default app;