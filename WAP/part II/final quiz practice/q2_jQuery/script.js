//#1
// $(function(){
//     alert('hello world')
// });


//#2
//jQuery object: is an array like object that is returned from the jquery function 
//and it represents a group of elements.


//#3
$(function(){
$('#m').append( $('<input>',{'type':'text', 'value':'hello world', 'name':'hello'}));
});

$(function(){
    $('button').click( $('#in').hide());
})


$(function(){
    $('p').click(function(){
        $(this.hide());
    })
});

$(function(){
    $('h1').append(' almost over');
});





//#4
//eventbubbling: when an event first triggers the child then it also triggers
//the parents DOM elements


//#5
//when we return false forma  jQuery event handler it prevents defaults and does stopProragation

