<?
function select($table, $parameters){
	$sPamameters = glueParameters($parameters);
	$sql = "SELECT $sPamameters FROM $table";
	
}

function glueParameters($parameters){
	foreach ($parameters as $parameter) {
		$aParameters[] = $parameter;
	}

	$sPamameters = implode(', ', $aParameters);
	return $sPamameters;
}

?>