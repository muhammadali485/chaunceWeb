// Pay before taxes
function grossPay(tothrs){
	if(tothrs<=40){
		return(tothrs * 15);
	}
	//overtime pay
	else{
		return((40*15)+(tothrs-40)*(1.5)*(15));
	}
}

//Upon loading the page when page is opened 
function process(){
	//Creates Array 
	var arr = [];
	var i = 1;
	
	//Open-ended loop
	while(true){
		var workhrs = prompt("Please input number of hours worked by employee#"+(i)+": to exit -1",0);
		
		//Coverting hours to int value 
		workhrs = parseInt(workhrs);
		
		// if user enters a sentinel value 
		if(workhrs == -1)
			break;
		
		//Values are stored into an array 
		arr.push(workhrs);
		i++;
	}

//Creating Table 
document.write("<table border=1 align=\"center\">");

document.write("<tr>");
document.write("<td> Employee # </td>");
document.write("<td> Hours Worked </td>");
document.write("<td> Gross Pay(in $) </td>");
document.write("</tr>");

//parsing over each element in the array
for(i=0; i<arr.length; i++){
	document.write("<tr>");
    document.write("<td>" + (i+1) + "</td>");
    document.write("<td>" + arr[i] + "</td>");
    document.write("<td>" + grossPay(arr[i]).toFixed(2) + "</td>");
    document.write("</tr>");
}
	document.write("</table>");
	
}



	
