// import React from 'react'
// //
// import useChartConfig from 'hooks/useChartConfig'
// import Box from 'components/Box'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
// import { Chart } from 'react-chartsjs-2'
// let sourceCode
// export default function LineChart () {
//   const { data, randomizeData } = useChartConfig({
//     series: 10
//   })
//   const series = React.useMemo(
//     () => ({
//       showPoints: false
//     }),
//     []
//   )
//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'time', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )
//   return (
//     <>
//       <button onClick={randomizeData}>Randomize Data</button>
//       <br />
//       <br />
//       <Box>
//         <Chart data={data} series={series} axes={axes} tooltip />
//       </Box>
//       <br />
//       <SyntaxHighlighter code={sourceCode} />
//     </>
//   )
// }














import React from 'react'
import Line from 'react-chartjs-2'

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "New",
        // backgroundColor: "#000099",
        borderColor: "green",
        data: [20, 0, 5, 2, 20, 30, 45],
        lineTenstion: 10,
    },
    {
        label: "Old",
        // backgroundColor: "blue",
        borderColor: "red",
        data: [20, 30, 25, 22, 2, 32, 15],
        lineTenstion: 3
    },
]
  };

// const options = {
//     scales: {
//         yAxes: [{
//             stacked: true
//         }]
//     }
// }


const LineChart = () => {
    return (
        <>
        <Line type='line' data={data} 
        />

        </>
    )
}

export default LineChart