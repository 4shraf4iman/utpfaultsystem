<?php
include '../../php/config.php';
header('Content-Type: application/json');

	switch ($_GET['functionname']) {
		case 'announcement':
			announcement($conn);
			break;
		default:
			echo "error function not found";
			break;
	}


	function announcement($conn) {
		$query = "SELECT * FROM announcement";

		if($results = $conn->query($query)){
			if($results->num_rows){
				while ($row = $results->fetch_assoc()) {
					$res[] = $row;
				}
		    		echo json_encode($res);
			} else {
		    	echo json_encode("no announcement");
			}
		} else {
			die('error: ' . $conn->error);
		}
	}
?>