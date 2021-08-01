import getCoffeInfo from "./getCoffeInfo";
import getExpressoInfo from "./getExpressoInfo";
import getMokaInfo from "./getMokaInfo";
import getPressInfo from "./getPressInfo";


function DefineItemDetail (itemId){
    if(itemId === "1" || itemId === "2" || itemId === "3" ){
        return getCoffeInfo
    }else if(itemId === "4" || itemId === "5"){
        return getPressInfo
    }else if(itemId === "6" || itemId === "7"){
        return getMokaInfo
    }else if(itemId === "8" || itemId === "9"){
        return getExpressoInfo
    }else{
        return "error"
    }

}
export default DefineItemDetail