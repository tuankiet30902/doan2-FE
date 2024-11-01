var app = angular.module('menuApp', []);

app.controller('task_controller', function() {
    var ctrl = this;

    ctrl.tab = 'quickhandle';

    ctrl.switchTab = function(tabName) {
        ctrl.tab = tabName;
    };

    ctrl.getTabContentUrl = function() {
        switch (ctrl.tab) {
            case 'quickhandle':
                return 'quick_task.html';
            case 'department':
                return 'department_homepage.html';
            case 'project':
                return 'project_view.html';
            case 'personal':
                return 'personal_view.html';
            case 'statistic':
                return 'statistic.html';
            case 'taskmanagement':
                return 'task_management.html';
            default:
                return 'quick_task.html';
        }
    };

    ctrl.checkPermission = function(permission) {
        return true;
    };

    ctrl.taskDetail = function(id){
        link = '/public/modules/office/task/details/views/details.html';
        window.location.href = link;
    }
});
