app.component('login', {
    templateUrl: '/templates/security/login.html',
    controller: function ($firebaseAuth, $location) {

        var auth = $firebaseAuth();

        this.anonLogin = function () {
            auth.$signInAnonymously()
                .then(function () {
                    $location.path('/home');
                })
                .catch((function (err) {
                    this.errorMessage = err.code;
                }).bind())
            ;
        }
    }
});