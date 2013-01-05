var UserBarViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var registerCallback = function () {
        app.appViewModel.ajaxRequestFinished("Registered");
        self.isSignedIn(true);

        if (self.rememberUser) {
            localStorage.setItem("username", self.username());
            localStorage.setItem("authCode", self.authenticationCode());
        }
    };

    var registerErrorCallback = function (message) {
        app.appViewModel.ajaxRequestFinished(message, true);
        self.isSignedIn(false);
        self.registerFailed(true);
    };

    /*Public variables*/
    self.isSignedIn = ko.observable();
    self.registerFailed = ko.observable(false);

    self.rememberUser = ko.observable(true);

    self.username = ko.observable();
    self.authenticationCode = ko.observable();    

    /*Public methods*/
    self.register = function () {
        var pass = $("#userPassword").val();
        var authentication = self.username() + pass;
        var code = Sha1.hash(authentication);
        self.authenticationCode(code);
        app.appViewModel.ajaxRequestStarted("Registering...");
        UsersProvider.register(self.username, code, registerCallback, registerErrorCallback);
    };

    self.signIn = function () {
        var pass = $("#userPassword").val();
        var authentication = self.username() + pass;
        var code = Sha1.hash(authentication);
        self.authenticationCode(code);
        self.isSignedIn(true);

        if (self.rememberUser()) {
            localStorage.setItem("username", self.username());
            localStorage.setItem("authCode", self.authenticationCode());
        }
    };

    self.signOut = function () {        
        self.username();
        self.authenticationCode();
        self.isSignedIn(false);
        if (typeof (name) === "string" && typeof (code) === "string") {
            localStorage.removeItem("username");
            localStorage.removeItem("authCode");
        }

        interaction.collapseRegistrationBar(0);
        /*Rebind the button after it is shown*/
        interaction.bindExpandRegistrationButton();
    };

    /*Initialize*/
    var name = localStorage.getItem("username");
    var code = localStorage.getItem("authCode");
    if (typeof (name) === "string" && typeof (code) === "string") {
        self.username(name);
        self.authenticationCode(code);
        self.isSignedIn(true);
    }
    else {
        self.isSignedIn(false);
    }
};
