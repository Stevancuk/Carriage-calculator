<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Carriage Calculator</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	<link rel="stylesheet" href="css/css-v3.css">
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
							<option value="less1.25"> <1.25m (includes no pipe) </option>
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
					<div> <p id="result_tuff_nextDay"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_nextDay"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> 2-3 working day </p> </div>
					<div> <p id="result_tuff_2to3Days"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_2to3Days"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> AM </p> </div>
					<div> <p id="result_tuff_am"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_am"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> Pre 10:30am </p> </div>
					<div> <p id="result_tuff_pre1030"> £<span>00.00</span> </p> </div>
					<div> 
						<p id="result_DHL_pre1030"> £<span>00.00</span> </p> 
						<p class="dhlCutTo125"> Pipe must be cut to 1.25m </p>
					</div>
				</div>

				<div class="carrTableRows">
					<div> <p> Saturday </p> </div>
					<div> <p id="result_tuff_Saturday"> £<span>00.00</span> </p> </div>
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
<script src="js/js-v3.js"></script>
</body>
</html>