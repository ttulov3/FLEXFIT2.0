import React from 'react';
import './home.css';

function Home() {
  return (
    <div>
      <header>
        <p className="flex">FLEX</p><p>FIT</p>
      </header>
      <main>
        <div></div>
      </main>
      <footer>
        <button><a href="home.html"><img src="../../assets/img/casa.png" alt="casa"/></a></button>
        <button><a href="../Agenda/agenda.html"><img src="../../assets/img/agenda.png" alt="agenda"/></a></button>
        <button><a href="../Tabela/tabela.html"><img src="../../assets/img/halter.png" alt="halter"/></a></button>
        <button><a href="../Perfil/perfil.html"><img src="../../assets/img/perfil.png" alt="perfil"/></a></button>
      </footer>
    </div>
  );
}
