var ApplicationViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Public variables*/
    self.userBarViewModel = new UserBarViewModel();

    self.viewModelBackStack = ko.observableArray();

    /*Public methods*/
    self.navigateTo = function (viewModel) {
        self.viewModelBackStack.push(viewModel);
    };

    self.backButtonRequired = ko.computed(function() {
        return self.viewModelBackStack().length > 1;
    }, self);

    self.back = function () {
        console.log("back executed");
        selfviewModelBackStack.pop();
    };

    self.templateSelector = function (viewModel) {
        return viewModel.template;
    }
};