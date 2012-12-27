var MovieViewModel = function (movie) {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getMovieInfoCallback = function (responseData) {
        self.movieInfo(ko.mapping.fromJS(responseData));
    };

    var rentMovieCallback = function () {
        self.rented(true);
        self.rentOperationsMessage("Rented");
    };

    var rentMovieErrorCallback = function (message) {
        self.rented(false);
        self.rentOperationsMessage(message);
    };

    var returnMovieCallback = function(){
        self.rented(false);
        self.rentOperationsMessage("Returned");
    };

    var returnMovieErrorCallback = function(message){
        self.rentOperationsMessage(message);
    };

    /*Public variables*/
    self.template = "movieInfoView";
    self.movieInfo = ko.observable();
    self.rented = ko.observable();
    self.rentOperationsMessage = ko.observable();

    /*Public methods*/
    self.rentMovie = function () {
        var user = {
            username: app.appViewModel.userBarViewModel.username(),
            authCode: app.appViewModel.userBarViewModel.authenticationCode()
        }

        if (app.appViewModel.userBarViewModel.isSignedIn()) {
            MoviesProvider.rentMovie(movie.id(), user, rentMovieCallback, rentMovieErrorCallback);
        }
        else {
            self.rentOperationsMessage("Sign in to rent the movie");
        }
    };

    self.returnMovie = function () {
        var user = {
            username: app.appViewModel.userBarViewModel.username(),
            authCode: app.appViewModel.userBarViewModel.authenticationCode()
        }

        if (app.appViewModel.userBarViewModel.isSignedIn()) {
            MoviesProvider.returnMovie(movie.id(), user, returnMovieCallback, returnMovieErrorCallback);
        }
        else {
            self.rentOperationsMessage("Sign in to return the movie");
        }
    };

    /*Initialize*/
    MoviesProvider.getMovieInfo(movie.id(), getMovieInfoCallback);
};