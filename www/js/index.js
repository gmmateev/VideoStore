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
        
        document.addEventListener("pause", self.onPause, false);
        document.addEventListener("resume", self.onResume, false);
        
        //handle the back button
        self.appViewModel.backButtonRequired.subscribe(function (backButtonRequired) {
            if (backButtonRequired) {
                document.addEventListener("backbutton", self.onBackButtonClicked, false);
            }
            else {
                document.removeEventListener("backbutton", self.onBackButtonClicked, false);
            }
        });

        var home = new HomeViewModel();
        self.appViewModel.navigateTo(home);
    };

    self.onBackButtonClicked = function () {
        if(interaction.isRegistrationBarExpanded())
        {
            interaction.collapseRegistrationBar(500);
        }
        else
        {
            self.appViewModel.back();
        }
    };
    
    self.onResume = function () {
    };
    
    self.onPause = function (){
    }
};
