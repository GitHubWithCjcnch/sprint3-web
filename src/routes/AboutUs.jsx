import FotoJu from '../assets/foto_jul.svg'
import FotoEmi from '../assets/foto_emi.svg'
import FotoGui from '../assets/foto_gui.svg'
import FotoCaio from '../assets/foto_caio.svg'
import FotoEdu from '../assets/foto_edu.svg'



export default function AboutUs(){
   return(
       <main className="content_about">
       <h1>Conheça nossa equipe:</h1>
       <div className="container">
           <div className="section_perfil">
           <img src={FotoJu} alt='Foto de perfil da Júlia'/>
           <span><p>Júlia Andrade</p></span>
           <p>Full Stack developer</p>
           <p className='light'>RM: 552332</p>
           </div>

           <div className="section_perfil">
           <img src={FotoEmi} alt='Foto de perfil da Emile'/>
           <span><p>Emile Maia</p></span>
           <p>Front End developer</p>
           <p className='light'>RM: 552235</p>
           </div>

           <div className="section_perfil">
           <img src={FotoGui} alt='Foto de perfil do Guilherme'/>
           <span><p>Guilherme P.</p></span>
           <p>Chatbot developer</p>
           <p className='light'>RM: 552238</p>
           </div>

           <div className="section_perfil">
           <img src={FotoCaio} alt='Foto de perfil do Caio'/>
           <span><p>Caio Vitor </p></span>
           <p>Front-end developer</p>
           <p className='light'>RM: 552392</p>
           </div>

           <div className="section_perfil">
           <img src={FotoEdu} alt='Foto de perfil do Carlos'/>
           <span><p>Carlos Eduardo</p></span>
           <p>Backend developer</p>
           <p className='light'>RM: 94787</p>
           </div>

       </div>
     </main>

     
   )
}