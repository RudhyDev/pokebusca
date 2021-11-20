import './Main.css'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'

export default function Main(){

    return(
        <div className="bg">
            <Navbar/>

            <div className="pokemon-area">

                <Card nome="Olá Laô Olá Laô, não tem caô não tem caô!"/>

            </div>
        </div>
    )
}