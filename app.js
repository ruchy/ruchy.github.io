var app= angular.module('wedding', []);

	app.controller('weddingController', ['$scope', function($scope){
		
		$scope.names = [{"name":"manoj","relation":"father","relatedTo":"her","image":"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/14212687_1068041486614991_5528580788729122473_n.jpg?oh=43e7de87e17cd05a156c832f2cfcbd58&oe=58EC39BF","show": true},
				{"name":"kumkum","relation":"mother","relatedTo":"her","image":"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/14953883_120015238476741_5654166738435373162_n.jpg?oh=32ef2547c97679a7279115832524f12e&oe=58DE1811","show": true},
				{"name":"bhavya","relation":"sister","relatedTo":"him","image":"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/13906902_722976354508185_9141554351161274672_n.jpg?oh=3c313f4f96538fb950ac07f56a2eaae0&oe=58DCD7F4","show": true}];

		$scope.search = function(){
			
			for(var i =0;i < $scope.names.length; i++){

				

				if($scope.searchkey == $scope.names[i].name){

					$scope.names[i].show = true;

				}
				else{
					$scope.names[i].show = false;

				}
				console.log($scope.names[i].name);
				console.log($scope.names[i].show);


			}
			
		};
	
	}]);