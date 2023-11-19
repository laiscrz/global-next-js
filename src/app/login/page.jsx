import Link from 'next/link'
import '/src/app/login/login.scss'



export default function Login() {
    return (
        <main className='main-login'>
            <div className="login">
                <div className="login-text">
                    <h2>Login Rápido para uma <br /> Experiência Personalizada</h2>
                    <img src="/image/login.png" alt="Foto Login" className='login-img'/>
                </div>
                <div className="login-form">
                    <div className="login-card">
                        <h2>LOGIN</h2>
                        <div className="login-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="login-input">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="senha" />
                        </div>
                        <button className="btn-login">Entrar</button>
                        <p className='cadastre-se'>Não tem conta? <Link href={'/cadastro'}>Cadastre-se</Link></p>
                    </div>
                </div>

            </div>
        </main>
    )
}