import { getFirestore } from '../services/firebaseService'
import data from '../data/CoffeProducts'

const getMokaInfo = (async ()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items')
        const MokaColecction = await colecction.where('categoryId','==', '3').get()
        const result = await MokaColecction.docs.map(itemFirebase=>(
             {id: itemFirebase.id, key:itemFirebase.id ,...itemFirebase.data() }))    
        return result
    }catch(err){
        console.log(err)
    }
     
})()



export default getMokaInfo
