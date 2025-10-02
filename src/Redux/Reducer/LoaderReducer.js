const INITIAL_STATE ={
    loading:true
}

export  default function LoaderReducer (state = INITIAL_STATE , action){
            switch(action.type){
                case "LOADER_ACTION" :
                    return{
                        loading:action.payload
                    }
                default:
                    return state
            }

}