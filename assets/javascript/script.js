$(document).ready(function() {
    $('.slider').slider();
    $(".button-collapse").sideNav();
    $("select").material_select();
});

$("#submit").on("click", function(event) {
    event.preventDefault();

    email = $("#email").val().trim();
    name = $("#name").val().trim();
    department = $("#department");
    textArea = $("#textarea1").val().trim();
    var e = document.getElementById("department");
    var strUser = e.option[e.selectedIndex].text;
    console.log(email + "" + name + "" + strUser + "" + textArea + "" + e);

});