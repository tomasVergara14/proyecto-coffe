import { getFirestore } from '../services/firebaseService'
import data from '../data/CoffeProducts'

const getExpressoInfo = (async ()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items')
        const ExpressoColecction = await colecction.where('categoryId','==', '4').get()
        const result = await ExpressoColecction.docs.map(itemFirebase=>(
             {id: itemFirebase.id, key:itemFirebase.id ,...itemFirebase.data() })) 
        return result
    }catch(err){
        console.log(err)
    }
     
})()


export default getExpressoInfo
