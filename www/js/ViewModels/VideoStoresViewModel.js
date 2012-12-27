var VideoStoresViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getAllStoresCallback = function (responseData) {
        self.stores(responseData);
    };

    var getNearbyStoresCallback = function (responseData) {
        self.stores(responseData);
    };

    var getNearbyStoresErrorCallback = function (message) {
        app.appViewModel.appNotification(message);
    };

    var getCurrentLocationCallback = function (position) {
        StoresProvider.getNearbyStores(
            position.coords.latitude,
            position.coords.longitude,
            0,
            getNearbyStoresCallback,
            getNearbyStoresErrorCallback);
    };

    var getCurrentLocationErrorCallback = function(message) {
        app.appViewModel.appNotification(message);
    };

    /*Public variables*/
    self.template = "videoStoresView";
    self.stores = ko.observableArray();
    
    /*Public methods*/
    self.showAllStores = function () {
        StoresProvider.getAllStores(getAllStoresCallback);
    };

    self.showNearbyStores = function () {
        navigator.geolocation.getCurrentPosition(getCurrentLocationCallback, getCurrentLocationErrorCallback);
        
    };

    self.showVideoStoreInfo = function (store) {
        var storeViewModel = new StoreViewModel(store);
        app.appViewModel.navigateTo(storeViewModel);
    };
    
};

