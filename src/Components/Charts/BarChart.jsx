import React from "react";
import Bar from "react-chartjs-2";
import { makeStyles } from '@material-ui/core'

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "All Deploys",
      backgroundColor: "#000099",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
      lineTenstion: 3
    }
  ]
};

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: props => props.color
  }
})





const BarChart = (props) => {
  const classes = useStyles(props)
  console.log(classes)
  return (
    // <div className={classes.root}>
      <Bar type="bar" data={data} width={100} height={50} />
    // </div>
  );
};

export default BarChart;
