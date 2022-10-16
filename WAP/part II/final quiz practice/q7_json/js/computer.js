$(function(){
    $("#btn1").click(function(){
        callAjax();
        return false;
    })
    $("#btn2").click(function(){
        callAjax();
        return false;
    })
    $("#btn3").click(function(){
        callAjax();
        return false;
    })
    function callAjax(){
        $.get("./computer.json" , {"id" :$(this).text()}).done(success).fail(failure);
    }
    function success(data)
    {
        let random = Math.random();
        random = Math.floor(random * data.length);
        let value = data[random];
        // console.log(random);
        // console.log(data);
        $("#cpu").text(value["cpu"]);
        $("#ram").text(value["Ram"]);
        $("#storage").text(value["Storage"]);
        $("#price").text(value["Price"]);
    }
    function failure(xhr, status, exceptio)
    {
        alert('failed to get data');
    }
})