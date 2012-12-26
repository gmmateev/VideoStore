var VideoStoresViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getAllStoresCallback = function (responseData) {
        self.allStores(responseData);
    };

    /*Public variables*/
    self.template = "videoStoresView";
    self.allStores = ko.observableArray();
    
    /*Public methods*/
    self.showAllStores = function () {
        StoresProvider.getAllStores(getAllStoresCallback);
    };

    self.showVideoStoreInfo = function (store) {
        var storeViewModel = new StoreViewModel(store);
        app.appViewModel.navigateTo(storeViewModel);
    };
    
};

