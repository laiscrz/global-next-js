"use client"
import { useEffect, useState } from 'react';
import '/src/app/portalcliente/opcoes.scss';
import BotaoVoltarMenu from '@/components/botaovoltarmenu';
import Link from 'next/link';
import { FaEdit, FaTimesCircle } from 'react-icons/fa';

export default function VisualizarDispositivo() {
  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/GlobalJava/api/dispositivo`)
      .then(resp => resp.json())
      .then(resp => setDispositivos(resp))
      .catch(error => console.error(error))
  }, [])


  const handleDelete = (idDispositivo) => {
    if (idDispositivo) {
      fetch(`http://localhost:8080/GlobalJava/api/dispositivo/${idDispositivo}`, {
        method: 'DELETE'
      })
        .then(response => {
          console.log('Resposta do servidor:', response);
          return response.json();
        })
        .catch(error => console.error(error))
        .finally(() => {
          alert('Dispositivo Excluido com Sucesso!')
          window.location.reload();
        });
    } else {
      alert('idDispositivo indefinido. Não é possível excluir.');
    }
  }

  return (
    <main>
      <section className="dispositivo-visualizar">
        <div className="dispositivo-img">
          <h2>Dispositivos Cadastrados</h2>
          <img src="/image/visu_disp.png" alt="Ver dispositivos" />
          <BotaoVoltarMenu />
        </div>
        <div className="dispositivo-table">
          <table>
            <thead>
              <tr>
                <th>ID do Dispositivo</th>
                <th>Versão</th>
                <th>Status</th>
                <th>Cor</th>
                <th>Data de Fabricação</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {dispositivos.map((dispositivo) => (
                <tr key={dispositivo.idDispositivo}>
                  <td>{dispositivo.idDispositivo}</td>
                  <td>{dispositivo.versao}</td>
                  <td>{dispositivo.status}</td>
                  <td>{dispositivo.cor}</td>
                  <td>{dispositivo.dataFabricacao}</td>
                  <td>
                    <div className="btn-container">
                      <Link href="/portalcliente/dispositivo/atualizar/[idDispositivo]" as={`/portalcliente/dispositivo/atualizar/${dispositivo.idDispositivo}`}>
                        <button className="btn-metodo">
                          <FaEdit /> Editar Telefone
                        </button>
                      </Link>
                      <button onClick={handleDelete.bind(this, dispositivo.idDispositivo)} className='btn-metodo'>
                        <FaTimesCircle /> Exluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
