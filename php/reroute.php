<?php
session_start();

function main(){
        if(isset($_SESSION['id'])){
	if($_SESSION['id']){
		if($_SESSION['id'] == 'admin'){
			header("Location: http://localhost/utpfaultsystem/admin/");
		} else {
			header("Location: http://localhost/utpfaultsystem/user");
		}
	}
        }	
}

function admin(){
        if(isset($_SESSION['id'])){
	if($_SESSION['id']){
		if($_SESSION['id'] != 'admin'){
			header("Location: http://localhost/utpfaultsystem/user");
		}
	} else {
		header("Location: http://localhost/http://localhost/utpfaultsystem/");
	}
} else {
header("Location: http://localhost/utpfaultsystem/");
}	
}

function user(){

        if(isset($_SESSION['id'])){
	if($_SESSION['id']){
		if($_SESSION['id'] == 'admin'){
			header("Location: http://localhost/utpfaultsystem/admin");
		}
	} else {
		header("Location: http://localhost/utpfaultsystem/");
	}
} else {
header("Location: http://localhost/");
}	
}
?>