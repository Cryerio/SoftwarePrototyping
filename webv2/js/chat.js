$(function() {
    $('#sendbutton').click(function() {
        var divfield = document.createElement("div");
        divfield.classList ="d-flex justify-content-end mb-4";
        var divcontext = document.createElement("div");
        divcontext.classList =  "msg_cotainer_send";
        divcontext.innerHTML=$('#msgfield').val();
        divfield.appendChild(divcontext);
        document.getElementById("msg_field").appendChild(divfield);
        $('#msgfield').val("");
    });


    $("#exit").click( function() {
        confirm('Are you sure you want leave the queue?');  
	});
});

