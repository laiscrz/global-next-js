import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";


export default function Rodape(){
    return(
        <footer className="rodape">
             <div className="repositorio-github">
                <p><Link href={'https://github.com/laiscrz/global-next-js'}><span><IoLogoGithub/></span> Vizualize o Repositório</Link></p>
            </div>
            <div>
            <p className="text-center">&copy; 2023 Inova-X Care. Todos os direitos reservados.</p>
            </div>
            <div className="integrantes">
                <h3>Integrantes:</h3>
                <p>Gustavo Marques Catelan- RM551823 -  Cargo : Desenvolvedor Backend em Python</p>
                <p>Lais Alves da Silva Cruz - RM552258 - Cargo : Desenvolvedora FrontEnd</p>
                <p>Lucas dos Santos Lopes - RM550790 - Cargo : Desenvolvedor Backend em Java</p>
                <p>Murilo Machado - RM550718 - Cargo : Desenvolvedor de Banco de Dados</p>
                <p>Victor Taborda Rodrigues - RM97900 -  Cargo : AI and ChatBot </p>
            </div>
           
        </footer>
    )
}