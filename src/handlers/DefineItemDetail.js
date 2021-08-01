import getCoffeInfo from "./getCoffeInfo";
import getExpressoInfo from "./getExpressoInfo";
import getMokaInfo from "./getMokaInfo";
import getPressInfo from "./getPressInfo";

const CoffeArray = ["1","2","3"]
const PressArray = ["4","5"]
const MokaArray = ["6","7"]
const ExpressoArray = ["8","9"]

function DefineItemDetail (itemId){
    if(CoffeArray.includes(itemId)){
        return getCoffeInfo
    }else if(PressArray.includes(itemId)){
        return getPressInfo
    }else if(MokaArray.includes(itemId)){
        return getMokaInfo
    }else if(ExpressoArray.includes(itemId)){
        return getExpressoInfo
    }else{
        return "error"
    }

}
export default DefineItemDetail