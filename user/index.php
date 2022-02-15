<?php
include '../php/reroute.php';
user();
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>User Dashboard</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="css/demo.css" />
    <link rel="stylesheet" type="text/css" href="css/tabs.css" />
    <link rel="stylesheet" type="text/css" href="css/tabstyles.css" />
    <script src="js/modernizr.custom.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body background="1.gif">
    <header class="codrops-header">
        <h1>User Dashboard 
            <a class="logout" onclick="logout()">Log Out</a>
            <span>UTP Fault Reporting System</span>
        </h1>
    </header>
    <svg class="hidden">
        <defs>
            <path id="tabshape" d="M80,60C34,53.5,64.417,0,0,0v60H80z" />
        </defs>
    </svg>
    <div class="container" style="height: 100%" style="background-color:white;" >

        <div class="tabs tabs-style-shape"  >
            <nav>
                <ul>
                    <li>
                        <a href="#section-shape-1" style="height: 100%">
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-shape-2">
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                <use xlink:href="#tabshape"></use>
                            </svg>
                            <span>Fault Report</span>
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
                            <span>History Report</span>
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
            <div id="iframe-div" class="content-wrap">
                <section id="section-shape-1">
                    <h1><font face="cursive">User Profile</font></h1>
                    <iframe frameborder="0" class="page-frame" id="profile" style="width: 100%;" src="template/user-profile.html" onload="resize(this)"></iframe>
                </section>
                <section id="section-shape-2">
                    <h1><font face="cursive">Fault Report</font></h1>
                    <iframe frameborder="0" class="page-frame" id="fault" style="width: 100%;" src="template/fault-report-user.html" onload="resize(this)"></iframe>
                </section>
                <section id="section-shape-3">
                    <h1><font face="cursive">History Report</font></h1>
                    <iframe frameborder="0" class="page-frame" id="history" style="width: 100%;" src="template/history-report.html" onload="resize(this)"></iframe>
                </section>
                <section id="section-shape-4">
                    <h1><font face="cursive">Announcement</font></h1>
                    <iframe frameborder="0" class="page-frame" id="announcemnet" style="width: 100%;" src="template/announcement-user.html" onload="resize(this)"></iframe>
                </section>
                <!-- /content -->
            </div>
            <!-- /tabs -->
        </div>
        <!-- /container -->
        <script src="js/cbpFWTabs.js"></script>
        <script src="js/user-index.js"></script>
        <script>
        function resize(obj) {
            $('.page-frame').css('height', 1500 + 'px');
            //$('.page-frame').css('height', obj.contentWindow.document.body.scrollHeight + 'px');
        }

        (function() {

            [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
                new CBPFWTabs(el);
            });

        })();
        </script>
</body>

</html>