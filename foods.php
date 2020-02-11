<?php
header('Content-type: text/xml');
//echo out XML
echo "<?xml version='1.0' encoding='utf-8' standalone='yes' ?>";
//echo response
echo "<response>";
$food = $_GET['food'];
$foodList = array('Rice','Banku','Kenkey','Tuozaafi','Kooko','Waakye');
//cheeck for food in array
if(in_array($food, $foodList)){
	echo "We do have ".$food."!";
}elseif($food ==""){
	echo "Please enter food to continue";
}else{
	echo "Sorry we don't have".$food."!";
}
echo "</response>";
