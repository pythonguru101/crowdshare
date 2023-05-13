import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./RadialBarChart.css";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  chartBox: {
    height: "100%",
    width: "100%",
  },
});
const ApexChart = () => {
  const classes = useStyle();
  const [options] = useState({
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "13%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["gray", "#0084ff", "#39539E", "#0077B5", "purple"],
    labels: ["Netflix", "Other", "Youtube", "Http", "Amazon Video"],
    legend: {
      show: true,
      floating: true,
      fontSize: "12px",
      position: "left",
      offsetX: 70,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 380,
        options: {
          legend: {
            
            offsetX: 20,
            offsetY: -10,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          legend: {
            show: true,
            floating: true,
            fontSize: "10px",
            position: "left",
            offsetX: 40,
            offsetY: -20,
            labels: {
              useSeriesColors: true,
            },
          },
        },
      },
      {
        breakpoint: 800,
        options: {
          legend: {
            show: true,
            floating: true,
            fontSize: "10px",
            position: "left",
            offsetX: 200,
            offsetY: 10,
            labels: {
              useSeriesColors: true,
            },
          },
        },
      },
      {
        breakpoint: 899,
        options: {
          legend: {
            show: true,
            floating: true,
            fontSize: "10px",
            position: "left",
            offsetX: 270,
            offsetY: 10,
            labels: {
              useSeriesColors: true,
            },
          },
        },
      },
      {
        breakpoint: 850,
        options: {
          legend: {
            offsetX: 230,
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 750,
        options: {
          legend: {
            offsetX: 160,
            offsetY: 10,
          },
        },
      },
      {
        breakpoint: 650,
        options: {
          legend: {
            offsetX: 100,
            offsetY: 10,
          },
        },
      },
      {
        breakpoint: 1100,
        options: {
          chart: {
            height: 380,
            // type: "radialBar",
          },
          legend: {
            show: true,
            floating: true,
            fontSize: "10px",
            position: "left",
            offsetX: 30,
            offsetY: 20,
            labels: {
              useSeriesColors: true,
            },
          },
        },
      },
    ],
  });

  const [series] = useState([98, 94, 61, 40, 30]);
  const matches = useMediaQuery("(max-width:400px)");
  return (
    <Box className={classes.chartBox} id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={matches ? 260 : 460}
      />
    </Box>
  );
};

export default ApexChart;
