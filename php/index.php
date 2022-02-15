<?php
include 'config.php';
header('Content-Type: application/json');
switch ($_POST['functionname']) {
	case 'login':
		login($conn);
		break;
	case 'signup':
		signup($conn);
		break;
	default:
		echo "error function not found";
		break;
}


function login($conn) {
	$id = $_POST['id'];
	$password = $_POST['pw'];
	if($_POST['id'] == "admin"){
		$query = "SELECT * FROM user WHERE name='$id' AND password='$password'";
	} else {
		$query = "SELECT * FROM user WHERE id='$id' AND password='$password'";
	}

	if($results = $conn->query($query)){
		if($results->num_rows){
			while ($row = $results->fetch_assoc()) {
				if($id != "admin"){
					if($row['status'] == "active"){
						$_SESSION['id'] = $id;
					} 
				} else {
					$_SESSION['id'] = $id;
				}
	    		echo json_encode($row);
			}
		} else {
	    	echo json_encode("no user");
		}
	} else {
		die('error: ' . $conn->error);
	}

	mysqli_close($conn);
}


function signup($conn) {
	$id = $_POST['data']['id'];
	$name = $_POST['data']['name'];
	$email = $_POST['data']['email'];
	$phone = $_POST['data']['phone'];
	$room = $_POST['data']['room'];
	$password = $_POST['data']['pwd'];
	$query = "INSERT INTO user (id, name, email, phone, room, password, status, type) VALUES ('$id', '$name', '$email', '$phone', '$room', '$password', 'active', 'user')";

	if ($conn->query($query)) {
		$_SESSION['id'] = $id;
		$_SESSION['success'] = "You are now logged in";
		echo json_encode("Data Inserted");
	} else {
	    echo json_encode("Error: " . $conn->error);
	}

	mysqli_close($conn);
}
?>