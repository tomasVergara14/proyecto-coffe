import { getFirestore } from '../services/firebaseService'
import data from '../data/CoffeProducts'

const getCoffeInfo = (()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items').where('categoryId','==', '1')
        return colecction
        
    }catch(err){
        console.log(err)
    }
     
})()
console.log(getCoffeInfo)
export default getCoffeInfo
