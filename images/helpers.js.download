getCookie = function (name) {
    var cookies = document.cookie;
    var nameStart = cookies.indexOf(name);
    if (nameStart >= 0) {
        var valueStart = nameStart + name.length + 1;
        var valueEnd = cookies.indexOf(';', nameStart);
        if (valueEnd >= 0) {
            var cookie = cookies.slice(valueStart, valueEnd);
        } else {
            cookie = cookies.slice(valueStart);
        }
    } else {
        cookie = null;
    }
    return cookie;
};

getPutmaId = function () {
    return getCookie('__putma');
};
