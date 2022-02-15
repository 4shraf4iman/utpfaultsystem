function openModal(id) {
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].fault_id == id) {
            if (temp[i].type == "cafe") {
                $("#typeCafe").val(capitalizeFirstLetter(temp[i].type) + " Complaint");
                $("#cafeCafe").val(temp[i].cafe_name);
                $("#categoryCafe").val(temp[i].category);
                $("#villageCafe").val(temp[i].village);
                $("#statusCafe").val(temp[i].status);
                $("#descriptionCafe").val(temp[i].complaint);
                $("#cafeModal").modal('show');
            } else {
                $("#categoryHostel").val(temp[i].category);
                $("#typeHostel").val(capitalizeFirstLetter(temp[i].type) + " Complaint");
                $("#statusHostel").val(temp[i].status);
                $("#roomHostel").val(temp[i].village + "-" + temp[i].floor + "-" + temp[i].house + "-" + temp[i].room);
                $("#descriptionHostel").val(temp[i].complaint);
                $("#hostelModal").modal('show');
            }
        }
    }
}

function getHistory() {
    $.ajax({
        type: "POST",
        url: '../php/history-report.php',
        dataType: 'json',
        data: { functionname: 'getHistory' },

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

                    $("#complaint-list").append('<a href="#" class="list-group-item" onclick="openModal(' + obj[0][i].fault_id + ')">' +
                        '<i class="fa fa-square tag-' + colour + '"></i>' +
                        '<p class="list-group-item-heading">' + capitalizeFirstLetter(obj[0][i].type) + ' Complaint</p>' +
                        '<h6 class="list-group-item-heading">' + capitalizeFirstLetter(obj[0][i].category) + '</h6>' +
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

function targetFunction(data) {
    temp.push(data);
    console.log(temp);
    $("#complaint-list").append('<a href="#" class="list-group-item" onclick="openModal(' + data.fault_id + ')">' +
        '<i class="fa fa-square tag-grey"></i>' +
        '<p class="list-group-item-heading">' + capitalizeFirstLetter(data.type) + ' Complaint</p>' +
        '<h6 class="list-group-item-heading">' + capitalizeFirstLetter(data.category) + '</h6>' +
        '</a>');
}