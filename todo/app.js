var app = angular.module('myApp',[]);

//ENTER
app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
})

app.controller('myCtrl', function($scope){

 $scope.todos = [];

// dodati todo
$scope.add=function(){
    if($scope.task)
    $scope.todos.push({
        done:false,
        task: $scope.task,
        show: true
    })
    $scope.task ='';
}
// $scope.any = function(){
//     let i=0;
//     angular.forEach($scope.todos,function(todo){
//             i++;
//     })
//     if(i>0){
//     return true;
//     }
//}
//jeli uradjen
$scope.check = function(){
    if(this.todo.done){
    this.todo.done = false;
    }else{
        this.todo.done = true;
    }
}

//brisanje na X
$scope.makni = function(index){
    $scope.todos.splice(index,1);
   
}

//items left
$scope.broj = function(){
    let i=0;
    angular.forEach($scope.todos,function(todo){
        if(todo.done===false){
            i++;
        }
    })
    return i;
}

//Clear completed
$scope.clearShow = function(){
    let i=0;
    angular.forEach($scope.todos,function(todo){
        if(todo.done){
            i++;
        }
    })
    if(i>0){
        return false;
    }else{
        return true;
    }
}
$scope.clear = function(){
    for(let i=$scope.todos.length-1; i>=0;i--){
        if($scope.todos[i].done){
            $scope.todos.splice(i,1);
        }
    }
    
}
//cekiraj sve
$scope.checkSve = function(){
    $scope.checked = !$scope.checked;
    if($scope.checked){
    angular.forEach($scope.todos, function(todo){
        todo.done=true;
    })}else{
        angular.forEach($scope.todos, function(todo){
            todo.done=false;
    })}
}

//dugmad
$scope.all = function(){
    angular.forEach($scope.todos,function(todo){
        todo.show =true;
    })
}
$scope.active = function(){
    angular.forEach($scope.todos,function(todo){
        if(todo.done){
        todo.show =false;
        }else{
            todo.show = true;
        }
    })
}
$scope.completed = function(){
    angular.forEach($scope.todos,function(todo){
        if(!todo.done){
        todo.show =false;
        }else{
            todo.show = true;
        }
    })
}



})

