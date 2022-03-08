export default (movies=['kamal','kamal','kamal','kamal','kamal','kamal','kamal','kamal','kamal','kamal','kamal'],action)=>{
    switch(action.type){
    case 'FETCH_ALL':
        return action.payload;
    default:
        return movies;
    }
};