<?php

include '../../php/config.php';

header('Content-Type: application/json');



	switch ($_POST['functionname']) {

		case 'getHistory':

			getHistory($conn);

			break;

		default:

			echo "error function not found";

			break;

	}





	function getHistory($conn) {

		$id = $_SESSION['id'];



		$res[] = array_merge(getCafeReport($conn, $id), getHostelReport($conn, $id));

		echo json_encode($res);

		

	}



	function getCafeReport($conn, $id){

		$ndquery = "SELECT * FROM fault INNER JOIN cafe_fault ON fault.id = cafe_fault.fault_id WHERE fault.student_id = $id";



		return queryReport($conn, $ndquery);

	}



	function getHostelReport($conn, $id){

		$stquery = "SELECT * FROM fault INNER JOIN hostel_fault ON fault.id = hostel_fault.fault_id WHERE fault.student_id = $id";







		return queryReport($conn, $stquery);

	}



	function queryReport($conn, $query){

		if($results = $conn->query($query)){

			if($results->num_rows){

				while ($row = $results->fetch_assoc()) {

					$resu[] = $row;

				}

		    	return $resu;

			

			} else {

		    	return $resu = array("no record");

			}

		} else {

			die('error: ' . $conn->error);

		}

		 function deletereportcafe($conn,$query){
		 	$ndquery = "DELETE * FROM fault INNER JOIN cafe_fault ON fault.id = cafe_fault.fault_id WHERE fault.student_id = $id";

		 	return queryReport($conn, $ndquery);

			
			}
		} 

		function deletereporthostel($conn,$query){
		 	$ndquery = "DELETE * FROM fault INNER JOIN cafe_fault ON fault.id = hostel_fault.fault_id WHERE fault.student_id = $id";

		 	return queryReport($conn, $stquery);

	}

?>