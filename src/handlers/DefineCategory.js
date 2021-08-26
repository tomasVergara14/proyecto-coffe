
import getCoffeInfo from './getCoffeInfo'
import getPressInfo from './getPressInfo'
import getMokaInfo from './getMokaInfo'
import getExpressoInfo from './getExpressoInfo'

const DefineCategory = (categoriesId)=>{
    
        if(categoriesId==="1"){
            return(getCoffeInfo)
        }
        else if(categoriesId==="2"){
            return(getPressInfo)
        }
        else if(categoriesId==="3"){
            return(getMokaInfo)
        }
        else if(categoriesId==="4"){
            return(getExpressoInfo)
        }
        else{
            return('error')
        }
    
}

export default DefineCategory
