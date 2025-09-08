
var Projects  = {};
var PID       = 0;

/*<#####################################################################>*/
/*<########################| Project  Config |##########################>*/
/*<#####################################################################>*/

/** Start **//********** Project 'default' Config ************************/

PID++;
Projects[PID]                    = {};

Projects[PID]["ProjectID"]       = "default";
Projects[PID]["ButtonName"]      = "Default";

Projects[PID]["Title"]           = "RaspBerry Pi Test Board";
Projects[PID]["Description"]     = "Alle PINs sind freigeschaltet";

// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else.
  
Projects[PID]["GPIOEnabled"]     = {};
Projects[PID]["GPIOEnabled"][2]  = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][3]  = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][4]  = 1; // Enable (1) or Disable (0) GPIO pin 4 for processing
Projects[PID]["GPIOEnabled"][5]  = 1; // Enable (1) or Disable (0) GPIO pin 5 for processing
Projects[PID]["GPIOEnabled"][6]  = 1; // Enable (1) or Disable (0) GPIO pin 6 for processing
Projects[PID]["GPIOEnabled"][7]  = 1; // Enable (1) or Disable (0) GPIO pin 7 for processing
Projects[PID]["GPIOEnabled"][8]  = 1; // Enable (1) or Disable (0) GPIO pin 8 for processing
Projects[PID]["GPIOEnabled"][9]  = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
Projects[PID]["GPIOEnabled"][10] = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
Projects[PID]["GPIOEnabled"][11] = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
Projects[PID]["GPIOEnabled"][12] = 1; // Enable (1) or Disable (0) GPIO pin 12 for processing
Projects[PID]["GPIOEnabled"][13] = 1; // Enable (1) or Disable (0) GPIO pin 13 for processing
Projects[PID]["GPIOEnabled"][14] = 1; // Enable (1) or Disable (0) GPIO pin 14 for processing
Projects[PID]["GPIOEnabled"][15] = 1; // Enable (1) or Disable (0) GPIO pin 15 for processing
Projects[PID]["GPIOEnabled"][16] = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
Projects[PID]["GPIOEnabled"][17] = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
Projects[PID]["GPIOEnabled"][18] = 1; // Enable (1) or Disable (0) GPIO pin 18 for processing
Projects[PID]["GPIOEnabled"][19] = 1; // Enable (1) or Disable (0) GPIO pin 19 for processing
Projects[PID]["GPIOEnabled"][20] = 1; // Enable (1) or Disable (0) GPIO pin 20 for processing
Projects[PID]["GPIOEnabled"][21] = 1; // Enable (1) or Disable (0) GPIO pin 21 for processing
Projects[PID]["GPIOEnabled"][22] = 1; // Enable (1) or Disable (0) GPIO pin 22 for processing
Projects[PID]["GPIOEnabled"][23] = 1; // Enable (1) or Disable (0) GPIO pin 23 for processing
Projects[PID]["GPIOEnabled"][24] = 1; // Enable (1) or Disable (0) GPIO pin 24 for processing
Projects[PID]["GPIOEnabled"][25] = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
Projects[PID]["GPIOEnabled"][26] = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
Projects[PID]["GPIOEnabled"][27] = 1; // Enable (1) or Disable (0) GPIO pin 27 for processing

/**  End  **//************************************************************/

/** Start **//*********** Project 'pikvm' Config *************************/

PID++;
Projects[PID]                    = {};

Projects[PID]["ProjectID"]       = "pikvm";
Projects[PID]["ButtonName"]      = "PiKVM";

Projects[PID]["Title"]           = "PiKVM Test Board";
Projects[PID]["Description"]     = "Freie PINs für Geekworm KVM-A3 und andere darauf basierende HATs";

// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else.
  
