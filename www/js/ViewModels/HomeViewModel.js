var HomeViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Public variables*/
    self.template = "homeView";

    /*Public methods*/
    self.showAllStores = function () {
        var storesVM = new VideoStoresViewModel("all");
        app.appViewModel.navigateTo(storesVM);
    };

    self.showNearbyStores = function () {
        var storesVM = new VideoStoresViewModel("nearby");
        app.appViewModel.navigateTo(storesVM);
    };
};