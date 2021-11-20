import './Main.css'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import { useState } from 'react'
import axios from 'axios'

export default function Main(){

    const [dadosPokemon, setDadosPokemon] = useState({});
    const [desenhaCard, setDesenhaCard] = useState(false)


    const pegarDados = (e) => {
        e.preventDefault();
        const nome = e.target[0].value;
        
        const url = 'https://pokeapi.co/api/v2/pokemon/' + nome.toLowerCase();
        axios.get(url)
        .then((response)=>{
            setDadosPokemon(response.data)
            setDesenhaCard(true)
        })

    }

    return(
        <div className="bg">
            <Navbar onSubmit={pegarDados}/>

            <div className="pokemon-area">
                {
                    desenhaCard && <Card nome={dadosPokemon.name} imagem={dadosPokemon.sprites.front_default}/>
                }

            </div>
        </div>
    )
}