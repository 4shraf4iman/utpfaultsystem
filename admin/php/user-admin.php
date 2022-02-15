<?php
include '../../php/config.php';
header('Content-Type: application/json');


	switch ($_POST['functionname']) {
		case 'getUser':
			getUser($conn);
			break;
		case 'blockUnblock':
			blockUnblock($conn);
			break;
		default:
			echo "error function not found";
			break;
	}


	function getUser($conn) {
		$query = "SELECT * FROM user WHERE type = 'user'";

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

	function blockUnblock($conn) {
		$id = $_POST['data']['id'];
		$type = $_POST['data']['type'];
		$query = "UPDATE user SET status = '$type' WHERE id = '$id'";

		//echo json_encode("lol");
		if($results = $conn->query($query)){
		    echo json_encode("success");
		} else {
			echo json_encode('error: ' . $conn->error);
		}
	}
?>