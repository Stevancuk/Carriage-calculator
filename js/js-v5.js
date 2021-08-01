"use strict";


// *******************
// *** DHL PRICES  ***
// *******************

let dhlAreaStandingCharge;
function calcDHL() {

	//DHL must be less than 1.25m
	if(pipeLen == 'less1.25') {
		$('.dhlCutTo125').hide();
	}
	if(pipeLen == '2.5m') {
		$('.dhlCutTo125').show();
	}
	if(pipeLen == '6m') {
		$('.dhlCutTo125').show();
	}	

	//check if DHL3-5 contains this postcode
	if (dhlZones['DHL3-5'].includes(postcode)) {
		console.log('DHL3-5 contains: ', postcode);
		let dhl35 = dhlPrices["DHL3-5"]["Zone"] + dhlSupplements["DHL3-5"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dhl35 += dhlPrices["DHL3-5"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dhl35 += dhlPrices["DHL3-5"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dhl35 += dhlPrices["DHL3-5"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dhl35 += dhlPrices["DHL3-5"]["residential"];
		}
		if (address == 'commercial') {
			dhl35 += dhlPrices["DHL3-5"]["commercial"];
		}

		$('#result_DHL_3to5Days').text(`£${dhl35}`);
	} else {
		$('#result_DHL_3to5Days').text("N/A");
		$('#result_DHL_3to5Days').siblings('.dhlCutTo125').hide();
		console.log('DHL3-5 does NOT contain: ', postcode);
	}

	//check if DHL2-3 contains this postcode
	if (dhlZones['DHL2-3'].includes(postcode)) {
		console.log('DHL2-3 contains: ', postcode);
		let dhl23 = dhlPrices["DHL2-3"]["Zone"] + dhlSupplements["DHL2-3"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dhl23 += dhlPrices["DHL2-3"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dhl23 += dhlPrices["DHL2-3"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dhl23 += dhlPrices["DHL2-3"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dhl23 += dhlPrices["DHL2-3"]["residential"];
		}
		if (address == 'commercial') {
			dhl23 += dhlPrices["DHL2-3"]["commercial"];
		}

		$('#result_DHL_2to3Days').text(`£${dhl23}`);
	} else {
		$('#result_DHL_2to3Days').text("N/A");
		$('#result_DHL_2to3Days').siblings('.dhlCutTo125').hide();
		console.log('DHL3-5 does NOT contain: ', postcode);
	}

	//check if DHLND contains this postcode
	if (dhlZones['DHLND'].includes(postcode)) {
		console.log('DHLND contains: ', postcode);
		let dhlND = dhlPrices["DHLND"]["Zone"] + dhlSupplements["DHLND"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dhlND += dhlPrices["DHLND"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dhlND += dhlPrices["DHLND"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dhlND += dhlPrices["DHLND"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dhlND += dhlPrices["DHLND"]["residential"];
		}
		if (address == 'commercial') {
			dhlND += dhlPrices["DHLND"]["commercial"];
		}

		$('#result_DHL_next_day').text(`£${dhlND}`);
	} else {
		$('#result_DHL_next_day').text("N/A");
		$('#result_DHL_next_day').siblings('.dhlCutTo125').hide();
		console.log('DHL3-5 does NOT contain: ', postcode);
	}

	//check if DHLAMND contains this postcode
	if (dhlZones['DHLAMND'].includes(postcode)) {
		console.log('DHLAMND contains: ', postcode);
		let dhlAMND = dhlPrices["DHLAMND"]["Zone"] + dhlSupplements["DHLAMND"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dhlAMND += dhlPrices["DHLAMND"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dhlAMND += dhlPrices["DHLAMND"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dhlAMND += dhlPrices["DHLAMND"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dhlAMND += dhlPrices["DHLAMND"]["residential"];
		}
		if (address == 'commercial') {
			dhlAMND += dhlPrices["DHLAMND"]["commercial"];
		}

		$('#result_DHL_next_day_am').text(`£${dhlAMND}`);
	} else {
		$('#result_DHL_next_day_am').text("N/A");
		$('#result_DHL_next_day_am').siblings('.dhlCutTo125').hide();
		console.log('DHL3-5 does NOT contain: ', postcode);
	}

}

// ******************
// *** DX PRICES  ***
// ******************

let tuffAreaStandingCharge, tuffnelResidential;
let tuffLengthCharge = 0;
function calcDX() {

	//check if DX3-5 contains this postcode
	if (dxZones['DX3-5'].includes(postcode)) {
		console.log('DX3-5 contains: ', postcode);
		let dx35 = dxPrices["DX3-5"]["Zone"] + dxSupplements["DX3-5"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dx35 += dxPrices["DX3-5"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dx35 += dxPrices["DX3-5"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dx35 += dxPrices["DX3-5"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dx35 += dxPrices["DX3-5"]["residential"];
		}
		if (address == 'commercial') {
			dx35 += dxPrices["DX3-5"]["commercial"];
		}

		$('#result_DX_3to5Days').text(`£${dx35}`);
	} else {
		$('#result_DX_3to5Days').text("N/A");
		console.log('DX3-5 does NOT contain: ', postcode);
	}

	//check if DX2-3 contains this postcode
	if (dxZones['DX2-3'].includes(postcode)) {
		console.log('DX2-3 contains: ', postcode);
		let dx23 = dxPrices["DX2-3"]["Zone"] + dxSupplements["DX2-3"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dx23 += dxPrices["DX2-3"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dx23 += dxPrices["DX2-3"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dx23 += dxPrices["DX2-3"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dx23 += dxPrices["DX2-3"]["residential"];
		}

		if (address == 'commercial') {
			dx23 += dxPrices["DX2-3"]["commercial"];
		}
		$('#result_DX_2to3Days').text(`£${dx23}`);
	} else {
		$('#result_DX_2to3Days').text("N/A");
		console.log('DX2-3 does NOT contain: ', postcode);
	}

	//check if DXND contains this postcode
	if (dxZones['DXND'].includes(postcode)) {
		console.log('DXND contains: ', postcode);
		let dxND = dxPrices["DXND"]["Zone"] + dxSupplements["DXND"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			dxND += dxPrices["DXND"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			dxND += dxPrices["DXND"]["2.5m"];			
		} else if (pipeLen == "6m") {
			dxND += dxPrices["DXND"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			dxND += dxPrices["DXND"]["residential"];
		}

		if (address == 'commercial') {
			dxND += dxPrices["DXND"]["commercial"];
		}
		$('#result_DX_next_day').text(`£${dxND}`);
	} else {
		$('#result_DX_next_day').text("N/A");
		console.log('DXND does NOT contain: ', postcode);
	}

	//check if DXAMND contains this postcode
	if (dxZones['DXAMND'].includes(postcode)) {
		console.log('DXAMND contains: ', postcode);
		let DxAMND = dxPrices["DXAMND"]["Zone"] + dxSupplements["DXAMND"]["value"];

		// Pipe Length
		if (pipeLen == "less1.25") {
			DxAMND += dxPrices["DXAMND"]["less1.25m"];
		} else if (pipeLen == "2.5m") {
			DxAMND += dxPrices["DXAMND"]["2.5m"];			
		} else if (pipeLen == "6m") {
			DxAMND += dxPrices["DXAMND"]["6m"];			
		}

		// Commercial/Residential
		if (address == 'residential') {
			DxAMND += dxPrices["DXAMND"]["residential"];
		}

		if (address == 'commercial') {
			DxAMND += dxPrices["DXAMND"]["commercial"];
		}
		$('#result_DX_next_day_am').text(`£${DxAMND}`);
	} else {
		$('#result_DX_next_day_am').text("N/A");
		console.log('DXAMND does NOT contain: ', postcode);
	}
}

function mainCalc() {
	calcDHL();
	calcDX();


	// // console.log('Starting calculations');
	// if(exactZoneMatch){
	// 	$( "#post_error_info" ).hide();
	// 	if (tuffnellAreaName == "NI"){
	// 		$('.tuffResults, #result_DHL_nextDay, #result_DHL_2to3Days, #result_DHL_am, #result_DHL_Saturday').text("Please contact us for orders to Northern Ireland");
	// 	}else{
	// 		calcDHL();
	// 		calcDX();
	// 	}
	// 	$( "#carr_outputs_wrap" ).show();
	// }else{
	// 	// console.log('postode input error');
	// 	//Red info that postcode is not a valid input
	// 	$( "#post_error_info" ).show();
	// 	$( "#carr_outputs_wrap" ).hide();
	// }
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
	
	mainCalc();
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


