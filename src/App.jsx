import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import ImagenCardFront from '../src/assets/images/bg-card-front.png';
import ImagenCardBack from '../src/assets/images/bg-card-back.png';
import ImagenDesktop from '../src/assets/images/bg-main-desktop.png';
import Formulario from '../src/components/Formulario';


const Contenedor = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%; 
  height: 100vh;
`

const ImgenFront = styled.img`
  max-width:390px;
  width: 80%;
  display: block;
  float: right;
  margin-right: -80px;
  margin-top: 39%;
  margin-bottom: 6%;
  background-color: transparent;
  -webkit-box-shadow: 4px 3px 26px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 3px 26px -2px rgba(0,0,0,0.75);
  box-shadow: 4px 3px 26px -2px rgba(0,0,0,0.75);
  border-radius:5px;
  position: static;
`
const ImgenBack = styled.img`
  position: static;
  max-width:390px;
  width: 80%;
  display: block;
  float: right;
  margin-right: -400px;
  margin-top: 89%;
  margin-bottom: 6%;
  background-color: transparent;
  -webkit-box-shadow: 4px 3px 26px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 3px 26px -2px rgba(0,0,0,0.75);
  box-shadow: 4px 3px 26px -2px rgba(0,0,0,0.75);
  border-radius:10px;
`


const RowLeft = styled.div`
  background-image: url(${ImagenDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  display:inline-table;
`

const RowRight = styled.div`
  width:70%; 
  display:inline-table;
`

function App() { 

  const [datos, setDatos] = useState([]);
  
  return (
    <Contenedor>
      <span className="numberCard">{ datos.length != 0 ? datos.numero : '0000 0000 0000 0000' }</span>
      <span className="nameCard">  { datos.length != 0  ? datos.nombre : 'Jane Appleseed'}</span>
      <span className="dateCard">  { datos.length != 0  ? `${datos.mes}/${datos.anio}` : '00/00' }</span>
      <span className="codeCard">  { datos.length != 0  ? datos.cvc : '000'}</span>
      <RowLeft>  
       <ImgenFront 
          src={ImagenCardFront}
          alt='Tarjeta Frontal'
        />
        <ImgenBack 
          src={ImagenCardBack}
          alt='Tarjeta Atras'
        />
        </RowLeft>
      <RowRight>        
        <Formulario 
          setDatos={setDatos}
        />
      </RowRight>
    </Contenedor>
  )
}

export default App
