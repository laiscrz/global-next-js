import Link from "next/link";


export default function BotaoVoltarMenu() {
    return (
        <div className="container-btn">
            <button><span><Link href={'/portalcliente'}>Voltar ao Menu</Link></span></button>
        </div>
    )
}