Projects[PID]["GPIOEnabled"]     = {};
Projects[PID]["GPIOEnabled"][2]  = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][3]  = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][4]  = 0; // Enable (1) or Disable (0) GPIO pin 4 for processing
Projects[PID]["GPIOEnabled"][5]  = 0; // Enable (1) or Disable (0) GPIO pin 5 for processing
Projects[PID]["GPIOEnabled"][6]  = 0; // Enable (1) or Disable (0) GPIO pin 6 for processing
Projects[PID]["GPIOEnabled"][7]  = 0; // Enable (1) or Disable (0) GPIO pin 7 for processing
Projects[PID]["GPIOEnabled"][8]  = 0; // Enable (1) or Disable (0) GPIO pin 8 for processing
Projects[PID]["GPIOEnabled"][9]  = 0; // Enable (1) or Disable (0) GPIO pin 9 for processing
Projects[PID]["GPIOEnabled"][10] = 0; // Enable (1) or Disable (0) GPIO pin 10 for processing
Projects[PID]["GPIOEnabled"][11] = 0; // Enable (1) or Disable (0) GPIO pin 11 for processing
Projects[PID]["GPIOEnabled"][12] = 0; // Enable (1) or Disable (0) GPIO pin 12 for processing
Projects[PID]["GPIOEnabled"][13] = 0; // Enable (1) or Disable (0) GPIO pin 13 for processing
Projects[PID]["GPIOEnabled"][14] = 0; // Enable (1) or Disable (0) GPIO pin 14 for processing
Projects[PID]["GPIOEnabled"][15] = 0; // Enable (1) or Disable (0) GPIO pin 15 for processing
Projects[PID]["GPIOEnabled"][16] = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
Projects[PID]["GPIOEnabled"][17] = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
Projects[PID]["GPIOEnabled"][18] = 0; // Enable (1) or Disable (0) GPIO pin 18 for processing
Projects[PID]["GPIOEnabled"][19] = 0; // Enable (1) or Disable (0) GPIO pin 19 for processing
Projects[PID]["GPIOEnabled"][20] = 0; // Enable (1) or Disable (0) GPIO pin 20 for processing
Projects[PID]["GPIOEnabled"][21] = 0; // Enable (1) or Disable (0) GPIO pin 21 for processing
Projects[PID]["GPIOEnabled"][22] = 0; // Enable (1) or Disable (0) GPIO pin 22 for processing
Projects[PID]["GPIOEnabled"][23] = 0; // Enable (1) or Disable (0) GPIO pin 23 for processing
Projects[PID]["GPIOEnabled"][24] = 0; // Enable (1) or Disable (0) GPIO pin 24 for processing
Projects[PID]["GPIOEnabled"][25] = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
Projects[PID]["GPIOEnabled"][26] = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
Projects[PID]["GPIOEnabled"][27] = 0; // Enable (1) or Disable (0) GPIO pin 27 for processing

/**  End  **//************************************************************/


/*<#####################################################################>*/
/*<########################| General Settings |#########################>*/
/*<#####################################################################>*/


// StartPage
var StartPageTitle        = "RaspBerry Pi Test Board";
var StartPageDescription  = "Projekte"

// URLParams
var URLParamProject       = "project";

// CSS IDs
var CSSIDTitle            = "Title"
var CSSIDGPIO             = "GPIO";
var CSSIDButton           = "MGPIO";
var CSSIDSwitch           = "CSSSwitchGPIO";
var CSSIDText             = "CSSTextGPIO";

// CSS Classes
var CSSClassTitle         = "title";
var CSSClassDisable       = "disabled";
var CSSClassButtonDisable = "disabled";
var CSSClassToggleDisable = "disabled";
var CSSClassTextDisable   = "disabled";

// Misc
var GPIOName              = "GPIO";  // has to be the same in the webserver.js!
var GPIONameT             = "TGPIO"; // has to be the same in the webserver.js!



/*<#####################################################################>*/
/*<#####################| /!\  Don't Touch!  /!\ |######################>*/
/*<#####################################################################>*/


const queryString  = window.location.search;
const urlParams    = new URLSearchParams(queryString);
var ProjectCounter = 0;
var ParamFound     = 0;
var ProjectFound   = 0;

for (var key in Projects) { ProjectCounter++; }

if(urlParams.has(URLParamProject)) {
	ParamFound    = 1;
	const Project = urlParams.get(URLParamProject);
	if(Project) {
		var ProjectIsEmpty = 0;
		var ProjectName    = Project;
		for (let i = 1; i <= ProjectCounter; i++) {
			//console.log("ProjectCounter "+ProjectCounter);

			if(Project === Projects[i]["ProjectID"]) {
				//console.log("WebSubFolder "+WebSubFolder);
				//console.log("WebSubFolder Path "+Projects[i]["Path"]);
				
				ProjectFound = 1;
				var UseID = i;
				
			}
		}
	}
	else {
		var ProjectIsEmpty = 1;
	}
}

