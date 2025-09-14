
var Projects  = {};
var PID       = 0;

/*<#####################################################################>*/
/*<##########################| Site  Config |###########################>*/
/*<#####################################################################>*/

// StartPage
var StartPageTitle                   = "RaspBerry Pi Test Board";
//var StartPageDescription            = "Projekte"
var StartPageDescription             = "Projects"
var StartPageBGImageEnabled          = 1;      // Enable (1) or Disable (0) Background-Image
var StartPageBGImageCustom           = '';     // provide filename of custom Background Image, leave blank for default image
var StartPageBGImageOpacity          = "7";    // Background Image Opacity in %
var StartPageBGImageBlur             = 0;      // Enable (1) or Disable (0) Background-Image Blur
var StartPageLoadingImageCustom      = '';     // provide filename of custom loading Image, leave blank for default image
var StartPageHeaderLogoEnabled       = 1;      // Enable (1) or Disable (0) Header Logo
var StartPageHeaderLogoCustom        = '';     // provide filename of custom Logo Image, leave blank for default image
var StartPageStyle                   = "Auto"; // Light | Dark | Auto
var StartPageShowTemperature         = 1;      // Enable (1) or Disable (0) ShowTemperature

/*<#####################################################################>*/
/*<########################| Project  Config |##########################>*/
/*<#####################################################################>*/

/** Start **//********** Project 'default' Config ************************/

PID++;
Projects[PID]                        = {};

Projects[PID]["ProjectID"]           = "default"; // must be unique!
Projects[PID]["ButtonName"]          = "Default";

Projects[PID]["Title"]               = "RaspBerry Pi Test Board";
//Projects[PID]["Description"]         = "Alle PINs sind freigeschaltet";
Projects[PID]["Description"]         = "All PINs available";

Projects[PID]["ColorfulText"]        = 1;      // 1 - Enabled: show Text in PIN-Color | 0 - Disabled Use default Text Colors for all
Projects[PID]["ColorfulToggles"]     = 1;      // 1 - Enabled: show toggle switches in PIN-Color | 0 - Disabled Use default Toggle Colors for all
Projects[PID]["BGImageEnabled"]      = 1;      // Enable (1) or Disable (0) Background-Image
Projects[PID]["BGImageCustom"]       = '';     // provide filename of custom Background Image, leave blank for default image
Projects[PID]["BGImageOpacity"]      = "7";    // Background Image Opacity in %
Projects[PID]["BGImageBlur"]         = 0;      // Enable (1) or Disable (0) Background-Image Blur
Projects[PID]["LoadingImageCustom"]  = '';     // provide filename of custom loading Image, leave blank for default image
Projects[PID]["Style"]               = "Auto"; // Light | Dark | Auto
Projects[PID]["ShowTemperature"]     = 1;      // Enable (1) or Disable (0) ShowTemperature


// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else.
  
