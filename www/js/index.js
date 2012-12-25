var appMain = function () {
    // Application Constructor
    this.initialize = function () {
        if (window.device) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
            console.log("there is device");
        }
        else {
            console.log("There is no device");
            this.onDeviceReady();
        }
    };

    this.appViewModel;

    this.onDeviceReady = function () {
        console.log("device ready");
        this.appViewModel = new ApplicationViewModel();
        ko.applyBindings(this.appViewModel);

        var firstPage = new VideoStoresViewModel();
        this.appViewModel.navigateTo(firstPage);
    }
};
