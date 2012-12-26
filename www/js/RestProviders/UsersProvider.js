var UsersProvider = function () { };

UsersProvider.register = function (username, authCode, callback, errorCallback){
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/register-user",
        dataType: "json",
        type: "POST",
        data: { username: username, authCode: authCode },
        success: function (data) {
            callback();
        },
        error: function (data) {
            var message = JSON.parse(data.responseText).Message;
            errorCallback(message);
        }
    });
};