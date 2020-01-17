$(function() {
    $('#close-alert').click(function() {
        $(".alert").hide();
    });
    $("form").submit(function(event) {
        event.preventDefault();
        if($("#inputEmail").val() === "student@test.com" && $("#inputPassword").val() === "123456") {
            $(".alert").hide();
            window.location.href = "studentProfile.html";
            return false;
        }
        $(".alert").show();      
    });
});