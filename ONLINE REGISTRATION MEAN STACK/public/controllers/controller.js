var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',function($scope,$http){
    
   console.log("hello world from controller") ;
   var refresh = function()
    {
        $http.get("/contactlist").then(function(response){
        console.log("i got the data i had requested");
        console.log(response);
        $scope.contactlist = response.data;
        
       });
   }
   refresh();
   $scope.addContact = function(){
     console.log($scope.contact); 
     
     $http.post('/contactlist',$scope.contact).then(function(response){
         console.log(response);
         //$scope.contact = "";
         refresh();
     });
   }
});
