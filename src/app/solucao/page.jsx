
import '/src/app/solucao/solucao.scss'
import { BiCheck } from "react-icons/bi";


export default function Solucao(){
    return(
        <main>
            <section className="solucao">
                <div className="solucao-container">
                    <img src="/image/solu_lifecare.jpg" alt="Relogio LifeCare" className='solucao-img' />
                    <div className="solucao-text">
                        <h2 className="solucao-title">O LifeCare, <br/> Cuidando de Você a Cada Batimento !</h2>
                        <p>Mais do que um simples relógio de saúde. É a sua solução completa para monitoramento constante dos sinais vitais, proporcionando tranquilidade e cuidado imediato. Descubra como estamos revolucionando o cuidado com a saúde.</p>
                        <div className="solucao-detalhes">
                        <p className="solucao-descricao">
                            <BiCheck className='solucao-icons'/>
                            Monitoramento contínuo dos sinais vitais
                        </p>
                        <p className="solucao-descricao">
                            <BiCheck className='solucao-icons'/>
                            Geolocalização para rastreamento em emergências
                        </p>
                        <p className="solucao-descricao">
                            <BiCheck className='solucao-icons'/>
                            Design acessível e confortável
                        </p>
                        <p className="solucao-descricao">
                            <BiCheck className='solucao-icons'/>
                            Alertas para identificação precoce de problemas de saúde
                        </p>
                    </div>
                    </div>
                    
                </div>

            </section>
        </main>
    )
}