Projects[PID]["GPIOEnabled"]         = {};
Projects[PID]["GPIOEnabled"][2]      = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][3]      = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][4]      = 1; // Enable (1) or Disable (0) GPIO pin 4 for processing
Projects[PID]["GPIOEnabled"][5]      = 1; // Enable (1) or Disable (0) GPIO pin 5 for processing
Projects[PID]["GPIOEnabled"][6]      = 1; // Enable (1) or Disable (0) GPIO pin 6 for processing
Projects[PID]["GPIOEnabled"][7]      = 1; // Enable (1) or Disable (0) GPIO pin 7 for processing
Projects[PID]["GPIOEnabled"][8]      = 1; // Enable (1) or Disable (0) GPIO pin 8 for processing
Projects[PID]["GPIOEnabled"][9]      = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
Projects[PID]["GPIOEnabled"][10]     = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
Projects[PID]["GPIOEnabled"][11]     = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
Projects[PID]["GPIOEnabled"][12]     = 1; // Enable (1) or Disable (0) GPIO pin 12 for processing
Projects[PID]["GPIOEnabled"][13]     = 1; // Enable (1) or Disable (0) GPIO pin 13 for processing
Projects[PID]["GPIOEnabled"][14]     = 1; // Enable (1) or Disable (0) GPIO pin 14 for processing
Projects[PID]["GPIOEnabled"][15]     = 1; // Enable (1) or Disable (0) GPIO pin 15 for processing
Projects[PID]["GPIOEnabled"][16]     = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
Projects[PID]["GPIOEnabled"][17]     = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
Projects[PID]["GPIOEnabled"][18]     = 1; // Enable (1) or Disable (0) GPIO pin 18 for processing
Projects[PID]["GPIOEnabled"][19]     = 1; // Enable (1) or Disable (0) GPIO pin 19 for processing
Projects[PID]["GPIOEnabled"][20]     = 1; // Enable (1) or Disable (0) GPIO pin 20 for processing
Projects[PID]["GPIOEnabled"][21]     = 1; // Enable (1) or Disable (0) GPIO pin 21 for processing
Projects[PID]["GPIOEnabled"][22]     = 1; // Enable (1) or Disable (0) GPIO pin 22 for processing
Projects[PID]["GPIOEnabled"][23]     = 1; // Enable (1) or Disable (0) GPIO pin 23 for processing
Projects[PID]["GPIOEnabled"][24]     = 1; // Enable (1) or Disable (0) GPIO pin 24 for processing
Projects[PID]["GPIOEnabled"][25]     = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
Projects[PID]["GPIOEnabled"][26]     = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
Projects[PID]["GPIOEnabled"][27]     = 1; // Enable (1) or Disable (0) GPIO pin 27 for processing

/**  End  **//************************************************************/

/** Start **//*********** Project 'Example' Config *************************/

PID++;
Projects[PID]                        = {};

Projects[PID]["ProjectID"]           = "example"; // must be unique!
Projects[PID]["ButtonName"]          = "Example";

Projects[PID]["Title"]               = "Example Test Board";
Projects[PID]["Description"]         = "Example with disabled Pins";

Projects[PID]["ColorfulText"]        = 1;      // 1 - Enabled: show Text in PIN-Color | 0 - Disabled Use default Text Colors for all
Projects[PID]["ColorfulToggles"]     = 1;      // 1 - Enabled: show toggle switches in PIN-Color | 0 - Disabled Use default Toggle Colors for all
Projects[PID]["BGImageEnabled"]      = 1;      // Enable (1) or Disable (0) Background-Image
Projects[PID]["BGImageCustom"]       = '';     // provide filename of custom Background Image, leave blank for default image
Projects[PID]["BGImageOpacity"]      = "7";    // Background Image Opacity in %
Projects[PID]["BGImageBlur"]         = 0;      // Enable (1) or Disable (0) Background-Image Blur
Projects[PID]["LoadingImageCustom"]  = '';     // provide filename of custom loading Image, leave blank for default image
Projects[PID]["Style"]               = "Auto"; // Light | Dark | Auto
Projects[PID]["ShowTemperature"]     = 1;      // Enable (1) or Disable (0) ShowTemperature


// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else,
// because 'webserver.js' sets all enabled PINs to 'OUTPUT'.

