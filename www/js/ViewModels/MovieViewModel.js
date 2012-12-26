var MovieViewModel = function (movie) {
    /*Private variables*/
    var self = this;

    /*Private methods*/
    var getMovieInfoCallback = function (responseData) {
        self.movieInfo(ko.mapping.fromJS(responseData));
    };

    /*Public variables*/
    self.template = "movieInfoView";
    self.movieInfo = ko.observable();

    /*Initialize*/
    MoviesProvider.getMovieInfo(movie.id(), getMovieInfoCallback);
};