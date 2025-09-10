
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
//Projects[PID]["Description"]     = "Alle PINs sind freigeschaltet";
Projects[PID]["Description"]     = "All PINs available";

Projects[PID]["ColorfulToggles"] = 1; // 1 - Enabled: show toggle switches in PIN-Color | 0 - Disabled Use default Toggle Colors for all

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
//Projects[PID]["Description"]     = "Freie PINs für Geekworm KVM-A3 und andere darauf basierende HATs";
Projects[PID]["Description"]     = "Free PINs for use with Geekworm KVM-A3 and other HATs based on it";

Projects[PID]["ColorfulToggles"] = 1; // 1 - Enabled: show toggle switches in PIN-Color | 0 - Disabled Use default Toggle Colors for all

// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else,
// because 'webserver.js' sets all enabled PINs to 'OUTPUT'.

Projects[PID]["GPIOEnabled"]     = {};
Projects[PID]["GPIOEnabled"][2]  = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][3]  = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][4]  = 0; // Enable (1) or Disable (0) GPIO pin 4 for processing
Projects[PID]["GPIOEnabled"][5]  = 0; // Enable (1) or Disable (0) GPIO pin 5 for processing
Projects[PID]["GPIOEnabled"][6]  = 0; // Enable (1) or Disable (0) GPIO pin 6 for processing
Projects[PID]["GPIOEnabled"][7]  = 0; // Enable (1) or Disable (0) GPIO pin 7 for processing
Projects[PID]["GPIOEnabled"][8]  = 0; // Enable (1) or Disable (0) GPIO pin 8 for processing
Projects[PID]["GPIOEnabled"][9]  = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
Projects[PID]["GPIOEnabled"][10] = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
Projects[PID]["GPIOEnabled"][11] = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
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
var StartPageTitle                = "RaspBerry Pi Test Board";
//var StartPageDescription          = "Projekte"
var StartPageDescription          = "Projects"

// URLParams
var URLParamProject               = "project";

// CSS IDs
var CSSIDTitle                    = "Title"
var CSSIDGPIO                     = "GPIO";
var CSSIDButton                   = "MGPIO";
var CSSIDSwitch                   = "CSSSwitchGPIO";
var CSSIDText                     = "CSSTextGPIO";
var CSSIDPin                      = "CSSPinGPIO"

// CSS Classes
var CSSClassTitle                 = "title";
var CSSClassDisable               = "disabled";
var CSSClassButtonDisable         = "disabled";
var CSSClassToggleDisable         = "disabled";
var CSSClassTextDisable           = "disabled";

// Misc
var GPIOName                      = "GPIO";  // has to be the same in the webserver.js!
var GPIONameT                     = "TGPIO"; // has to be the same in the webserver.js!

// Colors CSS Classes
var CSSColorPrefixSwitch    = "switchColor";
var CSSColorPrefixPin       = "pin";
var CSSColorApendixDisabled = "Disabled";
var CSSColorBlack           = "Black";
var CSSColorRed             = "Red";
var CSSColorOrange          = "Orange";
var CSSColorYellow          = "Yellow";
var CSSToggleColorDefault   = "Default";

var CSSColorGPIO            = {};
CSSColorGPIO[2]             = 'Pink'; // GPIO 2 Toggle Color CSS-Class
CSSColorGPIO[3]             = 'Pink'; // GPIO 3 Toggle Color CSS-Class
CSSColorGPIO[4]             = 'Green'; // GPIO 4 Toggle Color CSS-Class
CSSColorGPIO[5]             = 'Green'; // GPIO 5 Toggle Color CSS-Class
CSSColorGPIO[6]             = 'Green'; // GPIO 6 Toggle Color CSS-Class
CSSColorGPIO[7]             = 'Blue'; // GPIO 7 Toggle Color CSS-Class
CSSColorGPIO[8]             = 'Blue'; // GPIO 8 Toggle Color CSS-Class
CSSColorGPIO[9]             = 'Blue'; // GPIO 9 Toggle Color CSS-Class
CSSColorGPIO[10]            = 'Blue'; // GPIO 10 Toggle Color CSS-Class
CSSColorGPIO[11]            = 'Blue'; // GPIO 11 Toggle Color CSS-Class
CSSColorGPIO[12]            = 'Green'; // GPIO 12 Toggle Color CSS-Class
CSSColorGPIO[13]            = 'Green'; // GPIO 13 Toggle Color CSS-Class
CSSColorGPIO[14]            = 'Purple'; // GPIO 14 Toggle Color CSS-Class
CSSColorGPIO[15]            = 'Purple'; // GPIO 15 Toggle Color CSS-Class
CSSColorGPIO[16]            = 'Green'; // GPIO 16 Toggle Color CSS-Class
CSSColorGPIO[17]            = 'Green'; // GPIO 17 Toggle Color CSS-Class
CSSColorGPIO[18]            = 'Green'; // GPIO 18 Toggle Color CSS-Class
CSSColorGPIO[19]            = 'Blue'; // GPIO 19 Toggle Color CSS-Class
CSSColorGPIO[20]            = 'Blue'; // GPIO 20 Toggle Color CSS-Class
CSSColorGPIO[21]            = 'Blue'; // GPIO 21 Toggle Color CSS-Class
CSSColorGPIO[22]            = 'Green'; // GPIO 22 Toggle Color CSS-Class
CSSColorGPIO[23]            = 'Green'; // GPIO 23 Toggle Color CSS-Class
CSSColorGPIO[24]            = 'Green'; // GPIO 24 Toggle Color CSS-Class
CSSColorGPIO[25]            = 'Green'; // GPIO 25 Toggle Color CSS-Class
CSSColorGPIO[26]            = 'Green'; // GPIO 26 Toggle Color CSS-Class
CSSColorGPIO[27]            = 'Green'; // GPIO 27 Toggle Color CSS-Class

