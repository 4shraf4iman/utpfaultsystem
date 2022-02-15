function edit(){
	var bool = $("#toggle")[0].checked;
	$("form").children("div").children("input").prop('disabled', !bool);
	$("#saveButton").prop('disabled', !bool);
	$("#cancelButton").prop('disabled', !bool);
}

function save(){
	var name = $("#sname").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var id = $("#id").val();
	var room = $("#room").val();
	var pwd = $("#pwd").val();
	var newpwd = $("#newpwd").val();
	var repwd = $("#repwd").val();
	var data;
	var update = false;
		
	
	if(pwd == ""){
		pwd = null;
	}
	
	if(newpwd == ""){
		newpwd = null;
	}
	
	if(pwd){
		if(newpwd){
			if (newpwd == repwd)
			{
				data = {name:name, email:email, phone:phone, id:id, room:room, pwd:pwd, newpwd:newpwd, requirePw: true};
				update = true;
			}
			else 
			{
				$("#tittle").html("Error");
				$("#errText").html("New password and Retype Password are not match..!");
				$("#myModal").modal("show");
				console.log("New password and Retype Password are not match..!");
			}
		} else {
			$("#tittle").html("Error");
			$("#errText").html("New password or Retype Password are not filled..!");
				$("#myModal").modal("show");
			console.log("New password and Retype Password are not filled..!");
		}
	}
	else {	
		data = {name:name, email:email, phone:phone, id:id, room:room, requirePw: false};
		update = true;
	}
	
	if(update){	
		$.ajax(
		{
			type: "POST", 
			url: '../php/user-profile.php',
			dataType: 'json',
			data: { functionname: 'saveUser', data:data},
			
			success: function(obj, textstatus)
			{
				if(obj == 0){
					$("#pwd").val("");
					$("#newpwd").val("");
					$("#repwd").val("");
					$("#tittle").html("Error");
					$("#errText").html("Your Old Password is Wrong");
					$("#myModal").modal("show");
				} else {
					$("#pwd").val("");
					$("#newpwd").val("");
					$("#repwd").val("");
					$("#tittle").html("Success");
					$("#errText").html("Data Had been Successfully Updated");
					$("#myModal").modal("show");
					$("#toggle").prop('checked', false);
					$("form").children("div").children("input").prop('disabled', true);
					$("#saveButton").prop('disabled', true);
					$("#cancelButton").prop('disabled', true);
				}
			},
			error: function(errText){
				console.log(errText.responseText);
			}
		});
	
	}	
	
	
	
}


function getProfile() {
	$.ajax({
        type: "POST",
        url: '../php/user-profile.php',
        dataType: 'json',
        data: { functionname: 'getUser' },

        success: function(obj, textstatus) {
            $("#sname").val(obj[0].name);
			$("#email").val(obj[0].email);
			$("#phone").val(obj[0].phone);
			$("#id").val(obj[0].id);
			$("#room").val(obj[0].room);
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}