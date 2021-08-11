import { getFirestore } from '../services/firebaseService'
import data from '../data/CoffeProducts'

const getCoffeInfo = (async ()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items')
        const coffeColecction = await colecction.where('categoryId','==', '1').get()
        const result = await coffeColecction.docs.map(itemFirebase=>(
             {id: itemFirebase.id, key:itemFirebase.id ,...itemFirebase.data() }))
            //  console.log(result)
    return result
    }catch(err){
        console.log(err)
    }
     
})()
console.log(getCoffeInfo)
export default getCoffeInfo
