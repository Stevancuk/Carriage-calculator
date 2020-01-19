<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Carriage Calculator</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	<link rel="stylesheet" href="css/css-v1.css">
</head>
<body>
	<div id="carr_wrap">
		<div id="carr_inputs_wrap">
			<form>
				<div id="three_inputs_wrap">

					<div id="postcode_wrap">
						<label for="carr_input_postcode"> Your Postcode: </label>
						<input type="text" id="carr_input_postcode" value="LL58 3PZ ">
						<i class="far fa-question-circle carrInfos"></i>
						<p id="post_error_info"><i class="fas fa-exclamation-circle"></i> Postcode input error</p>
					</div>

					<div id="pipe_wrap">
						<label for="carr_input_pipe"> Your Pipe: </label>
						<input type="number" id="carr_input_pipe" value="2.5">
						<i class="far fa-question-circle carrInfos"></i>
					</div>

					<div id="address_wrap">
						<label for="carr_input_address"> Your Address: </label>
						<input type="text" id="carr_input_address" value="Abbey Road 12">
						<i class="far fa-question-circle carrInfos"></i>
					</div>

				</div>
				<button id="carr_calc"> Calculate carriage prices </button>
			</form>

		</div>

		<div id="carr_outputs_wrap">

			<div id="carr_tuffnells_wrap">
				<h3> Tuffnells </h3>

				<div id="tuff_headlines">
					<div id="tuff_head1">
						<p class="boldHead"> Area </p>
						<p id="tuff_result1"> Lon </p>
					</div>
					<div id="tuff_head2">
						<p class="boldHead"> Area Standing Charge </p>
						<p id="tuff_result2"> £<span>7.09</span> </p>
					</div>
					<div id="tuff_head3">
						<p class="boldHead" id="tuff_pipe_length"> !!Dinamically text length!!! </p>
						<p id="tuff_result3"> £<span>4.95</span> </p>
					</div>
					<div id="tuff_head4">
						<p class="boldHead"> Residential Supplement </p>
						<p id="tuff_result4"> £<span>5.57</span> </p>
					</div>					
				</div>

				<h4> Tuffnells Shipping Service Supplements </h4>

				<div id="tuff_supp_headlines">
					<div id="tuff_supp_head1">
						<p class="boldHead"> 2-3 Day Delivery </p>
						<p id="tuff_supp_result1"> £<span>-1.50</span> </p>
					</div>
					<div id="tuff_supp_head2">
						<p class="boldHead"> Next Working Day Delivery </p>
						<p id="tuff_supp_result2"> £<span>0.00</span> </p>
					</div>
					<div id="tuff_supp_head3">
						<p class="boldHead"> AM Delivery </p>
						<p id="tuff_supp_result3"> £<span>6.13</span> </p>
					</div>
					<div id="tuff_supp_head4">
						<p class="boldHead"> Pre 10:30am Delivery </p>
						<p id="tuff_supp_result4"> £<span>23.37</span> </p>
					</div>
					<div id="tuff_supp_head5">
						<p class="boldHead"> Saturday Delivery </p>
						<p id="tuff_supp_result5"> £<span>24.48</span> </p>
					</div>					
				</div>

			</div>

			<div id="carr_dhl_wrap">
				<h3> DHL </h3>

				<div id="dhl_headlines">
					<div id="dhl_head1">
						<p class="boldHead"> Zone </p>
						<p id="dhl_result1"> A </p>
					</div>
					<div id="dhl_head2">
						<p class="boldHead"> Zone Standing Charge </p>
						<p id="dhl_result2"> £<span>7.09</span> </p>
					</div>
					<div id="dhl_head3">
						<p class="boldHead" id="dhl_pipe_length"> No Pipe/1.25m Lengths </p>
						<p id="dhl_result3"> £<span>0.00</span> </p>
					</div>
					<div id="dhl_head4">
						<p class="boldHead"> Lengths Above 1.25m </p>
						<p id="dhl_result4"> Pipe must be cut to 1.25m </p>
					</div>					
				</div>

				<h4> DHL Shipping Service Supplements </h4>

				<div id="dhl_supp_headlines">
					<div id="dhl_supp_head1">
						<p class="boldHead"> 2-3 Day Delivery </p>
						<p id="dhl_supp_result1"> £<span>-1.50</span> </p>
					</div>
					<div id="dhl_supp_head2">
						<p class="boldHead"> Next Working Day Delivery </p>
						<p id="dhl_supp_result2"> £<span>0.00</span> </p>
					</div>
					<div id="dhl_supp_head3">
						<p class="boldHead"> AM Delivery </p>
						<p id="dhl_supp_result3"> £<span>4.16</span> </p>
					</div>
					<div id="dhl_supp_head4">
						<p class="boldHead"> Pre 10:30am Delivery </p>
						<p id="dhl_supp_result4"> £<span>8.29</span> </p>
					</div>
					<div id="dhl_supp_head5">
						<p class="boldHead"> Saturday Delivery </p>
						<p id="dhl_supp_result5"> £<span>10.37</span> </p>
					</div>					
				</div>

			</div>	

		</div>


	</div> <!-- carr_wrap -->
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="js/js-v1.js"></script>
</body>
</html>