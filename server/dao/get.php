<?php
include("conexao.php");



$postdata = file_get_contents("php://input");
$oRequestInfo = json_decode($postdata);



$funcao = $_GET['f'];
$table	= $_GET['table'];
// $oParametros = $_GET['oParametros'];

print_r($_GET);


select($table);


function select($table, $parameters = '*'){
	$sPamameters = glueParameters($parameters);
	$sQuery = "SELECT $sPamameters FROM $table";

	$oStmt = mysql_query($sQuery) or die($sQuery . mysql_error()); 

	$aResult = array();
	while($oResult = mysql_fetch_object($oStmt)){
		array_push($aResult, (array)$oResult);
	}
	
	echo json_encode($aResult);
}

function glueParameters($parameters){
	foreach ($parameters as $parameter) {
		$aParameters[] = $parameter;
	}

	if ($sPamameters) {
		$sPamameters = implode(', ', $aParameters);
	} else {
		$sPamameters = '*';		
	}

	return $sPamameters;
}

?>