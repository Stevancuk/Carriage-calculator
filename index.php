<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Carriage Calculator</title>
	<link rel="stylesheet" href="css/css-carriage-v1.css">
</head>
<body>
	<div id="carr_wrap">
		<div id="carr_inputs_wrap">
			<form>
				<div id="three_inputs_wrap">

					<div id="postcode_wrap">
						<label for="carr_input_postcode"> Your Postcode: </label>
						<input type="text" id="carr_input_postcode" value="">
						<p id="post_error_info"><i class="fas fa-exclamation-circle"></i> Not a recognised UK postcode </p>
					</div>

					<div id="pipe_wrap">
						<label for="carr_input_pipe"> Your Pipe: </label>
						<select id="carr_input_pipe">
							<option value="less1.25"> <1.25m (or fittings/valves only) </option>
							<option value="1.25to5"> 1.25m - 5m </option>
							<option value="6m"> 6m </option>
						</select>
					</div>

					<div id="address_wrap">
						<label for="carr_input_address"> Your Address: </label>
						<select id="carr_input_address">
							<option value="commercial"> commercial </option>
							<option value="residential"> residential </option>
						</select>
					</div>

				</div>
				<button id="carr_calc"> Calculate carriage prices </button>
			</form>
		</div>

		<div id="carr_outputs_wrap">

			<div id="carr_table_wrap">

				<div id="carr_table_headline" class="carrTableRows">
					<div> <p> Shipping Method </p> </div>
					<div> <p> Tuffnells Options </p> </div>
					<div> <p> DHL Options </p> </div>
				</div>

				<div class="carrTableRows">
					<div> <p> Next working day </p> </div>
					<div> <p class="tuffResults" id="result_tuff_nextDay"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_nextDay"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> 2-3 working day </p> </div>
					<div> <p class="tuffResults" id="result_tuff_2to3Days"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_2to3Days"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> AM </p> </div>
					<div> <p class="tuffResults" id="result_tuff_am"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_am"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> Pre 10:30am </p> </div>
					<div> <p class="tuffResults" id="result_tuff_pre1030"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_pre1030"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> Saturday </p> </div>
					<div> <p class="tuffResults" id="result_tuff_Saturday"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_Saturday"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>
			</div>
		</div>
	</div> <!-- carr_wrap -->
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="js/dhlPrices.js"></script>
<script src="js/dhlZones.js"></script>
<script src="js/dhlSupplements.js"></script>
<script src="js/tuffnellPrices.js"></script>
<script src="js/tuffnellZones.js"></script>
<script src="js/tuffnellSupplements.js"></script>

