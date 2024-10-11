import logo from './logo.svg';
import { Card, Container, Form, Row,Col,Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';


function App() {
  const [encuesta,setEncuesta]=useState({});
  const [isEnable,setisEnable]=useState(true);
  
  const onChange =(e)=>{
    e.preventDefault();
    const objeto = encuesta;
    objeto[e.target.name] = e.target.value;
    setEncuesta(objeto)

    if ((encuesta.pregunta1 && encuesta.pregunta1 !== "") && (encuesta.pregunta2 && encuesta.pregunta2 !== "")
       && (encuesta.pregunta3 && encuesta.pregunta3 !== "") && (encuesta.pregunta4 && encuesta.pregunta4 !== "")
       && (encuesta.pregunta5 && encuesta.pregunta5 !== "") && (encuesta.pregunta6 && encuesta.pregunta6 !== "")
       && (encuesta.pregunta7 && encuesta.pregunta7 !== "") && (encuesta.pregunta8 && encuesta.pregunta8 !== "")
       && (encuesta.pregunta9 && encuesta.pregunta9 !== "") && (encuesta.pregunta10 && encuesta.pregunta10 !== "")
       && (encuesta.pregunta11 && encuesta.pregunta11 !== "") && (encuesta.pregunta12 && encuesta.pregunta12 !== "")
       && (encuesta.pregunta13 && encuesta.pregunta13 !== "") && (encuesta.pregunta14 && encuesta.pregunta14 !== "")
       && (encuesta.pregunta15 && encuesta.pregunta15 !== "") && (encuesta.pregunta16 && encuesta.pregunta16 !== "")
       && (encuesta.pregunta17 && encuesta.pregunta17 !== "") && (encuesta.pregunta18 && encuesta.pregunta18 !== "")
       && (encuesta.pregunta19 && encuesta.pregunta19 !== "") && (encuesta.pregunta20 && encuesta.pregunta20 !== ""))
    {
      setisEnable(false)
    }
  }
  return (
    <Container>

<Card>
        <Card.Body>
          <Card.Title>
            Lee con atencion.
          </Card.Title>
         
          <Form>
            <Form.Group>
            <Form.Label> El siguiente cuestionario puede ser respondido con las siguientes respuestas.</Form.Label>
            <Form.Label> A.- Siempre</Form.Label>
            <Form.Label> B.- A veces</Form.Label>
            <Form.Label> C.- Rara vez</Form.Label>
            <Form.Label> D.- Nunca</Form.Label>
            <Form.Label> Marca tu respuesta ingresando la letra correspondiente entre A,B,C y D.</Form.Label>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>


      <Card>
        <Card.Body>
          <Card.Title>
            Encuesta sobre los maestros.
          </Card.Title>
         
          <Form>
            <Form.Group>
            <Form.Label> ¿El profesor muestra interés en el progreso de los estudiantes? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta1" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> El profesor utiliza diferentes métodos de enseñanza? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta2" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor es accesible para resolver dudas? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta3" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor fomenta la participación en clase? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta4" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor explica los conceptos de manera clara? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta5" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor es puntual en las clases?
            </Form.Label>
            <Form.Control onChange={onChange} name="pregunta6" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor respeta las opiniones de los estudiantes?
            </Form.Label>
            <Form.Control onChange={onChange} name="pregunta7" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            valoresV
            <Form.Group>
            <Form.Label> ¿El profesor proporciona retroalimentación constructiva? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta8" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor crea un ambiente de aprendizaje positivo? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta9" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor está actualizado en su materia? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta10" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor establece expectativas claras?
            </Form.Label>
            <Form.Control onChange={onChange} name="pregunta11" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor motiva a los estudiantes a aprender? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta12" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor maneja bien el tiempo durante la clase? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta13" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            valores<Form.Group>
            <Form.Label> ¿El profesor se preocupa por el bienestar emocional de los estudiantes? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta14" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor fomenta el trabajo en equipo? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta15" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor utiliza recursos didácticos variados? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta16" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor maneja adecuadamente la disciplina en clase? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta17" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor es amable y respetuoso con los estudiantes? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta18" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor adapta su enseñanza a las necesidades de los estudiantes? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta19" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>
            <Form.Group>
            <Form.Label> ¿El profesor fomenta el pensamiento crítico entre los estudiantes? </Form.Label>
            <Form.Control onChange={onChange} name="pregunta20" placeholder='ingresa un valor entre A,B,C,D'/>
            </Form.Group>

            <Button disabled={isEnable}>Enviar!</Button>
            

          </Form>
        </Card.Body>
      </Card>

    </Container>

    
  );
}

export default App;

