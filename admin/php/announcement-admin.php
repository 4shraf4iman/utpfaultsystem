<?php
include '../../php/config.php';
header('Content-Type: application/json');

	switch ($_POST['functionname']) {
		case 'getAnnouncement':
			getAnnouncement($conn);
			break;
		case 'postAnnouncement':
			postAnnouncement($conn);
			break;
		default:
			echo "error function not found";
			break;
	}


	function getAnnouncement($conn) {
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

	function postAnnouncement($conn){
		$subject = $_POST['data']['subject'];
		$announcement = $_POST['data']['announcement'];
		$query = "INSERT INTO announcement (subject, announcement) VALUES ('$subject', '$announcement')";

		if ($conn->query($query)) {
			$last_id = $conn->insert_id;
			echo json_encode($last_id);
		} else {
		    echo json_encode("Error: " . $conn->error);
		}
	}
?>