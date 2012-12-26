var UserBarViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var registerCallback = function () {
        self.isRegistered(true);
        self.registerMessage("Registered");
    };

    var registerErrorCallback = function (message) {
        self.isRegistered(false);
        self.registerFailed(true);
        self.registerMessage(message);
    };

    /*Public variables*/
    self.isRegistered = ko.observable(false);
    self.registerFailed = ko.observable(false);
    self.username = ko.observable();
    self.registerMessage = ko.observable();
    self.registerAttempted = ko.computed(function () {
        return self.isRegistered || self.registerFailed;
    }, self);

    /*Public methods*/
    self.register = function () {
        var pass = $("#userPassword").val();
        var authentication = self.username() + pass;
        var code = Sha1.hash(authentication);
        UsersProvider.register(self.username, code, registerCallback, registerErrorCallback);
    }
};
