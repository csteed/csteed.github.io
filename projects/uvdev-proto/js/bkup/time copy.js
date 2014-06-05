function create_month_time_plot (timedata, div_id, w, h) {
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    timedata.forEach(function(d) {
        console.log(d.date + ' ' + d.close);
    });
    data = timedata;

    var parseDate = d3.time.format("%d-%b-%y").parse;
 
    var x = d3.time.scale()
        .range([0, width]);
 
    var y = d3.scale.linear()
        .range([height, 0]);
 
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
 
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
 
    var line = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });
 
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
    //d3.tsv("./data/data.tsv", function(error, data) {
    //    data.forEach(function(d) {
    //        d.date = parseDate(d.date);
    //        d.close = +d.close;
    //        console.log(d.date + ' ' + d.close);
    //    });
 
        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.close; }));
 
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
 
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");
 
        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);
    //});
}

function create_time_plot (div_id, width, height) {

            var margin = {top: 20, right: 70, bottom: 20, left: 20},
                w=width-margin.left-margin.right,
                h=height-margin.top-margin.bottom;

            var dateParser = d3.time.format("%Y%m%d").parse;
            var dateOutput = d3.time.format("%b %e %Y");
            var bisectDate = d3.bisector(function(d){ return d.date; }).left;
            var xScale = d3.time.scale()
                .range([0,w]);
            var yScale = d3.scale.linear()
                .range([h,0]);

            var color = d3.scale.category10();

            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .ticks(d3.time.months, 1)
                //.tickFormat(d3.time.format('%Y %m'));
                .tickFormat(d3.time.format('%b-%Y'));

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");
            
            var line = d3.svg.line()
                .interpolate("basis")
                .x(function(d) { return xScale(d.date); })
                .y(function(d) { return yScale(d.temperature);} );
    
            var svg = d3.select("body")
                .append("svg")
                .attr("width",w+margin.left+margin.right)
                .attr("height",h+margin.top+margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            //d3.tsv("../data/time-series.tsv",function(error,data) {
                //console.log(data);
                color.domain(d3.keys(data[0]).filter(function(key) {return key
                !== "date"; }));
                data.forEach(function(d) {
                    d.date=dateParser(d.date);
                });

                var cities = color.domain().map(function(name) {
                    return {
                        name: name,
                        values: data.map(function(d) {
                            return { date: d.date, temperature: +d[name]};
                        })
                    };
                });
                xScale.domain(d3.extent(data, function(d) { return d.date; }));
                yScale.domain([ 0,
                    //d3.min(cities,function(c) { return d3.min(c.values,
                    //function(v) {return v.temperature; }); })-15,
                    d3.max(cities,function(c) { return d3.max(c.values,
                    function(v) {return v.temperature; }); })
                ]); 
                
                svg.append("g")
                    .attr("class","x axis")
                    .attr("transform", "translate(0," + h + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("x", -325)
                    .attr("dy", ".71em")
                    .style("text-anchor","end")
                    .text("Temperature (\u00B0F)");

                var city = svg.selectAll(".city")
                    .data(cities)
                    .enter()
                    .append("g")
                    .attr("class","city");

                city.append("path")
                    .attr("class","line")
                    .attr("d", function(d) { return line(d.values); })
                    .style("stroke", function(d) { return color(d.name); });

                var legend = svg.selectAll(".legend")
                    .data(color.domain())
                    .enter()
                    .append("g")
                    .attr("class","legend")
                    .attr("transform",function(d,i) { return "translate(0,"
                    +((i*20)+350) +")"; });

                legend.append("rect")
                    .attr("x",w-18)
                    .attr("width",18)
                    .attr("height",18)
                    .style("fill",color);

                legend.append("text")
                    .attr("x",w-24)
                    .attr("y",9)
                    .attr("dy", ".35em")
                    .style("text-anchor","end")
                    .text(function(d) {return d;});

                var focusA = svg.append("g")
                    .attr("class","focus")
                    .style("display","none");
                focusA.append("circle")
                    .attr("r",4.5);
                focusA.append("text")
                    .attr("x",9)
                    .attr("dy", ".35em");
                
                var focusS = svg.append("g")
                    .attr("class","focus")
                    .style("display","none");
                focusS.append("circle")
                    .attr("r",4.5);
                focusS.append("text")
                    .attr("x",9)
                    .attr("dy", ".35em");
                
                var focusN = svg.append("g")
                    .attr("class","focus")
                    .style("display","none");
                focusN.append("circle")
                    .attr("r",4.5);
                focusN.append("text")
                    .attr("x",9)
                    .attr("dy", ".35em");

                var focusL = svg.append("g")
                    .attr("class","focus")
                    .style("display","none");
                focusL.append("line")
                    .attr("x1",0)
                    .attr("y1",0)
                    .attr("x2",0)
                    .attr("y2",h+margin.bottom);
                focusL.append("text")
                    .attr("x",9)
                    .attr("y",h-8)
                    .attr("dy", ".35em");

                svg.append("rect")
                    .attr("class", "overlay")
                    .attr("width",w)
                    .attr("height",h)
                    .on("mouseover",function() { 
                        focusA.style("display", null);
                        focusN.style("display", null);
                        focusS.style("display", null);
                        focusL.style("display", null);
                    })
                    .on("mouseout",function() {
                        focusA.style("display", "none");
                        focusS.style("display", "none");
                        focusN.style("display", "none");
                        focusL.style("display", "none");
                    })
                    .on("mousemove", mousemove);

                function mousemove() {
                    var x0 =  xScale.invert(d3.mouse(this)[0]),
                        i = bisectDate(data,x0,1),
                        d0 = data[i-1],
                        d1 = data[i],
                        d = x0-d0.date > d1.date-x0 ? d1 : d0;
                        console.log(d);
                    focusA.attr("transform","translate(" +xScale(d.date)+","+
                    yScale(d.Austin)+")");
                    focusA.select("text").text(d.Austin+"\u00B0F");
                    
                    focusN.attr("transform","translate(" +xScale(d.date)+","+
                    yScale(d["New York"])+")");
                    focusN.select("text").text(d["New York"]+"\u00B0F");
                    
                    focusS.attr("transform","translate(" +xScale(d.date)+","+
                    yScale(d["San Francisco"])+")");
                    focusS.select("text").text(d["San Francisco"]+"\u00B0F");
                    
                    focusL.attr("transform","translate(" +xScale(d.date)+","+
                    0+")");
                    focusL.select("text").text(dateOutput(d.date));
                }


            //});
}
