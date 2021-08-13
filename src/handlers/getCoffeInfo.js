import { getFirestore } from '../services/firebaseService'

const getCoffeInfo = (()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items').where('categoryId','==', '1')
        return colecction
        
    }catch(err){
        console.log(err)
    }
     
})()
export default getCoffeInfo
