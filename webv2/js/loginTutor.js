$(function() {
    $('#close-alert').click(function() {
        $(".alert").hide();
    });
    $("form").submit(function(event) {
        event.preventDefault();
        if($("#inputEmail").val() === "tutor@test.com" && $("#inputPassword").val() === "123456") {
            $(".alert").hide();
            window.location.href = "tutorProfile.html";
            return false;
        }
        $(".alert").show(); 
    });
});