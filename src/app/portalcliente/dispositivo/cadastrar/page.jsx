"use client"

import { useState } from 'react';
import '/src/app/portalcliente/opcoes.scss';
import BotoesOpcoes from '@/components/botoesopcoes';

export default function CadastrarDispositivo() {
  const [dispositivo, setDispositivo] = useState({
    idDispositivo: '',
    versao: '',
    status: '',
    cor: '',
    dataFabricacao: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDispositivo((prevDispositivo) => ({
      ...prevDispositivo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/GlobalJava/api/dispositivo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dispositivo),
      });

      if (response.ok) {
        alert('Cadastro de dispositivo realizado com sucesso!');
        window.location = '/portalcliente';
      } else {
        alert('Erro ao realizar o cadastro de dispositivo.');
      }
    } catch (error) {
      console.error('Erro ao realizar o cadastro de dispositivo:', error);
    }
  };

  return (
    <main>
      <section className="dispositivo-cadastro">
        <div className="dispositivo-img">
          <img src="/image/cadastrar_disp.png" alt="Cadastro de Novo Dispositivo" />
        </div>
        <div className="dispositivo-box">
          <h2>Cadastre o seu dispositivo</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="dispositivo-input">
                <label htmlFor="idDispositivo">ID do Dispositivo</label>
                <input
                  type="text"
                  name="idDispositivo"
                  id="idDispositivo"
                  value={dispositivo.idDispositivo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="dispositivo-input">
                <label htmlFor="versao">Versão</label>
                <input
                  type="text"
                  name="versao"
                  id="versao"
                  value={dispositivo.versao}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="dispositivo-input">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  name="status"
                  id="status"
                  value={dispositivo.status}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="dispositivo-input">
                <label htmlFor="cor">Cor</label>
                <input
                  type="text"
                  name="cor"
                  id="cor"
                  value={dispositivo.cor}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="dispositivo-input">
                <label htmlFor="dataFabricacao">Data de Fabricação</label>
                <input
                  type="text"
                  name="dataFabricacao"
                  id="dataFabricacao"
                  value={dispositivo.dataFabricacao}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <BotoesOpcoes />
          </form>
        </div>
      </section>
    </main>
  );
}
