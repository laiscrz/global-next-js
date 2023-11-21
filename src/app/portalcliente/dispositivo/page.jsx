"use client"
import { useEffect, useState } from 'react';
import '/src/app/portalcliente/opcoes.scss';
import BotaoVoltarMenu from '@/components/botaovoltarmenu';

export default function VisualizarDispositivo() {
  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dispositivo`)
        .then(resp => resp.json())
        .then(resp => setDispositivos(resp))
        .catch(error => console.error(error))
}, [])

  return (
    <main>
      <section className="dispositivo-visualizar">
        <div className="dispositivo-img">
          <h2>Dispositivos Cadastrados</h2>
          <img src="/image/visu_disp.png" alt="Ver dispositivos" />
          <BotaoVoltarMenu/>
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
                  <td>Opções</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
