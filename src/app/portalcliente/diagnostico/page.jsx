"use client"
import '/src/app/portalcliente/opcoes.scss'
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";
import { FaTimesCircle } from 'react-icons/fa';

export default function GerenciarDiagnostico() {
  const [diagnosticos, setDiagnosticos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/GlobalJava/api/diagnostico`)
      .then(resp => resp.json())
      .then(resp => setDiagnosticos(resp))
      .catch(error => console.error(error))
  }, [])


  const handleDelete = (idDiagnostico) => {
    if (idDiagnostico) {
      fetch(`http://localhost:8080/GlobalJava/api/diagnostico/${idDiagnostico}`, {
        method: 'DELETE'
      })
        .then(response => {
          console.log('Resposta do servidor:', response);
          return response.json();
        })
        .catch(error => console.error(error))
        .finally(() => {
          alert('Diagnostico Excluido com Sucesso!')
          window.location.reload();
        });
    } else {
      alert('idDiagnostico indefinido. Não é possível excluir.');
    }
  }


  return (
    <main>
      <section className="diagnostico-visualizar">
        <div className="diagnostico-img">
          <h2>Historicos de Diagnosticos</h2>
          <img src="/image/visu_diagnost.png" alt="Ver diagnostico" />
          <BotaoVoltarMenu />
        </div>
        <div className="diagnostico-table">
          <table>
            <thead>
              <tr>
                <th>ID do Diagnostico</th>
                <th>Estado Geral</th>
                <th>Sinais Vitais</th>
                <th>Sinais de Quedas</th>
                <th>ID Cuidador</th>
                <th>ID Servico</th>
                <th>ID Dispositivo</th>
                <th>Data de Solicitação</th>
                <th>Data de Emissão</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {diagnosticos.map((diagnostico) => (
                <tr key={diagnostico.idDiagnostico}>
                  <td>{diagnostico.idDiagnostico}</td>
                  <td>{diagnostico.estadoGeral}</td>
                  <td>{diagnostico.sinaisVitais}</td>
                  <td>{diagnostico.sinaisQueda}</td>
                  <td>{diagnostico.idCuidador}</td>
                  <td>{diagnostico.idServico}</td>
                  <td>{diagnostico.idDispositivo}</td>
                  <td>{diagnostico.dataSolicitacao}</td>
                  <td>{diagnostico.dataEmissao}</td>
                  <td>
                    <div className="btn-container">
                      <button onClick={handleDelete.bind(this, diagnostico.idDiagnostico)} className='btn-metodo'>
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
  )
}