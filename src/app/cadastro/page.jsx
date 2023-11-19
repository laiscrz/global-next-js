import Link from "next/link";
import '/src/app/cadastro/cadastro.scss'


export default function Cadastro() {
    return (
        <main className="main-cadastro">
            <div className="cadastro">
                <div className="cadastro-img">
                    <img src="/image/cadastro.png" alt="Image Ilustrativa Cadastro" />
                </div>
                <div className="cadastro-box">
                    <h2>Criar Conta</h2>
                    <p>Ja é Cadastrado ? <Link href={'/login'}>LOGIN</Link></p>
                    <form>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" name="nome" id="nome" required />

                            </div>
                            <div className="cadastro-input">
                                <label htmlFor="genero">Gênero</label>
                                <select name="genero" id="genero" defaultValue="" required>
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
                                <input type="text" name="endereco" id="endereco" required />

                            </div>
                            <div className="cadastro-input">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name="cpf" id="cpf" required />

                            </div>
                        </div>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" required />

                            </div>
                            <div className="cadastro-input">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" id="senha" required />

                            </div>
                        </div>
                        <div className="input-group">
                            <div className="cadastro-input">
                                <label htmlFor="idDispositivo">ID do Dispositivo</label>
                                <input type="text" name="idDispositivo" id="idDispositivo" required />
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
    )
}