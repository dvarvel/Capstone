//State object

var state = {
	carResults: [],
	carsCompared: [],
	userMake: [],
	userModel: [],
	userMax: [],
	userLoc: []
};

var carData


//State modification functions

var addCarResult =  function(state,car){
	state.carResults.push(car);
};

var addCarCompare = function(state,car){
	state.carsCompared.push(car);
};

var enterUserSearchParams = function(state,make,model,max,loc){
	state.userMake.push(make);
	state.userModel.push(model);
	state.userMax.push(max);
	state.userLoc.push(loc);
};



//Render functions

/*function makeEBayCarList (data){
	data.findItemsByKeywordsResponse.searchResult.item.map(function(car,index){
		addCarResult(state, car.title);
	});
};
*/

var makeCarMap = function(state, element){

};

var makeCarComparison = function(state,element){

};

//API access functions

var getEbayInfo = function(){

		var make = $('.js-make').val();
		var model = $('.js-model').val();
		var max = $('.js-maxprice').val();
		var loc = $('.js-zipcode').val();
		enterUserSearchParams(state,make,model,max,loc);
		
		var ebayURL = "http://svcs.sandbox.ebay.com/services/search/FindingService/v1"
		var query = {
			"OPERATION-NAME": "findItemsByKeywords",
			"SERVICE-VERSION": "1.0.0",
			"SECURITY-APPNAME": "DavidVar-WhereMyC-SBX-c5d705b3d-49350d7a",
			"RESPONSE-DATA-FORMAT": "JSON",
			"REST-PAYLOAD":"",
			"_osacat": 6001,
			"keywords": make + model,
			"_sadis": 20,
			"_stpos": loc,
			"paginationInput.entriesPerPage": 10
		};

		var ebayQueryPart = "http://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=DavidVar-WhereMyC-SBX-c5d705b3d-49350d7a&REST-PAYLOAD&RESPONSE-DATA-FORMAT=JSON&keywords=" + make + " " + model;
		console.log(ebayQueryPart);


  		var settings = {
   			url: ebayURL,
    		data: query,
    		dataType:'jsonp',
    		type:'GET',
    		success: function(response){
    			console.log(response);
    		}
  		};
  		$.ajax(settings);
};



//Event listeners


function startSearch(){
	$('.js-startSearch').submit(function(event){
		event.preventDefault();
		getEbayInfo();
	});
};



//Debugging/testing functions//

var testState = function(){
	console.log(state);
};


//----------MAPS SECTION-----------------//

/*function initMap(){
	var carList = [];
	state.carResults.forEach(function(car){
		carList.push(car);
	});

  	for (var i = 0; i < carList.length; i++) {
    	var car = carList[i];
    	var marker = new google.maps.Marker({
      		position: {lat: car[1], lng: car[2]},
      		title: car[0],});
    }

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: car[0]
	});
	
}*/



//---------------------//

$(startSearch);



