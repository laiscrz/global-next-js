
import '/src/app/sobre/sobre.scss'
import { GoLightBulb } from "react-icons/go";
import { AiOutlineCheck, AiFillHeart } from "react-icons/ai";


export default function Sobre() {
    return (
        <main>
            <section className="sobre">
                <div className="sobre-container">
                    <div className="sobre-img">
                        <img src="/image/equipe_emp.jpg" alt="Equipe Empresa" />
                    </div>
                    <div className="sobre-text">
                        <h2>Sobre a Inova-X Care !</h2>
                        <p>É uma empresa inovadora dedicada à transformação da saúde. Oferecemos soluções avançadas para o bem-estar dos pacientes, integrando expertise em saúde com tecnologia de ponta. Buscamos criar um futuro onde a excelência clínica se encontra com a inovação digital, proporcionando cuidados personalizados e eficazes. Junte-se a nós para construir uma saúde mais conectada e compassiva.
                        </p>
                        <div className='destaques'>
                            <article className='destaques-card'>
                                <span className='destaques-icon'>
                                    <span><GoLightBulb /></span>
                                </span>
                                <h3>Soluções Eficazes para Saúde</h3>
                            </article>
                            <article className='destaques-card'>
                                <span className='destaques-icon'>
                                    <span><AiOutlineCheck /></span>

                                </span>
                                <h3>Acompanhamento e Bem-estar</h3>
                            </article>
                            <article className='destaques-card'>
                                <span className='destaques-icon'>
                                    <span><AiFillHeart /></span>

                                </span>
                                <h3>Cuidados Personalizados</h3>
                            </article>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}