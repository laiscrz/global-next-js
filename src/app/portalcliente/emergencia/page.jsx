"use client"
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";
import '/src/app/portalcliente/opcoes.scss'
import { FaTimesCircle } from "react-icons/fa";


export default function VisualizarEmergencia() {

    const [emergencias, setEmergencias] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/GlobalJava/api/emergencia`)
            .then(resp => resp.json())
            .then(resp => setEmergencias(resp))
            .catch(error => console.error(error))
    }, [])


    const handleDelete = (idServico) => {
        if (idServico) {
            fetch(`http://localhost:8080/GlobalJava/api/emergencia/${idServico}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .catch(error => console.error(error))
                .finally(() => {
                    alert('Serviço de Emergencia Excluido com Sucesso!')
                    window.location.reload();
                });
        } else {
            alert('idServico indefinido. Não é possível excluir.');
        }
    }

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
                                    <td>
                                        <div className="btn-container">
                                            <button onClick={handleDelete.bind(this, emergencia.idServico)} className='btn-metodo'>
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