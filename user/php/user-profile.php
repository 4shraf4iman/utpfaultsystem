<?php

include '../../php/config.php';

header('Content-Type: application/json');



	switch ($_POST['functionname']) {

		case 'getUser':

			getUser($conn);

			break;

		case 'saveUser':

			saveUser($conn);

			break;

		default:

			echo "error function not found";

			break;

	}





	function getUser($conn) {

		$id = $_SESSION['id'];



		$ndquery = "SELECT * FROM user WHERE id = $id";



		if($results = $conn->query($ndquery)){

			if($results->num_rows){

				while ($row = $results->fetch_assoc()) {

					$resu[] = $row;

				}

		    	echo json_encode($resu);

			

			} else {

		    	echo json_encode("no user");

			}

		} else {

			echo json_encode($conn->error);

			//die('error: ' . $conn->error);

		}

		

	}

	

	

		function saveUser($conn) {

		$id = $_SESSION['id'];

		

		$name = $_POST['data']['name'];

		$email = $_POST['data']['email'];

		$phone = $_POST['data']['phone'];

		$room = $_POST['data']['room'];

		$newid = $_POST['data']['id'];

		$requirePw = $_POST['data']['requirePw'];

		

		if($requirePw === 'true'){

			$pw = $_POST['data']['pwd'];

			$newPw = $_POST['data']['newpwd'];

			$query = "UPDATE user SET name = '$name' ,email= '$email', room ='$room', password='$newPw', id='$newid'  WHERE id = $id AND password='$pw'";

		} else {

			$query = "UPDATE user SET name = '$name' ,email= '$email', room ='$room', id='$newid' WHERE id = $id";

		}



		if($results = $conn->query($query)){

		    echo json_encode(mysqli_affected_rows($conn));

		} else {

			echo json_encode($conn->error);

			//die('error: ' . $conn->error);

		}

		

	}

?>