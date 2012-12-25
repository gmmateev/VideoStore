var ApplicationViewModel = function () {
    var userbarVM = new UserBarViewModel()
    this.userBarViewModel = userbarVM;

    this.viewModelBackStack = ko.observableArray();

    this.navigateTo = function (viewModel) {
        this.viewModelBackStack.push(viewModel);
    };

    this.back = function () {
        this.viewModelBackStack.pop();
    };

    this.templateSelector = function (viewModel) {
        return viewModel.template;
    }
};