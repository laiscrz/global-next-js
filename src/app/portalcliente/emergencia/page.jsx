"use client"
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";
import '/src/app/portalcliente/opcoes.scss'


export default function VisualizarEmergencia() {

    const [emergencias, setEmergencias] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/emergencia`)
            .then(resp => resp.json())
            .then(resp => setEmergencias(resp))
            .catch(error => console.error(error))
    }, [])


    return (
        <main>
            <section className="emergencia-visualizar">
                <div className="emergencia-img">
                    <h2>Historico de Serviços de Emergência</h2>
                    <img src="/image/visu_emerg.png" alt="Ver Historico de emergencia" />
                    <BotaoVoltarMenu />
                </div>
                <div className="emergencia-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID do Servico de Emergência</th>
                                <th>Tipo do Serviço</th>
                                <th>Tipo de Emergência</th>
                                <th>Médico Responsável</th>
                                <th>Gravidade</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emergencias.map((emergencia) => (
                                <tr key={emergencia.idServico}>
                                    <td>{emergencia.idServico}</td>
                                    <td>{emergencia.tipoServico}</td>
                                    <td>{emergencia.tipoEmergencia}</td>
                                    <td>{emergencia.medicoResponsavel}</td>
                                    <td>{emergencia.gravidade}</td>
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