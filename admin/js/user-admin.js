var test;
var idModal;

function openModal(id) {
    for (var i = 0; i < test.length; i++) {
        if (id == test[i].id) {
            idModal = id;
            $("#name").val(test[i].name);
            $("#email").val(test[i].email);
            $("#phone").val(test[i].phone);
            $("#id").val(test[i].id);
            $("#room").val(test[i].room);
            $("#pwd").val(test[i].password);

            if (test[i].status == 'blocked') {
                $("#unblockButton").show();
                $("#blockButton").hide();
            } else {
                $("#blockButton").show();
                $("#unblockButton").hide();
            }
        }
    }
    $("#myModal").modal('show');
}

function getUserList() {
    $.ajax({
        type: "POST",
        url: '../php/user-admin.php',
        dataType: 'json',
        data: { functionname: 'getUser' },

        success: function(obj, textstatus) {
            test = obj;
            for (var i = 0; i < obj.length; i++) {
                $("#userList").append(
                    '<a href="#" class="list-group-item" onclick="openModal(' + obj[i].id + ')">' +
                    '<p class="list-group-item-text" style="float:right">' + obj[i].id + '</p>' +
                    '<p class="list-group-item-heading">' + obj[i].name + '</p></a>'
                );
            }
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}

function blockUnblock(type) {
    var data = { type: type, id: idModal };
    $.ajax({
        type: "POST",
        url: '../php/user-admin.php',
        dataType: 'json',
        data: { functionname: 'blockUnblock', data: data },

        success: function(obj, textstatus) {
            if (obj == "success") {
                for (var i = 0; i < test.length; i++) {
                    if (idModal == test[i].id) {
                        test[i].status = type;
                    }
                }
            } else {
            	console.log(obj)
            }

        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}