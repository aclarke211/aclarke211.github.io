/* JavaScript Document created by Alex Clarke */

// ==================================================================================================================
/* Variables */
// ==================================================================================================================
	// ==============================================================================================================
	/* Gradient Colours */
	// ==============================================================================================================
	var blackWhiteGradient = "radial-gradient(black 50%, white 140%)";
	var blueGradient = "radial-gradient(#6c89d3, #4b5e8d)";
	var redGradient = "radial-gradient(red 50%, orange 140%)";
	var greenGradient = "radial-gradient(green 50%, yellow 140%)";

	// ==============================================================================================================
	/* Tabs - [Variables] */
	// ==============================================================================================================
	// Website Tab
	var websiteClickableHeader = document.getElementById('projectsWebsitesHeaderContainer');
	var websiteHidablePanelSection = document.getElementById('projectsWebsitesPanelsContainer');
	var websitesTabIcon = document.getElementById('projectsWebsitesExpandButton');
	var websiteTabActiveBoolean = false;

	// Apps Tab
	var appsClickableHeader = document.getElementById('projectsAppsHeaderContainer');
	var appsHidablePanelSection = document.getElementById('projectsAppsPanelsContainer');
	var appsTabIcon = document.getElementById('projectsAppsExpandButton');
	var appsTabActiveBoolean = false;

	// Misc Tab
	var miscClickableHeader = document.getElementById('projectsMiscHeaderContainer');
	var miscHidablePanelSection = document.getElementById('projectsMiscPanelsContainer');
	var miscTabIcon = document.getElementById('projectsMiscExpandButton');
	var miscTabActiveBoolean = false;

	// ==============================================================================================================
	/* Modal - [Variables] */
	// ==============================================================================================================
	// Find the modal itself
	var modal = document.getElementById('projectsModal');
	// Background of the modals header
	var modalHeader = document.getElementsByClassName('modalHeader')[0];
	// Image displayed in the header of the modal
	var modalHeaderImage = document.getElementsByClassName('modalHeaderImage')[0];
	// Header text inside the modal
	var modalProjectTitleText = document.getElementsByClassName('modalProjectTitleText')[0];
	// First section of text inside the modal
	var modalFirstSectionText = document.getElementById('modalFirstTextSection');
	// Image seen inside the modal
	var modalBodyImage = document.getElementsByClassName('modalBodyImage')[0];
	// Holds a video file for the modal
	var modalVideo = document.getElementsByClassName('modalVideo')[0];
	// Second section of text inside the modal
	var modalSecondSectionText = document.getElementById('modalSecondTextSection');
	// Background of the modals footer
	var modalFooter = document.getElementsByClassName('modalFooter')[0];
	// Footer text for the type of project in the modal
	var modalFooterTypeText = document.getElementsByClassName('modalFooterTypeText')[0];
	// Footer text for the amount of developemnt for the a chosen project
	var modalFooterDevText = document.getElementsByClassName('modalFooterDevText')[0];
	// Find the element that closes the modal
	var modalCloseButton = document.getElementsByClassName("closeModalButton")[0];
	// Array of all the panels which act as buttons to display the modal
	var panelsArray = ['archiesCoffee_websitePanel', 
						'visitFuji_websitePanel',
						'totalPlaylists_websitePanel',
						'paperscape_appPanel', 
						'myMediCare_appPanel',
						'2amMedia_appPanel',
						'chaseDay_miscPanel',
						'copTV_miscPanel'];


	// Default colour of the modals footer
	var modalFooterBackgroundGradient = blackWhiteGradient;
	// Default location of the header image for the modal
	var newModalHeaderImage = "images/projects/default_modal_image.png";
	// Default value for the modals header
	var newModalProjectTitleText = "Modal Header";
	// Default value for the first section of text in the modal
	var newFirstSectionText = "First section of text inside modal";
	// Default source location of the image in the modal
	var newModalBodyImage = "images/projects/default_modal_image.png";
	// Default value for the second section of text in the modal
	var newSecondSectionText = "Second section of text in the modal";
	// Default value for the footer text of the modal relating to project type
	var newModalFooterTypeText = "Modal Footer";
	// Default value for the footer text relating to development
	var newModalFooterDevText = "Dev Type"


