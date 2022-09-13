import axios from 'axios';

const getSearch = (store) => (next) => (action) => {  
    if (action.type === 'GET_SEARCH') {
        const term = store.getState().termSearch;
        axios.get(`https://api.bing.microsoft.com/v7.0/search?q=${term}`, {
            headers:  { 'Ocp-Apim-Subscription-Key': '42a77d5fb7f24a65b9b7e94e82248b50' },
          })
            .then((response) => {
                store.dispatch({
                    type: 'SAVE_SEARCH',
                    listSearch: response.data.webPages.value,
                });
            })
            .catch((error) => {
              // en cas d’échec de la requête
              console.log(error);              
            });
    }  
    next(action);
  };
  
  export default getSearch;