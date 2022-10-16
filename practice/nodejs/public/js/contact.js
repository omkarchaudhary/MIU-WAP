

$(()=>{
//    fetch('./js/contactinfo.txt', {'id':$(data.text())})
//    .then({'id': $(<pre>data</pre>)})
//     .then(function(data){
//         $('#body').append(data);
//     })

    fetch('./js/contactinfo.txt')
    .then(data => data.text())
    .then(success)
    .catch(fail);

    function success(data){
        $('#body').append(`<pre>${data}</pre`);
    }
    function fail(error){
        $('#body').append(`<p> Failed to get data </p>`);
    }
})