const initState={
    post:[
        {},
        {},
        {}
    ],
    isDarkTheme:false
}
const rootReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'toggleTheme': {
          return {
            // Again, one less level of nesting to copy
            ...state,
            isDarkTheme:!state.isDarkTheme
          }
        }
        default:
          return{ ...state} 
}
}
export default rootReducer;