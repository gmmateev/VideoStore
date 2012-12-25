var VideoStoresViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getAllStoresCallback = function (responseData) {
        self.allStores(responseData);
    };

    /*Public variables*/
    this.template = "videoStoresView";

    this.allStores = ko.observableArray();
    
    /*Public methods*/
    this.showAllStores = function () {
        StoresProvider.getAllStores(getAllStoresCallback);
    };

    this.showVideoStoreInfo = function (store) {
        console.log("show video store info");

        var storeViewModel = new StoreViewModel(store);
        app.appViewModel.navigateTo(storeViewModel);
    };
    
};

