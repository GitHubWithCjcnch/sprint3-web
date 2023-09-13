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
                    <img src={imgCard1} alt="Logo da Porto Seguro"/>
                    <p>Nossa tarefa é facilitar o seu contato com a Porto Seguro, para isso, é preciso que insira seu CPF no login caso seja um assegurado, caso contrário, você terá a opção de solicitar um guincho avulso apenas enviando dados como seu CPF, nome e localização, é fácil e atende a urgência do pedido de guincho.</p>
                </div>
                <div className="card">
                <img src={imgCard2} alt="Imagem de um celular"/>
                    <p>Para nos solicitar, basta fazer login e já poderá acessar nossa plataforma, insira todos apenas a placa e o peso que seu veículo carrega, terá a opção de enviar foto se necessário. Nosso assistente virtual irá retornar o tipo de guincho apropriado para sua situação.</p>
                </div>

                <div className="card">
                <img src={imgCard3} alt="Imagem de um veículo sendo guinchado"/>
                    <p>Este processo de solicitação economiza tempo de espera, não é necessário que faça atendimento direto com a Porto, garantimos qualidade e assertividade. Através do nosso sistema, é possível acompanhar sua solicitação de guincho em tempo real, podendo cancelar quando quiser. </p> 
                </div>
            </div>
        </div>
    
      </main>
    )
}