
    var sampleSVG = d3.select('#viz')
        .append("svg")
        .attr("width", 120)
        .attr("height", 120);
    sampleSVG.append('circle')
        .style('stroke', 'gray')
        .style('fill', 'white')
        .attr('r', 40)
        .attr('cx', 60)
        .attr('cy', 60)
        .on('click', function(){
            d3.select(this).style('fill', 'red');
        });

    
    var placeCircle = function(){
        console.log('Place circle called');
    }