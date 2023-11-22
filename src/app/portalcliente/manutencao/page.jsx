"use client"
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";
import '/src/app/portalcliente/opcoes.scss'
import { FaTimesCircle } from "react-icons/fa";


export default function VisualizarManutencao() {

    const [manutencoes, setManutencoes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/GlobalJava/api/manutencao`)
            .then(resp => resp.json())
            .then(resp => setManutencoes(resp))
            .catch(error => console.error(error))
    }, [])


    const handleDelete = (idServico) => {
        if (idServico) {
            fetch(`http://localhost:8080/GlobalJava/api/manutencao/${idServico}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .catch(error => console.error(error))
                .finally(() => {
                    alert('Serviço de Manutenção Excluido com Sucesso!')
                    window.location.reload();
                });
        } else {
            alert('idServico indefinido. Não é possível excluir.');
        }
    }

    return (
        <main>
            <section className="manutencao-visualizar">
                <div className="manutencao-img">
                    <h2>Historico de Serviços de Manutenção</h2>
                    <img src="/image/visu_manuten.png" alt="Ver Historico de manutencao" />
                    <BotaoVoltarMenu />
                </div>
                <div className="manutencao-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID do Servico de Manutenção</th>
                                <th>Tipo do Serviço</th>
                                <th>Data da Manutenção</th>
                                <th>Status</th>
                                <th>Custo</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manutencoes.map((manutencao) => (
                                <tr key={manutencao.idServico}>
                                    <td>{manutencao.idServico}</td>
                                    <td>{manutencao.tipoServico}</td>
                                    <td>{manutencao.dataManutencao}</td>
                                    <td>{manutencao.status}</td>
                                    <td>{manutencao.custo}</td>
                                    <td>
                                        <div className="btn-container">
                                            <button onClick={handleDelete.bind(this, manutencao.idServico)} className='btn-metodo'>
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