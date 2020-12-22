import React from 'react';
import PropTypes from 'prop-types';
// Chart
import { Line } from 'react-chartjs-2';

const AppChart = ({
    title,
    dataset,
    labels,
    borderColor = `rgba(0, 0, 0, 1)`,
    backgroundColor = `rgba(0, 0, 0, 0.5)`
}) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: title,
            fill: true,
            lineTension: 0,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: dataset
          }
        ]
      };

    return (
        <Line data={data} />
    );
}

AppChart.propTypes = {
    title: PropTypes.string,
    dataset: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default AppChart;