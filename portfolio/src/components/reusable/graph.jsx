import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import 'chartjs-plugin-datalabels'; // Import datalabels plugin

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function Graph({ project }) {
  // Filter out technologies with development time of 0
  const filteredTechnologies = project.technologies.filter(
    (tech) => tech.developmentTime !== 0
  );

  // Prepare chart data with filtered technologies
  const chartLabels = [];
  const chartDataValues = [];
  filteredTechnologies.forEach((tech) => {
    chartLabels.push(tech.name);
    chartDataValues.push(tech.developmentTime);
  });

  const colors = [
    "rgba(17, 95, 154, 0.65)",
    "rgba(29, 131, 202, 0.65)",
    "rgba(34, 143, 218, 0.65)",
    "rgba(43, 167, 250, 0.65)",
    "rgba(72, 181, 196, 0.65)",
    "rgba(118, 198, 143, 0.65)",
    "rgba(166, 215, 91, 0.65)",
    "rgba(201, 229, 47, 0.65)",
    "rgba(208, 238, 17, 0.65)",
    "rgba(217, 246, 0, 0.65)",
    "rgba(226, 248, 0, 0.65)",
    "rgba(34, 119, 186, 0.65)",
    "rgba(29, 95, 154, 0.65)",
    "rgba(17, 131, 95, 0.65)",
    "rgba(29, 167, 43, 0.65)",
  ];

  // Prepare chart data with filtered technologies
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Usage of technology (in %)",
        data: chartDataValues,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace("0.65", "1")),
        borderWidth: 1.25,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 30,
      },
      margin: {
        bottom: 30,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      datalabels: { // Enable datalabels plugin
        display: true, // Display data values
        color: 'white', // Set font color to white
      },
    },
    scales: {
      r: {
        display: false,
      },
    },
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ width: "550px", height: "550px" }}
    >
      <PolarArea data={chartData} options={options} />
    </motion.div>
  );
}
