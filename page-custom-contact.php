<?php
/**
 * Created by PhpStorm.
 * User: Tim van der Slik
 * Project: Media Critics
 * Date: 11/23/2015
 * Time: 2:56 PM
 */
?>

<?php include_once('header.php'); ?>

<?php include_once('includes/theme-files/header-small.php'); ?>

<?php include_once('includes/theme-files/contact.php'); ?>

<div id="maps">
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
        function initialize() {
            var mapCanvas = document.getElementById('map-canvas');
            var myLatLng = new google.maps.LatLng(51.9794907, 5.9095527,17);
            var mapOptions = {
                center: myLatLng,
                zoom: 14,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI:false
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>

    <div id="map-canvas" style="min-height: 200px !important;"></div>
</div>

<?php include_once('includes/theme-files/link-block.php'); ?>

<?php include_once('footer.php'); ?>