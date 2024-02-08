import axios from 'axios';

const getSearch = (store) => (next) => (action) => {  
    if (action.type === 'GET_SEARCH') {
        const term = store.getState().termSearch;
        const key = process.env.REACT_APP_MY_KEY;
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=46c9d3ea05fd549f0&q=${term}`)
            .then((response) => {
              console.log(response);
                store.dispatch({
                    type: 'SAVE_SEARCH',
                    listSearch: response.data.items,
                });
            })
            .catch((error) => {
              console.log(error);              
            });
    }  
    next(action);
  };
  
  export default getSearch;