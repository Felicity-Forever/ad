$(document).ready(function () {
    $.getJSON("../data/information.json", function (result, status) {
        var v = new Vue({
            el: '#main',
            data: {
                rows: result
            }
        })
    });
});