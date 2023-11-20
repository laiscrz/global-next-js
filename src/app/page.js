
import Link from 'next/link'
import './pagehome.scss'


export default function Home() {
  return (
    <main>
      <section className='home'>
        <div className='home-text'>
          <h4 className='text-h4'> Bem Vindo, Inova - X Care</h4>
          <h1 className='text-h1'>Conheça o LifeCare!</h1>
          <p>Um relógio de saúde, monitorando constantemente os sinais vitais do paciente, alertando para qualquer anomalia e garantindo cuidados imediatos.</p>
          <Link href={'/solucao'} className='btn-conheca'>Conheça</Link>
        </div>
        <div className='home-img'>
          <img src='/image/lifecare_img.jpg' alt='Relogio LifeCare' />
        </div>
      </section>
      <section className='vantagens-lifecare'>
        <div className='vantagens-title'>
          <span>Veja</span>
          <h2>Vantagens do LifeCare</h2>
          <div className='vantagens-container'>
            <div className='box'>
              <div className='box-img'>

                <img src='/image/vantagem_um.jpg' />

              </div>
              <h3>Monitoramento Contínuo</h3>
              <p>A capacidade de monitoramento constante dos sinais vitais, como frequência cardíaca e pressão arterial, contribui para a identificação precoce de problemas de saúde. </p>

            </div>
            <div className='box'>
              <div className='box-img'>

                <img src='/image/vantagem_dois.png' />

              </div>
              <h3>Geolocalização</h3>
              <p>A integração da geolocalização ajuda a rastrear a localização do idoso em situações de emergência, melhorando ainda mais a eficácia da resposta.</p>

            </div>
            <div className='box'>
              <div className='box-img'>

                <img src='/image/vantagem_tres.jpg' />

              </div>
              <h3>Design Acessível e Confortável</h3>
              <p>Seu design é pensado para atender às preferências estéticas e ergonômicas do público idoso, garantindo que o uso diário seja agradável e sem complicações </p>

            </div>
          </div>


        </div>
      </section>
    </main>
  )
}
