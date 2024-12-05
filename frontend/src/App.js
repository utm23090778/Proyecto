
import { Card, Container, Form, Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [formulario, setFormulario] = useState({});
  const [answers, setAnswers] = useState({});
  const [isEnabled, setIsEnabled] = useState(true);

  const questionnaire = {
    preguntas: [
      "¿El profesor muestra interés en el progreso de los estudiantes?",
      "¿El profesor utiliza diferentes métodos de enseñanza?",
      "¿El profesor es accesible para resolver dudas?",
      "¿El profesor fomenta la participación en clase?",
      "¿El profesor explica los conceptos de manera clara?",
      "¿El profesor brinda retroalimentación adecuada sobre el desempeño académico?",
      "¿El profesor se comunica de manera efectiva con los estudiantes?",
      "¿El profesor maneja adecuadamente el tiempo durante las sesiones?",
      "¿El profesor demuestra un dominio claro de los temas que imparte?",
      "¿El profesor utiliza herramientas tecnológicas para mejorar el aprendizaje?",
      "¿El profesor fomenta un ambiente de respeto en el aula?",
      "¿El profesor organiza actividades para fomentar el trabajo en equipo?",
      "¿El profesor aborda temas relacionados con valores y ética profesional?",
      "¿El profesor se preocupa por el bienestar emocional de los estudiantes?",
      "¿El profesor promueve la autonomía en el aprendizaje?",
      "¿El profesor está disponible fuera de clase para resolver dudas?",
      "¿El profesor utiliza ejemplos prácticos y relacionados con la realidad?",
      "¿El profesor fomenta la curiosidad y el pensamiento crítico?",
      "¿El profesor evalúa el aprendizaje de manera justa y transparente?",
      "¿El profesor es puntual en sus clases y compromisos?"
    ],
    opciones: ["Siempre", "A veces", "Rara vez", "Nunca"]
  };

  const onChange = (e) => {
    const obj = { ...answers };
    obj[e.target.name] = e.target.value;
    setAnswers(obj);

    const formObj = { ...formulario };
    formObj[e.target.name] = e.target.value;
    setFormulario(formObj);

    if (
      formObj.email && formObj.email !== "" &&
      formObj.StudentName && formObj.StudentName !== "" &&
      formObj.Last_name && formObj.Last_name !== ""
    ) {
      setIsEnabled(false);
    }
  };

  const onSubmit = async () => {
    const questionsUnanswered = [];
    questionnaire.preguntas.forEach((_, i) => {
      if (!answers[`pregunta_${i}`]) {
        questionsUnanswered.push(i + 1);
      }
    });

    if (questionsUnanswered.length > 0) {
      Swal.fire(
        "Oops!, parece que faltan preguntas por contestar",
        `Preguntas sin responder: ${questionsUnanswered.join(', ')}`,
        "error"
      );
      return;
    }

    Swal.fire("Enviando respuestas...");
    Swal.showLoading();

    // Cambiar a los campos que espera el backend
    const dataToSend = {
      Name: formulario.StudentName,    // Cambiar a `Name`
      Last_name: formulario.Last_name, // Asegúrate de que `Last_name` esté en `formulario`
      Email: formulario.email,         // Cambiar a `Email`
      ...answers // Aquí van las respuestas
    };

    try {
      await axios.post("http://localhost:4000/save-answers", dataToSend);
      Swal.fire("Respuestas guardadas con éxito", "", "success").then(() =>
        window.location.reload()
      );
    } catch (error) {
      console.error(error); // Ver los detalles del error en la consola
      Swal.fire(
        "Oops!, ocurrió un error al guardar tus respuestas",
        error.message || "Error desconocido",
        "error"
      );
    }
  };

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Body>
          <Card.Title>Formulario para la Evaluación de Tutores</Card.Title>

          {/* Información del Alumno */}
          <Card className='mt-3'>
            <Card.Body>
              <h5>Información del alumno que evalúa (campos obligatorios)</h5>
              <Form.Group className='mb-3'>
                <Form.Label>Correo institucional del alumno</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                  value={formulario.email || ""}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  name="StudentName"
                  placeholder="Nombre completo del estudiante"
                  value={formulario.StudentName || ""}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Apellido del alumno</Form.Label>
                <Form.Control
                  name="Last_name"
                  placeholder="Apellido del estudiante"
                  value={formulario.Last_name || ""}
                  onChange={onChange}
                />
              </Form.Group>
              <h6>
                La información proporcionada será de uso informativo y no se dará a conocer la identidad del alumno.
              </h6>
              <h6>¡Llena completamente el cuestionario y responde a conciencia!</h6>
            </Card.Body>
          </Card>

          {/* Preguntas */}
          {questionnaire.preguntas.map((pregunta, index) => (
            <Card className='mt-3' key={index}>
              <Card.Body>
                <Form.Label>{pregunta}</Form.Label>
                {questionnaire.opciones.map((opcion, i) => (
                  <Form.Check
                    key={i}
                    type="radio"
                    label={opcion}
                    name={`pregunta_${index}`}
                    value={opcion}
                    onChange={onChange}
                  />
                ))}
              </Card.Body>
            </Card>
          ))}

          <div className="mt-3">
            <Button
              disabled={isEnabled}
              variant="outline-success"
              onClick={onSubmit}
            >
              Enviar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
