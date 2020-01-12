$(function() {
    $("#check-in").click(function() {
        $("#check-in").hide();
        let time = 0;
        $("#waiting-time").text(time);
        $("#waiting-info").show();
        let timer = setInterval(function() { 
            time += 1;
            $("#waiting-time").text(time);
            if(time === 3) {
                clearInterval(timer);
                $("#waiting-info").hide();
                $("#accept-deny-info").css("display", "flex");
            }
        }, 1000);
    });
    $("#deny").click(function() {
        $("#accept-deny-info").hide();
        $("#check-in").show();
    });
    $("#accept").click(function() {
        window.location.href = "studentcommunicate.html";
    });
    
});
