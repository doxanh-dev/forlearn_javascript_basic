//Ví dụ trong jquery

$('#button').click(function () {

    // This của #button
    console.log(this);

    $('#element').click(function () {
        // This của #element
        console.log(this);
    });
});