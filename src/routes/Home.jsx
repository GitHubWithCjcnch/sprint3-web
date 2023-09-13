import imgHome from '../assets/imagemMain.svg'


export default function Home(){
    return(
        <body>
      <main className="content_index">
        <div className="container">
            <div className="textBox">
              <h1 id="um">Chamou?</h1>
              <h1 id="dois">A porto chegou!</h1>
            </div>
            <div className="imgBox">
              <img src={imgHome} alt="Imagem de uma pessoa solicitando guincho no celular" />
            </div>
        </div>
      </main>
</body>
    )
}