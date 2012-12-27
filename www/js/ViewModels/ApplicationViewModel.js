var ApplicationViewModel = function () {
    /*Private variables*/
    var self = this;
    var startedAjaxRequestsCount = ko.observable(0);
    var activeNotification = ko.observable(false);

    /*Public variables*/
    self.userBarViewModel = new UserBarViewModel();

    self.viewModelBackStack = ko.observableArray();

    self.backButtonRequired = ko.computed(function () {
        return self.viewModelBackStack().length > 1;
    }, self);

    self.appNotification = ko.observable();

    self.ajaxInProgress = ko.computed(function () {
        return startedAjaxRequestsCount() >= 1;
    }, self);

    self.showNotificationBar = ko.computed(function () {
        return self.ajaxInProgress() || activeNotification();
    });

    /*Public methods*/
    self.navigateTo = function (viewModel) {
        self.viewModelBackStack.push(viewModel);
    };

    self.back = function () {
        self.viewModelBackStack.pop();
    };

    self.templateSelector = function (viewModel) {
        return viewModel.template;
    };

    self.notify = function (message) {
        self.appNotification(message);
        activeNotification(true);

        setTimeout(function () { activeNotification(false); }, 3000);
    };

    self.ajaxRequestStarted = function (message) {
        startedAjaxRequestsCount(startedAjaxRequestsCount() + 1);
        self.appNotification(message);
    };

    self.ajaxRequestFinished = function (message, isError) {
        startedAjaxRequestsCount(startedAjaxRequestsCount() - 1);

        if (isError) {
            self.notify(message);
        }        
    };
};