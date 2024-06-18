import './perfil.css'

const Perfil = ({endereco, nome}) => {
    
    return (
        <>
        <img className='avatar' src={endereco} alt="" />
        <h2 className='titulo-name' >{nome}</h2>
        </>
    )
}
export default Perfil; 