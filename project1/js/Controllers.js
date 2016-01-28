/* Main Controller Header */
var obj_content = {
	title:"My Home",
	data: "hdfjsd fssdf sdfdsf sdjfdsjfdsjfdfsdfjsdfjsdlkfjsdds fds d fds fdsf",
    cost : 100,
    pubdate : new Date()
}

app.controller('MainController',['$scope',function($scope){
	$scope.title =  obj_content.title;
	$scope.data = obj_content.data;
	$scope.cost = obj_content.cost;
	$scope.pubdate = obj_content.pubdate;
	$scope.products = [{ 
	      name: 'The Book of Trees', 
	      price: 19, 
	      pubdate: new Date('2014', '03', '08'),
	    }, 
	    { 
	      name: 'Program or be Programmed', 
	      price: 8, 
	      pubdate: new Date('2013', '08', '01'),
	    } 
  	]
}]);

var product_cotrol = {
	title:"L&T",
	data: "Larsen & Toubro",
    cost : 100,
    pubdate : new Date()
}

app.controller('productController',['$scope',function($scope){
	$scope.title = product_cotrol.title;
	$scope.data = product_cotrol.data;

	$scope.product_detail = [{
			 product_id : 1001,
			 product_name : "xyz",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 5000,
			 product_status : "Open",
			 product_image : "./image/product.png",
			 product_likes : 0,
			 product_cart : 0,
			 product_remove : 0,
			},
			{
			 product_id : 1002,
			 product_name : "abc",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 120000,
			 product_status : "Close",
			 product_image : "./image/product.png",
			 product_likes : 0,
			 product_cart : 0,
			 product_remove : 0,
			},
			{
			 product_id : 1003,
			 product_name : "abc",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 150000,
			 product_status : "Close",
			 product_image : "./image/product.png",
			 product_likes : 0,
			 product_cart : 0,
			 product_remove : 0,
			},
			{
			 product_id : 1004,
			 product_name : "abc",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 120000,
			 product_status : "Close",
			 product_image : "./image/product.png",
			 product_likes : 0,
			 product_cart : 0,
			 product_remove : 0,
			}
		];
		$scope.plusOne = function(index){
			$scope.product_detail[index].product_likes += 1;
		};
		$scope.add_cart = function(index){
			$scope.product_detail[index].product_cart += 1;
		}
		$scope.remove_cart = function(index){
			if($scope.product_detail[index].product_cart == -1 || $scope.product_detail[index].product_remove == -1){
				$scope.product_detail[index].product_cart = 0;
			}
			else{
			$scope.product_detail[index].product_cart -= 1;
			$scope.product_detail[index].product_remove = $scope.product_detail[index].product_cart;
			$scope.product_detail[index].product_remove -= 1;
			}
		}
}]);



/* Main Controller Student */
var student = [{
	student_name:"Vanshaj",
	student_details: "hdfjsd fssdf sdfdsf sdjfdsjfdsjfdfsdfjsdfjsdlkfjsdds fds d fds fdsf",
	student_roll_no : "Cue197",
	student_contact : 7276330999	
},
{
	student_name:"Vanshaj_Rock",
	student_details: "hdfjsd fssdf sdfdsf sdjfdsjfdsjfdfsdfjsdfjsdlkfjsdds fds d fds fdsf",
	student_roll_no : "Cue197",
	student_contact : 7276330999	
}]

app.controller('MainController_student',['$scope',function($scope){
	//student_details
	for(var i=0;i<student.length;i++){
		var ele = document.createElement("p");
		ele.id = "student_"+i;
		var set_attr = ele;
		student_details.appendChild(set_attr); 

		var name = document.createElement("label");
		name.id = "student_name_"+i;
		var set_attr_name = name;
		document.getElementById("student_"+i).appendChild(set_attr_name); 
		document.getElementById('student_name_'+i).innerHTML = "Name :"+student[i].student_name;

		var name = document.createElement("label");
		name.id = "student_details_"+i;
		var set_attr_name = name;
		document.getElementById("student_"+i).appendChild(set_attr_name); 
		document.getElementById('student_details_'+i).innerHTML ="Details :"+ student[i].student_details;

		var name = document.createElement("label");
		name.id = "student_roll_"+i;
		var set_attr_name = name;
		document.getElementById("student_"+i).appendChild(set_attr_name); 
		document.getElementById('student_roll_'+i).innerHTML ="Roll No."+ student[i].student_roll_no;

		var name = document.createElement("label");
		name.id = "student_contact_"+i;
		var set_attr_name = name;
		document.getElementById("student_"+i).appendChild(set_attr_name); 
		document.getElementById('student_contact_'+i).innerHTML ="Contact :"+ student[i].student_contact;

		// $scope.student_name =  student[i].student_name;
		// $scope.student_details = student[i].student_details;
		// $scope.student_roll_no = student[i].student_roll_no;
		// $scope.student_contact = student[i].student_contact;
	}
}]);


app.controller('productDirectiveController',["$scope",function($scope){
	$scope.move1 = {
		id : 1001,
		icon: 'image/p1.png',
		title: 'MOVE',
		price: 0.99
	};

	$scope.move2 = {
		id : 1002,
		icon: 'image/p2.jpg',
		title: 'Shutterbugg',
		price: 2.99
	};

	$scope.move3 = {
		id : 1003,
		icon: 'image/p3.jpg',
		title: 'Gameboard',
		price: 8.99
	};

	$scope.move4 = {
		id : 1004,
		icon: 'image/p4.jpg',
		title: 'Gameboard',
		price: 6.99
	};

	$scope.move5 = {
		id : 1005,
		icon: 'image/p5.jpg',
		title: 'Gameboard',
		price: 1.00
	};
}]);

app.controller("blogEditController",["$scope",function($scope){
	$scope.blog1 = {
		editor : "Vanshaj Rai",
		editor_id : 9,
		icon: 'image/p5.jpg',
	},
	$scope.blog2 = {
		editor : "Steve",
		editor_id : 102,
		icon: 'image/p4.jpg',
	}
}]);


app.controller("array_directive_Controller",["$scope",function($scope){
	$scope.blogs = [
		{
			editor : "Vanshaj Rai",
			editor_id : 12121119,
			icon: 'image/p5.jpg',
		},
		{
			editor : "Steve",
			editor_id : 102,
			icon: 'image/p4.jpg',
		},
		{
			editor : "Jack",
			editor_id : 952,
			icon: 'image/p5.jpg',
		},
		$scope.blog2 = {
			editor : "Jill",
			editor_id : 10102,
			icon: 'image/p4.jpg',
		}
	]
}]);

app.controller('forecastServiceController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
}]);
