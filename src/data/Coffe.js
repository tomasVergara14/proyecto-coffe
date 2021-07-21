
import Arabica from '../assets/coffe-arabica.jpg'
import Robusta from '../assets/coffee-robusta.jpg'
import Kopi from '../assets/brown-.jpg'

const arabica = Arabica
const robusta = Robusta
const kopi = Kopi

const Coffe = [
    {
        "id": 1,
        "name":"Arabica",
        "place":"Arabia",
        "price":200,
        "description":"Tienen una espectacular riqueza aromatica, con sabor suave y profundo al mismo tiempo",
        "img": arabica
    },
    {
        "id": 2,
        "name":"Robusta",
        "place":"Centro America",
        "price":200,
        "description":"Contienen aproximadamente el doble del estimulante, le da un sabor mas fuerte y amargo",
        "img": robusta
    },
    {
        "id": 3,
        "name":"Kopi",
        "place": "Etiopia",
        "price":200,
        "description":"Una experiencia gourmet poco comun, granos extraidos del estiercol de civeta indonesia",
        "img": kopi
    }

]
export default Coffe
    
