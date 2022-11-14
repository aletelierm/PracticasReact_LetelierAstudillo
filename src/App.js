
import './App.css';
import Footer from './componente/Footer/Footer';
import Header from './componente/Header/Header';
import Main from './componente/Main/Main';


function App() {
  const array = [
    {id: 1, nombre: 'Carlos', edad: 28, carrera: 'Diseño Garfico'},
    {id: 2, nombre: 'Josefa', edad: 30, carrera: 'Moda'},
    {id: 3, nombre: 'Marian', edad: 24, carrera: 'Arquitectura'},
    {id: 4, nombre: 'Tomas', edad: 18, carrera: 'Ingeniero'},
  ]
  return (
    <>
      <Header/>
      <Main array = {array}/>
      <Footer/>    
      
    </>
  )
}

export default App;
