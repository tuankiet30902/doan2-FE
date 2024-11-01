angular.module('user_controller', []).controller('user_controller', function($http, $scope, $compile) {
    var ctrl = this;

    ctrl._urlAddUser = '/public/modules/mangement/user/view/add_user.html';
    ctrl.newUser = {};
    ctrl.users = [
        { fullName: 'Nguyễn Quang Huy', username: 'quanghuy', password: '123' },
        { fullName: 'Trần Tuấn Kiệt', username: 'tuankiet', password: '123' },
        { fullName: 'Bùi Khánh Dư', username: 'khanhdu', password: '123' },
    ];

    // Hàm để biến mật khẩu thành chuỗi dấu sao
    ctrl.maskPassword = function(password) {
        return '*'.repeat(password.length);
    };

    ctrl.openModal = function() {
        console.log(ctrl.users);
        $http.get(ctrl._urlAddUser).then(function(response) {
            var modalElement = angular.element(response.data);
            var compiledElement = $compile(modalElement)($scope);
            angular.element(document.body).append(compiledElement);
            $('#add_User_Modal').modal('show');
        }).catch(function(error) {
            console.error("Lỗi tải file modalForm.html:", error);
        });
    };

    ctrl.saveUser = function() {
        if (ctrl.newAccount.fullName && ctrl.newAccount.username && ctrl.newAccount.password) {
            ctrl.users.push(ctrl.newAccount); 
            ctrl.newAccount = {}; 
            $('#add_User_Modal').modal('hide'); 
        } else {
            alert("Vui lòng điền đầy đủ thông tin");
        }
    };

});