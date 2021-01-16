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