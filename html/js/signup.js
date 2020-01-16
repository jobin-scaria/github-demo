$(document).ready(function() {
    $("#login").click(function() {

        var email = $("#email").val();
        var password = $("#password").val();
        var name = $("#name").val();

        // Checking for blank fields.
        if (email == '' || password == '' || name == '') {
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        } else {
            data = {
                email: email,
                password: password,
                name: name
            };



            $.ajax({
                type: "POST",
                url: "https://0cz3wazev0.execute-api.eu-west-2.amazonaws.com/test/user/signup",
                dataType: "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),

                success: function(response) {
                    // clear form and show a success message

                    alert(JSON.stringify(response));
                    alert(response.message);

                },
                error: function() {
                    // show an error message
                    alert("UnSuccessfull");
                }



            });
        }
    });
});