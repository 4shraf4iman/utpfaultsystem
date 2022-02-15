var hostelButton = 0;
var cafeButton = 0;

function hostelReport() {
    var data;
    hostelButton++;
    var villRoom = document.getElementById("villageDropdown").value;
    var floor = document.getElementById("floorDropdown").value;
    var house = document.getElementById("houseDropdown").value;
    var room = document.getElementById("roomDropdown").value;
    var roomCategory = document.getElementById("categoryDropdown").value
    var roomComplaint = document.getElementById("complaintRoom").value;

    if (hostelButton == 1) {
        data = { village: villRoom, floor: floor, house: house, room: room, category: roomCategory, complaint: roomComplaint };

        $.ajax({
            type: "POST",
            url: '../php/fault-report-user.php',
            dataType: 'json',
            data: { functionname: 'hostel', data: data },

            success: function(obj, textstatus) {
                hostelButton = 0;
                console.log(obj);
                if (obj) {
                    data.fault_id = obj;
                    data.type = "hostel";
                    data.status = "idle";
                    parent.invokeHistoryFunction(data);
                    //clear form
                    var originalStatevillRoom = $("#villageDropdown").clone();
                    $("#villageDropdown").replaceWith(originalStatevillRoom);
                    var originalStatefloor = $("#floorDropdown").clone();
                    $("#floorDropdown").replaceWith(originalStatefloor);
                    var originalStatehouse = $("#houseDropdown").clone();
                    $("#houseDropdown").replaceWith(originalStatehouse);
                    var originalStateroom = $("#roomDropdown").clone();
                    $("#roomDropdown").replaceWith(originalStateroom);
                    var originalStateroomCategory = $("#categoryDropdown").clone();
                    $("#categoryDropdown").replaceWith(originalStateroomCategory);
                    $("#complaintRoom").val("");

                    //show modal
                    $("#title").html("Success");
                    $("#errText").html("Complaint Successfully Submit");
                    $("#myModal").modal("show");

                }

            },
            error: function(err) {
                hostelButton = 0;
                console.log(err.responseText);
            }
        });
    }
}

function cafeReport() {
    var data;
    cafeButton++;
    var cafeNam = document.getElementById("cafeName").value;
    var cafeVill = document.getElementById("cafeVillage").value;
    var cafeCtgry = document.getElementById("cafeCategory").value;
    var cafeCmplnt = document.getElementById("cafeComplaint").value;

    if (cafeButton == 1) {
        data = { cafe_name: cafeNam, village: cafeVill, category: cafeCtgry, complaint: cafeCmplnt };

        $.ajax({
            type: "POST",
            url: '../php/fault-report-user.php',
            dataType: 'json',
            data: { functionname: 'cafe', data: data },

            success: function(obj, textstatus) {
                cafeButton = 0;
                if (obj) {
                    data.fault_id = obj;
                    data.type = "cafe";
                    data.status = "idle";
                    parent.invokeHistoryFunction(data);
                    //clear form
                    $("#cafeName").val("");
                    var originalStateCafeVill = $("#cafeVillage").clone();
                    $("#cafeVillage").replaceWith(originalStateCafeVill);
                    var originalStatecafeCtgry = $("#cafeCategory").clone();
                    $("#cafeCategory").replaceWith(originalStatecafeCtgry);
                    $("#cafeComplaint").val("");

                    //show modal
                    $("#title").html("Success");
                    $("#errText").html("Complaint Successfully Submit");
                    $("#myModal").modal("show");

                }

            },
            error: function(err) {
                cafeButton = 0;
                console.log(err.responseText);
            }
        });
    }
}