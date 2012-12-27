var ApplicationViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Public variables*/
    self.userBarViewModel = new UserBarViewModel();

    self.viewModelBackStack = ko.observableArray();

    self.backButtonRequired = ko.computed(function () {
        return self.viewModelBackStack().length > 1;
    }, self);

    self.appNotification = ko.observable();

    /*Public methods*/
    self.navigateTo = function (viewModel) {
        self.viewModelBackStack.push(viewModel);
    };

    self.back = function () {
        self.viewModelBackStack.pop();
    };

    self.templateSelector = function (viewModel) {
        return viewModel.template;
    }
};