Projects[PID]["GPIOEnabled"]         = {};
Projects[PID]["GPIOEnabled"][2]      = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][3]      = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][4]      = 0; // Enable (1) or Disable (0) GPIO pin 4 for processing
Projects[PID]["GPIOEnabled"][5]      = 0; // Enable (1) or Disable (0) GPIO pin 5 for processing
Projects[PID]["GPIOEnabled"][6]      = 0; // Enable (1) or Disable (0) GPIO pin 6 for processing
Projects[PID]["GPIOEnabled"][7]      = 0; // Enable (1) or Disable (0) GPIO pin 7 for processing
Projects[PID]["GPIOEnabled"][8]      = 0; // Enable (1) or Disable (0) GPIO pin 8 for processing
Projects[PID]["GPIOEnabled"][9]      = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
Projects[PID]["GPIOEnabled"][10]     = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
Projects[PID]["GPIOEnabled"][11]     = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
Projects[PID]["GPIOEnabled"][12]     = 0; // Enable (1) or Disable (0) GPIO pin 12 for processing
Projects[PID]["GPIOEnabled"][13]     = 0; // Enable (1) or Disable (0) GPIO pin 13 for processing
Projects[PID]["GPIOEnabled"][14]     = 0; // Enable (1) or Disable (0) GPIO pin 14 for processing
Projects[PID]["GPIOEnabled"][15]     = 0; // Enable (1) or Disable (0) GPIO pin 15 for processing
Projects[PID]["GPIOEnabled"][16]     = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
Projects[PID]["GPIOEnabled"][17]     = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
Projects[PID]["GPIOEnabled"][18]     = 0; // Enable (1) or Disable (0) GPIO pin 18 for processing
Projects[PID]["GPIOEnabled"][19]     = 0; // Enable (1) or Disable (0) GPIO pin 19 for processing
Projects[PID]["GPIOEnabled"][20]     = 0; // Enable (1) or Disable (0) GPIO pin 20 for processing
Projects[PID]["GPIOEnabled"][21]     = 0; // Enable (1) or Disable (0) GPIO pin 21 for processing
Projects[PID]["GPIOEnabled"][22]     = 0; // Enable (1) or Disable (0) GPIO pin 22 for processing
Projects[PID]["GPIOEnabled"][23]     = 0; // Enable (1) or Disable (0) GPIO pin 23 for processing
Projects[PID]["GPIOEnabled"][24]     = 0; // Enable (1) or Disable (0) GPIO pin 24 for processing
Projects[PID]["GPIOEnabled"][25]     = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
Projects[PID]["GPIOEnabled"][26]     = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
Projects[PID]["GPIOEnabled"][27]     = 0; // Enable (1) or Disable (0) GPIO pin 27 for processing

/**  End  **//************************************************************/

/** Start **//*********** Project 'pikvm' Config *************************/

PID++;
Projects[PID]                        = {};

Projects[PID]["ProjectID"]           = "pikvm"; // must be unique!
Projects[PID]["ButtonName"]          = "PiKVM";

Projects[PID]["Title"]               = "KVM-A3 Test Board";
//Projects[PID]["Description"]         = "Freie PINs für Geekworm KVM-A3 und andere darauf basierende HATs";
Projects[PID]["Description"]         = "Free PINs for use with Geekworm KVM-A3 and other HATs based on it";

Projects[PID]["ColorfulText"]        = 1;      // 1 - Enabled: show Text in PIN-Color | 0 - Disabled Use default Text Colors for all
Projects[PID]["ColorfulToggles"]     = 1;      // 1 - Enabled: show toggle switches in PIN-Color | 0 - Disabled Use default Toggle Colors for all
Projects[PID]["BGImageEnabled"]      = 1;      // Enable (1) or Disable (0) Background-Image
Projects[PID]["BGImageCustom"]       = 'KVM-A3.png'; // provide filename of custom Background Image, leave blank for default image
Projects[PID]["BGImageOpacity"]      = "7";    // Background Image Opacity in %
Projects[PID]["BGImageBlur"]         = 0;      // Enable (1) or Disable (0) Background-Image Blur
Projects[PID]["LoadingImageCustom"]  = '';     // provide filename of custom loading Image, leave blank for default image
Projects[PID]["Style"]               = "Auto"; // Light | Dark | Auto
Projects[PID]["ShowTemperature"]     = 1;      // Enable (1) or Disable (0) ShowTemperature


// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else,
// because 'webserver.js' sets all enabled PINs to 'OUTPUT'.

