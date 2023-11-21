"use client"
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";
import '/src/app/portalcliente/opcoes.scss'


export default function VisualizarManutencao(){

    const [manutencoes, setManutencoes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/manutencao`)
            .then(resp => resp.json())
            .then(resp => setManutencoes(resp))
            .catch(error => console.error(error))
    }, [])



    return(
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