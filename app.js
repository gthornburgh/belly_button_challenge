// start app

function getPlots(id) {

    // samples json
        d3.json("samples.json").then (data =>{
            var samples = data.samples;
            var result = samples.filter(sample => sample.id == id)[0]
            var ids = result.otu_ids;
            var sampleValues =  result.sample_values.slice(0,10).reverse();
            var labels =  result.otu_labels.slice(0,10).reverse();

        // retrieve top 10 OTU
        var OTU_top = ids.slice(0, 10).reverse();

        // format OTU id
            var OTU_id = OTU_top.map(d => "OTU " + d);
            console.log(`OTU IDS: ${OTU_id}`)

         // lables
         console.log(`OTU_labels: ${labels}`)
         var trace = {
             x: sampleValues,
             y: OTU_id,
             text: labels,
             marker: {
             color: 'blue'},
             type:"bar",
             orientation: "h",
        };

         // define variable
         var data = [trace];

         // set layout for plots
        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                    tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };

        // bar plot
        Plotly.newPlot("bar", data, layout);
            var trace1 = {
                x: result.otu_ids,
                y: result.sampleValues,
                mode: "markers",
                marker: {
                    size: result.sampleValues,
                    color: result.otu_ids
                },
                text:  result.otu_labels
            };

            var layout_2 = {
                xaxis:{title: "OTU ID"},
                height: 600,
                width: 1000
            };