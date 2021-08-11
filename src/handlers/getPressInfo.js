import { getFirestore } from '../services/firebaseService'
import data from '../data/CoffeProducts'

const getPressInfo = (async ()=>{
    try{
        const dbQuery = getFirestore()
        const colecction = dbQuery.collection('items')
        const PressColecction = await colecction.where('categoryId','==', '2').get()
        const result = await PressColecction.docs.map(itemFirebase=>(
             {id: itemFirebase.id, key:itemFirebase.id ,...itemFirebase.data() }))
        return result
    }catch(err){
        console.log(err)
    }
     
})()

export default getPressInfo
