var buttonValidate = 0;
var buttonLogin = 0;

function signup() {
    buttonValidate++;
    var name = $("#name").val();
    var email = $("#semail").val();
    var phone = $("#phone").val();
    var id = $("#id").val();
    var room = $("#room").val();
    var pwd = $("#spwd").val();
    var repwd = $("#repwd").val();
    var bool = false;
    var args = { "name": name, "email": email, "phone": phone, "id": id, "room": room, "pwd": pwd }

    if (!validate(args)) {
        if (repwd == pwd) {
            if (buttonValidate == 1) {
                $.ajax({
                    type: "POST",
                    url: 'php/index.php',
                    dataType: 'json',
                    data: { functionname: 'signup', data: args },

                    success: function(obj, textstatus) {
                        console.log(obj);
                        if(obj.includes("Duplicate")){
                            $("#errText").html('Matric ID already Registered');
                            $("#myModal").modal('show');
                        } else {
                            document.location.href = "user/";
                        }
                        buttonValidate = 0;
                    },
                    error: function(err) {
                        console.log(err.responseText);
                        buttonValidate = 0;
                    }
                });
            }

        } else {
            buttonValidate = 0;
            $("#errText").html('Password Did Not Match');
            $("#myModal").modal('show');
        }

    } else {
        buttonValidate = 0;
        $("#errText").html('Fill All the Input Correctly');
        $("#myModal").modal('show');

    }
}

function login() {
    buttonLogin++;
    var id = $("#lid").val();
    var pwd = $("#pwd").val();
    args = { "id": id, "pwd": pwd };
    if (!validate(args)) {
        if (buttonLogin == 1) {
            $.ajax({
                type: "POST",
                url: 'php/index.php',
                dataType: 'json',
                data: { functionname: 'login', id: args.id, pw: args.pwd },

                success: function(obj, textstatus) {
                    console.log(obj);
                    if (obj != "no user") {
                        if (id == "admin") {
                            document.location.href = "admin/";
                        } else {
                            if (obj.status == 'active') {
                                document.location.href = "user/";
                            } else {
                                $("#errText").html('Your ID has been blocked by admin. Please contact the admin for further notice');
                                $("#myModal").modal('show');
                            }
                        }
                    } else {
                        $("#errText").html('ID and Password not Match or User not Exist');
                        $("#myModal").modal('show');
                    }
                    buttonLogin = 0;
                },
                error: function(err) {
                    console.log(err.responseText);
                    buttonLogin = 0;
                }
            });
        }

    } else {
        buttonLogin = 0;
        $("#errText").html('Fill All the Input Correctly');
        $("#myModal").modal('show');
    }
}

function validate(obj) {
    var bool = false;
    jQuery.each(obj, function(index, item) {
        if (!item || item == "") {
            bool = true;
        }
    });

    return bool;
}

function reroute() {
    $.ajax({
        type: "POST",
        url: 'php/reroute.php',
        dataType: 'json',
        data: { functionname: 'reroute' },

        success: function(obj, textstatus) {
            console.log(obj);
            switch (obj) {
                case 'admin':
                    document.location.href = "admin/";
                    break;
                case 'user':
                    document.location.href = "user/";
                    break;
                default:
                    break;
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}