import { getFirestore } from '../services/firebaseService'

const getPressInfo = (()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items').where('categoryId','==', '2')
        return colecction
        
    }catch(err){
        console.log(err)
    }
     
})()
export default getPressInfo
