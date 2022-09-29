

$(()=>{
   fetch('./js/contactinfo.txt', {'id':$(data.text())})
   .then({'id': $(<pre>data</pre>)})
    .then(function(data){
        $('#body').append(data);
    })
})