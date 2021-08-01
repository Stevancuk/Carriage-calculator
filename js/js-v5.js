"use strict";

// *************************
// *** Tuffnells PRICES  ***
// *************************

let tuffAreaStandingCharge, tuffnelResidential;
let tuffLengthCharge = 0;
function calcTuffnells() {

	//Area Standing Charge
	tuffAreaStandingCharge = tuffnellPrices[tuffnellAreaName]['Area'];

	// //If pipe is 2.5m or less there is no charge
	// if(pipeLen == 'less1.25'){
	// 	tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['Less2.5'];
	// }else if(pipeLen == '1.25to5'){
	// 	tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['3to5'];
	// }else {
	// 	tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['6m'];
	// }

	//Residential Supplement
	tuffnelResidential = 0;

	if( $('#carr_input_address').val() == 'residential' ){
		tuffnelResidential = tuffnellPrices[tuffnellAreaName]['residential'];
	}
	// console.log('Residential: ', tuffnelResidential);

	//Write results
	let tuffSum = tuffAreaStandingCharge + tuffLengthCharge + tuffnelResidential;

	//Remove disabled options
	if ( tuffnellSupplements["NextWorkDay"]["visible"] && tuffnellAreaName == "UKM" ){
		$('#result_tuff_nextDay').html(`£<span>${(tuffSum + tuffnellSupplements["NextWorkDay"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_tuff_nextDay').text('N/A'); }

	if ( tuffnellSupplements["2-3Day"]["visible"] && tuffnellAreaName != "NI" ){
		$('#result_tuff_2to3Days').html(`£<span>${(tuffSum + tuffnellSupplements["2-3Day"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_tuff_2to3Days').text('N/A'); }

	if ( tuffnellSupplements["AM"]["visible"] && tuffnellAreaName == "UKM" ){
		$('#result_tuff_am').html(`£<span>${(tuffSum + tuffnellSupplements["AM"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_tuff_am').text('N/A'); }

	// if ( tuffnellSupplements["pre10:30"]["visible"] && !tuffZonesOnly2_3DaysOption.includes(tuffnellAreaName) ){
	// 	$('#result_tuff_pre1030').html(`£<span>${(tuffSum + tuffnellSupplements["pre10:30"]["value"]).toFixed(2)} </span>`);
	// }else{ $('#result_tuff_pre1030').text('N/A'); }

	if ( tuffnellSupplements["Saturday"]["visible"] && tuffnellAreaName == "UKM" ){
		$('#result_tuff_Saturday').html(`£<span>${(tuffSum + tuffnellSupplements["Saturday"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_tuff_Saturday').text('N/A'); }

	$('.tuffResults').show();

}

let dhlAreaStandingCharge;
// *******************
// *** DHL PRICES  ***
// *******************

function calcDHL() {

	//check if DHL3-5 contains this postcode
	if (dhlZones['DHL3-5'].includes(postcode)) {
		console.log('DHL3-5 contains: ', postcode);
		$('#result_DHL_3to5Days').text(`£${dhlPrices["DHL3-5"]["Zone"] + dhlSupplements["DHL3-5"]["value"]}`);
	} else {
		$('#result_DHL_3to5Days').text("N/A");
		console.log('DHL3-5 does NOT contain: ', postcode);
	}

	//check if DHL2-3 contains this postcode
	if (dhlZones['DHL2-3'].includes(postcode)) {
		$('#result_DHL_2to3Days').text(`£${dhlPrices["DHL2-3"]["Zone"] + dhlSupplements["DHL2-3"]["value"]}`);
		console.log('DHL2-3 contains: ', postcode);
	} else {
		console.log('DHL2-3 does NOT contain: ', postcode);
	}

	//check if DHLND contains this postcode
	if (dhlZones['DHLND'].includes(postcode)) {
		$('#result_DHL_next_day').text(`£${dhlPrices["DHLND"]["Zone"] + dhlSupplements["DHLND"]["value"]}`);
		console.log('DHLND contains: ', postcode);
	} else {
		console.log('DHLND does NOT contain: ', postcode);
	}

	//check if DHLAMND contains this postcode
	if (dhlZones['DHLAMND'].includes(postcode)) {
		$('#result_DHL_next_day_am').text(`£${dhlPrices["DHLAMND"]["Zone"] + dhlSupplements["DHLAMND"]["value"]}`);
		console.log('DHLAMND contains: ', postcode);
	} else {
		console.log('DHLAMND does NOT contain: ', postcode);
	}


	//DHL must be less than 1.25m
	if(pipeLen == 'less1.25') {
		$('.dhlCutTo125').hide();
	}
	if(pipeLen == '1.25to5') {
		$('.dhlCutTo125').show();
	}
	if(pipeLen == '6m') {
		$('.dhlCutTo125').show();
	}	
}

// function mainCalc() {
// 	// console.log('Starting calculations');
// 	if(exactZoneMatch){
// 		$( "#post_error_info" ).hide();
// 		if (tuffnellAreaName == "NI"){
// 			$('.tuffResults, #result_DHL_nextDay, #result_DHL_2to3Days, #result_DHL_am, #result_DHL_Saturday').text("Please contact us for orders to Northern Ireland");
// 		}else{
// 			calcTuffnells();
// 			calcDHL();
// 		}
// 		$( "#carr_outputs_wrap" ).show();
// 	}else{
// 		// console.log('postode input error');
// 		//Red info that postcode is not a valid input
// 		$( "#post_error_info" ).show();
// 		$( "#carr_outputs_wrap" ).hide();
// 	}
// }


// // check if postcode is exact match
// let exactZoneMatch = false;
// let tuffnellAreaName, dhlZoneName;
// function checkPostZone() {
// 	$.each(tuffnellZones, function(tuffZoneName, trimedZones){
// 		if($.inArray(postcode, trimedZones) !== -1) {
// 			// console.log(trimedZones);
// 			exactZoneMatch = true;
// 			tuffnellAreaName = tuffZoneName;
// 			//find DHL Zone
// 			$.each(dhlZones, function(dhlZoneNameIndex, trimedDHLZones){
// 				if($.inArray(postcode, trimedDHLZones) !== -1) {
// 					// console.log(trimedDHLZones);
// 					dhlZoneName = dhlZoneNameIndex;
// 					return false;
// 				}else{
// 					dhlZoneName = false;
// 				}
// 			});
// 			// console.log(tuffnellAreaName, dhlZoneName);
// 			return false;
// 		}else{
// 			// console.log('no');
// 			exactZoneMatch = false;
// 		}
// 	})
// 	mainCalc();
// }

//get user inputs
let postcode, pipeLen, address;
function getInputs() {
	//trim white spaces from postcode and read last 3 characters
	postcode = $.trim( $('#carr_input_postcode').val() );
	postcode = postcode.slice(0,-3);
	postcode = $.trim( postcode );
	postcode = postcode.toUpperCase();

	pipeLen = $('#carr_input_pipe').val();
	address = $('#carr_input_address').val();
	// checkPostZone();
	calcDHL();
}

// let calcButtonClicked = false;
let calcButtonClicked = true;
//Calculate on Click
$('#carr_calc').on("click", function(e){
	e.preventDefault();
	calcButtonClicked = true;
	getInputs();
})

//Calculate on input/select change only if calculate button was pressed at least once
$('#carr_input_postcode, #carr_input_pipe, #carr_input_address').on("change", function () {
	if(calcButtonClicked){
		getInputs();		
	}
})


$(function(){
	getInputs();
})


