import './Navbar.css'

export default function Navbar(props) {
    return(
        <div className='navbar'>
            <h1 className='navbar-titulo'>Encontrar Pokemons</h1>
            <form onSubmit={props.onSubmit} className='navbar-form'>
                <input type='text' placeholder='Digite o nome...'/>
                <input type="submit" value='Procurar' />
            </form>
        </div>
    )
};
