# Configuration
You can configure and costumize the Start Page and one or more Projects.

It is also possible to disable GPIO pins on server site. This important if you use HATs like Geekworm KVM-A3 or similar, because all enabled pins are set automatically to OUTPUT by the webserver.

## webserver.js
This is the Node.JS Webserver and can be found in the root. Here you can set some Variables to customize the Server behavior.

```JavaScript
const WebPort          = 80;      // HTTP Server Port
var   SetDefaultValues = 0;       // 0 - Read GPIO Status | 1 - Set Default Values
```
```JavaScript
// Here you can really enable/disable GPIOs for processing, its
// important when you use a HAT like GeekWorm KVM-A3 or something else,
// because 'webserver.js' sets all enabled PINs to 'OUTPUT'.

GPIOEnabled[2]  = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
GPIOEnabled[3]  = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
GPIOEnabled[4]  = 1; // Enable (1) or Disable (0) GPIO pin 4 for processing
GPIOEnabled[5]  = 1; // Enable (1) or Disable (0) GPIO pin 5 for processing
GPIOEnabled[6]  = 1; // Enable (1) or Disable (0) GPIO pin 6 for processing
GPIOEnabled[7]  = 1; // Enable (1) or Disable (0) GPIO pin 7 for processing
GPIOEnabled[8]  = 1; // Enable (1) or Disable (0) GPIO pin 8 for processing
GPIOEnabled[9]  = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
GPIOEnabled[10] = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
GPIOEnabled[11] = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
GPIOEnabled[12] = 1; // Enable (1) or Disable (0) GPIO pin 12 for processing
GPIOEnabled[13] = 1; // Enable (1) or Disable (0) GPIO pin 13 for processing
GPIOEnabled[14] = 1; // Enable (1) or Disable (0) GPIO pin 14 for processing
GPIOEnabled[15] = 1; // Enable (1) or Disable (0) GPIO pin 15 for processing
GPIOEnabled[16] = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
GPIOEnabled[17] = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
GPIOEnabled[18] = 1; // Enable (1) or Disable (0) GPIO pin 18 for processing
GPIOEnabled[19] = 1; // Enable (1) or Disable (0) GPIO pin 19 for processing
GPIOEnabled[20] = 1; // Enable (1) or Disable (0) GPIO pin 20 for processing
GPIOEnabled[21] = 1; // Enable (1) or Disable (0) GPIO pin 21 for processing
GPIOEnabled[22] = 1; // Enable (1) or Disable (0) GPIO pin 22 for processing
GPIOEnabled[23] = 1; // Enable (1) or Disable (0) GPIO pin 23 for processing
GPIOEnabled[24] = 1; // Enable (1) or Disable (0) GPIO pin 24 for processing
GPIOEnabled[25] = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
GPIOEnabled[26] = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
GPIOEnabled[27] = 1; // Enable (1) or Disable (0) GPIO pin 27 for processing
```
```JavaScript
// GPIO mapping: cat /sys/kernel/debug/gpio

if (GPIOEnabled[2]  === 1) { GPIOMapping[2]  = 514; } // Map GPIO pin 2
if (GPIOEnabled[3]  === 1) { GPIOMapping[3]  = 515; } // Map GPIO pin 3
if (GPIOEnabled[4]  === 1) { GPIOMapping[4]  = 516; } // Map GPIO pin 4
if (GPIOEnabled[5]  === 1) { GPIOMapping[5]  = 517; } // Map GPIO pin 5
if (GPIOEnabled[6]  === 1) { GPIOMapping[6]  = 518; } // Map GPIO pin 6
if (GPIOEnabled[7]  === 1) { GPIOMapping[7]  = 519; } // Map GPIO pin 7
if (GPIOEnabled[8]  === 1) { GPIOMapping[8]  = 520; } // Map GPIO pin 8
if (GPIOEnabled[9]  === 1) { GPIOMapping[9]  = 521; } // Map GPIO pin 9
if (GPIOEnabled[10] === 1) { GPIOMapping[10] = 522; } // Map GPIO pin 10
if (GPIOEnabled[11] === 1) { GPIOMapping[11] = 523; } // Map GPIO pin 11
if (GPIOEnabled[12] === 1) { GPIOMapping[12] = 524; } // Map GPIO pin 12
if (GPIOEnabled[13] === 1) { GPIOMapping[13] = 525; } // Map GPIO pin 13
if (GPIOEnabled[14] === 1) { GPIOMapping[14] = 526; } // Map GPIO pin 14
if (GPIOEnabled[15] === 1) { GPIOMapping[15] = 527; } // Map GPIO pin 15
if (GPIOEnabled[16] === 1) { GPIOMapping[16] = 528; } // Map GPIO pin 16
if (GPIOEnabled[17] === 1) { GPIOMapping[17] = 529; } // Map GPIO pin 17
if (GPIOEnabled[18] === 1) { GPIOMapping[18] = 530; } // Map GPIO pin 18
if (GPIOEnabled[19] === 1) { GPIOMapping[19] = 531; } // Map GPIO pin 19
if (GPIOEnabled[20] === 1) { GPIOMapping[20] = 532; } // Map GPIO pin 20
if (GPIOEnabled[21] === 1) { GPIOMapping[21] = 533; } // Map GPIO pin 21
if (GPIOEnabled[22] === 1) { GPIOMapping[22] = 534; } // Map GPIO pin 22
if (GPIOEnabled[23] === 1) { GPIOMapping[23] = 535; } // Map GPIO pin 23
if (GPIOEnabled[24] === 1) { GPIOMapping[24] = 536; } // Map GPIO pin 24
if (GPIOEnabled[25] === 1) { GPIOMapping[25] = 537; } // Map GPIO pin 25
if (GPIOEnabled[26] === 1) { GPIOMapping[26] = 538; } // Map GPIO pin 26
if (GPIOEnabled[27] === 1) { GPIOMapping[27] = 539; } // Map GPIO pin 27
```
```JavaScript
// GPIO Default Values

if (GPIOEnabled[2]  === 1) { GPIOvalue[2]  = 0; } // Turn off GPIO 2 by default | Enable (1) or Disable (0)
if (GPIOEnabled[3]  === 1) { GPIOvalue[3]  = 0; } // Turn off GPIO 3 by default | Enable (1) or Disable (0)
if (GPIOEnabled[4]  === 1) { GPIOvalue[4]  = 0; } // Turn off GPIO 4 by default | Enable (1) or Disable (0)
if (GPIOEnabled[5]  === 1) { GPIOvalue[5]  = 0; } // Turn off GPIO 5 by default | Enable (1) or Disable (0)
if (GPIOEnabled[6]  === 1) { GPIOvalue[6]  = 0; } // Turn off GPIO 6 by default | Enable (1) or Disable (0)
if (GPIOEnabled[7]  === 1) { GPIOvalue[7]  = 0; } // Turn off GPIO 7 by default | Enable (1) or Disable (0)
if (GPIOEnabled[8]  === 1) { GPIOvalue[8]  = 0; } // Turn off GPIO 8 by default | Enable (1) or Disable (0)
if (GPIOEnabled[9]  === 1) { GPIOvalue[9]  = 0; } // Turn off GPIO 9 by default | Enable (1) or Disable (0)
if (GPIOEnabled[10] === 1) { GPIOvalue[10] = 0; } // Turn off GPIO 10 by default | Enable (1) or Disable (0)
if (GPIOEnabled[11] === 1) { GPIOvalue[11] = 0; } // Turn off GPIO 11 by default | Enable (1) or Disable (0)
if (GPIOEnabled[12] === 1) { GPIOvalue[12] = 0; } // Turn off GPIO 12 by default | Enable (1) or Disable (0)
if (GPIOEnabled[13] === 1) { GPIOvalue[13] = 0; } // Turn off GPIO 13 by default | Enable (1) or Disable (0)
if (GPIOEnabled[14] === 1) { GPIOvalue[14] = 0; } // Turn off GPIO 14 by default | Enable (1) or Disable (0)
if (GPIOEnabled[15] === 1) { GPIOvalue[15] = 0; } // Turn off GPIO 15 by default | Enable (1) or Disable (0)
if (GPIOEnabled[16] === 1) { GPIOvalue[16] = 0; } // Turn off GPIO 16 by default | Enable (1) or Disable (0)
if (GPIOEnabled[17] === 1) { GPIOvalue[17] = 0; } // Turn off GPIO 17 by default | Enable (1) or Disable (0)
if (GPIOEnabled[18] === 1) { GPIOvalue[18] = 0; } // Turn off GPIO 18 by default | Enable (1) or Disable (0)
if (GPIOEnabled[19] === 1) { GPIOvalue[19] = 0; } // Turn off GPIO 19 by default | Enable (1) or Disable (0)
if (GPIOEnabled[20] === 1) { GPIOvalue[20] = 0; } // Turn off GPIO 20 by default | Enable (1) or Disable (0)
if (GPIOEnabled[21] === 1) { GPIOvalue[21] = 0; } // Turn off GPIO 21 by default | Enable (1) or Disable (0)
if (GPIOEnabled[22] === 1) { GPIOvalue[22] = 0; } // Turn off GPIO 22 by default | Enable (1) or Disable (0)
if (GPIOEnabled[23] === 1) { GPIOvalue[23] = 0; } // Turn off GPIO 23 by default | Enable (1) or Disable (0)
if (GPIOEnabled[24] === 1) { GPIOvalue[24] = 0; } // Turn off GPIO 24 by default | Enable (1) or Disable (0)
if (GPIOEnabled[25] === 1) { GPIOvalue[25] = 0; } // Turn off GPIO 25 by default | Enable (1) or Disable (0)
if (GPIOEnabled[26] === 1) { GPIOvalue[26] = 0; } // Turn off GPIO 26 by default | Enable (1) or Disable (0)
if (GPIOEnabled[27] === 1) { GPIOvalue[27] = 0; } // Turn off GPIO 27 by default | Enable (1) or Disable (0)
```

