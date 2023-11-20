
import '/src/app/sobre/sobre.scss'
import { GoLightBulb } from "react-icons/go";
import { AiOutlineCheck, AiFillHeart } from "react-icons/ai";


export default function Sobre() {

    const valoresEMissoes = [
        {
            numero: '01',
            titulo: 'Responsabilidade Social',
            descricao: 'Comprometemo-nos a contribuir ativamente para o bem-estar da comunidade. Além de fornecer soluções de saúde inovadoras, buscamos impactar positivamente a sociedade por meio de iniciativas sociais e ambientais.',
        },
        {
            numero: '02',
            titulo: 'Inovação em Saúde',
            descricao: 'Buscamos constantemente a inovação no campo da saúde, integrando tecnologia de ponta aos cuidados personalizados, para atender às necessidades específicas dos idosos e proporcionar soluções eficazes.',
        },
        {
            numero: '03',
            titulo: 'Empatia e Respeito',
            descricao: 'Cultivamos um ambiente baseado na empatia e no respeito, onde cada indivíduo é tratado com dignidade, compreensão e consideração, promovendo relações saudáveis e positivas.',
        },
    ];



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
            <section className='missoes-valores'>
                <div className="missoes-valores-container">
                    <h2 className='missoes-valores-title'>Valores e  Missões</h2>
                    <div className='card-item'>
                        <div className='container-card'>
                            {valoresEMissoes.map((item) => (
                                <div key={item.numero} className='missoes-valores-card'>
                                    <div className='number-valores-missoes-card'>{item.numero}</div>
                                    <h3 className='valores-missoes-title'>{item.titulo}</h3>
                                    <p className='valores-missoes-descricao'>{item.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}