"use client"
import { useEffect, useState } from "react";
import '/src/app/portalcliente/opcoes.scss'
import Link from "next/link";

export default function AtualizarDispositivo({params}) {

    const idDispositivo = params.idDispositivo || '';

    const [novo, setNovo] = useState({
        versao: '',
    });

    const [dadosAtuais, setDadosAtuais] = useState({
        idDispositivo: params.idDispositivo || '',
        versao: params.versao || '',
        status: params.status,
        cor: params.cor,
        dataFabricacao: params.dataFabricacao
    });

    const handleChange = (e) => {
        setNovo({ ...novo, versao: e.target.value });
    };

    useEffect(() => {
        console.log("ID do Dispositivo:", idDispositivo);
        if (idDispositivo) {
            fetch(`http://localhost:8080/GlobalJava/api/dispositivo/${idDispositivo}`)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    setDadosAtuais(data);
                    setNovo({
                        versao: data.versao
                    });
                })
                .catch(error => console.error(error));
        }
    }, [idDispositivo]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/GlobalJava/api/dispositivo/${idDispositivo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ versao: novo.versao, idDispositivo: idDispositivo }),
            });

            if (response.ok) {
                alert('Versão do Dispositivo atualizada com sucesso!');
                window.location = '/portalcliente/dispositivo';
            } else {
                alert('Erro ao atualizar a versão do dispositivo.');
            }
        } catch (error) {
            console.error('Erro ao atualizar a versão do dispositivo:', error);
        }
    };

    return (
        <main>
            <div className="atualizar-container">

                <div className="dados-atuais">
                    <h2>Dado do Objeto Selecionado</h2>
                    <div className="dado-atual">
                        <div className="dado">
                            <span>ID do Dispositivo:</span>
                            <p>{dadosAtuais.idDispositivo}</p>
                        </div>
                    </div>
                    <Link href={'/portalcliente/cuidador'}>
                        <div className="container-btn">
                            <button className="btn-atualizar">Voltar para Página Anterior</button>
                        </div>
                    </Link>

                </div>
                <div className="atualizar-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Dados Para Atualizar</h2>
                        <div className="input-group">
                            <div className="atualizar-input">
                                <label htmlFor="versao">Nova Versão:</label>
                                <input
                                    type="text"
                                    id="versao"
                                    name="versao"
                                    value={novo.versao}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="container-btn">
                            <button type="submit" className="btn-atualizar">Atualizar Versão</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}