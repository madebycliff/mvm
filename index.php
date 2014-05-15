<!-- copyright james clifford 2013 for Andorra B&B, Dublin, Ireland www.andorrabb.com, www.jc-ae.com--> 
<html>
<head>
	<title>Voyageur - Dublin, Ireland</title>

	<meta name="description" content="">
	<meta name="keywords" content="">

	<link rel="stylesheet" href="libs/jquery-ui-1.10.3/voyColours/jquery.ui.all.css">
	<link rel="stylesheet" href="libs/magnific-popup/mp.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script src="libs/jquery-1.10.2.min.js"></script>
	<script src="libs/jquery-ui-1.10.3/development-bundle/ui/jquery.ui.core.js"></script>
	<script src="libs/jquery-ui-1.10.3/development-bundle/ui/jquery.ui.widget.js"></script>
	<script src="libs/jquery-ui-1.10.3/development-bundle/ui/jquery.ui.accordion.js"></script>
	<script src="libs/jquery-ui-1.10.3/development-bundle/ui/jquery.ui.button.js"></script>

	<!--script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" ></script>
	<script>window.jQuery || document.write( '<script src="../../AndorraBB/libs/jquery-1.10.2.min.js type="text/javascript"></script>')</script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js" type="text/javascript"></script-->

	<script src="libs/magnific-popup/mp.js"></script>

	

</head>

<body>
	<div id="bodydiv">
		<div id="top">
		<!--  First Column -->
			<div id="leftMenuBar">

				<div id="leftMenuHeader">
					VOYAGEUR
					<img src="images/logoHeader.jpg" alt="VOYAGEUR">
				</div>

				<div id="leftMenuButtons">
					<button id="bio" class="button" title="About Voyageur" onclick="location.href='AboutUs.php';">
						Biography</button>
					<button id="events" class="button" title="Our gigs, launches and appearances" onclick="location.href='BookNow.php';">
						Events</button>
					<button id="tracks" class="button" title="Listen to some tunes" onclick="location.href='Rooms.php';">
						Tracks</button>
					<button id="news" class="button" title="News and blogs" onclick="location.href='News.php';">
						News</button>
					<button id="friends" class="button" title="Labels, promoters, friends and contacts" onclick="location.href='Affiliates.php';">
						Friends</button>
					<button id="contactUs" class="button" title="Contact us by email, phone or form" onclick="location.href='ContactUs.php';">
						Contact Us</button>
				</div>

				<div id="leftMenuSocial">
					<b>Tt  Fb  In  Bc  Ms  Sc</b>
				</div>
			</div>

		</div><!--top-->
		<div id="content">

			<div id="gallery" class="gallery">
				<h3>Gallery</h3>
				<div id="galleryscroller" class="scrollerdiv">
					<img id="room1a" class="image" src="images/rooms/thumbnails/1a.jpg" 
						href="images/rooms/1a.jpg" title="Room 1: 1st floor double and single room."></img>
				</div>
			</div><!--gallery-->


			<div id="testimonials">
				<div id="manual">
					<span class="quote">...Great sounds, great lads! Up coming talent for sure...<br></span>
					<span class="author"><br>- Danny, Some famous person, May '14</span>
				</div>
			</div><!--testimonials-->

			

		</div><!--content-->
		<div id="footerdiv" title="See you at one of our gigs soon">
			<?php include ('footer.php'); ?>
		</div>
	</div><!--body-->

	<script src="scripts/UI.js"></script>

</body>
<footer></footer>
</html>