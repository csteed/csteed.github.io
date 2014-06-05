function create_tweet_spark (labels, data, div_id) {
    var width = 1600,
        height = 500;
     
    //var m = 5, // number of series
    //    n = 90; // number of values
     
    // Generate random data into five arrays.
    //var plotData = d3.range(m).map(function() {
    //  return d3.range(n).map(function() {
    //    return Math.random() * 100 | 0;
    //  });
    //});

    /*
    var pData = [ [],[],[],[],[],[],[] ];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            console.log(key + " -> " + " " + data[key].languages);
            pData[0].push(data[key].count);
            pData[1].push(data[key].retweets_count);
            pData[2].push(data[key].geolocations.length);
            //pData[0].push(100 * (data[key].languages.en / data[key].count));
            //pData[1].push(100 * (data[key].languages.es / data[key].count));
            pData[3].push(data[key].languages.en);
            pData[4].push(data[key].languages.es);
            pData[5].push(data[key].languages.ja);
            pData[6].push(data[key].languages.ar);
        }
    }
    */

    //console.log("m = " + plotData.length + " n = " + plotData[0].length);
    console.log("m = " + data.length + " n = " + data[0].length);

    var m = data.length;
    var n = data[0].length;

    var plotHeight = height / m;

    var x = d3.scale.linear()
        .domain([0, n - 1])
        .range([0, width]);
    
    var plotY = d3.scale.linear()
        .domain([0,5000])
        .range([0, plotHeight]);

    var y = d3.scale.ordinal()
        .domain(d3.range(m))
        .rangePoints([0, height], 1);
     
    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
     
    var area = d3.svg.area()
        .interpolate("basis")
        .x(function(d, i) { return x(i); })
        .y0(function(d) { return /*-d / 2*/ -plotY(d) / 2; })
        .y1(function(d) { return /*d / 2*/   plotY(d) / 2; });
     
    var svg = d3.select(div_id).append("svg")
        .attr("width", width)
        .attr("height", height);
     
    svg.selectAll("path")
        .data(data)
      .enter().append("path")
        .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; })
        .style("fill", function(d, i) { return color(i); })
        .attr("d", area);
}
