let person={
    'name':'dave',
    'age': 16
}

function callAjax(){
    let url='http://www.google.com/search';
    let data={'q': $('#myText')[0].value};
    $.get( url,JSON.stringify(person)).done(onSuccess).fail(onFail);
    $('#l').show();

//fetch as get 
fetch(url).then(fetchSuccess).then(displayResults).catch(fetchFail);

//fetch as post
let fname= 'dave';
let lname='smith';
fetch(url,{method: 'post', 
body:'firstName=' +fname + 'lastName=' + lname,
headers :{
    'Accept': 'application/json'
}}).then(fetchSuccess).then(displayResults).catch(fetchFail);
}

function fetchSuccess(data){
    return data.JSON();
}
function displayResults(jsonObject){
    console.log(JSON.stringify(jsonObject));
}
function fetchFail(error){
    console.log(error);
}

function onSuccess(data){
    console.log(JSON.parse(data).name);
    $('#b')[0].append(data);
}
function onFail(xhr, status, exception){
    console.log(exception);
    $('#l').hide();
}



$(function(){
    let myInput1 = $('<input>',{'type': 'button', 'id': 'but1', 'value': 'My button 1'}).click(myF);
    let myInput2 = $('<input>',{'type': 'button', 'id': 'but2', 'value': 'My button 2'}).click(myF);
    let myInput3 = $('<input>',{'type': 'button', 'id': 'but3', 'value': 'My button 3'}).click(myF);
    let myInput4 = $('<input>',{'type': 'button', 'id': 'but4', 'value': 'My button 4'}).click(myF);

    // $('#m').append(myInput1);
    // $('#m').append(myInput2);
    // $('#m').append(myInput3);
    // $('#m').append(myInput4);
    // $('#m').click(inM);
    // $('#m').click(outOFM);
    $('#l').hide();
    $('#b').click(callAjax);


    // $('#but').each(function(i,x){
    //     x.click= myF;
    // })
    })

// $(alert($('#m')[0].textContent));
function inM(){
     console.log("In M!!")
}
function outOFM(){
    console.log("out of M!!")
}
function myF(){
    console.log(this);
    // event.stopImmediatePropagation()
    }


    // $(function(){
    //     let myInput=$('<input>', {'type': 'button', 'id': 'but', 'value': 'My Button'}).click(myF);

    //     $('#m').append(myInput);
    //     $('#but').each(function(i,x){
    //         x.click=myF;
    //     })
    // })


// $(function() { alert("Hello World") });

//quiz
// $(function(){
//     let myInput = $('<input>',{'type': 'text', 'value': 'hello world', 'name': 'hello'});
  
//         $("#helloForm").append(myInput);
        
// })
