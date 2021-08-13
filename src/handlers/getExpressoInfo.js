import { getFirestore } from '../services/firebaseService'

const getExpressoInfo = (()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items').where('categoryId','==', '4')
        return colecction
        
    }catch(err){
        console.log(err)
    }
     
})()
export default getExpressoInfo

