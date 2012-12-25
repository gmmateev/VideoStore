var UserBarViewModel = function () {
    var self = this;

    this.isRegistered = ko.observable(false);

    this.username = ko.observable("bai pesho");

    this.register = function () {
        self.isRegistered(true);
    }
};
