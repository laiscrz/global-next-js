"use client"
import Link from 'next/link'
import '/src/app/login/login.scss'
import { useEffect, useState } from 'react';



export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [listaClientes, setListaClientes] = useState([]);
    const [erroLogin, setErroLogin] = useState(false);

    useEffect(() => {
        
        fetch('http://localhost:8080/GlobalJava/api/cliente/') 
            .then(response => response.json())
            .then(clientes => setListaClientes(clientes))
            .catch(error => console.error('Erro ao obter lista de clientes:', error));
    }, []);

    const handleLogin = () => {
        
        const clienteEncontrado = listaClientes.find(
            (cliente) => cliente.email === email && cliente.senha === senha
        );

        if (clienteEncontrado) {
            
            sessionStorage.setItem('loginClient', JSON.stringify(clienteEncontrado));
            alert('Login bem-sucedido!');
            window.location = '/portalcliente';
        } else {
            
            setErroLogin(true);
        }
    };



    return (
        <main className='main-login'>
        <div className='login'>
            <div className='login-text'>
                <h2>Login Rápido para uma <br /> Experiência Personalizada</h2>
                <img src='/image/login.png' alt='Foto Login' className='login-img' />
            </div>
            <div className='login-form'>
                <div className='login-card'>
                    <h2>LOGIN</h2>
                    <div className='login-input'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='login-input'>
                        <label htmlFor='senha'>Senha</label>
                        <input
                            type='password'
                            name='senha'
                            placeholder='Senha'
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button className='btn-login' onClick={handleLogin}>
                        Entrar
                    </button>
                    {erroLogin && <p className='erro-login'>Email e/ou senha inválidos.</p>}
                    <p className='cadastre-se'>
                        Não tem conta? <Link href={'/cadastro'}>Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </div>
    </main>
    )
}