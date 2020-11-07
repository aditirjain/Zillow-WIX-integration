import wixData from 'wix-data';
import {getZohoValueZip} from 'backend/zohoApi';
import {getZohoHomeValue} from 'backend/zohoApi';

$w.onReady(function () {
	$w('#text461').text = "";
	$w('#text462').text = ""; 
	$w('#text463').text = "";
});


export function input1_input(event) {
	let newValue = event.target.value;
	if (newValue.length === 5){
		getZohoValueZip(newValue)
		.then(regionCity => $w('#text462').text = regionCity + ".")
	}
	if (newValue.length === 5){
		getZohoHomeValue(newValue)
		.then(dataValue => $w('#text461').text = dataValue);
	}
}

// export function input1_homeValue(event) {
// 	let newValue = event.target.value;
// 	if (newValue.length === 5){
// 		getZohoHomeValue(newValue)
// 		.then(dataValue => $w('#text461').text = dataValue);
// 	// let newValue = event.target.value;
// 	// wixData.query("zillow_home_value")
// 	// 	.eq("zipcode", ((Number(newValue)).toString()))
// 	// 	.descending("date") 
// 	// 	.limit(1)
// 	// 	.find()
// 	// 	.then( (results)=> {
// 	// 		console.log(results.items);
// 	// 		$w('#text461').text = '$'+results.items[0].zhvi.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(".00","");
// 	// 		$w('#text462').text = results.items[0].city+", "+results.items[0].state;
// 	// 	}).catch( (err) => {
// 	// 		$w('#text461').text = "";
// 	// 		$w('#text462').text = ""; 
// 	// });
// 	}
	
// }

export function button1_click(event) {
	let zhvi;
	try {
		zhvi = $w('#text461').text.match(/\d+/g).join('');
	} catch (err) {
		zhvi = 0;
	} 	
	
	let commission = $w('#input2').value;
	let split = $w('#input3').value;
	let goal = $w('#input4').value;
	console.log(Number(zhvi));
	console.log(Number(commission));
	console.log(Number(split));
	console.log(Number(goal));
	if (zhvi != 0 && commission != 0 && split != 0 && goal != 0) {
		let result = (Number(goal))/(Number(zhvi)*Number(commission)*.01*split*.01);
		result = result.toFixed(0);
		//console.log(result);
		$w('#text463').text = result+" Deals/Year";
	}
	else if (zhvi == 0) {
		$w('#text463').text = "Sorry, we don't have records for this zip code";
	}
	else{
		$w('#text463').text = 'Missing Field';
	}
}