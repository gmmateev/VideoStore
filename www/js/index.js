var appMain = function () {
    /*Private variables*/
    var self = this;

    /*Private methods*/
   

    /* Application Constructor*/
    self.initialize = function () {
        if (window.device) {
            document.addEventListener('deviceready', self.onDeviceReady, false);
        }
        else {
            self.onDeviceReady();
        }
    };

    /*Public variables*/
    self.appViewModel;

    /*Event handlers*/
    self.onDeviceReady = function () {
        self.appViewModel = new ApplicationViewModel();
        ko.applyBindings(self.appViewModel);

        //handle the back button
        self.appViewModel.backButtonRequired.subscribe(function (backButtonRequired) {
            if (backButtonRequired) {
                console.log("Back button required and event attached");
                document.addEventListener("backbutton", self.onBackButtonClicked, false);
            }
            else {
                console.log("back button not required, event handler removed");
                document.removeEventListener("backbutton", self.onBackButtonClicked, false);
            }
        });

        var firstPage = new VideoStoresViewModel();
        self.appViewModel.navigateTo(firstPage);
    };

    self.onBackButtonClicked = function () {
        console.log("back button clicked");
        self.appViewModel.back();
    };
};
