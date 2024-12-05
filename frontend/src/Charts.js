
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Swal from 'sweetalert2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const [numberAnswers, setNumberAnswers] = useState([]);

  const getData = async () => {
    try {
      Swal.fire("Cargando...");
      Swal.showLoading();
      const { data } = await axios.get("http://localhost:4000/get-answers-to-chart");
      setNumberAnswers(data);
      Swal.close();
    } catch (error) {
      Swal.fire("Algo salió mal", error.message || "Error desconocido", "error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const data = {
    labels: ['Siempre', 'A veces', 'Rara vez', 'Nunca'],
    datasets: [
      {
        label: 'Respuestas',
        data: numberAnswers,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <div style={{ width: "300px", height: "300px", margin: "auto" }}>
            <Doughnut data={data} />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Charts;

