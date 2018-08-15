import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graph = ({ links }) => {
  const numberOfWebsites = links.reduce((acc, val) => {
    if (val.statusCode === 200) {
      acc[0]++;
    }
    else if (val.statusCode === 404) {
      acc[1]++
    }
    return acc;
  }, [0, 0]);

  console.log(numberOfWebsites)
  const data = {
    labels: ['Operational', 'Non-operational'],
    datasets: [
      {
        label: 'Number of websites',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [...numberOfWebsites, 0]
      }
    ]
  };

  return (
    <div>
      <h2>Results</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}

export default Graph;