if(ParamFound === 1) {
   
	if(ProjectFound === 1) {
		var Title       = Projects[UseID]["Title"];
		var Description = Projects[UseID]["Description"];
		var GPIOEnabled = {};

		GPIOEnabled[2]  = Projects[UseID]["GPIOEnabled"][2]; // Enable (1) or Disable (0) GPIO pin 3 for processing
		GPIOEnabled[3]  = Projects[UseID]["GPIOEnabled"][3]; // Enable (1) or Disable (0) GPIO pin 3 for processing
		GPIOEnabled[4]  = Projects[UseID]["GPIOEnabled"][4]; // Enable (1) or Disable (0) GPIO pin 4 for processing
		GPIOEnabled[5]  = Projects[UseID]["GPIOEnabled"][5]; // Enable (1) or Disable (0) GPIO pin 5 for processing
		GPIOEnabled[6]  = Projects[UseID]["GPIOEnabled"][6]; // Enable (1) or Disable (0) GPIO pin 6 for processing
		GPIOEnabled[7]  = Projects[UseID]["GPIOEnabled"][7]; // Enable (1) or Disable (0) GPIO pin 7 for processing
		GPIOEnabled[8]  = Projects[UseID]["GPIOEnabled"][8]; // Enable (1) or Disable (0) GPIO pin 8 for processing
		GPIOEnabled[9]  = Projects[UseID]["GPIOEnabled"][9]; // Enable (1) or Disable (0) GPIO pin 9 for processing
		GPIOEnabled[10] = Projects[UseID]["GPIOEnabled"][10]; // Enable (1) or Disable (0) GPIO pin 10 for processing
		GPIOEnabled[11] = Projects[UseID]["GPIOEnabled"][11]; // Enable (1) or Disable (0) GPIO pin 11 for processing
		GPIOEnabled[12] = Projects[UseID]["GPIOEnabled"][12]; // Enable (1) or Disable (0) GPIO pin 12 for processing
		GPIOEnabled[13] = Projects[UseID]["GPIOEnabled"][13]; // Enable (1) or Disable (0) GPIO pin 13 for processing
		GPIOEnabled[14] = Projects[UseID]["GPIOEnabled"][14]; // Enable (1) or Disable (0) GPIO pin 14 for processing
		GPIOEnabled[15] = Projects[UseID]["GPIOEnabled"][15]; // Enable (1) or Disable (0) GPIO pin 15 for processing
		GPIOEnabled[16] = Projects[UseID]["GPIOEnabled"][16]; // Enable (1) or Disable (0) GPIO pin 16 for processing
		GPIOEnabled[17] = Projects[UseID]["GPIOEnabled"][17]; // Enable (1) or Disable (0) GPIO pin 17 for processing
		GPIOEnabled[18] = Projects[UseID]["GPIOEnabled"][18]; // Enable (1) or Disable (0) GPIO pin 18 for processing
		GPIOEnabled[19] = Projects[UseID]["GPIOEnabled"][19]; // Enable (1) or Disable (0) GPIO pin 19 for processing
		GPIOEnabled[20] = Projects[UseID]["GPIOEnabled"][20]; // Enable (1) or Disable (0) GPIO pin 20 for processing
		GPIOEnabled[21] = Projects[UseID]["GPIOEnabled"][21]; // Enable (1) or Disable (0) GPIO pin 21 for processing
		GPIOEnabled[22] = Projects[UseID]["GPIOEnabled"][22]; // Enable (1) or Disable (0) GPIO pin 22 for processing
		GPIOEnabled[23] = Projects[UseID]["GPIOEnabled"][23]; // Enable (1) or Disable (0) GPIO pin 23 for processing
		GPIOEnabled[24] = Projects[UseID]["GPIOEnabled"][24]; // Enable (1) or Disable (0) GPIO pin 24 for processing
		GPIOEnabled[25] = Projects[UseID]["GPIOEnabled"][25]; // Enable (1) or Disable (0) GPIO pin 25 for processing
		GPIOEnabled[26] = Projects[UseID]["GPIOEnabled"][26]; // Enable (1) or Disable (0) GPIO pin 26 for processing
		GPIOEnabled[27] = Projects[UseID]["GPIOEnabled"][27]; // Enable (1) or Disable (0) GPIO pin 27 for processing
	}
	else {
		if(ProjectIsEmpty === 1) { var Title = "No Project provided!"; }
		else                     { var Title = "No Config found for Project '"+ProjectName+"'! -> Check siteconfig.js"; }
	}
}
else {
	var Title = "Parameter not found or is unknown!";
}
