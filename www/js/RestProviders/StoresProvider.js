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

StoresProvider.getNearbyStores = function (latitude, longitude, count, callback, errorCallback) {
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/stores-nearby?count=" + count,
        dataType: "json",
        type: "POST",
        data: {
            latitude: latitude,
            longitude: longitude
        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            var message;
            if (data.responseText != "") {
                message = JSON.parse(data.responseText).Message;
            }
            else {
                message = "Failed to get nearby stores";
            }
            errorCallback(message);
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
