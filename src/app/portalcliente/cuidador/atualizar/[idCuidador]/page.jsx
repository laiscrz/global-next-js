"use client"
import { useEffect, useState } from "react";
import '/src/app/portalcliente/opcoes.scss'
import Link from "next/link";


export default function AtualizarCuidador({ params }) {

    const idCuidador = params.idCuidador || '';

    const [novo, setNovo] = useState({
        telefone: '',
    });

    const [dadosAtuais, setDadosAtuais] = useState({
        idCuidador: params.idCuidador || '',
        nome: params.nome || '',
        genero: params.genero,
        endereco: params.endereco,
        cpf: params.cpf,
        telefone: params.telefone,
    });
    const handleChange = (e) => {
        setNovo({ ...novo, telefone: e.target.value });
    };


    useEffect(() => {
        console.log("ID do Cuidador:", idCuidador);
        if (idCuidador) {
            fetch(`http://localhost:8080/GlobalJava/api/cuidador/${idCuidador}`)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    setDadosAtuais(data);
                    setNovo({
                        telefone: data.telefone
                    });
                })
                .catch(error => console.error(error));
        }
    }, [idCuidador]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (novo.telefone.length < 9) {
            alert("O telefone do cuidador deve ter no máximo 9 dígitos. Ex. 912345678");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/GlobalJava/api/cuidador/${idCuidador}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ telefone: novo.telefone, idCuidador: idCuidador }),
            });

            if (response.ok) {
                alert('Telefone do cuidador atualizado com sucesso!');
                window.location = '/portalcliente/cuidador';
            } else {
                alert('Erro ao atualizar o telefone do cuidador.');
            }
        } catch (error) {
            console.error('Erro ao atualizar o telefone do cuidador:', error);
        }
    };

    return (
        <main>
            <div className="atualizar-container">

                <div className="dados-atuais">
                    <h2>Dado do Objeto Selecionado</h2>
                    <div className="dado-atual">
                        <div className="dado">
                            <span>ID do Cuidador:</span>
                            <p>{dadosAtuais.idCuidador}</p>
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
                                <label htmlFor="telefone">Novo Telefone:</label>
                                <input
                                    type="text"
                                    id="telefone"
                                    name="telefone"
                                    value={novo.telefone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="container-btn">
                            <button type="submit" className="btn-atualizar">Atualizar Telefone</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}