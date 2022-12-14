import {BESTOFMYNTRA, CATEGORIESTOBAG, DEALSOFLATESTARIVAL, DEALSOFTHEDAY,ShopByCategories, NEWINTOPBRANDS, TOPNININFLUNCEREXCLUSIVESTYLES, TOPPICKS} from "./action"
const initState = {
    dealsOftheDay : [] ,
    bestOfMyntra:[],
    topPicks:[],
    gategoriesToBag:[],
    ShopByCategories:[],
    dealsoflatestarival:[],
    newintopbrands:[],
    topinfluncerseclusive:[]

}

export const Homereducer = (state = initState , action ) =>{


    switch(action.type){
        case DEALSOFTHEDAY :{
            return {  ...state,
                dealsOftheDay:action.payload}
          
        }
        case BESTOFMYNTRA : {
            return {
                ...state,
                bestOfMyntra:action.payload
            }
        }
        case TOPPICKS :{
            return {
                ...state,
                topPicks:action.payload
            } 
        }
        case CATEGORIESTOBAG :{
            return {
                ...state,
                gategoriesToBag:action.payload
            }
        }
        case ShopByCategories :{
            return {
                ...state,
                ShopBycategory:action.payload
            }
        }
        case  DEALSOFLATESTARIVAL:{
            return {
                ...state,
                dealsoflatestarival:action.payload
            }
        } case NEWINTOPBRANDS :{
            return {
                ...state,
                newintopbrands:action.payload
            }
        } case TOPNININFLUNCEREXCLUSIVESTYLES :{
            return {
                ...state,
                topinfluncerseclusive:action.payload
            }
        }
        default:{
            return state
        }
    }
}

