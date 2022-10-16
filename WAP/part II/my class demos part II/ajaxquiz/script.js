
let spec={
    'CPUspeed' : 12,
    'RamAmount': 256,
    'StorageSpace' : 500,
    'Price' : 1000
}
function callAjax(){
    let url='http://www.google.com/search';
    let spec={'q': $('#myText')[0].value};
    $.get( url, JSON.parse(spec)).done(onSuccess).fail(onFail);
}

function onSuccess(spec){
    console.log(JSON.parse(spec).CPUspeed);
    console.log(JSON.parse(spec).RamAmount);
    console.log(JSON.parse(spec).StorageSpace);
    console.log(JSON.parse(spec).Price);
    $('#a')[0].append(spec);
}

    function onFail(xhr, status, exception){
        console.log(exception);
    }
    
    $(function(){
        $('#a').click(callAjax);
    });