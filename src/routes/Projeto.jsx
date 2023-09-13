import imgCard1 from "../assets/LogoPorto.svg"
import imgCard2 from "../assets/imgProjeto.svg"
import imgCard3 from "../assets/imgProjeto2.svg"

export default function Projeto(){
    return(
        <main className="content_projeto">
        <div>
            <h1>Entenda o processo</h1>
            <div className="row_card">
                <div className="card">
                    <img src={imgCard1} alt="Imagem de uma fazenda"/>
                    <p>O desperdício na agricultura ocorre devido a vários fatores, como perdas na colheita, armazenamento inadequado, falta de infraestrutura e demanda insuficiente, resultando em descarte de alimentos perfeitamente comestíveis.</p>
                </div>
                <div className="card">
                <img src={imgCard2} alt="Imagem de uma fazenda"/>
                    <p>Durante o transporte até o mercado, ocorre um significativo desperdício de alimentos. Fatores como manuseio inadequado, falta de refrigeração adequada e longas distâncias podem levar à perda de produtos perecíveis. </p>
                </div>

                <div className="card">
                <img src={imgCard3} alt="Imagem de uma fazenda"/>
                    <p>A implementação de práticas logísticas eficientes e a adoção de tecnologias, como a Internet das Coisas, podem ajudar a reduzir as perdas e garantir que os alimentos cheguem em bom estado ao mercado.</p> 
                </div>
            </div>
        </div>
    
      </main>
    )
}