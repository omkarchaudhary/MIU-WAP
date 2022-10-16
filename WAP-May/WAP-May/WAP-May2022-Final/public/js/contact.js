 $(
     function(){

    function success(data){
        let elem=`<pre> ${data} </pre>`;
        $('#body').append(elem)
    }

    function fail(error){
        $('#body').append(`<p> Failed to get data </p>`)
    }

    fetch("./js/contactinfo.txt").then(data=> data.text()).then(success).catch(fail);
 })

