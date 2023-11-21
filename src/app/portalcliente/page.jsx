"use client"
import '/src/app/portalcliente/portalcliente.scss'
import { ImExit } from "react-icons/im";
import { GrConfigure } from "react-icons/gr";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { AiFillAlert } from "react-icons/ai";
import { RiQuestionMark } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { RxMagnifyingGlass } from "react-icons/rx";
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function PortalCliente() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem("loginClient"));
    setUser(login);

    if (!login || !login.email) {
      window.location = '/login';
    }
  }, []);

  const deslogar = () => {
    try {
      sessionStorage.removeItem("loginClient");
      setUser("");
      alert('Sessão encerrada com sucesso!');
    } catch (error) {
      alert('Falha ao encerrar sessão.');
      console.error('Erro ao encerrar sessão:', error);
    }
  };


  const opcoes = [
    {
      titulo: 'Cadastrar Dispositivo',
      descricao: 'Cadastre um novo dispositivo LifeCare.',
      icone: <IoWatchOutline />,
      rota: '/portalcliente/dispositivo/cadastrar',
    },
    {
      titulo: 'Visualizar Dispositivos',
      descricao: 'Veja todos os dispositivos LifeCare registrados.',
      icone: <RxMagnifyingGlass />,
      rota: '/portalcliente/dispositivo',
    },
    {
      titulo: 'Cadastrar Cuidador',
      descricao: 'Cadastre um novo cuidador ou responsável.',
      icone: <MdOutlineMedicalInformation />,
      rota: '/portalcliente/cuidador/cadastrar',
    },
    {
      titulo: 'Informações do Cuidador',
      descricao: 'Visualize informações sobre o seu cuidador.',
      icone: <RiQuestionMark />,
      rota: '/portalcliente/cuidador',
    },
    {
      titulo: 'Gerenciar Diagnósticos',
      descricao: 'Visualize e gerencie diagnósticos relacionados ao seu dispositivo.',
      icone: <FaFileMedicalAlt />,
      rota: '/portalcliente/diagnostico/visualizar',
    },
    {
      titulo: 'Configurações de Conta',
      descricao: 'Atualize suas informações de conta e preferências.',
      icone: <FaUserGear />,
      rota: '/portalcliente/cliente/visualizar',
    },
    {
      titulo: 'Visualizar Serviços de Manutenção',
      descricao: 'Visualize serviços de manutenção para o seu dispositivo.',
      icone: <GrConfigure />,
      rota : '/portalcliente/manutencao/visualizar',
    },
    {
      titulo: 'Histórico de Serviços de Emergência',
      descricao: 'Visualize o histórico de serviços de emergência.',
      icone: <AiFillAlert />,
      rota: '/portalcliente/emergencia/visualizar',
    },
    {
      titulo: 'Sair',
      descricao: 'Encerre a sessão no Portal do Cliente com sergurança.',
      icone: <ImExit />,
      rota: '/',
      onClick: deslogar,
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
              opcao.rota && (
                <Link href={opcao.rota} key={index}>
                  <li onClick={opcao.onClick}>
                    <span className='icon'>{opcao.icone}</span>
                    <span className='informacoes'>
                      <h3>{opcao.titulo}</h3>
                      <p>{opcao.descricao}</p>
                    </span>
                  </li>
                </Link>
              )
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}