## siteConfig.js
This file can be found in 'public'. This file is for managing the Style and Projects.

If you want to add more Projects, simply copy the Part between 'Start' and 'End' under the exiting Project.

```javascript
// StartPage
var StartPageTitle                   = "RaspBerry Pi Test Board";
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
```
```javascript
/** Start **//********** Project 'default' Config ************************/

PID++;
Projects[PID]                        = {};

Projects[PID]["ProjectID"]           = "default"; // must be unique!
Projects[PID]["ButtonName"]          = "Default";

Projects[PID]["Title"]               = "RaspBerry Pi Test Board";
Projects[PID]["Description"]         = "All PINs available";

Projects[PID]["ColorfulText"]        = 1;      // 1 - Enabled: show Text in PIN-Color | 0 - Disabled Use default Text Colors for all
Projects[PID]["ColorfulToggles"]     = 1;      // 1 - Enabled: show toggle switches in PIN-Color | 0 - Disabled Use default Toggle Colors for all
Projects[PID]["BGImageEnabled"]      = 1;      // Enable (1) or Disable (0) Background-Image
Projects[PID]["BGImageCustom"]       = '';     // provide filename of custom Background Image, leave blank for default image
Projects[PID]["BGImageOpacity"]      = "7";    // Background Image Opacity in %
Projects[PID]["BGImageBlur"]         = 0;      // Enable (1) or Disable (0) Background-Image Blur
Projects[PID]["LoadingImageCustom"]  = '';     // provide filename of custom loading Image, leave blank for default image
Projects[PID]["ShowTemperature"]     = 1;      // Enable (1) or Disable (0) ShowTemperature

Projects[PID]["Style"]               = "Auto"; // Light | Dark | Auto

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
```
