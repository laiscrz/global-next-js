
import '/src/app/solucao/solucao.scss'
import { BiCheck } from "react-icons/bi";
import { CiMedicalCross } from "react-icons/ci";
import { IoIosSearch, IoIosAlert } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { BsClipboard2HeartFill } from "react-icons/bs";
import { HiMiniClock } from "react-icons/hi2";


export default function Solucao() {


    const categoriasConteudo = [
        {
            icon: <IoIosSearch />,
            title: 'Monitoramento Avançado',
            description: 'Monitora os sinais vitais, oferecendo uma visão abrangente da saúde do usuário.',
        },
        {
            icon: <MdOutlineSecurity />,
            title: 'Segurança com Geolocalização',
            description: 'Garantindo a segurança dos idosos, permitindo rastrear sua localização em situações de emergência.',
        },
        {
            icon: <HiMiniClock />,
            title: 'Design Ergonômico',
            description: 'Pensado para atender às preferências estéticas e ergonômicas do público idoso, tornando o LifeCare confortável para uso diário.',
        },
        {
            icon: <BsClipboard2HeartFill />,
            title: 'Cuidado Imediato',
            description: 'Oferecendo cuidado imediato ao identificar precocemente problemas de saúde, proporcionando tranquilidade aos usuários e seus familiares.',
        },
        {
            icon: <CiMedicalCross />,
            title: 'Inovação na Saúde',
            description: 'É uma inovação no campo da saúde, integrando tecnologia e cuidados personalizados para atender às necessidades específicas dos idosos.',
        },
        {
            icon: <IoIosAlert />,
            title: 'Alertas Personalizados',
            description: 'Com base nos dados de monitoramento, garantindo que os usuários estejam cientes de quaisquer mudanças significativas.',
        },
    ]


    return (
        <main>
            <section className="solucao">
                <div className="solucao-container">
                    <img src="/image/solu_lifecare.jpg" alt="Relogio LifeCare" className='solucao-img' />
                    <div className="solucao-text">
                        <h2 className="solucao-title">O LifeCare, <br /> Cuidando de Você a Cada Batimento !</h2>
                        <p>Mais do que um simples relógio de saúde. É a sua solução completa para monitoramento constante dos sinais vitais, proporcionando tranquilidade e cuidado imediato. Descubra como estamos revolucionando o cuidado com a saúde.</p>
                        <div className="solucao-detalhes">
                            <p className="solucao-descricao">
                                <BiCheck className='solucao-icons' />
                                Monitoramento contínuo dos sinais vitais
                            </p>
                            <p className="solucao-descricao">
                                <BiCheck className='solucao-icons' />
                                Geolocalização para rastreamento em emergências
                            </p>
                            <p className="solucao-descricao">
                                <BiCheck className='solucao-icons' />
                                Design acessível e confortável
                            </p>
                            <p className="solucao-descricao">
                                <BiCheck className='solucao-icons' />
                                Alertas para identificação precoce de problemas de saúde
                            </p>
                        </div>
                    </div>

                </div>

            </section>
            <section className='sobre-saiba'>
                <div className='sobre-saiba-container'>
                    <div className='saiba-text'>
                        <h3>
                            Pensado na Saúde de Pessoas Idosas !
                        </h3>
                        <p>
                            O LifeCare é mais do que um relógio inteligente; é um companheiro dedicado ao bem-estar dos idosos. Desenvolvido para monitoramento contínuo de sinais vitais, geolocalização em emergências e design ergonômico, o LifeCare oferece tranquilidade e cuidado imediato.
                        </p>
                        <div className='img-container'>
                            <img src="/image/saiba_img.jpg" alt="Cliente(idoso) usando LifeCare" className='saiba-img' />
                            <img src="/image/saiba_imgdois.png" alt="Cliente(idoso) usando LifeCare" className='saiba-img' />
                            <img src="/image/saiba_imgtres.jpg" alt="Cliente(idoso) usando LifeCare" className='saiba-img' />
                        </div>

                    </div>
                    <div className='saiba-categorias'>
                        {
                            categoriasConteudo.map((categoria, id) => (
                                <article key={id} className='categorias-card'>
                                    <span className='categorias-icon'>{categoria.icon}</span>
                                    <h4>{categoria.title}</h4>
                                    <p>{categoria.description}</p>
                                </article>
                            ))}

                    </div>
                </div>
            </section>
        </main>
    )
}