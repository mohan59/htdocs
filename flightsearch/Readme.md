## FlightSearch Sample ##

**FlightSearch** app is a teeny-weeny app built to search for flights between 2 major international airports.

### What it does ###

It lists flights between London Heathrow (LHR) and Los Angeles Intl (LAX) and options to filter as well as sort them. The data for both flights and filter parameters are static (.json) and the app leverages AngularJS' 2-way data binding to dynamically modify data based on settings. 

### Frameworks ###

- [Node.js](http://www.nodejs.org/)
- [AngularJS](http://www.angularjs.org/)
- [jQuery](http://jquery.com/)

### Filter Parameters ###
1. Operators (American, United, Virgin Atlantic etc)
2. Countries (US/UK)
3. Stops (Non-stop/1-stop)

### Sort Options ###
1. Price
2. Time

### Sample Flight Data ###

    {
		"id": "3",
		"operator": "United Airlines",
		"operatorCode": "UA",
		"operatorCountry": "US",
		"depAirport": "London Heathrow (LHR)",
		"arrAirport": "Los Angeles (LAX)",
		"depDateTime": "Sat~12:00p",
		"arrDateTime": "Sat~9:04p",
		"numOfStops": "1",
		"layoverAirport": "Toronto (YYZ)",
		"layoverTime": "3h 25m",
		"layoverArrDateTime": "Sat~3:10p",
		"layoverDepDateTime": "Sat~6:35p",
		"totalFlightTime": "17h 4m",
		"aircraftType": "Airbus A330-300~Airbus A320",
		"flightNumber": "UA 8219~UA 8385",
		"price": "1915.50",
		"additionalInfo": "UA 8219 operated by Air Canada~UA 8385 operated by Air Canada"
	}

### Sample Filter Data ###
    
    {
		"name": "stops",
		"options": [
			{
				"optionName": "Non-stop", 
				"optionId": "0",
				"value": true
			}, 
			{
				"optionName": "1-stop", 
				"optionId": "1",
				"value": true
			}
		]
	}
