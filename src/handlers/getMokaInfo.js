import { getFirestore } from '../services/firebaseService'

const getMokaInfo = (()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items').where('categoryId','==', '3')
        return colecction
        
    }catch(err){
        console.log(err)
    }
     
})()
export default getMokaInfo