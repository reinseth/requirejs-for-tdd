define(function () {
    return function (timeliste) {
        return timeliste.map(function (timeføring) {
            return {
                id: timeføring.id,
                dato: (timeføring.dato.getDate() + "/" + (timeføring.dato.getMonth() + 1)),
                timer: timeføring.timer
            };
        });
    }
});