Projects[PID]["GPIOEnabled"]         = {};
Projects[PID]["GPIOEnabled"][2]      = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][3]      = 0; // Enable (1) or Disable (0) GPIO pin 3 for processing
Projects[PID]["GPIOEnabled"][4]      = 0; // Enable (1) or Disable (0) GPIO pin 4 for processing
Projects[PID]["GPIOEnabled"][5]      = 0; // Enable (1) or Disable (0) GPIO pin 5 for processing
Projects[PID]["GPIOEnabled"][6]      = 0; // Enable (1) or Disable (0) GPIO pin 6 for processing
Projects[PID]["GPIOEnabled"][7]      = 0; // Enable (1) or Disable (0) GPIO pin 7 for processing
Projects[PID]["GPIOEnabled"][8]      = 0; // Enable (1) or Disable (0) GPIO pin 8 for processing
Projects[PID]["GPIOEnabled"][9]      = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
Projects[PID]["GPIOEnabled"][10]     = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
Projects[PID]["GPIOEnabled"][11]     = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
Projects[PID]["GPIOEnabled"][12]     = 0; // Enable (1) or Disable (0) GPIO pin 12 for processing
Projects[PID]["GPIOEnabled"][13]     = 0; // Enable (1) or Disable (0) GPIO pin 13 for processing
Projects[PID]["GPIOEnabled"][14]     = 0; // Enable (1) or Disable (0) GPIO pin 14 for processing
Projects[PID]["GPIOEnabled"][15]     = 0; // Enable (1) or Disable (0) GPIO pin 15 for processing
Projects[PID]["GPIOEnabled"][16]     = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
Projects[PID]["GPIOEnabled"][17]     = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
Projects[PID]["GPIOEnabled"][18]     = 0; // Enable (1) or Disable (0) GPIO pin 18 for processing
Projects[PID]["GPIOEnabled"][19]     = 0; // Enable (1) or Disable (0) GPIO pin 19 for processing
Projects[PID]["GPIOEnabled"][20]     = 0; // Enable (1) or Disable (0) GPIO pin 20 for processing
Projects[PID]["GPIOEnabled"][21]     = 0; // Enable (1) or Disable (0) GPIO pin 21 for processing
Projects[PID]["GPIOEnabled"][22]     = 0; // Enable (1) or Disable (0) GPIO pin 22 for processing
Projects[PID]["GPIOEnabled"][23]     = 0; // Enable (1) or Disable (0) GPIO pin 23 for processing
Projects[PID]["GPIOEnabled"][24]     = 0; // Enable (1) or Disable (0) GPIO pin 24 for processing
Projects[PID]["GPIOEnabled"][25]     = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
Projects[PID]["GPIOEnabled"][26]     = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
Projects[PID]["GPIOEnabled"][27]     = 0; // Enable (1) or Disable (0) GPIO pin 27 for processing

/**  End  **//************************************************************/


/*<#####################################################################>*/
/*<########################| General Settings |#########################>*/
/*<#####################################################################>*/


/******  /!\ Be careful beyond this line! Better don't touch! /!\  ******/

// URLParams
var URLParamProject              = "project";

// CSS IDs
var CSSIDTitle                   = "Title"
var CSSIDGPIO                    = "GPIO";
var CSSIDButton                  = "MGPIO";
var CSSIDSwitch                  = "CSSSwitchGPIO";
var CSSIDText                    = "CSSTextGPIO";
var CSSIDPin                     = "CSSPinGPIO"
var CSSIDGPIOPage                = "gpio-page";
var CSSIDStartPage               = "start-page";
var CSSIDStartPageTitle          = "StartPageTitle";
var CSSIDStartPageLogo           = "StartPageLogo";
var CSSIDSiteContent             = "SiteContent";
var CSSIDLoading                 = "loading";
var CSSIDShowTemperature         = "showTemperature";
var CSSIDShowTemperatureText     = "showTemperatureText";

// CSS Classes
var CSSClassTitle                = "title";
var CSSClassDisable              = "disabled";
var CSSClassButtonDisable        = "disabled";
var CSSClassToggleDisable        = "disabled";
var CSSClassTextDisable          = "disabled";
var CSSClassBGImage              = "bgimage";
var CSSClassBGImageBlur          = "bgimage-blur";
var CSSClassTitleLogo            = "title-logo"
var CSSClassTitleLogoDisabled    = "title-logo-disabled"
var CSSClassTitleTextWithLogo    = "title-text-with-logo"
var CSSClassTableRow             = "div-table-row";
var CSSClassSiteContentHide      = "SiteContentHide";
var CSSClassShowTemperatureHide  = "showTemperatureHide";

// CSSVariableNames
var CSSVarBGImage                = "ImageBG";
var CSSVarBGImageOpacity         = "ImageBGOpacity";
var CSSVarBGImageMinHeight       = "ImageBGMinHeight";
var CSSVarLoadingImage           = "ImageLoading";
var CSSVarPinImage               = "ImagePin";
var CSSVarPinImageDisabled       = "ImagePinDisabled";

// Script IDs
var JSIDShowTemperature          = "showTemperatureJS";

