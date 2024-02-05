import React from 'react';
import Header from '../../components/header';
import HomePresentation from '../../components/homePresentation';
import GraduationInfo from '../../components/graduationInfo';

//IMPORTANDO O CSS
// import ''

function Home() {
    return (
      <section className="App">
        <Header />
        
        <HomePresentation />

        <GraduationInfo />

      </section>
    );
  }
  
export default Home;