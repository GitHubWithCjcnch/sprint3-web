 import FotoJu from '../assets/foto_jul.svg'


export default function AboutUs(){
    return(
        <main className="content_about">
        <div className="container">
            <div className="section_perfil">
            <img src={FotoJu} alt='Foto de perfil da Júlia'/>
            <p><span>Júlia Andrade</span></p>
            <p>Full Stack developer</p>
            <p>RM: 552332</p>
            </div>

        </div>
      </main>

      
    )
}