// Page loader
jQuery(document).ready(function($){

	// Setup the onclick events for the nav menu
	navSetup();
	
	// Init Line Graphs
	initLineGraph();

});

function navSetup(){
	// Bind open data set events to Nav buttons
	$("#navDataSetA").click(navDataSetAOpen);
	$("#navDataSetB").click(navDataSetBOpen);
}

// Show data set A
function navDataSetAOpen(){
	console.log('Clicked A');
	$("#dataSetASect").css('visibility','visible');
	$("#dataSetBSect").css('visibility','hidden');
	$("#navDataSetA").css('background-color','white');
	$("#navDataSetB").css('background-color','LightGrey');
}

// Show data set B
function navDataSetBOpen(){
	console.log('Clicked B');
	$("#dataSetASect").css('visibility','hidden');
	$("#dataSetBSect").css('visibility','visible');
	$("#navDataSetA").css('background-color','LightGrey');
	$("#navDataSetB").css('background-color','white');
}