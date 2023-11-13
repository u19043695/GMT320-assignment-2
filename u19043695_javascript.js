//MAX % change from baseline
//bar chart 
//base line
// Timeline = 10 Months Jan - Oct
var maxData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [108, 102, 244, 341, 110, 35],
    name: 'Maximum Percent Change from Baseline',
    type: 'bar',
}];
// Add title 
var max_layout = {
    title: 'Maximum Percent Change from Baseline Jan to Oct 2022',
};
  
Plotly.newPlot('max', maxData, max_layout);

//MIN % change from baseline
//bar chart 
//base line
// Timeline = 10 Months Jan - Oct
var minData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [-45, -35, -44, -40, -74, 2],
    name: 'Minimum Percentage Change from Baseline',
    type: 'bar',
}];
// Add title   
var min_layout = {
    title: 'Minimum Percentage Change from Baseline Jan to Oct 2022',
};
  
Plotly.newPlot('min', minData, min_layout);

//AVE % change from baseline
//bar chart 
//base line
// Timeline = 10 Months Jan - Oct
var averageData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [25.93, 40.35, 74.41, 48.95, 22.98, 13.69],
    name: 'c',
    type: 'bar',
}];
// Add title   
var average_layout = {
    title: 'Maximum Percent Change from Baseline Jan to Oct 2022',
};
  
Plotly.newPlot('average', averageData, average_layout);



