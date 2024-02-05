import React, { useEffect, useState } from 'react';

// IMPORTANDO O CSS
import './hp.css';

function HomePresentation() {
  const habilidades = ["Sou web Designer!", "Sou programador Backend - Node.JS!", "Sou Cientista de Dados!", "Amo estatística!"];
  let intervaloEntreLetras = 100;
  let intervaloEntreFrases = 3000;

  const [indiceHabilidade, setIndiceHabilidade] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [textoHabilidade, setTextoHabilidade] = useState('');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (indiceHabilidade === habilidades.length) {
        setIndiceHabilidade(0);
      } else {
        if (indiceLetra < habilidades[indiceHabilidade].length) {
          setTextoHabilidade((prevText) => prevText + habilidades[indiceHabilidade][indiceLetra]);
          setIndiceLetra((prevIndex) => prevIndex + 1);
        } else {
            clearInterval(intervalId);
          setTimeout(() => {
            setIndiceHabilidade((prevIndex) => prevIndex + 1);
            setIndiceLetra(0);
            setTextoHabilidade("");
          }, intervaloEntreFrases);
        }
      }
    }, intervaloEntreLetras);

    return () => clearInterval(intervalId);
  }, [indiceHabilidade, indiceLetra, habilidades, intervaloEntreLetras, intervaloEntreFrases]);


  return (
    <section className="App hp">
      <div className='me'>
        <p className='name'>Olá, me chamo Gabriel!</p>
        <h2>{textoHabilidade}</h2>
        <p className='text'>
          Sou graduando em ciência da computação pela UFCG.
          Me dedico a trabalhar em projetos ágeis nos quais
          a entrega contínua e o bom desempenho são primordiais.
        </p>
      </div>
    </section>
  );
}

export default HomePresentation;
