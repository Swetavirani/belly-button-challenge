
// Read in Samples.json using D3 library from the below URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
d3.json(url).then(function(data){console.log(data);});

// Create an array of samples data
let samples = Object.values(data.samples_values);
let labels = Object.values(data.otu_ids);


// Display the horizontal plot
let data = [{
    type: "bar",  
    values: samples,
    labels: labels,
    orientation : 'h'
}];
  

Plotly.newPlot("bar", data)
