var MoviesProvider = function () { };

MoviesProvider.getMovieInfo = function (movieId, callback) {
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/movie-info/" + movieId,
        dataType: "json",
        type: "GET",
        success: function (data) {
            callback(data);
        }
    });
};