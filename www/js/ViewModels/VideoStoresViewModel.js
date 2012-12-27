var VideoStoresViewModel = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getAllStoresCallback = function (responseData) {
        self.stores(responseData);
        app.appViewModel.ajaxRequestFinished();
    };

    var getNearbyStoresCallback = function (responseData) {
        app.appViewModel.ajaxRequestFinished();
        self.stores(responseData);
    };

    var getNearbyStoresErrorCallback = function (message) {
        app.appViewModel.ajaxRequestFinished(message, true);
    };

    var getCurrentLocationCallback = function (position) {
        app.appViewModel.ajaxRequestFinished();
        app.appViewModel.ajaxRequestStarted("Retrieving stores...");

        StoresProvider.getNearbyStores(
            position.coords.latitude,
            position.coords.longitude,
            0,
            getNearbyStoresCallback,
            getNearbyStoresErrorCallback);
    };

    var getCurrentLocationErrorCallback = function(message) {
        app.appViewModel.ajaxRequestFinished(message, true);
    };

    /*Public variables*/
    self.template = "videoStoresView";
    self.stores = ko.observableArray();
    
    /*Public methods*/
    self.showAllStores = function () {
        app.appViewModel.ajaxRequestStarted("Retrieving stores...");
        StoresProvider.getAllStores(getAllStoresCallback);
    };

    self.showNearbyStores = function () {
        app.appViewModel.ajaxRequestStarted("Retrieving current location...");
        navigator.geolocation.getCurrentPosition(getCurrentLocationCallback, getCurrentLocationErrorCallback);        
    };

    self.showVideoStoreInfo = function (store) {
        var storeViewModel = new StoreViewModel(store);
        app.appViewModel.navigateTo(storeViewModel);
    };    
};

