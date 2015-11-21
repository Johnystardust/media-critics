<?php
/**
 * Created by PhpStorm.
 * User: Tim van der Slik
 * Project: Media Critics
 * Date: 11/17/2015
 * Time: 2:09 PM
 */
?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="assets/javascript/javascript.js"></script>
    <script src="assets/javascript/menu.js"></script>
    <link rel="stylesheet" href="assets/animate-css/animate.css">
    <script src="assets/nice-scroll/jquery.nicescroll.min.js"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="assets/stylesheet/style.css"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,400italic,700,500" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="assets/fontello/fontello-embedded.css"/>

    <style>
        /*::-webkit-scrollbar {*/
            /*width: 12px;*/
        /*}*/
        /*::-webkit-scrollbar-track {*/
            /*background-color: #dcdcdc;*/
            /*border-left: 1px solid #ccc;*/
        /*}*/
        /*::-webkit-scrollbar-thumb {*/
            /*background-color: #b5b5b5;*/
        /*}*/
        /*::-webkit-scrollbar-thumb:hover {*/
            /*background-color: #313131;*/
        /*}*/
    </style>

</head>

<body>
    <a href="">
        <div class="go-to-top">
            <i class="icon icon-up-open"></i>
        </div>
    </a>

    <div id="menu">
        <div class="logo">
            <a href="#"><h3>Media Critics</h3></a>
        </div>

        <ul class="menu">
            <a href="#">
                <li>
                    <span class="txt">Home</span>
                    <span class="bg"></span>
                </li>
            </a>

            <a href="#">
                <li>
                    <span class="txt">Over ons</span>
                    <span class="bg"></span>
                </li>
            </a>

            <a href="#">
                <li>
                    <span class="txt">Werk</span>
                    <span class="bg"></span>
                </li>
            </a>

            <a href="#">
                <li>
                    <span class="txt">Contact</span>
                    <span class="bg"></span>
                </li>
            </a>
        </ul>
    </div>

    <?php include_once('includes/theme-files/slider.php'); ?>

    <?php include_once('includes/theme-files/about-us.php'); ?>

    <?php include_once('includes/theme-files/work.php'); ?>

    <?php include_once('includes/theme-files/facts.php'); ?>

    <?php include_once('includes/theme-files/strategy.php'); ?>

    <?php include_once('includes/theme-files/services.php'); ?>

    <?php include_once('includes/theme-files/contact.php'); ?>

    <?php include_once('footer.php'); ?>


</body>
</html>