// ==============================================================================================================
/* Drop Down Tabs */
// ==============================================================================================================
function openOrCloseTab(selectedTab, toggableTab, tabIcon, currentStatus) {
	// Allow clicks to be registered on the chosen element
	selectedTab.addEventListener('click', function() {

		// If the tab is already open, then close it
		if (currentStatus == true) {
			// Make the contents of the tab invisible
			toggableTab.style.opacity = "0";
			// Shrink the contents of the tab
			toggableTab.style.maxHeight = "0";
			// Change to toggable icon to a plus sign (click to open)
			tabIcon.innerHTML = "+";
			// Set the status of the tab to being closed
			currentStatus = false;
		}
		// Otherwise if the tab was closed, open it
		else {
			// Set the contents of the tab to visible
			toggableTab.style.opacity = "1";
			// The maxHeight is set to a value larger than the contents height...
			// ...if set to "auto" the transition animation will not activate
			toggableTab.style.maxHeight = "1000em";
			// Change the toggable icon to a minus sign (click to close)
			tabIcon.innerHTML = "-";
			// Set the status of the tab to being open
			currentStatus = true;
		}
	});
}


// ==================================================================================================================
/* Change elements inside the modal */
// ==================================================================================================================
// Function used to change the values of elements inside the modal
function changeModalData(panel) {

		switch(panel) {

			// ==============================================================================================================
			/* Website Projects */
			// ==============================================================================================================
			case 'archiesCoffee_websitePanel': 

				newModalHeaderImage = "images/projects/archiesCoffee_modal_header.png";
				
				newModalProjectTitleText = "Archie's Premium Coffee";

				newFirstSectionText = "This website demonstrates a cafe's menu by incorporating a bold graphical design.";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/archiesCoffee_modal.png";

				newSecondSectionText = "<p>A <a class='modalTextLink' href='http://idangero.us/swiper/' target='none'>swiper</a> panel located at the top of the website fully interacts with user <b>touches/swipes</b> on mobile devices.</p>" + 
										"<p>The site is made fully <b>responsive</b> via CSS3 media queries.</p>" +
										"<br>" + 
										"<a class='modalButtonLink' href='http://archiespremiumcoffee.site/' target='none'>Visit Site</a>";

				modalFooterBackgroundGradient = blueGradient;

				newModalFooterTypeText = "Website";

				newModalFooterDevText = "Full Dev<br>2017";

			break;

			case 'visitFuji_websitePanel':

				newModalHeaderImage = "images/projects/visitFuji_modal_header.png";

				newModalProjectTitleText = "Visit Fuji";

				newFirstSectionText = "An informational website for tourists looking for an exciting expedition to Mount Fuji." + 
										"<p>The site features a <b>fading background</b> effect as the user scrolls down the page.</p>";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/visitFuji_modal.png";

				newSecondSectionText = "Also included is a <b>3D cube effect</b>, activated when the user swipes on the info/images displayed on the page." +
										"<p>Finally there is the inclusion of an embedded objects such as <b>Google Maps</b> and a <b>weather widget</b>.</p>" +  
										"<br>" +
										"<a class='modalButtonLink' href='http://www.visitfuji.co.uk' target='none'>Visit Site</a>";

				modalFooterBackgroundGradient = blueGradient;

				newModalFooterTypeText = "Website";

				newModalFooterDevText = "Full Dev<br>2017";

			break;

			case 'totalPlaylists_websitePanel':

				newModalHeaderImage = "images/projects/totalPlaylists_modal_header.png";

				newModalProjectTitleText = "Total Playlists";

				newFirstSectionText = "Total Playlists acts as a hub for a wide selection of embedded <a class='modalTextLink' href='https://www.spotify.com/uk/' target='none'>Spotify</a> playlists." + 
										"<p>The site adds the ability to open <b>multiple playlists</b> at the same time, a feature which is not currently available via the Spotify mobile application or desktop player.</p>" + 
										"<p>The user simply selects a genre, follow by a playlists they wish to listen to.</p>";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/totalPlaylists_modal.png";

				newSecondSectionText = "The website is fully repsonsive, utilizing the <b>Sass</b> pre-processor and CSS3 media queries." + 
										"<p><b>JavaScript</b> plays a vital role in the site's operation, being used to silde open a playlists panel, revealing the embedded Spotify playlist hidden behind.</p>" + 
										"<p>A <b>JQuery script</b> is used to add further usability to the site, allowing the user to 'smooth scroll' to the top of the page.</p>" +  
										"<br>" +
										"<a class='modalButtonLink' href='http://www.totalplaylists.com/' target='none'>Visit Site</a>";

				modalFooterBackgroundGradient = blueGradient;
				
				newModalFooterTypeText = "Website";

				newModalFooterDevText = "Full Dev<br>2017";

			break;


			// ==============================================================================================================
			/* App Projects */
			// ==============================================================================================================
			case 'paperscape_appPanel':


				newModalHeaderImage = "images/projects/paperscape_modal_header.png";

				newModalProjectTitleText = "Paperscape";

				newFirstSectionText = "In Paperscape the objective of the game is to collect stars while avoiding patrolling guards, finally reaching the exit to complete a level." + 
										"<p>Obstacles such as <b>button activated doors</b> and traversing guards stand between you and victory.</p>";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/paperscape_modal.png";

				newSecondSectionText = "The game is coded in <b>Java</b>, making use of the <a class='modalTextLink' href='https://libgdx.badlogicgames.com/' target='none'>libGDX</a> game development library." + 
										"<p>Objects such as switches and multi-dimensional arrays help make up the backbone of the programming for the game.</p>" + 
										"<p><b>Enemy AI</b> is programmed to follow specific waypoints, giving the user the ability to learn each guard's routine.</p>" + 
										"<a href='https://play.google.com/store/apps/details?id=com.paperscape.game.android&hl=en&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank'><img alt='Get it on Google Play' class='googlePlayBadge' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>" + 
										"<a href='https://github.com/aclarke211/Paperscape' target='_blank' class='gitHubLink'><img class='gitHubImage' src='images/icons/github_logo.png'></img></a>";






				modalFooterBackgroundGradient = redGradient;

				newModalFooterTypeText = "Android Game";

				newModalFooterDevText = "Full Dev<br>2016";

			break;

			case 'myMediCare_appPanel':


				newModalHeaderImage = "images/projects/myMediCare_modal_header.png";

				newModalProjectTitleText = "MyMediCare";

				newFirstSectionText = "Keep track of your <b>temperature</b>, <b>heart rate</b>, and <b>blood pressure</b> with this useful Android application." + 
										"<p>A 'traffic light' colour coding scheme is used to identify the status of a user's health reading.</p>" + 
										"<p>Within the application there is the ability to send an <b>SMS message</b> directly to the user's GP.</p>";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/myMediCare_modal.png";

				newSecondSectionText = "The application is programmed using <b>Java</b> and is distributed as an APK file for Android devices." + 
										"<p>MyMediCare makes use of a local <b>SQLite database</b> in order to store the user's data on their device.</p>" + 
										"<p>This technique allows for <b>multiple user's</b> to have their own unique health data while using the same device.</p>" + 
										"<a href='https://github.com/aclarke211/MyMediCare' target='_blank' class='gitHubLink'><img class='gitHubImage' src='images/icons/github_logo.png'></img></a>";

				modalFooterBackgroundGradient = redGradient;

				newModalFooterTypeText = "Android App";

				newModalFooterDevText = "Full Dev<br>2015";

			break;

			case '2amMedia_appPanel':


				newModalHeaderImage = "images/projects/2amMedia_modal_header.png";

				newModalProjectTitleText = "2am Media";

				newFirstSectionText = "This application focuses on displaying a portfolio of work developed by Preston based web design company 2AM Media." + 
										"<p>Within the app, the user is first greeted with a splash/welcome screen which allow them to navigate to the main portfolio page.</p>" + 
										"<p>From here the user is presented with a logo image and short description for each website.</p>";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/2amMedia_modal.png";

				newSecondSectionText = "When a website is selected the user is taken to their default web browser where the site is displayed." + 
										"<p>The application features a custom launch icon and background within the app.</p>";

				modalFooterBackgroundGradient = redGradient;

				newModalFooterTypeText = "Android App";

				newModalFooterDevText = "Full Dev<br>2014";

			break;


			// ==============================================================================================================
			/* Misc Projects */
			// ==============================================================================================================
			case 'chaseDay_miscPanel':


				newModalHeaderImage = "images/projects/chaseDay_modal_header.png";

				newModalProjectTitleText = "Chase Day";

				newFirstSectionText = "The masked bandit is at it again... lifting the wallets of unsuspecting businessmen. <br>Well he won't get away with it this time!" + 
										"<p>Chase down the thief and collect and money he drops as he attempts to flee.</p>" + 
										"<p>The pesky thief has also stashed credit cards from previous victims in various secret passageways around the city.</p>";

				modalVideo.style.display="none";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/chaseDay_modal.png";

				newSecondSectionText = "The game was developed using the <a class='modalTextLink' href='https://unity3d.com/' target='none'>Unity</a> game engine, allowing it to be run on a vast amount of systems and even on the web." + 
										"<p>The engine was chosen as it is an industry standard game engine and would allow for all the necessary game features to be implemented smoothly.</p>" + 
										"<p>All of the assets in the game are modelled using the popular 3D creative studio <a class='modalTextLink' href='https://www.autodesk.co.uk/products/maya/overview' target='none'>Maya</a>, with inspiration for the look and feel of the map comes from the big apple, New York City.</p>" + 
										"<p>JavaScript is used for the main programming of the game, with the thief character following a set of pre-determined waypoints.</p>";

				modalFooterBackgroundGradient = greenGradient;

				newModalFooterTypeText = "PC Game";

				newModalFooterDevText = "Full Dev<br>2012";

			break;

			case 'copTV_miscPanel':


				newModalHeaderImage = "images/projects/copTV_modal_header.png";

				newModalProjectTitleText = "Cop TV";

				newFirstSectionText = "This short animation was created using the industry standard multimedia tool <a class='modalTextLink' href='https://www.toonboom.com/' target='none'>Toon Boom Studio.</a>" + 
										"<p>Toon Boom has been used to produce a wide variety of animated TV shows, including hugely successful programs such as Family Guy.</p>";

				modalVideo.style.display="block";

				modalBodyImage.style.display = "none";

				newSecondSectionText = "A technique called <b>rotoscoping</b> was used to develop the animation." + 
										"<p>This involves each frame being drawn individually by hand.</p>";

				modalFooterBackgroundGradient = greenGradient;

				newModalFooterTypeText = "Animation";

				newModalFooterDevText = "Full Dev<br>2012";

			break;


			// ==============================================================================================================
			/* Default Case */
			// ==============================================================================================================
			default:

				newModalHeaderImage = "images/projects/default_modal_image.png";
				
				newModalProjectTitleText = "Default Header"

				newFirstSectionText = "Default values: No Panel Has Been Selected.";

				modalVideo.style.display="block";

				modalBodyImage.style.display = "block";

				newModalBodyImage = "images/projects/default_modal_image.png";

				newSecondSectionText = "Default values: No Panel Has Been Selected.";

				modalFooterBackgroundGradient = blackWhiteGradient;

				newModalFooterTypeText = "Default Footer";

				newModalFooterDevText = "Default dev";

		}

	

// ==================================================================================================================
	/* Alter the modal data to that of the selected panel */
// ==================================================================================================================
	modalHeaderImage.src = newModalHeaderImage;
	modalProjectTitleText.innerHTML = newModalProjectTitleText;
	modalFirstSectionText.innerHTML = newFirstSectionText;
	modalBodyImage.src = newModalBodyImage;
	modalSecondSectionText.innerHTML = newSecondSectionText;
	modalFooter.style.background = modalFooterBackgroundGradient;
	modalFooterTypeText.innerHTML = newModalFooterTypeText;
	modalFooterDevText.innerHTML = newModalFooterDevText;


}


