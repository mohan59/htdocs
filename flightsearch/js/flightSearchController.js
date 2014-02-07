'use strict';

/* Controllers */

var flightSearchApp = angular.module('flightSearchApp', []);			// controller namespacing

flightSearchApp.controller('FlightsListCtrl', function($scope, $http) {
	
	$http.get('data/filters.json').success(function(data) {
		$scope.filters = data[0].filters;								// store filters
		$scope.sorters = data[0].sorters;								// store sorters
	});	

	$http.get('data/flights.json').success(function(data) {
		$scope.flights = data;											// main data
	});

	$scope.orderProp = 'price';
	
	$scope.showDetails = function(flightObj){
		if($(".detailsText").is(":visible") === false){
			$("#detTxt"+flightObj.id).removeClass("hide");
			$("#detLink"+flightObj.id).html("Hide Details");
			
			if(flightObj.numOfStops == "0"){
				$("#direct"+flightObj.id).removeClass("hide");			// non-stop flight
				$("#layover"+flightObj.id).addClass("hide");
			}else{
				$("#direct"+flightObj.id).addClass("hide");				// layover flight
				$("#layover"+flightObj.id).removeClass("hide");
			}
		}			
		else{
			$("#detTxt"+flightObj.id).addClass("hide");
			$("#detLink"+flightObj.id).html("View Details");
		}	
			
	}
  
});

flightSearchApp.filter('searchFilter', function(){
	return function(items, prefs){
		if(items){
			var i,j,k,count,out,matchingItems = [];
			for(i=0;i<items.length;i++){
				
				count = 0;
				out = false;
				if(prefs){
					for(j=0;j<prefs.length;j++){
						for(k=0;k<prefs[j].options.length;k++){
						
							switch(prefs[j].name.toLowerCase()){
								case 'operators':
								//console.log('Operators = ' + items[i].operatorCode + ' with ' + prefs[j].options[k].optionId);
								if(items[i].operatorCode === prefs[j].options[k].optionId){
									(prefs[j].options[k].value) ? count++ : out = true;
								}
								break;
								case 'countries':
								//console.log('Operators = ' + items[i].operatorCountry + ' with ' + prefs[j].options[k].optionId);
								if(items[i].operatorCountry === prefs[j].options[k].optionId){
									(prefs[j].options[k].value) ? count++ : out = true;
								}
								break;
								case 'stops':
								//console.log('Operators = ' + items[i].numOfStops + ' with ' + prefs[j].options[k].optionId);
								if(items[i].numOfStops === prefs[j].options[k].optionId){
									(prefs[j].options[k].value) ? count++ : out = true;
								}
								break;
							}
						}
						if (out) break;
						if(count === prefs.length){
							matchingItems.push(items[i]);
						}
					}
				}				
			}
			$("#search-summary-text").html(matchingItems.length + ' flights were found.');
			return matchingItems;	
		}
	};
});

/*flightSearchApp.filter('operatorFilter', function(){
	
	//if(items){
		
		return function(items, operators){
			if(items){
				var i,j,count,out,matchingOperators = [];			
				for(i=0;i<items.length;i++){
					count = 0;
					out = false;
					if(operators){
						for(j=0;j<operators.length;j++){
							//console.log(' compare ' + i +'. ' + items[i].operatorCode + ' with ' + j + '. ' + operators[j].operatorCode);
							if(items[i].operatorCode === operators[j].operatorCode){
								(operators[j].value) ? matchingOperators.push(items[i]) : out = true;								
							}
						}
					}
				}				
				$("#search-summary-text").html(matchingOperators.length + ' flights were found');
				return matchingOperators;
			}
		};
	//}
});

flightSearchApp.filter('stopModeFilter', function(){	
	return function(items, stopModes){
		if(items){
			var i,j,count,out,matchingStopModes = [];			
			for(i=0;i<items.length;i++){
				count = 0;
				out = false;
				if(stopModes){
					for(j=0;j<stopModes.length;j++){
						//console.log(' compare ' + i +'. ' + items[i].stops + ' with ' + j + '. ' + stopModes[j].stopModeId);
						if(items[i].stops === stopModes[j].stopModeId){
							(stopModes[j].value) ? matchingStopModes.push(items[i]) : out = true;								
						}
					}
				}
			}				
			$("#search-summary-text").html(matchingStopModes.length + ' flights were found.');			
			return matchingStopModes;
		}
	};
});*/