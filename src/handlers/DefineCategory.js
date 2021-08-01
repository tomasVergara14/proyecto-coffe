
import getCoffeInfo from './getCoffeInfo'
import getPressInfo from './getPressInfo'
import getMokaInfo from './getMokaInfo'
import getExpressoInfo from './getExpressoInfo'

const DefineCategory = (idProduct)=>{
    
    //Fijarse qeu no funciona el hook de useParams
    // const {id} = useParams()

        if(idProduct==="1"){
            return(getCoffeInfo)
        }
        else if(idProduct==="2"){
            return(getPressInfo)
        }
        else if(idProduct==="3"){
            return(getMokaInfo)
        }
        else if(idProduct==="4"){
            return(getExpressoInfo)
        }
        else{
            return('error')
        }
    
}

export default DefineCategory
