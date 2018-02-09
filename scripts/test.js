$(document).ready(function() {
    $(".dropdown").hover(function() {
        $(".dropdown-content").fadeToggle("slow");
    });
    $(function() {
        $(document.body).fadeIn(1000);
    });
});