// ==================================================================================================================
/* Display the Modal */
// ==================================================================================================================
function showModal() {

	// Temporary scope is created to preseve the value of 'i'; This allow for the clicks on all panels to be registed by the browser
	for (var i = 0; i < panelsArray.length; i++) (function(i) {

		// Check if any of the panels have been clicked
		document.getElementById(panelsArray[i]).onclick = function() {

			changeModalData(panelsArray[i]);

			// Show the modal
			modal.style.display = "block";
			// Log dev data to the console
			console.log("Panel clicked: " + panelsArray[i] + " has been selected.");

		}

	// End of scope
	} ) (i);

}


// ==================================================================================================================
/* Close Modal */
// ==================================================================================================================
// When the user clicks on the close button
modalCloseButton.onclick = function() {
	// Hide the modal
    modal.style.display = "none";
}

//  When is click is made outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
    	// Close the modal
        modal.style.display = "none";
    }
}


// ==================================================================================================================
/* jQuery */
// ==================================================================================================================
	// ==============================================================================================================
	/* Document Ready - [jQuery] */
	// ==============================================================================================================
	  $(document).ready(function () {
	    // //initialize swiper when document ready  
	    // var skillsSectionSwiper = new Swiper ('#swiperContainerSkillsSection', {
	    // 	// Optional parameters
	    // 	direction: 'horizontal',
	    // 	loop: true,

	    //   	// If we need pagination
	    // 	pagination: '#swiperPaginationSkillsSection',
	    
		   //  // Navigation arrows
		   //  nextButton: '#swiperNextButtonSkillsSection',
		   //  prevButton: '#swiperPrevButtonSkillsSection',
		    
		   //  // And if we need scrollbar
		   //  scrollbar: '#swiperScrollbarSkillsSection',
	    // })    


	// ==============================================================================================================
	/* Swiper Object - [jQuery] */
	// ==============================================================================================================
	   	//initialize swiper when document ready  
	    var skillsSectionSwiper = new Swiper('#swiperContainerSkillsSection', {
	    // Add pagination to the swiper slides
        pagination: '.swiper-pagination',

        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


        // Add a 3D coverflow effect to the slides of the swiper element
        effect: 'coverflow',
        // Make the user's cursor a grab icon
        grabCursor: true,
        // Center the slides
        centeredSlides: true,
        // Allow the user to scroll through all the slides indefinatly
        loop: true,
        // Amount of time between automatic slide changes
        autoplay: 5000,
        // When set to false, the slides will continue to autoplay after the user interacts with the swiper object
        autoplayDisableOnInteraction: false,
        // Amount of slides in view
        slidesPerView: '2',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 450,
            slideShadows: false,
            modifier: 1
        }
    });


	// ==============================================================================================================
	/* [END OF]: Document Ready - [jQuery] */
	// ==============================================================================================================
	  });


// ==============================================================================================================
/* Function Execution */
// ==============================================================================================================
	// ==============================================================================================================
	/* Opening and closing of tabs - [Execution] */
	// ==============================================================================================================
	// Activate the website tab
	openOrCloseTab(websiteClickableHeader, websiteHidablePanelSection, websitesTabIcon, websiteTabActiveBoolean);
	// Activate the apps tab
	openOrCloseTab(appsClickableHeader, appsHidablePanelSection, appsTabIcon, appsTabActiveBoolean);
	// Activate the misc tab
	openOrCloseTab(miscClickableHeader, miscHidablePanelSection, miscTabIcon, miscTabActiveBoolean);


	// ==============================================================================================================
	/* Modal - [Execution] */
	// ==============================================================================================================
	showModal();