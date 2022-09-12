export const initialState = {
    listSearch: [],
    termSearch:'maison',
    loading: false,
    dark: false,
    result: false,
  };
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'RECORD_TERMSEARCH':
        return {
          ...state,
          termSearch : action.recordterm,
        };
      case 'GET_SEARCH':
        return {
          ...state,
          loading: true,
          result: true,
          // termSearch : action.term,
        };
        case 'SAVE_SEARCH':
        return {
          ...state,
          listSearch: action.listSearch,
          loading: false,
          result: true,
        };
        case 'SELECT_THEME':
        return {
          ...state,
          dark: action.selectedTheme,
          loading: false,
        };
        case 'COME_BACK':
        return {
          ...state,
          listSearch: [],
          termSearch:'maison',
          loading: false,
          dark: false,
          result: false,
        };
      default:
        return state;
    }
  }
  
  export default reducer;