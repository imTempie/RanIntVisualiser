function array() {
  document.querySelector("#chartReport").innerHTML =
    '<canvas id="chart"></canvas>';

  let result = new Array(100);
  result = result.fill(0).map(() => Math.floor(Math.random() * 100));
  //result.sort(function(a, b){
  //  return a - b;
  //});
  console.log(result);

  let data = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: result[0],
            y: result[1],
          },
          {
            x: result[2],
            y: result[3],
          },
          {
            x: result[4],
            y: result[5],
          },
          {
            x: result[6],
            y: result[7],
          },
          {
            x: result[8],
            y: result[9],
          },
          {
            x: result[10],
            y: result[11],
          },
          {
            x: result[12],
            y: result[13],
          },
          {
            x: result[14],
            y: result[15],
          },
          {
            x: result[16],
            y: result[17],
          },
          {
            x: result[18],
            y: result[19],
          },
          {
            x: result[20],
            y: result[21],
          },
          {
            x: result[23],
            y: result[24],
          },
          {
            x: result[25],
            y: result[26],
          },
          {
            x: result[27],
            y: result[28],
          },
          {
            x: result[29],
            y: result[30],
          },
          {
            x: result[31],
            y: result[32],
          },
          {
            x: result[33],
            y: result[34],
          },
          {
            x: result[35],
            y: result[36],
          },
          {
            x: result[37],
            y: result[38],
          },
          {
            x: result[39],
            y: result[40],
          },
          {
            x: result[41],
            y: result[42],
          },
          {
            x: result[43],
            y: result[44],
          },
          {
            x: result[45],
            y: result[46],
          },
          {
            x: result[47],
            y: result[48],
          },
          {
            x: result[49],
            y: result[50],
          },
          {
            x: result[51],
            y: result[52],
          },
          {
            x: result[53],
            y: result[54],
          },
          {
            x: result[55],
            y: result[56],
          },
          {
            x: result[57],
            y: result[58],
          },
          {
            x: result[59],
            y: result[60],
          },
          {
            x: result[61],
            y: result[62],
          },
          {
            x: result[63],
            y: result[64],
          },
          {
            x: result[65],
            y: result[66],
          },
          {
            x: result[67],
            y: result[68],
          },
          {
            x: result[69],
            y: result[70],
          },
          {
            x: result[71],
            y: result[72],
          },
          {
            x: result[73],
            y: result[74],
          },
          {
            x: result[75],
            y: result[76],
          },
          {
            x: result[77],
            y: result[78],
          },
          {
            x: result[79],
            y: result[80],
          },
          {
            x: result[81],
            y: result[82],
          },
          {
            x: result[83],
            y: result[84],
          },
          {
            x: result[85],
            y: result[86],
          },
          {
            x: result[87],
            y: result[88],
          },
          {
            x: result[89],
            y: result[90],
          },
          {
            x: result[91],
            y: result[92],
          },
          {
            x: result[93],
            y: result[94],
          },
          {
            x: result[96],
            y: result[97],
          },
          {
            x: result[98],
            y: result[99],
          },
        ],
        backgroundColor: "rgb(55, 99, 255)",
      },
    ],
  };

  const config = {
    type: "scatter",
    data: data,
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
    },
  };

  const chart = new Chart(document.getElementById("chart"), config);
}
