const FETCH_DATA_START = 'FETCH_DATA_START';
const FETCH_FROM = 'FETCH_FROM'
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
const RECIEVE_DATA = 'RECIEVE_DATA';

export const fetchFrom = (url) => ({
  type: FETCH_FROM,
  url
})
export const fetchDataStart = () => ({
  type: FETCH_DATA_START 
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  error: error.message
});

export const recieveData = (data) => ({
  type: RECIEVE_DATA,
  hits: data.hits,
  nbPages: data.nbPages,
  page: data.page
});

// fn calls API and builds state
export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    dispatch(fetchFrom(url));
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return dispatch(recieveData(data))
      })
      .catch((err) => {
        dispatch(fetchDataError(err))
      });
  };
}
