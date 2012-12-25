var StoreViewModel = function (store) {
    /*Private variables*/
    var self = this;

    /*Public variables*/
    this.template = "storeInfoView";
    this.storeInfo = ko.observable();

    /*Private methods*/
    var getStoreInfoCallback = function (responseData) {
        self.storeInfo(ko.mapping.fromJS(responseData));
    };

    /*Initilize*/
    StoresProvider.getStoreInfo(store.id, getStoreInfoCallback);

    
};