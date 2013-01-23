var UsersProvider = function () { };

UsersProvider.register = function (username, authCode, callback, errorCallback) {
    var data = {
        username: username,
        authCode: authCode
    };

    $.ajax({
        url: "http://videostores.apphb.com/api/stores/register-user",
        dataType: "json",
        type: "POST",
        data: data,
        success: function () {
            callback();
        },
        error: function (data) {
            var message;
            if (data.responseText != "") {
                message = JSON.parse(data.responseText).Message;
            }
            else {
                message = "Failed to register user";
            }

            errorCallback(message);
        }
    });
};