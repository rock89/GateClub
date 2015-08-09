 var app=angular.module('gateclubapp',['ngRoute']);
       app.config(function($routeProvider){
            $routeProvider
               .when('/',{
                           templateUrl: 'view/home.html'
                })
               .when('/gate',{
                            templateUrl: 'view/gate.html'
                })
                .when('/mocktest',{
                            templateUrl:'view/mocktest.html'
                })
                 .when('/digitallogic',{
                            templateUrl:'view/digitallogic.html'
                })
                .when('/algorithms',{
                             templateUrl:'view/algorithms.html'
                })
                .when('/calculus',{
                             templateUrl:'view/calculus.html'
                 })
                .when('/coa',{
                             templateUrl:'view/coa.html'
                 })
                 .when('/combinatorics',{
                             templateUrl:'view/combinatorics.html'
                 })
                 .when('/compilerdesign',{
                             templateUrl:'view/compilerdesign.html'
                 })
                 .when('/computernetwork',{
                             templateUrl:'view/computernetwork.html'
                 })
                 .when('/database',{
                             templateUrl:'view/database.html'
                 })
                 .when('/graphtheory',{
                             templateUrl:'view/graphtheory.html'
                 })
                 .when('/informationsystem',{
                             templateUrl:'view/informationsystem.html'
                 })
                 .when('/linearalgebra',{
                             templateUrl:'view/linearalgebra.html'
                 })
                 .when('/mathematicallogic',{
                             templateUrl:'view/mathematicallogic.html'
                 })
                 .when('/numericalmethods',{
                             templateUrl:'view/numericalmethods.html'
                 })
                .when('/os',{
                             templateUrl:'view/os.html'
                 })
                .when('/probability',{
                             templateUrl:'view/probability.html'
                 })
                 .when('/progds',{
                             templateUrl:'view/progds.html'
                  })
                 .when('/settheory',{
                             templateUrl:'view/settheory.html'
                  })
                   .when('/toc',{
                             templateUrl:'view/toc.html'
                  })
                  .when('/webtech',{
                            templateUrl:'view/webtech.html'
                  })
                  .when('/processThreadInter',{
                             templateUrl:'view/PTI.html'
                  })
                  .when('/ConcurSyncDeadlock',{
                             templateUrl:'view/CSD.html'
                   })
                  .when('/CPUScheduling',{
                             templateUrl:'view/CPUS.html'
                   })
                   .when('/MemoryManageAndVM',{
                            templateUrl:'view/MVM.html'
                    })
                    .when('/FileSystems',{
                            templateUrl:'view/FS.html'
                      })
                    .when('/IOSysAndProt',{
                            templateUrl:'view/IOP.html'
                    });
                       
              });
    app.controller('appctrl',function($scope,$http){

                    /*      
                    Here you can handle controller for specific route as well.
                    */
    	$scope.items = [];
    	$scope.getDataFromServer = function() {
            $http({
                    method : 'GET',
                    url : 'processthread'
            }).success(function(data, status, headers, config) {
                    $scope.items = data;
            }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
            });
               };
    });