<script>
	"use strict";let tuffAreaStandingCharge,tuffLengthCharge,tuffnelResidential,dhlAreaStandingCharge;function calcTuffnells(){if("less1.25"==pipeLen)$(".tuffResults").hide();else{tuffAreaStandingCharge=tuffnellPrices[tuffnellAreaName].Area,tuffLengthCharge="less1.25"==pipeLen?tuffnellPrices[tuffnellAreaName]["Less2.5"]:"1.25to5"==pipeLen?tuffnellPrices[tuffnellAreaName]["3to5"]:tuffnellPrices[tuffnellAreaName]["6m"],tuffnelResidential=0,"residential"==$("#carr_input_address").val()&&(tuffnelResidential=tuffnellPrices[tuffnellAreaName].residential);let e=tuffAreaStandingCharge+tuffLengthCharge+tuffnelResidential;tuffnellSupplements.NextWorkDay.visible?$("#result_tuff_nextDay").html(`£<span>${(e+tuffnellSupplements.NextWorkDay.value).toFixed(2)} </span>`):$("#result_tuff_nextDay").text("N/A"),tuffnellSupplements["2-3Day"].visible?$("#result_tuff_2to3Days").html(`£<span>${(e+tuffnellSupplements["2-3Day"].value).toFixed(2)} </span>`):$("#result_tuff_2to3Days").text("N/A"),tuffnellSupplements.AM.visible?$("#result_tuff_am").html(`£<span>${(e+tuffnellSupplements.AM.value).toFixed(2)} </span>`):$("#result_tuff_am").text("N/A"),tuffnellSupplements["pre10:30"].visible?$("#result_tuff_pre1030").html(`£<span>${(e+tuffnellSupplements["pre10:30"].value).toFixed(2)} </span>`):$("#result_tuff_pre1030").text("N/A"),tuffnellSupplements.Saturday.visible?$("#result_tuff_Saturday").html(`£<span>${(e+tuffnellSupplements.Saturday.value).toFixed(2)} </span>`):$("#result_tuff_Saturday").text("N/A"),$(".tuffResults").show()}}function calcDHL(){dhlAreaStandingCharge=dhlPrices[dhlZoneName].Zone,"less1.25"==pipeLen&&$(".dhlCutTo125").hide(),"1.25to5"==pipeLen&&($(".dhlCutTo125").text("Pipe must be cut to 1.25m"),$(".dhlCutTo125").show()),"6m"==pipeLen&&($(".dhlCutTo125").text("Pipe must be cut to <1.25m"),$(".dhlCutTo125").show()),dhlSupplements.NextWorkDay.visible?$("#result_DHL_nextDay").html(`£<span>${(dhlAreaStandingCharge+dhlSupplements.NextWorkDay.value).toFixed(2)} </span>`):$("#result_DHL_nextDay").text("N/A"),dhlSupplements["2-3Day"].visible?$("#result_DHL_2to3Days").html(`£<span>${(dhlAreaStandingCharge+dhlSupplements["2-3Day"].value).toFixed(2)} </span>`):$("#result_DHL_2to3Days").text("N/A"),dhlSupplements.AM.visible?$("#result_DHL_am").html(`£<span>${(dhlAreaStandingCharge+dhlSupplements.AM.value).toFixed(2)} </span>`):$("#result_DHL_am").text("N/A"),dhlSupplements["pre10:30"].visible?$("#result_DHL_pre1030").html(`£<span>${(dhlAreaStandingCharge+dhlSupplements["pre10:30"].value).toFixed(2)} </span>`):$("#result_DHL_pre1030").text("N/A"),dhlSupplements.Saturday.visible?$("#result_DHL_Saturday").html(`£<span>${(dhlAreaStandingCharge+dhlSupplements.Saturday.value).toFixed(2)} </span>`):$("#result_DHL_Saturday").text("N/A")}function mainCalc(){exactZoneMatch?($("#post_error_info").hide(),calcTuffnells(),calcDHL(),$("#carr_outputs_wrap").show()):($("#post_error_info").show(),$("#carr_outputs_wrap").hide())}let tuffnellAreaName,dhlZoneName,postcode,pipeLen,address,exactZoneMatch=!1;function checkPostZone(){$.each(tuffnellZones,function(e,t){if(-1!==$.inArray(postcode,t))return exactZoneMatch=!0,tuffnellAreaName=e,$.each(dhlZones,function(e,t){if(-1!==$.inArray(postcode,t))return dhlZoneName=e,!1;dhlZoneName=!1}),!1;exactZoneMatch=!1}),mainCalc()}function getInputs(){postcode=(postcode=$.trim($("#carr_input_postcode").val())).slice(0,-3),postcode=(postcode=$.trim(postcode)).toUpperCase(),pipeLen=$("#carr_input_pipe").val(),address=$("#carr_input_address").val(),checkPostZone()}let calcButtonClicked=!1;$("#carr_calc").on("click",function(e){e.preventDefault(),calcButtonClicked=!0,getInputs()}),$("#carr_input_postcode, #carr_input_pipe, #carr_input_address").on("change",function(){calcButtonClicked&&getInputs()}),$(function(){});
</script>
</body>
</html>