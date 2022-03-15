export default (state={movies:[],favorites:[]},action)=>{
    switch(action.type){
    case 'FETCH_ALL':
        return {
            ...state,movies:action.payload
        };
    case 'ADD_FAVORITE':
        
        return {
            ...state,favorites:[...state.favorites,action.payload]
        };

    case 'REMOVE_FAVORITE':
        return{
            ...state,favorites:state.favorites.filter((fav)=>fav.id!==action.payload)
        };
       
    default:
        return state;
    }
};