// Background Image
var DefaultHeaderLogo            = "LogoHeader.png";
var DefaultBGImage               = "BGImage.png";
var DefaultLoadingImage          = "Loading.gif";
var DefaultPin                   = "pin.png";
var DefaultPinDark               = "pinDark.png";
var DefaultPinDisabled           = "pinDisabled.png";

// Misc
var StyleLight                   = "Light";
var StyleDark                    = "Dark";
var StyleAuto                    = "Auto";
var CSSPath                      = "css";
var ImagesPath                   = "images";
var JSPath                       = "js";
var GPIOName                     = "GPIO";  // has to be the same in the webserver.js!
var GPIONameT                    = "TGPIO"; // has to be the same in the webserver.js!
var StylesCSS                    = "styles.css";
var StyleLightCSS                = "colorsLight.css";
var StyleDarkCSS                 = "colorsDark.css";
var TranscolorDark               = "Black";
var TranscolorLight              = "White";
var LoadingColorDark             = "#000000";
var LoadingColorLight            = "#ffffff";
var TemperatureFile              = "tempState.js";
var OpacityDarkAdd               = 7;

// Colors CSS Classes
var CSSColorPrefixSwitch         = "switchColor";
var CSSColorPrefixPin            = "pin";
var CSSColorPrefixText           = "text";
var CSSColorApendixDisabled      = "Disabled";
var CSSColorBlack                = "Black";
var CSSColorRed                  = "Red";
var CSSColorOrange               = "Orange";
var CSSColorYellow               = "Yellow";
var CSSToggleColorDefault        = "Default";
var CSSTextColorDefault          = "Black";

var CSSColorGPIO                 = {};
CSSColorGPIO[2]                  = 'Pink';   // GPIO 2 Color CSS-Class
CSSColorGPIO[3]                  = 'Pink';   // GPIO 3 Color CSS-Class
CSSColorGPIO[4]                  = 'Green';  // GPIO 4 Color CSS-Class
CSSColorGPIO[5]                  = 'Green';  // GPIO 5 Color CSS-Class
CSSColorGPIO[6]                  = 'Green';  // GPIO 6 Color CSS-Class
CSSColorGPIO[7]                  = 'Blue';   // GPIO 7 Color CSS-Class
CSSColorGPIO[8]                  = 'Blue';   // GPIO 8 Color CSS-Class
CSSColorGPIO[9]                  = 'Blue';   // GPIO 9 Color CSS-Class
CSSColorGPIO[10]                 = 'Blue';   // GPIO 10 Color CSS-Class
CSSColorGPIO[11]                 = 'Blue';   // GPIO 11 Color CSS-Class
CSSColorGPIO[12]                 = 'Green';  // GPIO 12 Color CSS-Class
CSSColorGPIO[13]                 = 'Green';  // GPIO 13 Color CSS-Class
CSSColorGPIO[14]                 = 'Purple'; // GPIO 14 Color CSS-Class
CSSColorGPIO[15]                 = 'Purple'; // GPIO 15 Color CSS-Class
CSSColorGPIO[16]                 = 'Green';  // GPIO 16 Color CSS-Class
CSSColorGPIO[17]                 = 'Green';  // GPIO 17 Color CSS-Class
CSSColorGPIO[18]                 = 'Green';  // GPIO 18 Color CSS-Class
CSSColorGPIO[19]                 = 'Blue';   // GPIO 19 Color CSS-Class
CSSColorGPIO[20]                 = 'Blue';   // GPIO 20 Color CSS-Class
CSSColorGPIO[21]                 = 'Blue';   // GPIO 21 Color CSS-Class
CSSColorGPIO[22]                 = 'Green';  // GPIO 22 Color CSS-Class
CSSColorGPIO[23]                 = 'Green';  // GPIO 23 Color CSS-Class
CSSColorGPIO[24]                 = 'Green';  // GPIO 24 Color CSS-Class
CSSColorGPIO[25]                 = 'Green';  // GPIO 25 Color CSS-Class
CSSColorGPIO[26]                 = 'Green';  // GPIO 26 Color CSS-Class
CSSColorGPIO[27]                 = 'Green';  // GPIO 27 Color CSS-Class

