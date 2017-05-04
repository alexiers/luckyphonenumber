/********
This file is a demo of how to use the Inneractive library.
You will want to replace most of these values for 
your implementation.
*******/
var adOptions = {
	APP_ID: "PersonalApp_LuckyPhoneNumber_Android",
	TYPE: "Banner",
	REFRESH_RATE: 15
};

//create the Ad object based on the above options
var ad = Inneractive.createAd(adOptions);
ad
	.placement("bottom", "center")
	.addTo(document.getElementById("ad-frame"));
