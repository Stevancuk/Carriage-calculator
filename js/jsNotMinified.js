"use strict";

//Addition
//Zones that only have 2-3 day delievery
let tuffZonesOnly2_3DaysOption = ["NRI", "IOM", "SLY", "CHI", "SCI"];

// *************************
// *** Tuffnells PRICES  ***
// *************************

let tuffAreaStandingCharge, tuffLengthCharge, tuffnelResidential;
function calcTuffnells() {

	if(pipeLen == 'less1.25'){
		$('.tuffResults').hide();
	}else{
		//Area Standing Charge
		tuffAreaStandingCharge = tuffnellPrices[tuffnellAreaName]['Area'];

		//If pipe is 2.5m or less there is no charge
		if(pipeLen == 'less1.25'){
			tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['Less2.5'];
		}else if(pipeLen == '1.25to5'){
			tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['3to5'];
		}else {
			tuffLengthCharge = tuffnellPrices[tuffnellAreaName]['6m'];
		}

		//Residential Supplement
		tuffnelResidential = 0;

		if( $('#carr_input_address').val() == 'residential' ){
			tuffnelResidential = tuffnellPrices[tuffnellAreaName]['residential'];
		}
		// console.log('Residential: ', tuffnelResidential);

		//Write results
		let tuffSum = tuffAreaStandingCharge + tuffLengthCharge + tuffnelResidential;

		//Remove disabled options
		//One more condition added - If zone is in array  tuffnellAreaName  -> show only 2-3day option
		if ( tuffnellSupplements["NextWorkDay"]["visible"] && !tuffZonesOnly2_3DaysOption.includes(tuffnellAreaName) ){
			$('#result_tuff_nextDay').html(`£<span>${(tuffSum + tuffnellSupplements["NextWorkDay"]["value"]).toFixed(2)} </span>`);
		}else{ $('#result_tuff_nextDay').text('N/A'); }

		if ( tuffnellSupplements["2-3Day"]["visible"] ){
			$('#result_tuff_2to3Days').html(`£<span>${(tuffSum + tuffnellSupplements["2-3Day"]["value"]).toFixed(2)} </span>`);
		}else{ $('#result_tuff_2to3Days').text('N/A'); }

		if ( tuffnellSupplements["AM"]["visible"] && !tuffZonesOnly2_3DaysOption.includes(tuffnellAreaName) ){
			$('#result_tuff_am').html(`£<span>${(tuffSum + tuffnellSupplements["AM"]["value"]).toFixed(2)} </span>`);
		}else{ $('#result_tuff_am').text('N/A'); }

		if ( tuffnellSupplements["pre10:30"]["visible"] && !tuffZonesOnly2_3DaysOption.includes(tuffnellAreaName) ){
			$('#result_tuff_pre1030').html(`£<span>${(tuffSum + tuffnellSupplements["pre10:30"]["value"]).toFixed(2)} </span>`);
		}else{ $('#result_tuff_pre1030').text('N/A'); }

		if ( tuffnellSupplements["Saturday"]["visible"] && !tuffZonesOnly2_3DaysOption.includes(tuffnellAreaName) ){
			$('#result_tuff_Saturday').html(`£<span>${(tuffSum + tuffnellSupplements["Saturday"]["value"]).toFixed(2)} </span>`);
		}else{ $('#result_tuff_Saturday').text('N/A'); }

		$('.tuffResults').show();
	}	
}

let dhlAreaStandingCharge;
// *******************
// *** DHL PRICES  ***
// *******************

//Addition
//Zones that only have 2-3 day delievery
let dhlZonesOnly2_3DaysOption = ["C", "D"];

function calcDHL() {

	//Zone Standing Charge
	dhlAreaStandingCharge = dhlPrices[dhlZoneName]['Zone'];


	//Remove disabled options
	//DHL must be less than 1.25m
	if(pipeLen == 'less1.25') {
		$('.dhlCutTo125').hide();
	}
	if(pipeLen == '1.25to5') {
		$('.dhlCutTo125').text('Pipe must be cut to 1.25m');
		$('.dhlCutTo125').show();
	}
	if(pipeLen == '6m') {
		$('.dhlCutTo125').text('Pipe must be cut to <1.25m');
		$('.dhlCutTo125').show();
	}
	
	//One more condition added - If zone is in array  dhlZonesOnly2_3DaysOption  -> show only 2-3day option
	if ( dhlSupplements["NextWorkDay"]["visible"] && !dhlZonesOnly2_3DaysOption.includes(dhlZoneName) ){
		$('#result_DHL_nextDay').html(`£<span>${(dhlAreaStandingCharge + dhlSupplements["NextWorkDay"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_DHL_nextDay').text('N/A'); }

	if ( dhlSupplements["2-3Day"]["visible"] ){
		$('#result_DHL_2to3Days').html(`£<span>${(dhlAreaStandingCharge + dhlSupplements["2-3Day"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_DHL_2to3Days').text('N/A'); }

	if ( dhlSupplements["AM"]["visible"] && !dhlZonesOnly2_3DaysOption.includes(dhlZoneName) ){
		$('#result_DHL_am').html(`£<span>${(dhlAreaStandingCharge + dhlSupplements["AM"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_DHL_am').text('N/A'); }

	if ( dhlSupplements["pre10:30"]["visible"] && !dhlZonesOnly2_3DaysOption.includes(dhlZoneName) ){
		$('#result_DHL_pre1030').html(`£<span>${(dhlAreaStandingCharge + dhlSupplements["pre10:30"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_DHL_pre1030').text('N/A'); }

	if ( dhlSupplements["Saturday"]["visible"] && !dhlZonesOnly2_3DaysOption.includes(dhlZoneName) ){
		$('#result_DHL_Saturday').html(`£<span>${(dhlAreaStandingCharge + dhlSupplements["Saturday"]["value"]).toFixed(2)} </span>`);
	}else{ $('#result_DHL_Saturday').text('N/A'); }		
}

function mainCalc() {
	// console.log('Starting calculations');
	if(exactZoneMatch){
		$( "#post_error_info" ).hide();
		calcTuffnells();
		calcDHL();
		$( "#carr_outputs_wrap" ).show();
	}else{
		// console.log('postode input error');
		//Red info that postcode is not a valid input
		$( "#post_error_info" ).show();
		$( "#carr_outputs_wrap" ).hide();
	}
}


// check if postcode is exact match
let exactZoneMatch = false;
let tuffnellAreaName, dhlZoneName;
function checkPostZone() {
	$.each(tuffnellZones, function(tuffZoneName, trimedZones){
		if($.inArray(postcode, trimedZones) !== -1) {
			// console.log(trimedZones);
			exactZoneMatch = true;
			tuffnellAreaName = tuffZoneName;
			//find DHL Zone
			$.each(dhlZones, function(dhlZoneNameIndex, trimedDHLZones){
				if($.inArray(postcode, trimedDHLZones) !== -1) {
					// console.log(trimedDHLZones);
					dhlZoneName = dhlZoneNameIndex;
					return false;
				}else{
					dhlZoneName = false;
				}
			});
			return false;
		}else{
			// console.log('no');
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
	postcode = postcode.toUpperCase();

	pipeLen = $('#carr_input_pipe').val();
	address = $('#carr_input_address').val();
	checkPostZone();
}

let calcButtonClicked = false;
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
	// getInputs();
})

