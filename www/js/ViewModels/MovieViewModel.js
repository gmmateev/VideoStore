var MovieViewModel = function (movie) {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getMovieInfoCallback = function (responseData) {
        app.appViewModel.ajaxRequestFinished();
        self.movieInfo(ko.mapping.fromJS(responseData));
    };

    var rentMovieCallback = function () {
        app.appViewModel.ajaxRequestFinished("Rented");
        self.rented(true);
    };

    var rentMovieErrorCallback = function (message) {
        app.appViewModel.ajaxRequestFinished(message, true);
        self.rented(false);
    };

    var returnMovieCallback = function () {
        app.appViewModel.ajaxRequestFinished("Returned");
        self.rented(false);
    };

    var returnMovieErrorCallback = function (message) {
        app.appViewModel.ajaxRequestFinished(message, true);
        self.rentOperationsMessage(message);
    };

    /*Public variables*/
    self.template = "movieInfoView";
    self.movieInfo = ko.observable();
    self.rented = ko.observable();

    /*Public methods*/
    self.rentMovie = function () {
        var user = {
            username: app.appViewModel.userBarViewModel.username(),
            authCode: app.appViewModel.userBarViewModel.authenticationCode()
        }

        if (app.appViewModel.userBarViewModel.isSignedIn()) {
            app.appViewModel.ajaxRequestStarted("Renting movie...");
            MoviesProvider.rentMovie(movie.id(), user, rentMovieCallback, rentMovieErrorCallback);
        }
        else {
            app.appViewModel.notify("Sign in to rent the movie");
        }
    };

    self.returnMovie = function () {
        var user = {
            username: app.appViewModel.userBarViewModel.username(),
            authCode: app.appViewModel.userBarViewModel.authenticationCode()
        }

        if (app.appViewModel.userBarViewModel.isSignedIn()) {
            app.appViewModel.ajaxRequestStarted("Returning movie...");
            MoviesProvider.returnMovie(movie.id(), user, returnMovieCallback, returnMovieErrorCallback);
        }
        else {
            app.appViewModel.notify("Sign in to return the movie");
        }
    };

    /*Initialize*/
    app.appViewModel.ajaxRequestStarted("Retrieving movie info...");
    MoviesProvider.getMovieInfo(movie.id(), getMovieInfoCallback);
};