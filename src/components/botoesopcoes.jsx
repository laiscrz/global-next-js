import Link from "next/link";


export default function BotoesOpcoes() {
    return (
        <div className="container-btn">
            <button><span><Link href={'/portalcliente'}>Voltar ao Menu</Link></span></button>
            <button type="submit">Cadastrar</button>
        </div>
    )
}