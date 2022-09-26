import { useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import useInput from '../hooks/useInput';
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #21092f;
    padding:10px;
    border: none;
    width: 50%;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size:20px;
    border-radius:5px;
    transition: background-color .3s ease;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;

    &:hover{
        background-color: #300a45;
        cursor: pointer;
    }
`

const Form = styled.form`
    padding-top:100px;
`
const Contenedor = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: 80px 80px 450px */
  
`

const Formulario = ({setDatos}) => {   

    const [numero, setNumero] = useState('');
    const [nombre, setNombre] = useState('');
    const [mes, setMes] = useState('');
    const [anio, setAnio] = useState('');
    const [cvc, setCvc] = useState('');

    const [error, setError] = useState(false);
 

    const handleSubmit = (e) => {

        e.preventDefault();

        // VALIDACION DEL FORMULARIO
        if([numero, nombre, mes, anio, cvc].includes('')){
            setError(true);
            return;
        }
        setError(false);

        // CREAR OBJETO DATOS TARJETA 

        const objetoTajeta = {
            numero, 
            nombre, 
            mes, 
            anio, 
            cvc
        }

        setDatos(objetoTajeta);
    }
    
    return (
        <>
            
            <Form             
                onSubmit={handleSubmit}>                
                {error && <Error>Todos los campos son obligatorios</Error>}
                <Header/>
                <label>CARDHOLERD NAME</label>
                <input 
                    className="inputText" 
                    type="text"
                    placeholder="e.g Jane Appleseed"  
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                />
                <label>CARD NUMBER</label>
                <input 
                    className="inputText" 
                    type="text"
                    placeholder="e.g 1234 5678 9123 0000"
                    value={numero}
                    onChange={(e)=> setNumero(e.target.value)}
                />
                <label>EXP. DATE (MM/YY) CVC</label>
                <Contenedor>                
                    <input 
                        className="inputText row_exp" 
                        type="text"
                        placeholder="MM" 
                        value={mes}
                        onChange={(e)=> setMes(e.target.value)}
                    />
                    <input 
                        className="inputText row_date" 
                        type="text"
                        placeholder="YY" 
                        value={anio}
                        onChange={(e)=> setAnio(e.target.value)}
                    />
                    <input 
                        className="inputText row_cvc" 
                        type="text"
                        placeholder="e.g 123" 
                        value={cvc}
                        onChange={(e)=> setCvc(e.target.value)}
                    />
                </Contenedor>
                <InputSubmit 
                    type="submit" 
                    value="Confirm"
                />
            </Form>
        </>
    );
    
}

export default Formulario;