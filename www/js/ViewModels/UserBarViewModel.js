var UserBarViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Public variables*/
    self.isRegistered = ko.observable(false);

    self.username = ko.observable("bai pesho");

    /*Public methods*/
    self.register = function () {
        self.isRegistered(true);
    }
};
