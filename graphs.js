// Add global namespace
var GLB = GLB || {};

// Function to load the google graph API
function initLineGraph(){
	// Load Line graph, callback function once libraries are ready
	google.load('visualization', '1.0', {'packages':['line'], 'callback':function(){drawLineGraph()}});
}

// Function to initialise & draw the speed Pie Chart
function drawLineGraph() {
		  
	GLB.lineDataA = google.visualization.arrayToDataTable([
      ['Time', 'X-Axis', 'Y-Axis'],
      [0,0.500,0.400],
	  [1,0.400,0.400],
	  [2,0.300,0.400],
	  [3,0.200,0.400],
	  [4,0.100,0.100],
	  [5,0.000,-0.900],
	  [6,-0.100,-0.800],
	  [7,-0.500,-0.700],
	  [8,-0.800,-0.800],
    ]);

	GLB.lineDataB = google.visualization.arrayToDataTable([
      ['Time', 'X-Axis', 'Y-Axis'],
      [0,0.530,-0.400],
	  [1,0.400,-0.400],
	  [2,0.600,-0.400],
	  [3,0.700,-0.400],
	  [4,0.800,-0.100],
	  [5,0.900,0.900],
	  [6,0.100,0.800],
	  [7,0.500,0.700],
	  [8,0.800,0.800],
    ]);

	GLB.lineOptions = {
	  title: 'G-Forces',
	  titleTextStyle: {color: 'white', fontSize: 20, fontName: 'Roboto'},
	  hAxis: {
	    baselineColor: 'transparent',
	    gridlines: {
	      count: 0,
	    },
	    viewWindow: {min:0, max:(GLB.dataPoints-1)},
	  },
	  legend: 'none',
	  vAxis: {
	    baselineColor: 'white',
	    maxValue: 1,
	    minValue: -1,
	    gridlines: {
	      count: 0,
	    },
	  },

	  // Set area of the chart within containing div (use full space)
	  chartArea: {left:0,top:0,width:'100%',height:'100%'},

	  backgroundColor: '#6f6fcc',
	  series: {
	    0:{color: '#f2f4f6', visibleInLegend: true},
	    1:{color: '#c4e4ee', visibleInLegend: true}
	  },
	};

	GLB.lineGraphA = new google.charts.Line($("#dataSetAChart")[0]);
	GLB.lineGraphB = new google.charts.Line($("#dataSetBChart")[0]);

	// Draw Line Graph
	GLB.lineGraphA.draw(GLB.lineDataA, GLB.lineOptions);
	GLB.lineGraphB.draw(GLB.lineDataB, GLB.lineOptions);
}

