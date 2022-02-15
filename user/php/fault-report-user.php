<?php
include '../../php/config.php';
header('Content-Type: application/json');
switch ($_POST['functionname']) {
	case 'hostel':
		hostel($conn);
		break;
	case 'cafe':
		cafe($conn);
		break;
	default:
		echo "error function not found";
		break;
}

function hostel($conn) {
	$id = $_SESSION['id'];
	$query = "INSERT INTO fault (student_id, type, status) VALUES ('$id', 'hostel', 'idle')";

	if ($conn->query($query)) {
		$village = $_POST['data']['village'];
		$floor = $_POST['data']['floor'];
		$house = $_POST['data']['house'];
		$room = $_POST['data']['room'];

		$category = $_POST['data']['category'];
		$complaint = $_POST['data']['complaint'];


		$fault_id = $conn->insert_id;
		$ndquery = "INSERT INTO hostel_fault (fault_id, village, house, room, floor, category, complaint) VALUES ('$fault_id', '$village', '$house', '$room', '$floor', '$category', '$complaint')";

		if ($conn->query($ndquery)) {
			echo json_encode($fault_id);
		} else {
		    echo json_encode("Error: " . $conn->error);
		}

	} else {
	    echo json_encode("Error: " . $conn->error);
	}

	mysqli_close($conn);
}


function cafe($conn) {
	$id = $_SESSION['id'];
	$query = "INSERT INTO fault (student_id, type, status) VALUES ('$id', 'cafe', 'idle')";

	if ($conn->query($query)) {
		$cafeName = $_POST['data']['cafe_name'];
		$village = $_POST['data']['village'];
		$category = $_POST['data']['category'];
		$complaint = $_POST['data']['complaint'];


		$fault_id = $conn->insert_id;
		$ndquery = "INSERT INTO cafe_fault (fault_id, cafe_name, village, category, complaint) VALUES ('$fault_id', '$cafeName', '$village', '$category', '$complaint')";

		if ($conn->query($ndquery)) {
			echo json_encode($fault_id);
		} else {
		    echo json_encode("Error: " . $conn->error);
		}

	} else {
	    echo json_encode("Error: " . $conn->error);
	}

	mysqli_close($conn);
}
?>