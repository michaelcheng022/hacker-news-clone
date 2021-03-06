

const getInitialState = () => ({
  url: `https://hn.algolia.com/api/v1/search?query=&page=0&tags=story`,
  // url: {
  //   base: 'https://hn.algolia.com/api/v1/search?&tags=story',
  //   query: 'query=',
  //   page: '&page=0',

  // }
  fetching: false,
  fetched: false,
  error: null,
  hits: [],
  page: 0,
  nbPages: 0,
  query: ''
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
        hits: action.hits,
        page: action.page,
        nbPages: action.nbPages,
        query: action.query
      };
    default: 
      return state;
  }
};



export default app;