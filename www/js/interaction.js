var interaction = function () {
    /*Private methods*/
    var self = this;

    /*Public methods*/
    self.expandRegistrationBar = function (speed) {
        $("#buttonExpandRegistration").hide();
        $("#registration-bar").show(speed);
    };

    self.collapseRegistrationBar = function (speed) {
        $("#buttonExpandRegistration").show();
        $("#registration-bar").hide(speed);
    };

    self.bindExpandRegistrationButton = function () {
        $("#buttonExpandRegistration").on("click", function (event) {
            self.expandRegistrationBar(500);
        });
    };

    /*Initialize*/
    self.bindExpandRegistrationButton();

    $('#app').on("click", function (event) {
        self.collapseRegistrationBar(500);
    });
};
