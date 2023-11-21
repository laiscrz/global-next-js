"use client"
import '/src/app/portalcliente/opcoes.scss'
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";

export default function GerenciarDiagnostico() {
    const [diagnosticos, setDiagnosticos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/diagnostico`)
            .then(resp => resp.json())
            .then(resp => setDiagnosticos(resp))
            .catch(error => console.error(error))
    }, [])





    return (
        <main>
            <section className="diagnostico-visualizar">
        <div className="diagnostico-img">
          <h2>Historicos de Diagnosticos</h2>
          <img src="/image/visu_diagnost.png" alt="Ver diagnostico" />
          <BotaoVoltarMenu/>
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
                  <td>Opções</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
        </main>
    )
}