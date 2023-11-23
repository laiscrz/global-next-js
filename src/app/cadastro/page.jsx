"use client"
import '/src/app/cadastro/cadastro.scss'
import Link from "next/link";
import { useState } from "react";

export default function Cadastro() {
    const [cliente, setCliente] = useState({
        idCliente: gerarId(),
        nome: '',
        genero: '',
        endereco: '',
        cpf: '',
        email: '',
        senha: '',
        idDispositivo: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cliente.cpf.length !== 14) {
            alert("O CPF do cliente deve ter exatamente 14 dígitos. Ex. 123.456.789-10");
            return;
        }

        if (cliente.senha.length !== 8) {
            alert("A senha deve ser 8 caracteres.");
            return;
        }

        if (cliente.idDispositivo.length !== 5) {
            alert("O IdDispositivo deve conter exatamente 5 caracteres.");
            return;
        }


        try {
            const response = await fetch(`http://localhost:8080/GlobalJava/api/cliente`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cliente),
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                sessionStorage.setItem('loginClient', JSON.stringify(cliente));
                window.location = '/portalcliente';
            } else {
                alert("Erro ao realizar o cadastro.");
            }
        } catch (error) {
            console.error("Erro ao realizar o cadastro:", error);
        }
    };

    const handleChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    // Ao cliente se cadastrar, é gerado um IdCliente
    function gerarId() {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let id = '';

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters.charAt(randomIndex);
        }

        return id;
    }

    return (
        <main className="main-cadastro">
            <div className="cadastro">
                <div className="cadastro-img">
                    <img src="/image/cadastro.png" alt="Image Ilustrativa Cadastro" />
                </div>
                <div className="cadastro-box">
                    <h2>Criar Conta</h2>
                    <p>
                        Já é Cadastrado? <Link href={'/login'}>LOGIN</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" name="nome" id="nome" required onChange={handleChange} />
                            </div>
                            <div className="cadastro-input">
                                <label htmlFor="genero">Gênero</label>
                                <select name="genero" id="genero" defaultValue="" required onChange={handleChange}>
                                    <option value="" disabled hidden>Selecione o gênero</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="endereco">Endereco</label>
                                <input type="text" name="endereco" id="endereco" required onChange={handleChange} />
                            </div>
                            <div className="cadastro-input">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name="cpf" id="cpf" required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" required onChange={handleChange} />
                            </div>
                            <div className="cadastro-input">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" id="senha" required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="idDispositivo">ID do Dispositivo</label>
                                <input type="text" name="idDispositivo" id="idDispositivo" required onChange={handleChange} />
                                <p className="p-dispositivo">Que está presente na caixa.</p>
                            </div>
                        </div>
                        <div className="cadastro-btn">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
