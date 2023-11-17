
import Link from 'next/link'
import './pagehome.scss'


export default function Home() {
  return (
    <main className='home'>
      <div className='home-text'>
        <h4 className='text-h4'> Bem Vindo, Inova - X Care</h4>
        <h1 className='text-h1'>Conheça o LifeCare!</h1>
        <p>Um relógio de saúde, monitorando constantemente os sinais vitais do paciente, alertando para qualquer anomalia e garantindo cuidados imediatos.</p>
        <Link href={'/solucao'} className='btn-conheca'>Conheça</Link>
      </div>
      <div className='home-img'>
        <img src='/image/lifecare_img.jpg' alt='Relogio LifeCare' />
      </div>
    </main>
  )
}
