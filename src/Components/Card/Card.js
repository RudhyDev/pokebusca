import './Card.css'

const Card = (props) => (    
    <>

        <div className='card'>
            <h2>{props.nome}</h2>
        </div>

        <img 
        className='image' 
        src={props.imagem} 
        alt="Imagem do pokemon buscado" 
        />

    </>
)

//Como não vai ter nenhuma lógica dentro desse componente dá para exportar ele como uma constante 

export default Card;