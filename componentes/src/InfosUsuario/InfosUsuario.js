import harry from "./Harry Potter.jpg"

function InfosUsuario () {
    return(
        <div>
            <img src={harry} alt="Imagem Harry Potter" height={20}/>
            <h6>Usuário: Harry Potter</h6>
        </div>
    )
}

export default InfosUsuario