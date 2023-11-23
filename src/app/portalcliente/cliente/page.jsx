"use client"
import BotaoVoltarMenu from '@/components/botaovoltarmenu';
import '/src/app/portalcliente/opcoes.scss'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientesDados() {
    const [login, setLogin] = useState(null);
    const [novo, setNovo] = useState({
        endereco: '',
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLogin = JSON.parse(
                sessionStorage.getItem('loginClient')
            );
            setLogin(storedLogin);
        }
    }, []);

    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:8080/GlobalJava/api/cliente/${login.idCliente}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ endereco: novo.endereco, idCliente: login.idCliente }),
                }
            );

            if (response.ok) {
                alert('Endereço do cliente atualizado com sucesso!');
                console.log('Dados antes da atualização:', login, novo);
                sessionStorage.setItem('loginClient', JSON.stringify({ ...login, endereco: novo.endereco }));
                window.location = '/portalcliente/cliente';
            } else {
                alert('Erro ao atualizar o endereço do cliente.');
            }
        } catch (error) {
            console.error('Erro ao atualizar o endereço do cliente:', error);
        }
    };

    if (!login) {
        return null;
    }

    return (
        <main>
            <div className="atualizar-container">
                <div className="dados-atuais">
                    <h2>Dado do Objeto Selecionado</h2>
                    <div className="dado-atual">
                        <div className="dado">
                            <span>Seu ID Cliente:</span>
                            <p>{login.idCliente}</p>
                        </div>
                        <div className="dado">
                            <span>Nome:</span>
                            <p>{login.nome}</p>
                        </div>
                    </div>
                    <div className="dado-atual">
                        <div className="dado">
                            <span>Gênero:</span>
                            <p>{login.genero}</p>
                        </div>
                        <div className="dado">
                            <span>Endereço:</span>
                            <p>{login.endereco}</p>
                        </div>
                    </div>
                    <div className="dado-atual">
                        
                        <div className="dado">
                            <span>CPF:</span>
                            <p>{login.cpf}</p>
                        </div>
                        <div className="dado">
                            <span>Senha:</span>
                            <p>{login.senha}</p>
                        </div>
                    </div>
                    <div className="dado-atual">
                       
                    </div>

                </div>
                <div className="atualizar-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Dados Para Atualizar</h2>
                        <div className="input-group">
                            <div className="atualizar-input">
                                <label htmlFor="endereco">Novo Endereço :</label>
                                <input
                                    type="text"
                                    id="endereco"
                                    name="endereco"
                                    value={novo.endereco}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="container-btn">
                            <button type="submit" className="btn-atualizar">Atualizar Endereco</button>
                        </div>
                        <BotaoVoltarMenu/>
                    </form>
                </div>
            </div>
        </main>
    );
}