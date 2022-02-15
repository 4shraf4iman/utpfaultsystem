var selectedID;

function openModal(id) {
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].fault_id == id) {
            selectedID = temp[i].fault_id;
            if (temp[i].type == "cafe") {
                $("#studentCafe").val(temp[i].student_id);
                $("#typeCafe").val(capitalizeFirstLetter(temp[i].type) + " Complaint");
                $("#cafeCafe").val(temp[i].cafe_name);
                $("#categoryCafe").val(temp[i].category);
                $("#villageCafe").val(temp[i].village);
                $("#statusCafe").val(temp[i].status);
                $("#descriptionCafe").val(temp[i].complaint);


                switch (temp[i].status) {
                    case "idle":
                        $("#inProgressHostel").show();
                        $("#rejectHostel").show();
                        $("#completedHostel").show();
                        break;
                    case "in progress":
                        $("#inProgressHostel").hide();
                        $("#rejectHostel").show();
                        $("#completedHostel").show();
                        break;
                    default:
                        $("#inProgressHostel").hide();
                        $("#rejectHostel").hide();
                        $("#completedHostel").hide();
                        break;
                }
                $("#cafeModal").modal('show');
            } else {

                console.log(temp[i]);
                $("#studentHostel").val(temp[i].student_id);
                $("#categoryHostel").val(temp[i].category);
                $("#typeHostel").val(temp[i].type);
                $("#statusHostel").val(temp[i].status);
                $("#roomHostel").val(temp[i].village + "-" + temp[i].floor + "-" + temp[i].house + "-" + temp[i].room);
                $("#descriptionHostel").val(temp[i].complaint);

                switch (temp[i].status) {
                    case "idle":
                        $("#inProgressHostel").show();
                        $("#rejectHostel").show();
                        $("#completedHostel").show();
                        break;
                    case "in progress":
                        $("#inProgressHostel").hide();
                        $("#rejectHostel").show();
                        $("#completedHostel").show();
                        break;
                    default:
                        $("#inProgressHostel").hide();
                        $("#rejectHostel").hide();
                        $("#completedHostel").hide();
                        break;
                }

                $("#hostelModal").modal('show');
            }
        }
    }
}

function getComplaint() {
    $.ajax({
        type: "POST",
        url: '../php/fault-complaint.php',
        dataType: 'json',
        data: { functionname: 'complaint' },

        success: function(obj, textstatus) {
            temp = obj[0];
            var colour = "";
            for (var i = (obj[0].length - 1); i >= 0; i--) {
                if (obj[0][i] != "no record") {
                    switch (obj[0][i].status) {
                        case "idle":
                            colour = "grey";
                            break;
                        case "completed":
                            colour = "green";
                            break;
                        case "rejected":
                            colour = "red";
                            break;
                        case "in progress":
                            colour = "yellow";
                            break;
                        default:
                            break;

                    }

                    $("#complaint").append('<a href="#" class="list-group-item" onclick="openModal(' + obj[0][i].fault_id + ')">' +
                        '<i class="fa fa-square tag-' + colour + '"></i>' +
                        '<p class="list-group-item-heading">' + capitalizeFirstLetter(obj[0][i].type) + ' Complaint</p>' +
                        '<h6 class="list-group-item-heading">' + capitalizeFirstLetter(obj[0][i].student_id) + '</h6>' +
                        '</a>');
                }
            }
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeStatus(status) {
    var data = { status: status, id: selectedID };
    $.ajax({
        type: "POST",
        url: '../php/fault-complaint.php',
        dataType: 'json',
        data: { functionname: 'status', data: data },

        success: function(obj, textstatus) {
            if (obj == "success") {
                location.reload();
            } else {
                console.log(obj);
            }

        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}