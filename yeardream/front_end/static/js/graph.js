Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
  
var button_layer_2_height = 1.2
var high = unpack(rows, 'AAPL.High').map(x => parseFloat(x))
var low = unpack(rows, 'AAPL.Low').map(x => parseFloat(x))
var date = unpack(rows, 'Date')


var high_ave = arrAvg(high)
var high_max = Math.max(...high)
var low_ave = arrAvg(low)
var low_min = Math.min(...low)

var data = [{
    x: date, 
    y: high,
    mode: 'lines',
    name: 'High',
    marker: {color: '#33CFA5'}
  },
  {
    x: date, 
    y: date.map(a => high_ave),
    mode: 'lines',
    name: 'Low Average',
    line: {color: '#33CFA5', dash: 'dash'},
    visible: false
  },
  {
    x: date, 
    y: low,
    name: 'Low',
    mode: 'lines',
    marker: {color: '#F06A6A'}
  },
  {
    x: date, 
    y: date.map(a => low_ave),
    mode: 'lines',
    name: 'High Average',
    visible: false,
    line: {color: '#F06A6A', dash: 'dash'}
  },
  
]

var high_annotations = [
    {
      text: 'High Average:<br>' + high_ave.toFixed(2), 
      x: '2016-03-01', 
      y: high_ave, 
      yref: 'y', xref: 'x', 
      ay: -40, ax: 0
    },
    {
      text: 'High Max:<br>' + high_max.toFixed(2), 
      x: date[high.indexOf(high_max)], 
      y: high_max, 
      yref: 'y', xref: 'x', 
      ay: -40, ax: 0
    },  
]

var low_annotations = [{
      text: 'Low Average:<br>' + low_ave.toFixed(2), 
      x: '2015-05-01', 
      y: low_ave, 
      yref: 'y', xref: 'x', 
      ay: 40, ax: 0
    },
    {
      text: 'Low Min:<br>' + low_min.toFixed(2), 
      x: date[low.indexOf(low_min)], 
      y: low_min, 
      yref: 'y', xref: 'x', 
      ay: 40, ax: 0
    }
 ]

var updatemenus=[
    {
        buttons: [   
            {
                args: [{'visible': [true, true, false, false]},
                       {'title': 'Yahoo High',
                        'annotations': high_annotations}],
                label: 'High',
                method: 'update'
            },
            {
                args: [{'visible': [false, false, true, true,]},
                       {'title': 'Yahoo Low',
                        'annotations': low_annotations}],
                label: 'Low',
                method: 'update'
            },
            {
                args: [{'visible': [true, true, true, true,]},
                       {'title': 'Yahoo',
                        'annotations': [...low_annotations, ...high_annotations]}],
                label: 'Both',
                method: 'update'
            },
            {
                args: [{'visible': [true, false, true, false,]},
                       {'title': 'Yahoo',
                        'annotations': []}],
                label: 'Reset',
                method: 'update'
            },
            
        ],
        direction: 'left',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 0.1,
        xanchor: 'left',
        y: button_layer_2_height,
        yanchor: 'top' 
    },
    
]

var layout = {
    title: 'Yahoo',
    updatemenus: updatemenus,
    showlegend: false
}


Plotly.plot("myDiv", data, layout, {showSendToCloud: true});

});