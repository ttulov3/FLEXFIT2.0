import React from 'react';
import imagem from '../../assets/img'
import './agenda.css';

function Agenda() {
  return (
    <div>
      <header>
        <button className="voltar"><a href="../Home/home.html"><img src="../../assets/img/voltar.png" alt="voltar"></a></button>
        <p className="flex">FLEX</p><p>FIT</p>
      </header>
      <main>
        <div className="titulo"><p className="letradiferente">SUA AGENDA DE</p><p>AULAS</p></div>
        <a href="../Horarios/Aparkour.html"><div className="container" id="parkour">AULA DE <p>PARKOUR</p></div></a>
        <a href="../Horarios/Afitdance.html"><div className="container" id="fitdance">AULA DE <p>FITDANCE</p></div></a>
        <a href="../Horarios/Apilates.html"><div className="container" id="pilates">AULA DE <p>PILATES</p></div></a>
        <a href="../Horarios/Across.html"><div className="container" id="cross">AULA DE <p>CROSS</p></div></a>
        <a href="../Horarios/Alocal.html"><div className="container" id="local">AULA DE <p>LOCAL</p></div></a>
        <a href="../Horarios/Amuaythai.html"><div className="container" id="muaythai">AULA DE <p>MUAYTHAI</p></div></a>
        <a href="../Horarios/Akickboxing.html"><div className="container" id="kickboxing">AULA DE <p>KICKBOXING</p></div></a>
        <a href="../Horarios/Ajiujitsu.html"><div className="container" id="jiujitsu">AULA DE <p>JIUJITSU</p></div></a>
      </main>
      <footer>
        <button><a href="../Home/home.html"><img src="../../assets/img/casa.png" alt="casa"></a></button>
        <button><a href="../Agenda/agenda.html"><img src="../../assets/img/agenda.png" alt="agenda"></a></button>
        <button><a href="../Tabela/tabela.html"><img src="../../assets/img/halter.png" alt="halter"></a></button>
        <button><a href="../Perfil/perfil.html"><img src="../../assets/img/perfil.png" alt="perfil"></a></button>
      </footer>
    </div>
  );
}
