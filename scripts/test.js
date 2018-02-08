$(document).ready(function() {
    $(".dropdown").click(function() {
        $(".dropdown-content").fadeToggle("slow");
    });
    $(function() {
        $(document.body).fadeIn(1000);
    });
});