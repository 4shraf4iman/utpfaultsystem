<?php
include '../../php/config.php';
header('Content-Type: application/json');

	switch ($_POST['functionname']) {
		case 'logout':
			logout($conn);
			break;
		default:
			echo "error function not found";
			break;
	}


	function logout($conn) {
		$id = $_SESSION['id'];
		$_SESSION['id'] = null;
		echo json_encode($id);
	}
?>