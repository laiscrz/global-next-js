"use client"
import Link from "next/link";
import { useState } from "react";

export default function Cabecalho() {

    const [menuAtivo, setMenuAtivo] = useState(false);

    const handleMenuClick = () => {
        setMenuAtivo(!menuAtivo);
    };



     return (
        <header className={`cabecalho ${menuAtivo ? 'menu-ativo' : ''}`}>
            <nav className="navigation">
                <img src="/image/InovaX_Care_Logoo.png" alt="Logo da Inova-X Care" className="logo" />
                <ul className={`menu-link ${menuAtivo ? 'ativo' : ''}`}>
                    <li className="nav-item"><Link href={'/'}>Home</Link></li>
                    <li className="nav-item"><Link href={'/solucao'}>Solução</Link></li>
                    <li className="nav-item"><Link href={'/sobre'}>Sobre</Link></li>
                </ul>
                <div className="menu" onClick={handleMenuClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}