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

MoviesProvider.rentMovie = function (movieId, user, callback, errorCallback) {
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/rent-movie",
        dataType: "json",
        type: "POST",
        data: {
            movieId: movieId,
            user: user
        },
        success: function () {
            callback();
        },
        error: function (data) {
            errorCallback(JSON.parse(data.responseText).Message);
        }
    });
};

MoviesProvider.returnMovie = function (movieId, user, callback, errorCallback) {
    $.ajax({
        url: "http://videostores.apphb.com/api/stores/return-movie",
        dataType: "json",
        type: "POST",
        data: {
            movieId: movieId,
            user: user
        },
        success: function () {
            callback();
        },
        error: function (data) {
            errorCallback(JSON.parse(data.responseText).Message);
        }
    });
};