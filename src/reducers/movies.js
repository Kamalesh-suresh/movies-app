export default (state={movies:[]},action)=>{
    switch(action.type){
    case 'FETCH_ALL':
        return {
            ...state,movies:action.payload
        };
    case 'ADD_FAVORITE':
        return {
            ...state,favorites:action.payload
        };
    default:
        return state;
    }
};




