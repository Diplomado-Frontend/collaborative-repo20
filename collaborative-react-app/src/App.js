import logo from './logo.svg';
import './App.css';
import SectionComp from './components/Section';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <SectionComp name="Juan Ayala" 
                     description="Ingeniero de sistemas con experiencia en desarrollo de aplicaciones web con lenguajes: c#, node.js, javascript.
                     Actualmente trabajo como ingeniero Backend en Node.js. "
                     githubLink="https://github.com/IngJuanAyala" />
        
        <SectionComp name="Wisthong David Martinez Castro" 
                     description="Estudiante de Ingeniera de Sistemas,tengo conocimientos de Angular 2 y apasionado por aprender."
                     githubLink="" />

        <SectionComp name="Jesús Yancy" 
                     description="Docente y estudiante de Ciencias Sociales con algunos conocimientos en
                     Python y ciencia de datos.
                     Tengo un gran interés en los temas orientados al uso del desarrollo back-end y 
                     front-end para el análisis de datos y soluciones a través de estas herramientas."
                     githubLink="" />

        <SectionComp name="Sandra Bustillo" 
                     description="prueba"
                     githubLink="" />

        
        <SectionComp name="Luis Enrique Chavez" 
                     description="Profesional en administración de empresas, sin embargo en medio de las experiencia empecé a tener gran contacto
                     con la parte de sistemas y de software, por ése tiempo salió una convocataria de MinTIC para capacitar programadores, y desde
                     allí me nació el gusto por lo relacionado al desarrollo web."
                     githubLink="" />
     
      </header>
    </div>

  );
}

export default App;
