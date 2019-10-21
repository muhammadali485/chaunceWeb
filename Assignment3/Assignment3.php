<!DOCTYPE html>

<html>

<head>

<link type='text/css' rel='stylesheet' href='style.css'/>


<title>Assignment3</title>

</head>

<body>
<h3>PART 1</h3>

<h4>Click Below Button to know weather Charlie ate my lunch or not</h4>

<form action="Assignment3.php" method="post">

<input style="background-color: white;color: black;border: 2px solid #4CAF50; font-size: 20px;" type="submit" name="flip" value="Click Here" />

</form>

<?php

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['flip'])){

if(isBitten())

{

echo "<h1>Charlie ate my lunch!</h1>";

}

else

{

echo "<h1>Charlie did not eat my lunch!</h1>";

}

}

function isBitten(){

$flip = rand(0,1);

if ($flip){

return true;

}

else {

return false;

}

}

?>

<h3>PART 2</h3>
<?php
$count=0;
echo "<h4 style='text-align:left'>Checker board</h4>";

echo '<table style="width:300px" border="1" cellspacing="1" cellpadding="1" align="center">'; //table tag to create the checker board

for($x=0;$x<9;$x++)

{

echo "<tr>";

for($y=0;$y<9;$y++)

{

$count=$count+1;

if($count%2 == 0)

{

echo '<td height="35" width="35" style="background-color:red;"></td>'; // using td tag of table to create the cells and assign background color alternately

}

else{

echo '<td height="35" width="35" style="background-color:black;>"</td>';

}

}

echo "</tr>";

}

echo "</table></html>";
?>

<h3>PART 3</h3>
<p>1) Months in order</p>
<?php
$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
for ($x = 0; $x <= 11; $x++) {
echo "$month[$x], ";
}
?>
<p>2) Months in alphabetical order</p>
<?php
$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
sort($month);
for ($x = 0; $x <= 11; $x++) {
echo "$month[$x], ";
}
?>
<p>3) Repeating steps 1 and two using FOREACH </p>
<p>I</p>
<?php
$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
foreach ($month as &$val) {
echo "$val, ";
}
?>
<p>II</p>
<?php
$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
sort($month);
foreach ($month as &$val) {
echo "$val, ";
}
?>

<h3> PART 4</p>
<h4>10 Best Restaurant In Atlanta</h4>

<?php
$restaurant = array("Chama Gaucha"=>"40.50",

"Aviva by Kameel"=> "15.00",

"Bone's Restaurant"=> "65.00",

"Umi Sushi Buckhed"=> "40.50",

"Fandangles"=>"30.00",

"Capital Grille"=>"60.50",

"Canoe"=> "35.50",

"One Flew South"=>"21.00",

"Fox Bros.BBQ"=>"15.00",

"South City Kitechen Midtown"=>"29.00");
?>
<table border="1">
<?php foreach($restaurant as $x=>$y): ?>
<tr>
	<td><?php echo ($x);        ?></td>
	<td><?php echo "Average Cost $y";       ?></td>
</tr>

<?php endforeach; ?>
</table>

<p> Ordered by price<p>
<table border="1">
<?php asort($restaurant); foreach($restaurant as $x=>$y): ?>
<tr>
	<td><?php echo ($x);        ?></td>
	<td><?php echo "Average Cost $y";       ?></td>
</tr>

<?php endforeach; ?>
</table>

<p> Ordered by Name</p>
<table border="1">
<?php ksort($restaurant); foreach($restaurant as $x=>$y): ?>
<tr>
	<td><?php echo ($x);        ?></td>
	<td><?php echo "Average Cost $y";       ?></td>
</tr>

<?php endforeach; ?>
</table>
<pre>

</pre>

</body>

</html>

