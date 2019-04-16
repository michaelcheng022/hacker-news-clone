export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const RECIEVE_DATA = 'RECIEVE_DATA';

export const fetchDataStart = () => ({
  type: FETCH_DATA_START,
  payload: { fetching: true } 
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: { error }
});

export const recieveData = (data) => ({
  type: RECIEVE_DATA,
  payload: { ...data }
});

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    return fetch('https://hn.algolia.com/api/v1/search?query=&page=0&tags=story')
      .then((response) => response.json())
      .then((data) => dispatch(recieveData(data)))
      .catch((err) => {
        dispatch(fetchDataError(err))
      });
  };
}
