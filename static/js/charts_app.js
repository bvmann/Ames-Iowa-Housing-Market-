//create plots from csv to load into page
// console.log("hello")

//median-finding function for charts
function median(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}
mediansobject = {
	Neighborhood: [],
	SalePrice: [],
	SaleType: [],
	LotConfig: [],
	LotArea: [],
	MSZoning: []
}
//read csv
d3.csv("static/js/train_allvalues.csv", function(data){
	console.log(data)
	for (var x in data){
		mediansobject.Neighborhood.push(data[x].Neighborhood)
		mediansobject.SalePrice.push(data[x].SalePrice)
		mediansobject.SaleType.push(data[x].SaleType)
		mediansobject.LotConfig.push(data[x].LotConfig)
		mediansobject.LotArea.push(data[x].LotArea)
		mediansobject.MSZoning.push(data[x].MSZoning)
	}
	console.log(mediansobject)
		var MSZoningTrace = [{
			type: 'bar',
			x: mediansobject.MSZoning,
			y: mediansobject.SalePrice,
			mode: 'markers',
			transforms: [{
				type: 'aggregate',
				groups: mediansobject.MSZoning,
				aggregations: [
					{target: 'y', func: 'median', enabled: true},
				]
				}]
			}]
			var layout = {
				title: {
				text: 'Median Prices by Zone'
			},
			xaxis: {
				title: {
					text: 'Zone Types'
				}
			},
			yaxis: {
				title: {
					text: "Price"
				}
			}
		};
		Plotly.newPlot('bar', MSZoningTrace, layout);
});

d3.select("#option1")
	.on("click", function() {
		d3.select("#responsivep").text("No Legend")
		fetch("static/js/N_writeup.txt")
		.then(response => response.text())
		.then((writeup) =>d3.select("#textreaderp").text(
			writeup
			))		
		d3.csv("train_allvalues.csv", function(data){
			console.log(data)
			for (var x in data){
				mediansobject.Neighborhood.push(data[x].Neighborhood)
				mediansobject.SalePrice.push(data[x].SalePrice)
				mediansobject.SaleType.push(data[x].SaleType)
				mediansobject.LotConfig.push(data[x].LotConfig)
				mediansobject.LotArea.push(data[x].LotArea)
				mediansobject.MSZoning.push(data[x].MSZoning)
			}
			var neighborhoodTrace = [{
				type: 'bar',
				x: mediansobject.Neighborhood,
				y: mediansobject.SalePrice,
				mode: 'markers',
				transforms: [{
					type: 'aggregate',
					groups: mediansobject.Neighborhood,
					aggregations: [
						{target: 'y', func: 'median', enabled: true},
					]
					}]
			}]	
				var layout = {
					title: {
					text: 'Median Prices by Neighborhood'
				},
				xaxis: {
					title: {
						text: 'Neighborhoods'
					}
				},
				yaxis: {
					title: {
						text: "Price"
					}
				}
			};
				Plotly.newPlot('bar', neighborhoodTrace, layout);
		});			
});
d3.select("#option2")
	.on("click", function() {
			fetch("static/js/Z_writeup.txt")
			.then(response => response.text())
			.then((writeup) =>d3.select("#textreaderp").text(
				writeup
				))		
		d3.select("#responsivep").text(
			"Legend: \n \n C: Commercial \n FV: Floating Village (Retirement Community) \n RH: Residential High Density \n RL: Residential Low Density \n RM: Residential Medium Density")
		d3.csv("train_allvalues.csv", function(data){
			console.log(data)
			for (var x in data){
				mediansobject.Neighborhood.push(data[x].Neighborhood)
				mediansobject.SalePrice.push(data[x].SalePrice)
				mediansobject.SaleType.push(data[x].SaleType)
				mediansobject.LotConfig.push(data[x].LotConfig)
				mediansobject.LotArea.push(data[x].LotArea)
				mediansobject.MSZoning.push(data[x].MSZoning)
			}
			var MSZoningTrace = [{
				type: 'bar',
				x: mediansobject.MSZoning,
				y: mediansobject.SalePrice,
				mode: 'markers',
				transforms: [{
					type: 'aggregate',
					groups: mediansobject.MSZoning,
					aggregations: [
						{target: 'y', func: 'median', enabled: true},
					]
					}]
				}]
				var layout = {
					title: {
					text: 'Median Prices by Zone'
				},
				xaxis: {
					title: {
						text: 'Zone Types'
					}
				},
				yaxis: {
					title: {
						text: "Price"
					}
				}
			};
			Plotly.newPlot('bar', MSZoningTrace, layout);
			
		});			
});
d3.select("#option3")
	.on("click", function() {
		fetch("static/js/S_writeup.txt")
			.then(response => response.text())
			.then((writeup) =>d3.select("#textreaderp").text(
				writeup
				))		
		d3.select("#responsivep").text(
			"Legend: \n \n WD: Warranty Deed - Conventional \nCWD: Warranty Deed - Cash \nNew: Home just constructed and sold \nCOD: Court Officer Deed/Estate \nCon: Contract 15% Down payment regular terms \nConLw: Contract Low Down payment and low interest \nConLI: Contract Low Interest \nConLD: Contract Low Down \nOth: Other"
		)
		d3.csv("train_allvalues.csv", function(data){
			console.log(data)
			for (var x in data){
				mediansobject.Neighborhood.push(data[x].Neighborhood)
				mediansobject.SalePrice.push(data[x].SalePrice)
				mediansobject.SaleType.push(data[x].SaleType)
				mediansobject.LotConfig.push(data[x].LotConfig)
				mediansobject.LotArea.push(data[x].LotArea)
				mediansobject.MSZoning.push(data[x].MSZoning)
			}
			var SaleTypeTrace = [{
				type: 'bar',
				x: mediansobject.SaleType,
				y: mediansobject.SalePrice,
				mode: 'markers',
				transforms: [{
					type: 'aggregate',
					groups: mediansobject.SaleType,
					aggregations: [
					  {target: 'y', func: 'median', enabled: true},
					]
				  }]
				}]
				var layout = {
					title: {
					text: 'Median Prices by Sale Type'
				},
				xaxis: {
					title: {
						text: 'Sale Types'
					}
				},
				yaxis: {
					title: {
						text: "Price"
					}
				}
			};
				Plotly.newPlot('bar', SaleTypeTrace, layout);
		});			
});
// d3.select("#option4")
// 	.on("click", function() {
// 	fetch"static/js/L_writeup.txt")
// 	.then(response => response.text())
// 	.then((writeup) =>d3.select("#textreaderp").text(
// 		writeup
// 		))		
// 		d3.select("#responsivep").text(
// 			"Legend: \n \nInside: Inside lot \n Corner: Corner Lot \nCulDSac: Cul-de-Sac \nFR2: Frontage on 2 sides \nFR3: Frontage on 3 sides" 
// 		)

