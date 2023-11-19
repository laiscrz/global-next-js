import '/src/app/portalcliente/portalcliente.scss'
import { ImExit } from "react-icons/im";
import { GrConfigure } from "react-icons/gr";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { AiFillAlert } from "react-icons/ai";
import { RiQuestionMark } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { RxMagnifyingGlass } from "react-icons/rx";

export default function PortalCliente() {
    const opcoes = [
        {
          titulo: 'Cadastrar Dispositivo',
          descricao: 'Cadastre um novo dispositivo LifeCare.',
          icone: <IoWatchOutline />,
        },
        {
          titulo: 'Visualizar Dispositivos',
          descricao: 'Veja todos os dispositivos LifeCare registrados.',
          icone: <RxMagnifyingGlass />,
        },
        {
          titulo: 'Informações do Cuidador',
          descricao: 'Visualize informações sobre o seu cuidador.',
          icone: <RiQuestionMark />,
        },
        {
          titulo: 'Gerenciar Diagnósticos',
          descricao: 'Visualize e gerencie diagnósticos relacionados ao seu dispositivo.',
          icone: <FaFileMedicalAlt />,
        },
        {
          titulo: 'Configurações de Conta',
          descricao: 'Atualize suas informações de conta e preferências.',
          icone: <FaUserGear />,
        },
        {
          titulo: 'Visualizar Serviços de Manutenção',
          descricao: 'Visualize serviços de manutenção para o seu dispositivo.',
          icone: <GrConfigure />,
        },
        {
          titulo: 'Histórico de Serviços de Emergência',
          descricao: 'Visualize o histórico de serviços de emergência.',
          icone: <AiFillAlert />,
        },
        {
          titulo: 'Sair',
          descricao: 'Encerre a sessão no Portal do Cliente.',
          icone: <ImExit />,
        },
      ];




    return (
        <main>
            <section className='p-cliente-inicial'>
                <div className='portal-img'>
                    <img src="/image/pcliente_inicial.jpg" alt="Cuidador e Cliente com LifeCare" />
                </div>
                <div className='portal-text'>
                    <h2>Seja bem-vindo ao Portal <br /> do Cliente LifeCare !</h2>
                    <p>Obtenha informações detalhadas sobre o seu dispositivo LifeCare <br /> e gerencie suas opções de maneira simples e intuitiva.</p>
                </div>
            </section>
            <section className='p-cliente-opcoes'>
                <div className='opn-cliente'>
                    <h2>Opções</h2>
                    <ul className="opcoes">
                        {opcoes.map((opcao, index) => (
                            <li key={index}>
                                <span className='icon'>{opcao.icone}</span>
                                <span className='informacoes'>
                                    <h3>{opcao.titulo}</h3>
                                    <p>{opcao.descricao}</p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}