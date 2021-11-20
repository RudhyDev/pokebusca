import './Navbar.css'

export default function Navbar() {
    return(
        <div className='navbar'>
            <h1 className='navbar-titulo'>Encontrar Pokemons</h1>
            <form className='navbar-form'>
                <input type='text' placeholder='Digite o nome...'/>
                <input type="submit" value='Procurar' />
            </form>
        </div>
    )
};
