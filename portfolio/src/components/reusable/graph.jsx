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
import "chartjs-plugin-datalabels"; // Import datalabels plugin
import { useTranslation } from "react-i18next";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function Graph({ project }) {
  const { t } = useTranslation(["project", "projects"]);

  // Filter out technologies with development time of 0
  const technologies = t(`project.${project.key}.technologies`, {
    returnObjects: true,
  });

  let filteredTechnologies = [];
  if (Array.isArray(technologies)) {
    filteredTechnologies = technologies.filter(
      (tech) => tech.developmentTime !== 0
    );
  }
  // Prepare chart data with filtered technologies
  const chartLabels = [];
  const chartDataValues = [];
  filteredTechnologies.forEach((tech) => {
    if (tech && tech.name) {
      chartLabels.push(tech.name);
      chartDataValues.push(tech.developmentTime);
    }
  });

  const colors = [
    "rgba(17, 95, 154, 0.65)",
    "rgba(17, 116, 185, 0.65)",
    "rgba(29, 126, 202, 0.65)",
    "rgba(29, 135, 210, 0.65)",
    "rgba(34, 150, 218, 0.65)",
    "rgba(43, 167, 250, 0.65)",
    "rgba(72, 181, 196, 0.65)",
    "rgba(118, 198, 143, 0.65)",
    "rgba(166, 215, 91, 0.65)",
    "rgba(201, 229, 47, 0.65)",
    "rgba(208, 238, 17, 0.65)",
    "rgba(217, 246, 0, 0.65)",
    "rgba(226, 248, 0, 0.65)",
    "rgba(235, 252, 0, 0.65)",
    "rgba(244, 255, 0, 0.65)",
    "rgba(253, 255, 0, 0.65)",
  ];

  // Prepare chart data with filtered technologies
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `Rough estimate of time spent working with ${filteredTechnologies[0].name} (percentage)`,
        data: chartDataValues,
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.65", "1")),
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
      datalabels: {
        // Enable datalabels plugin
        display: true, // Display data values
        color: "white", // Set font color to white
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let techIndex = context.dataIndex;
            let techName = filteredTechnologies[techIndex].name;
            let percentage = chartDataValues[techIndex];
            return `Time spent working with ${techName} (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      r: {
        display: false,
      },
    },
  };

  return (
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 md:my-4">
        Time Spent Working with Technologies Overview
      </h3>
      <h5 className="text-sm text-gray-500 dark:text-gray-400">
        (Rough Estimate)
      </h5>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ width: "550px", height: "550px", margin: "0 auto" }}
      >
        <PolarArea data={chartData} options={options} />
      </motion.div>
    </div>
  );
}
