angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.collections = [
    { title: 'Outono/Inverno 2015', thumb: 'img/1/oinv1.jpg', 'description': 'Fique linda neste inverno', id: 1 },
    { title: 'Delicada e Especial', thumb: 'img/1/oinv3.jpg', 'description': 'Para mulheres modernas', id: 2 }
  ];
})

.controller('CollectionCtrl', function($scope, $stateParams) {
  $scope.collection = {
    title: 'Outono/Inverno 2015',
    photos: [
      { photo: 'img/1/oinv1.jpg' },
      { photo: 'img/1/oinv2.jpg' },
      { photo: 'img/1/oinv3.jpg' }
    ]
  };
});
