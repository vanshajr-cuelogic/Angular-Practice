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
			},
			{
			 product_id : 1002,
			 product_name : "abc",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 120000,
			 product_status : "Close",
			},
			{
			 product_id : 1003,
			 product_name : "abc",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 150000,
			 product_status : "Close",
			},
			{
			 product_id : 1004,
			 product_name : "abc",
			 product_desc : "sds s sas sdsa ",
			 product_cost : 120000,
			 product_status : "Close",
			}
		]

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
