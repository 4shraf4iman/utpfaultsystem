<?php
include '../php/reroute.php';
admin();
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="css/demo.css" />
    <link rel="stylesheet" type="text/css" href="css/tabs.css" />
    <link rel="stylesheet" type="text/css" href="css/tabstyles.css" />
    <script src="js/modernizr.custom.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>
    <header class="codrops-header">
        <h1>Admin Dashboard 
            <a class="logout" onclick="logout()">Log Out</a>
            <span>UTP Fault Reporting System</span>
        </h1>
    </header>
    <svg class="hidden">
        <defs>
            <path id="tabshape" d="M80,60C34,53.5,64.417,0,0,0v60H80z" />
        </defs>
    </svg>
    <div class="container" style="height: 100%">
        <div class="tabs tabs-style-shape">
            <nav>
                <ul>
                    <li>
                        <a href="#section-shape-1" style="height: 100%">
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <span>Fault Complaint</span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-shape-3">
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <span>Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-shape-4">
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <span>Announcement</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="content-wrap" style="height: 100%">
                <section id="section-shape-1">
                    <h1>Fault Complaint</h1>
                    <iframe frameborder="0" class="page-frame" style="width: 100%;" src="template/fault-complaint.html"></iframe>
                </section>
                <section id="section-shape-3">
                    <h1>Users</h1>
                    <iframe frameborder="0" id="user-admin" class="page-frame" style="width: 100%;" src="template/user-admin.html"></iframe>
                </section>
                <section id="section-shape-4">
                    <h1>Announcement</h1>
                    <iframe frameborder="0" id="announcement-admin" class="page-frame" style="width: 100%;" src="template/announcement-admin.html"></iframe>
                </section>
                <!-- /content -->
            </div>
            <!-- /tabs -->
        </div>
        <!-- /container -->
        <script src="js/cbpFWTabs.js"></script>
        <script src="js/admin-index.js"></script>
        <script>
        $('.page-frame').css('height', 1500 + 'px');

        (function() {

            [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
                new CBPFWTabs(el);
            });

        })();
        </script>
</body>

</html>