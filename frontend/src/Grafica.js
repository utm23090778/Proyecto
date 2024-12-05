import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Grafica = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Obtener los datos para la gráfica
    axios.get('http://localhost:4000/get-answers-to-chart')
      .then(response => {
        const data = response.data;
        const chart = {
          labels: ['Siempre', 'A veces', 'Rara vez', 'Nunca'],
          datasets: [
            {
              label: 'Respuestas',
              data: data, // Los datos obtenidos desde el backend
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
        setChartData(chart);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la gráfica:', error);
      });
  }, []);

  return (
    <div>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>Cargando gráfica...</p>
      )}
    </div>
  );
};

export default Grafica;