// 		d3.csv("train_allvalues.csv", function(data){
// 			console.log(data)
// 			for (var x in data){
// 				mediansobject.Neighborhood.push(data[x].Neighborhood)
// 				mediansobject.SalePrice.push(data[x].SalePrice)
// 				mediansobject.SaleType.push(data[x].SaleType)
// 				mediansobject.LotConfig.push(data[x].LotConfig)
// 				mediansobject.LotArea.push(data[x].LotArea)
// 				mediansobject.MSZoning.push(data[x].MSZoning)
// 			}
// 			var LotConfigTrace = [{
// 				type: 'bar',
// 				x: mediansobject.LotConfig,
// 				y: mediansobject.SalePrice,
// 				mode: 'markers',
// 				transforms: [{
// 					type: 'aggregate',
// 					groups: mediansobject.LotConfig,
// 					aggregations: [
// 					  {target: 'y', func: 'median', enabled: true},
// 					]
// 				  }]
// 				}]
// 				var layout = {
// 				barmode: 'stack',

// 				title: {
// 				text: 'Median Prices by Lot Type'
// 			},
// 			xaxis: {
// 				title: {
// 					text: 'Zone Types'
// 				}
// 			},
// 			yaxis: {
// 				title: {
// 					text: "Price"
// 				}
// 			}
// 		};
// 		Plotly.newPlot('bar', MSZoningTrace, layout);
// 				Plotly.newPlot('bar', LotConfigTrace);
// 		});			
// });
d3.select("#option4")
	.on("click", function() {
		d3.select("#responsivep").text(
			"Legend: \n \nInside: Inside lot \n Corner: Corner Lot \nCulDSac: Cul-de-Sac \nFR2: Frontage on 2 sides \nFR3: Frontage on 3 sides" 
		)
		fetch("static/js/L_writeup.txt")
			.then(response => response.text())
			.then((writeup) =>d3.select("#textreaderp").text(
				writeup
				))		
		d3.csv("train_allvalues.csv", function(data){
			console.log(data)
			for (var x in data){
				mediansobject.Neighborhood.push(data[x].Neighborhood)
				mediansobject.SalePrice.push(data[x].SalePrice)
				mediansobject.SaleType.push(data[x].SaleType)
				mediansobject.LotConfig.push(data[x].LotConfig)
				mediansobject.LotArea.push(data[x].LotArea)
				mediansobject.MSZoning.push(data[x].MSZoning)
			}
			var LotConfigTrace = [{
				type: 'bar',
				x: mediansobject.LotConfig,
				y: mediansobject.SalePrice,
				mode: 'markers',
				transforms: [{
					type: 'aggregate',
					groups: mediansobject.LotConfig,
					aggregations: [
					  {target: 'y', func: 'median', enabled: true},
					]
				  }]
				}]
				var layout = {
					title: {
					text: 'Median Prices by Lot Type'
				},
				xaxis: {
					title: {
						text: 'Lot Types'
					}
				},
				yaxis: {
					title: {
						text: "Price"
					}
				}
			};
				Plotly.newPlot('bar', LotConfigTrace, layout);
		});			
});
d3.select("#option5")
	.on("click", function() {
		d3.select("#responsivep").text("No Legend")
		fetch("static/js/AvP_writeup.txt")
			.then(response => response.text())
			.then((writeup) =>d3.select("#textreaderp").text(
				writeup
				))		
		d3.csv("train_allvalues.csv", function(data){
			console.log(data)
			for (var x in data){
				mediansobject.Neighborhood.push(data[x].Neighborhood)
				mediansobject.SalePrice.push(data[x].SalePrice)
				mediansobject.SaleType.push(data[x].SaleType)
				mediansobject.LotConfig.push(data[x].LotConfig)
				mediansobject.LotArea.push(data[x].LotArea)
				mediansobject.MSZoning.push(data[x].MSZoning)
			}
			var AreaTrace = [{
				type: 'scatter',
				x: mediansobject.LotArea,
				y: mediansobject.SalePrice,
				mode: 'markers',
				}]
				var layout = {
					title: {
					text: 'Price vs. Area'
				},
				xaxis: {
					title: {
						text: 'Area (Sq. Ft)'
					}
				},
				yaxis: {
					title: {
						text: "Price"
					}
				}
			};
				Plotly.newPlot('bar', AreaTrace, layout);
		});			
});
