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
        if(confirm('Are you sure you want leave the queue?')) {
            window.location.href = "queue.html";
            return false;
        }
    });
    
    $("#next").click(function(){
        $("#msg_field").empty();
    });
});

