angular.module('patternfly.navigation').controller('applicationLauncherController', ['$scope', '$window',
  function ($scope, $window) {
    $scope.imagePath = $window.IMAGE_PATH || "img";
    $scope.navigationItems = [
      {
        title: "Recteque",
        href: "#/ipsum/intellegam/recteque",
        tooltip: "Launch the Function User Interface",
        iconClass: "pficon-storage-domain"
      },
      {
        title: "Suavitate",
        href: "#/ipsum/intellegam/suavitate",
        tooltip: "Launch the Function User Interface",
        iconClass: "pficon-build"
      },
      {
        title: "Lorem",
        href: "#/ipsum/intellegam/lorem",
        tooltip: "Launch the Function User Interface",
        iconClass: "pficon-domain"
      },
      {
        title: "Home",
        href: "#/ipsum/intellegam/home",
        tooltip: "Launch the Function User Interface",
        iconClass: "pficon-home"
      }
    ];
 
    $scope.label = 'Application Launcher';
    $scope.isDisabled = false;
    $scope.isList = false;
    $scope.hiddenIcons = 'false';
}]);