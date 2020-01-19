"use strict";

//Get Tufnell Prices from json file
let tuffnellPrices;
$.post('js/tuffnellPrices.json', 'json').done(function(response) {
	tuffnellPrices = response;
	console.log(tuffnellPrices);
});

//Get Tufnell Zones from json file
let tuffnellZones;
$.post('js/tuffnellZones.json', 'json').done(function(response) {
	tuffnellZones = response;
	console.log(tuffnellZones);
});

//Get Tufnell Supplements from json file
let tuffnellSupplements;
$.post('js/tuffnellSupplements.json', 'json').done(function(response) {
	tuffnellSupplements = response;
	console.log(tuffnellSupplements);
});

//Get DHL Prices from json file
let dhlPrices;
$.post('js/dhlPrices.json', 'json').done(function(response) {
	dhlPrices = response;
	console.log(dhlPrices);
});

//Get DHL Zones from json file
let dhlZones;
$.post('js/dhlZones.json', 'json').done(function(response) {
	dhlZones = response;
	console.log(dhlZones);
});

//Get DHL Supplements from json file
let dhlSupplements;
$.post('js/dhlSupplements.json', 'json').done(function(response) {
	dhlSupplements = response;
	console.log(dhlSupplements);
});


// *************************
// *** Tuffnells PRICES  ***
// *************************

let tuffAreaStandingCharge, tuffLengthCharge;
function calcTuffnells() {
	//Fill in 'Area'
	$('#tuff_result1').text(tuffnellAreaName);

	//Area Standing Charge
	tuffAreaStandingCharge = tuffnellPrices[tuffnellAreaName]['Area'];
	$('#tuff_result2 span').text(tuffAreaStandingCharge);

	//Fill in text for 'Pipe length' 
	//If pipe is 2.5m or less there is no charge
	if(pipeLen <= 2.5){
		tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['Less2.5'];
		$('#tuff_pipe_length').text('Pipe less or equal to 2.5m');
		$('#tuff_result3 span').text(tuffLengthCharge);
	}else if(pipeLen < 6){
		tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['3to5'];
		$('#tuff_pipe_length').text('Pipe between 3m and 6m');
		$('#tuff_result3 span').text(tuffLengthCharge);
	}else {
		tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['6m'];
		$('#tuff_pipe_length').text('Pipe 6m');
		$('#tuff_result3 span').text(tuffLengthCharge);
	}

	//Residential Supplement
	//    !??!?!????????????????!?!?!?!?!?!!??
}
let dhlAreaStandingCharge, dhlLengthCharge;
// *******************
// *** DHL PRICES  ***
// *******************

function calcDHL() {
	//Fill in 'Zone'
	$('#dhl_result1').text(dhlZoneName);

	//Zone Standing Charge
	dhlAreaStandingCharge = dhlPrices[dhlZoneName]['Zone'];
	$('#dhl_result2 span').text(dhlAreaStandingCharge);

}










function mainCalc() {
	console.log('Starting calculations');
	if(exactZoneMatch){
		$( "#post_error_info" ).hide();
		calcTuffnells();
		calcDHL();
	}else{
		console.log('postode input error');
		//Red info that postcode is not a valid input
		$( "#post_error_info" ).show();
	}
}


// check if postcode is exact match
let exactZoneMatch = false;
let tuffnellAreaName, dhlZoneName;
function checkPostZone() {
	$.each(tuffnellZones, function(tuffZoneName, trimedZones){
		if($.inArray(postcode, trimedZones) !== -1) {
			console.log(trimedZones);
			exactZoneMatch = true;
			tuffnellAreaName = tuffZoneName;
			//find DHL Zone
			$.each(dhlZones, function(dhlZoneNameIndex, trimedDHLZones){
				if($.inArray(postcode, trimedDHLZones) !== -1) {
					console.log(trimedDHLZones);
					dhlZoneName = dhlZoneNameIndex;
					return false;
				}else{
					dhlZoneName = false;
				}
			});
			return false;
		}else{
			console.log('ne');
			exactZoneMatch = false;
		}
	})
	mainCalc();
}

//get user inputs
let postcode, pipeLen, address;
function getInputs() {
	//trim white spaces from postcode and read last 3 characters
	postcode = $.trim( $('#carr_input_postcode').val() );
	postcode = postcode.slice(0,-3);
	postcode = $.trim( postcode );

	pipeLen = parseFloat( $('#carr_input_pipe').val() );
	address = $('#carr_input_address').val();

	console.log(postcode);
	// console.log(pipeLen);
	// console.log(address);
	checkPostZone();
}

//Calculate on Click
$('#carr_calc').on("click", function(e){
	e.preventDefault();
	getInputs();
})


$(function(){
	// getInputs();
})


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOTES - QUESTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// * Do you want length input to be a drop-down select (<1.25m, 1.25m-5m, 5m-6m ....)
// Do you want postcodes to be a drop-down dynamically made from json that your staff can edit
// Dynamic text for Tuffnell (pipe length)
// How to determine if supplement is residential
// Any 'shake' effect on wrong inputs
// Postcode expects Capital letters atm.... if not drop-down.... should it accept not capital as well?
// What happens with tuffnel if pipe is >6m
// Need info text for several situations(long pipes, other invalid inputs)