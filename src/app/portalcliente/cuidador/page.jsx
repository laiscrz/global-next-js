"use client"
import '/src/app/portalcliente/opcoes.scss'
import BotaoVoltarMenu from "@/components/botaovoltarmenu";
import { useEffect, useState } from "react";
import { FaEdit, FaTimesCircle } from 'react-icons/fa';

export default function VisualizarCuidador() {
    const [cuidadores, setCuidadores] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/GlobalJava/api/cuidador`)
            .then(resp => resp.json())
            .then(resp => setCuidadores(resp))
            .catch(error => console.error(error))
    }, [])


    const handleDelete = (idCuidador) => {
        if (idCuidador) {
            fetch(`http://localhost:8080/GlobalJava/api/cuidador/${idCuidador}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .catch(error => console.error(error))
                .finally(() => {
                    alert('Cuidador Excluido com Sucesso!')
                    window.location.reload();
                });
        } else {
            alert('idCuidador indefinido. Não é possível excluir.');
        }
    }

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
                                <tr key={cuidador.idCuidador}>
                                    <td>{cuidador.idCuidador}</td>
                                    <td>{cuidador.nome}</td>
                                    <td>{cuidador.genero}</td>
                                    <td>{cuidador.cpf}</td>
                                    <td>{cuidador.telefone}</td>
                                    <td>
                                        <div className="btn-container">
                                            <button className="btn-metodo">
                                                <FaEdit /> Editar Telefone
                                            </button>

                                            <button onClick={handleDelete.bind(this, cuidador.idCuidador)} className='btn-metodo'>
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