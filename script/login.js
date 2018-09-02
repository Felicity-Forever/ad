let app = new Vue ({
    el: '.main',
    data: {
        errorMessage: "",
        hasError: false,
        userName: "",
        password: "" 
    },
    methods: {
        login: function(){
            app.hasError = false;
            let randomUrl = 
                Math.round(Math.random()) === 1 ? 
                "http://cumtlyq.coding.me/ad/login-failure.json" : 
                "http://cumtlyq.coding.me/ad/login-success.json";
            qwest.setDefaultOptions({ cache: true });
            qwest.get(
                randomUrl,
                { user: app.userName, pswd: app.password }
            ).then(
                function(xhr, msg) {
                    if (msg.success) {
                        document.location = "Mainpage.html";
                    }
                    else {
                        app.hasError = true;
                        app.errorMessage = msg.message;
                    }
                }
            );
        }
    }
})