"use client"
import '/src/app/portalcliente/opcoes.scss'
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";

export default function VisualizarCuidador() {
    const [cuidadores, setCuidadores] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cuidador`)
        .then(resp => resp.json())
        .then(resp => setCuidadores(resp))
        .catch(error => console.error(error))
    }, [])



    return (
        <main>
            <section className="cuidador-visualizar">
                <div className="cuidador-img">
                    <h2>Cuidadores Cadastrados</h2>
                    <img src="/image/visu_cuid.png" alt="Ver cuidadores" />
                    <BotaoVoltarMenu />
                </div>
                <div className="cuidador-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID do Cuidador</th>
                                <th>Nome</th>
                                <th>Genero</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuidadores.map((cuidador) => (
                                <tr key={cuidador.id}>
                                    <td>{cuidador.idCuidador}</td>
                                    <td>{cuidador.nome}</td>
                                    <td>{cuidador.genero}</td>
                                    <td>{cuidador.cpf}</td>
                                    <td>{cuidador.telefone}</td>
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