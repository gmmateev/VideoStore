var StoresProvider = function () {};

StoresProvider.getAllStores = function (callback) {
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/stores-all",
        dataType: "json",
        type: "GET",
        success: function (data) {
            callback(data)
        }
    });
};

StoresProvider.getStoreInfo = function (storeId, callback) {
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/store-info/" + storeId,
        dataType: "json",
        type: "GET",
        success: function (data) {
            callback(data)
        }
    });
};
