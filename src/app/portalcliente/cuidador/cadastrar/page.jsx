"use client"
import BotoesOpcoes from '@/components/botoesopcoes';
import '/src/app/portalcliente/opcoes.scss'
import { useState } from "react";

export default function CadastrarCuidador() {
    const [cuidador, setCuidador] = useState({
        idCuidador: gerarId(),
        nome: '',
        genero: '',
        endereco: '',
        cpf: '',
        telefone: ''
    });

    // Ao cuidador se cadastrar, é gerado um IdCuidador
    function gerarId() {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let id = '';

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters.charAt(randomIndex);
        }

        return id;
    }

    const handleChange = (e) => {
        setCuidador({ ...cuidador, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (cuidador.telefone.length !== 9) {
            alert("O telefone do cuidador deve ter 9 dígitos. Ex. 912345678");
            return;
        }

       
        if (cuidador.cpf.length !== 14) {
            alert("O CPF do cuidador deve ter exatamente 14 dígitos. Ex. 123.456.789-10");
            return;
        }


        try {
            const response = await fetch(`http://localhost:8080/GlobalJava/api/cuidador`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cuidador),
            });

            if (response.ok) {
                alert('Cadastro do cuidador realizado com sucesso!');
                window.location = '/portalcliente';
            } else {
                alert('Erro ao realizar o cadastro do cuidador.');
            }
        } catch (error) {
            console.error('Erro ao realizar o cadastro do cuidador:', error);
        }
    };

    return (
        <main>
            <section className="cuidador-cadastro">
                <div className="cuidador-img">
                    <img src="/image/cadastrar_cuid.png" alt="Cadastro de Cuidador" />
                </div>
                <div className="cuidador-box">
                    <h2>Cadastre o seu cuidador</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="cuidador-input">
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" name="nome" id="nome" required onChange={handleChange} />
                            </div>
                            <div className="cuidador-input">
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
                            <div className="cuidador-input">
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" name="endereco" id="endereco" required onChange={handleChange} />
                            </div>
                            <div className="cuidador-input">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name="cpf" id="cpf" required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="cuidador-input">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text" name="telefone" id="telefone" required onChange={handleChange} />
                            </div>
                        </div>
                        <BotoesOpcoes />
                    </form>
                </div>
            </section>
        </main>
    );
}