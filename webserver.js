
/****** Base Config ****************************************************/

const WebPort   = 80;      // HTTP Server Port
var   GPIOName  = "GPIO";  // See siteconfig.js - has to be the same!
var   GPIONameT = "TGPIO"; // See siteconfig.js - has to be the same!

/* if you want to run WebPort on a port lower than 1024 without running
 * node as root, you need to run following from a terminal on the pi
 * sudo apt update
 * sudo apt install libcap2-bin
 * sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
 */

// Here you can really enable/disable GPIOs for processing, its
// important when you use a HAT like GeekWorm KVM-A3 or something else.
// You can enable/disable GPIOs in the 'siteconfig.js', thats only for
// showing toggles and Buttons for the GPIOs on the Page.
var GPIOEnabled = {}; 
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

/****** VARIABLES ******************************************************/

var GPIOMapping = {};
var GPIOvalue   = {};

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

/*************** Load Moudles and Variables ***************************/

var http    = require('http').createServer(handler); //require http server, and create server with function handler()
var fs      = require('fs'); //require filesystem module
var url     = require('url');
var path    = require('path');
var io      = require('socket.io','net')(http) //require socket.io module and pass the http object (server)
var Gpio    = require('onoff').Gpio; //include onoff to interact with the GPIO
var UseGPIO = {};

if (GPIOEnabled[2]  === 1) { UseGPIO[2]  = new Gpio(GPIOMapping[2], 'out'); } // use GPIO pin 2 as output
if (GPIOEnabled[3]  === 1) { UseGPIO[3]  = new Gpio(GPIOMapping[3], 'out'); } // use GPIO pin 3 as output
if (GPIOEnabled[4]  === 1) { UseGPIO[4]  = new Gpio(GPIOMapping[4], 'out'); } // use GPIO pin 4 as output
if (GPIOEnabled[5]  === 1) { UseGPIO[5]  = new Gpio(GPIOMapping[5], 'out'); } // use GPIO pin 5 as output
if (GPIOEnabled[6]  === 1) { UseGPIO[6]  = new Gpio(GPIOMapping[6], 'out'); } // use GPIO pin 6 as output
if (GPIOEnabled[7]  === 1) { UseGPIO[7]  = new Gpio(GPIOMapping[7], 'out'); } // use GPIO pin 7 as output
if (GPIOEnabled[8]  === 1) { UseGPIO[8]  = new Gpio(GPIOMapping[8], 'out'); } // use GPIO pin 8 as output
if (GPIOEnabled[9]  === 1) { UseGPIO[9]  = new Gpio(GPIOMapping[9], 'out'); } // use GPIO pin 9 as output
if (GPIOEnabled[10] === 1) { UseGPIO[10] = new Gpio(GPIOMapping[10], 'out'); } // use GPIO pin 10 as output
if (GPIOEnabled[11] === 1) { UseGPIO[11] = new Gpio(GPIOMapping[11], 'out'); } // use GPIO pin 11 as output
if (GPIOEnabled[12] === 1) { UseGPIO[12] = new Gpio(GPIOMapping[12], 'out'); } // use GPIO pin 12 as output
if (GPIOEnabled[13] === 1) { UseGPIO[13] = new Gpio(GPIOMapping[13], 'out'); } // use GPIO pin 13 as output
if (GPIOEnabled[14] === 1) { UseGPIO[14] = new Gpio(GPIOMapping[14], 'out'); } // use GPIO pin 14 as output
if (GPIOEnabled[15] === 1) { UseGPIO[15] = new Gpio(GPIOMapping[15], 'out'); } // use GPIO pin 15 as output
if (GPIOEnabled[16] === 1) { UseGPIO[16] = new Gpio(GPIOMapping[16], 'out'); } // use GPIO pin 16 as output
if (GPIOEnabled[17] === 1) { UseGPIO[17] = new Gpio(GPIOMapping[17], 'out'); } // use GPIO pin 17 as output
if (GPIOEnabled[18] === 1) { UseGPIO[18] = new Gpio(GPIOMapping[18], 'out'); } // use GPIO pin 18 as output
if (GPIOEnabled[19] === 1) { UseGPIO[19] = new Gpio(GPIOMapping[19], 'out'); } // use GPIO pin 19 as output
if (GPIOEnabled[20] === 1) { UseGPIO[20] = new Gpio(GPIOMapping[20], 'out'); } // use GPIO pin 20 as output
if (GPIOEnabled[21] === 1) { UseGPIO[21] = new Gpio(GPIOMapping[21], 'out'); } // use GPIO pin 21 as output
if (GPIOEnabled[22] === 1) { UseGPIO[22] = new Gpio(GPIOMapping[22], 'out'); } // use GPIO pin 22 as output
if (GPIOEnabled[23] === 1) { UseGPIO[23] = new Gpio(GPIOMapping[23], 'out'); } // use GPIO pin 23 as output
if (GPIOEnabled[24] === 1) { UseGPIO[24] = new Gpio(GPIOMapping[24], 'out'); } // use GPIO pin 24 as output
if (GPIOEnabled[25] === 1) { UseGPIO[25] = new Gpio(GPIOMapping[25], 'out'); } // use GPIO pin 25 as output
if (GPIOEnabled[26] === 1) { UseGPIO[26] = new Gpio(GPIOMapping[26], 'out'); } // use GPIO pin 26 as output
if (GPIOEnabled[27] === 1) { UseGPIO[27] = new Gpio(GPIOMapping[27], 'out'); } // use GPIO pin 27 as output
 
/*************** Web Browser Communication ****************************/

// Start http webserver
http.listen(WebPort, function() {  // This gets call when the web server is first started.

	if (GPIOEnabled[2]  === 1) { UseGPIO[2].writeSync(GPIOvalue[2]); }   // Turn on/off GPIO 2 by default
	if (GPIOEnabled[3]  === 1) { UseGPIO[3].writeSync(GPIOvalue[3]); }   // Turn on/off GPIO 3 by default
	if (GPIOEnabled[4]  === 1) { UseGPIO[4].writeSync(GPIOvalue[4]); }   // Turn on/off GPIO 4 by default
	if (GPIOEnabled[5]  === 1) { UseGPIO[5].writeSync(GPIOvalue[5]); }   // Turn on/off GPIO 5 by default
	if (GPIOEnabled[6]  === 1) { UseGPIO[6].writeSync(GPIOvalue[6]); }   // Turn on/off GPIO 6 by default
	if (GPIOEnabled[7]  === 1) { UseGPIO[7].writeSync(GPIOvalue[7]); }   // Turn on/off GPIO 7 by default
	if (GPIOEnabled[8]  === 1) { UseGPIO[8].writeSync(GPIOvalue[8]); }   // Turn on/off GPIO 8 by default
	if (GPIOEnabled[9]  === 1) { UseGPIO[9].writeSync(GPIOvalue[9]); }   // Turn on/off GPIO 9 by default
	if (GPIOEnabled[10] === 1) { UseGPIO[10].writeSync(GPIOvalue[10]); } // Turn on/off GPIO 10 by default
	if (GPIOEnabled[11] === 1) { UseGPIO[11].writeSync(GPIOvalue[11]); } // Turn on/off GPIO 11 by default
	if (GPIOEnabled[12] === 1) { UseGPIO[12].writeSync(GPIOvalue[12]); } // Turn on/off GPIO 12 by default
	if (GPIOEnabled[13] === 1) { UseGPIO[13].writeSync(GPIOvalue[13]); } // Turn on/off GPIO 13 by default
	if (GPIOEnabled[14] === 1) { UseGPIO[14].writeSync(GPIOvalue[14]); } // Turn on/off GPIO 14 by default
	if (GPIOEnabled[15] === 1) { UseGPIO[15].writeSync(GPIOvalue[15]); } // Turn on/off GPIO 15 by default
	if (GPIOEnabled[16] === 1) { UseGPIO[16].writeSync(GPIOvalue[16]); } // Turn on/off GPIO 16 by default
	if (GPIOEnabled[17] === 1) { UseGPIO[17].writeSync(GPIOvalue[17]); } // Turn on/off GPIO 17 by default
	if (GPIOEnabled[18] === 1) { UseGPIO[18].writeSync(GPIOvalue[18]); } // Turn on/off GPIO 18 by default
	if (GPIOEnabled[19] === 1) { UseGPIO[19].writeSync(GPIOvalue[19]); } // Turn on/off GPIO 19 by default
	if (GPIOEnabled[20] === 1) { UseGPIO[20].writeSync(GPIOvalue[20]); } // Turn on/off GPIO 20 by default
	if (GPIOEnabled[21] === 1) { UseGPIO[21].writeSync(GPIOvalue[21]); } // Turn on/off GPIO 21 by default
	if (GPIOEnabled[22] === 1) { UseGPIO[22].writeSync(GPIOvalue[22]); } // Turn on/off GPIO 22 by default
	if (GPIOEnabled[23] === 1) { UseGPIO[23].writeSync(GPIOvalue[23]); } // Turn on/off GPIO 23 by default
	if (GPIOEnabled[24] === 1) { UseGPIO[24].writeSync(GPIOvalue[24]); } // Turn on/off GPIO 24 by default
	if (GPIOEnabled[25] === 1) { UseGPIO[25].writeSync(GPIOvalue[25]); } // Turn on/off GPIO 25 by default
	if (GPIOEnabled[26] === 1) { UseGPIO[26].writeSync(GPIOvalue[26]); } // Turn on/off GPIO 26 by default
	if (GPIOEnabled[27] === 1) { UseGPIO[27].writeSync(GPIOvalue[27]); } // Turn on/off GPIO 27 by default

	console.log('Server running on Port '+WebPort);
	if (GPIOEnabled[2]  === 1) { console.log(GPIOName+'2 = '+GPIOvalue[2]); }
	if (GPIOEnabled[3]  === 1) { console.log(GPIOName+'3 = '+GPIOvalue[3]); }
	if (GPIOEnabled[4]  === 1) { console.log(GPIOName+'4 = '+GPIOvalue[4]); }
	if (GPIOEnabled[5]  === 1) { console.log(GPIOName+'5 = '+GPIOvalue[5]); }
	if (GPIOEnabled[6]  === 1) { console.log(GPIOName+'6 = '+GPIOvalue[6]); }
	if (GPIOEnabled[7]  === 1) { console.log(GPIOName+'7 = '+GPIOvalue[7]); }
	if (GPIOEnabled[8]  === 1) { console.log(GPIOName+'8 = '+GPIOvalue[8]); }
	if (GPIOEnabled[9]  === 1) { console.log(GPIOName+'9 = '+GPIOvalue[9]); }
	if (GPIOEnabled[10] === 1) { console.log(GPIOName+'10 = '+GPIOvalue[10]); }
	if (GPIOEnabled[11] === 1) { console.log(GPIOName+'11 = '+GPIOvalue[11]); }
	if (GPIOEnabled[12] === 1) { console.log(GPIOName+'12 = '+GPIOvalue[12]); }
	if (GPIOEnabled[13] === 1) { console.log(GPIOName+'13 = '+GPIOvalue[13]); }
	if (GPIOEnabled[14] === 1) { console.log(GPIOName+'14 = '+GPIOvalue[14]); }
	if (GPIOEnabled[15] === 1) { console.log(GPIOName+'15 = '+GPIOvalue[15]); }
	if (GPIOEnabled[16] === 1) { console.log(GPIOName+'16 = '+GPIOvalue[16]); }
	if (GPIOEnabled[17] === 1) { console.log(GPIOName+'17 = '+GPIOvalue[17]); }
	if (GPIOEnabled[18] === 1) { console.log(GPIOName+'18 = '+GPIOvalue[18]); }
	if (GPIOEnabled[19] === 1) { console.log(GPIOName+'19 = '+GPIOvalue[19]); }
	if (GPIOEnabled[20] === 1) { console.log(GPIOName+'20 = '+GPIOvalue[20]); }
	if (GPIOEnabled[21] === 1) { console.log(GPIOName+'21 = '+GPIOvalue[21]); }
	if (GPIOEnabled[22] === 1) { console.log(GPIOName+'22 = '+GPIOvalue[22]); }
	if (GPIOEnabled[23] === 1) { console.log(GPIOName+'23 = '+GPIOvalue[23]); }
	if (GPIOEnabled[24] === 1) { console.log(GPIOName+'24 = '+GPIOvalue[24]); }
	if (GPIOEnabled[25] === 1) { console.log(GPIOName+'25 = '+GPIOvalue[25]); }
	if (GPIOEnabled[26] === 1) { console.log(GPIOName+'26 = '+GPIOvalue[26]); }
	if (GPIOEnabled[27] === 1) { console.log(GPIOName+'27 = '+GPIOvalue[27]); }

	} 
); 


// function handler is called whenever a client makes an http request to the server
// such as requesting a web page.
function handler (req, res) { 
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log('filename='+filename);
    var extname = path.extname(filename);
    if (filename=='./') {
      console.log('retrieving default index.html file');
      filename= './index.html';
    }
    
    // Initial content type
    var contentType = 'text/html';
    
    // Check ext and set content type
    switch(extname) {
	case '.js':
	    contentType = 'text/javascript';
	    break;
	case '.css':
	    contentType = 'text/css';
	    break;
	case '.json':
	    contentType = 'application/json';
	    break;
	case '.png':
	    contentType = 'image/png';
	    break;
	case '.jpg':
	    contentType = 'image/jpg';
	    break;
	case '.ico':
	    contentType = 'image/png';
	    break;
    }
    
    fs.readFile(__dirname + '/public/' + filename, function(err, content) {
	if(err) {
	    console.log('File not found. Filename='+filename);
	    fs.readFile(__dirname + '/public/404.html', function(err, content) {
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		return res.end(content,'utf8'); //display 404 on error
	    });
	}
	else {
	    // Success
	    res.writeHead(200, {'Content-Type': contentType}); 
	    return res.end(content,'utf8');
	}
    });
}


// Execute this when web server is terminated
process.on('SIGINT', function () { // on ctrl+c
  
	if (GPIOEnabled[2]  === 1) { UseGPIO[2].writeSync(0); }  // Turn Off GPIO 2
	if (GPIOEnabled[2]  === 1) { UseGPIO[2].unexport(); }    // Unexport GPIO 2 to free resources
	if (GPIOEnabled[3]  === 1) { UseGPIO[3].writeSync(0); }  // Turn Off GPIO 3
	if (GPIOEnabled[3]  === 1) { UseGPIO[3].unexport(); }    // Unexport GPIO 3 to free resources
	if (GPIOEnabled[4]  === 1) { UseGPIO[4].writeSync(0); }  // Turn Off GPIO 4
	if (GPIOEnabled[4]  === 1) { UseGPIO[4].unexport(); }    // Unexport GPIO 4 to free resources
	if (GPIOEnabled[5]  === 1) { UseGPIO[5].writeSync(0); }  // Turn Off GPIO 5
	if (GPIOEnabled[5]  === 1) { UseGPIO[5].unexport(); }    // Unexport GPIO 5 to free resources
	if (GPIOEnabled[6]  === 1) { UseGPIO[6].writeSync(0); }  // Turn Off GPIO 6
	if (GPIOEnabled[6]  === 1) { UseGPIO[6].unexport(); }    // Unexport GPIO 6 to free resources
	if (GPIOEnabled[7]  === 1) { UseGPIO[7].writeSync(0); }  // Turn Off GPIO 7
	if (GPIOEnabled[7]  === 1) { UseGPIO[7].unexport(); }    // Unexport GPIO 7 to free resources
	if (GPIOEnabled[8]  === 1) { UseGPIO[8].writeSync(0); }  // Turn Off GPIO 8
	if (GPIOEnabled[8]  === 1) { UseGPIO[8].unexport(); }    // Unexport GPIO 8 to free resources
	if (GPIOEnabled[9]  === 1) { UseGPIO[9].writeSync(0); }  // Turn Off GPIO 9
	if (GPIOEnabled[9]  === 1) { UseGPIO[9].unexport(); }    // Unexport GPIO 9 to free resources
	if (GPIOEnabled[10] === 1) { UseGPIO[10].writeSync(0); } // Turn Off GPIO 10
	if (GPIOEnabled[10] === 1) { UseGPIO[10].unexport(); }   // Unexport GPIO 10 to free resources
	if (GPIOEnabled[11] === 1) { UseGPIO[11].writeSync(0); } // Turn Off GPIO 11
	if (GPIOEnabled[11] === 1) { UseGPIO[11].unexport(); }   // Unexport GPIO 11 to free resources
	if (GPIOEnabled[12] === 1) { UseGPIO[12].writeSync(0); } // Turn Off GPIO 12
	if (GPIOEnabled[12] === 1) { UseGPIO[12].unexport(); }   // Unexport GPIO 12 to free resources
	if (GPIOEnabled[13] === 1) { UseGPIO[13].writeSync(0); } // Turn Off GPIO 13
	if (GPIOEnabled[13] === 1) { UseGPIO[13].unexport(); }   // Unexport GPIO 13 to free resources
	if (GPIOEnabled[14] === 1) { UseGPIO[14].writeSync(0); } // Turn Off GPIO 14
	if (GPIOEnabled[14] === 1) { UseGPIO[14].unexport(); }   // Unexport GPIO 14 to free resources
	if (GPIOEnabled[15] === 1) { UseGPIO[15].writeSync(0); } // Turn Off GPIO 15
	if (GPIOEnabled[15] === 1) { UseGPIO[15].unexport(); }   // Unexport GPIO 15 to free resources
	if (GPIOEnabled[16] === 1) { UseGPIO[16].writeSync(0); } // Turn Off GPIO 16
	if (GPIOEnabled[16] === 1) { UseGPIO[16].unexport(); }   // Unexport GPIO 16 to free resources
	if (GPIOEnabled[17] === 1) { UseGPIO[17].writeSync(0); } // Turn Off GPIO 17
	if (GPIOEnabled[17] === 1) { UseGPIO[17].unexport(); }   // Unexport GPIO 17 to free resources
	if (GPIOEnabled[18] === 1) { UseGPIO[18].writeSync(0); } // Turn Off GPIO 18
	if (GPIOEnabled[18] === 1) { UseGPIO[18].unexport(); }   // Unexport GPIO 18 to free resources
	if (GPIOEnabled[19] === 1) { UseGPIO[19].writeSync(0); } // Turn Off GPIO 19
	if (GPIOEnabled[19] === 1) { UseGPIO[19].unexport(); }   // Unexport GPIO 19 to free resources
	if (GPIOEnabled[20] === 1) { UseGPIO[20].writeSync(0); } // Turn Off GPIO 20
	if (GPIOEnabled[20] === 1) { UseGPIO[20].unexport(); }   // Unexport GPIO 20 to free resources
	if (GPIOEnabled[21] === 1) { UseGPIO[21].writeSync(0); } // Turn Off GPIO 21
	if (GPIOEnabled[21] === 1) { UseGPIO[21].unexport(); }   // Unexport GPIO 21 to free resources
	if (GPIOEnabled[22] === 1) { UseGPIO[22].writeSync(0); } // Turn Off GPIO 22
	if (GPIOEnabled[22] === 1) { UseGPIO[22].unexport(); }   // Unexport GPIO 22 to free resources
	if (GPIOEnabled[23] === 1) { UseGPIO[23].writeSync(0); } // Turn Off GPIO 23
	if (GPIOEnabled[23] === 1) { UseGPIO[23].unexport(); }   // Unexport GPIO 23 to free resources
	if (GPIOEnabled[24] === 1) { UseGPIO[24].writeSync(0); } // Turn Off GPIO 24
	if (GPIOEnabled[24] === 1) { UseGPIO[24].unexport(); }   // Unexport GPIO 24 to free resources
	if (GPIOEnabled[25] === 1) { UseGPIO[25].writeSync(0); } // Turn Off GPIO 25
	if (GPIOEnabled[25] === 1) { UseGPIO[25].unexport(); }   // Unexport GPIO 25 to free resources
	if (GPIOEnabled[26] === 1) { UseGPIO[26].writeSync(0); } // Turn Off GPIO 26
	if (GPIOEnabled[26] === 1) { UseGPIO[26].unexport(); }   // Unexport GPIO 26 to free resources
	if (GPIOEnabled[27] === 1) { UseGPIO[27].writeSync(0); } // Turn Off GPIO 27
	if (GPIOEnabled[27] === 1) { UseGPIO[27].unexport(); }   // Unexport GPIO 27 to free resources

	process.exit(); // exit completely
}); 


/****** io.socket is the websocket connection to the client's browser********/

io.sockets.on('connection', function (socket) {// WebSocket Connection
    console.log('A new client has connectioned. Send GPIO status');
	
	if (GPIOEnabled[2]  === 1) { socket.emit(GPIOName+'2', GPIOvalue[2]); }
	if (GPIOEnabled[3]  === 1) { socket.emit(GPIOName+'3', GPIOvalue[3]); }
	if (GPIOEnabled[4]  === 1) { socket.emit(GPIOName+'4', GPIOvalue[4]); }
	if (GPIOEnabled[5]  === 1) { socket.emit(GPIOName+'5', GPIOvalue[5]); }
	if (GPIOEnabled[6]  === 1) { socket.emit(GPIOName+'6', GPIOvalue[6]); }
	if (GPIOEnabled[7]  === 1) { socket.emit(GPIOName+'7', GPIOvalue[7]); }
	if (GPIOEnabled[8]  === 1) { socket.emit(GPIOName+'8', GPIOvalue[8]); }
	if (GPIOEnabled[9]  === 1) { socket.emit(GPIOName+'9', GPIOvalue[9]); }
	if (GPIOEnabled[10] === 1) { socket.emit(GPIOName+'10', GPIOvalue[10]); }
	if (GPIOEnabled[11] === 1) { socket.emit(GPIOName+'11', GPIOvalue[11]); }
	if (GPIOEnabled[12] === 1) { socket.emit(GPIOName+'12', GPIOvalue[12]); }
	if (GPIOEnabled[13] === 1) { socket.emit(GPIOName+'13', GPIOvalue[13]); }
	if (GPIOEnabled[14] === 1) { socket.emit(GPIOName+'14', GPIOvalue[14]); }
	if (GPIOEnabled[15] === 1) { socket.emit(GPIOName+'15', GPIOvalue[15]); }
	if (GPIOEnabled[16] === 1) { socket.emit(GPIOName+'16', GPIOvalue[16]); }
	if (GPIOEnabled[17] === 1) { socket.emit(GPIOName+'17', GPIOvalue[17]); }
	if (GPIOEnabled[18] === 1) { socket.emit(GPIOName+'18', GPIOvalue[18]); }
	if (GPIOEnabled[19] === 1) { socket.emit(GPIOName+'19', GPIOvalue[19]); }
	if (GPIOEnabled[20] === 1) { socket.emit(GPIOName+'20', GPIOvalue[20]); }
	if (GPIOEnabled[21] === 1) { socket.emit(GPIOName+'21', GPIOvalue[21]); }
	if (GPIOEnabled[22] === 1) { socket.emit(GPIOName+'22', GPIOvalue[22]); }
	if (GPIOEnabled[23] === 1) { socket.emit(GPIOName+'23', GPIOvalue[23]); }
	if (GPIOEnabled[24] === 1) { socket.emit(GPIOName+'24', GPIOvalue[24]); }
	if (GPIOEnabled[25] === 1) { socket.emit(GPIOName+'25', GPIOvalue[25]); }
	if (GPIOEnabled[26] === 1) { socket.emit(GPIOName+'26', GPIOvalue[26]); }
	if (GPIOEnabled[27] === 1) { socket.emit(GPIOName+'27', GPIOvalue[27]); }

	function ToggleButton(GPIOvalue,UseGPIO,GPIONumber,data) {
		var UseGPIONumber = 'GPIO'+GPIONumber;
		// console.log('ToggleButton: '+UseGPIONumber+' value='+GPIOvalue[GPIONumber]);
		if (GPIOvalue[GPIONumber]) GPIOvalue[GPIONumber] = 0;
		else GPIOvalue[GPIONumber] = 1;
		// console.log('new '+UseGPIONumber+' value='+GPIOvalue[GPIONumber]);
		UseGPIO[GPIONumber].writeSync(GPIOvalue[GPIONumber]); //turn GPIO on or off
		// console.log('Send new '+UseGPIONumber+' state to ALL clients');
		io.emit(UseGPIONumber, GPIOvalue[GPIONumber]); //send button status to ALL clients 
	};
	
	function MomentaryButton(GPIOvalue,UseGPIO,GPIONumber,data) {
		GPIOvalue[GPIONumber] = data;
		var UseGPIONumber = 'GPIO'+GPIONumber;
		// console.log('MomentaryButton: '+UseGPIONumber+' value='+GPIOvalue[GPIONumber]);
		if (GPIOvalue[GPIONumber] != UseGPIO[GPIONumber].readSync()) { //only change GPIO if status has changed
	    UseGPIO[GPIONumber].writeSync(GPIOvalue[GPIONumber]); //turn GPIO on or off
	    // console.log('Send new '+UseGPIONumber+' state to ALL clients');
	    io.emit(UseGPIONumber, GPIOvalue[GPIONumber]); //send button status to ALL clients 
		};
	};

	if (GPIOEnabled[2]  === 1) { socket.on(GPIONameT+'2', function(data) {ToggleButton(GPIOvalue,UseGPIO,2)}); }
	if (GPIOEnabled[2]  === 1) { socket.on(GPIOName+'2', function(data) {MomentaryButton(GPIOvalue,UseGPIO,2,data)}); }
	if (GPIOEnabled[3]  === 1) { socket.on(GPIONameT+'3', function(data) {ToggleButton(GPIOvalue,UseGPIO,3)}); }
	if (GPIOEnabled[3]  === 1) { socket.on(GPIOName+'3', function(data) {MomentaryButton(GPIOvalue,UseGPIO,3,data)}); }
	if (GPIOEnabled[4]  === 1) { socket.on(GPIONameT+'4', function(data) {ToggleButton(GPIOvalue,UseGPIO,4)}); }
	if (GPIOEnabled[4]  === 1) { socket.on(GPIOName+'4', function(data) {MomentaryButton(GPIOvalue,UseGPIO,4,data)}); }
	if (GPIOEnabled[5]  === 1) { socket.on(GPIONameT+'5', function(data) {ToggleButton(GPIOvalue,UseGPIO,5)}); }
	if (GPIOEnabled[5]  === 1) { socket.on(GPIOName+'5', function(data) {MomentaryButton(GPIOvalue,UseGPIO,5,data)}); }
	if (GPIOEnabled[6]  === 1) { socket.on(GPIONameT+'6', function(data) {ToggleButton(GPIOvalue,UseGPIO,6)}); }
	if (GPIOEnabled[6]  === 1) { socket.on(GPIOName+'6', function(data) {MomentaryButton(GPIOvalue,UseGPIO,6,data)}); }
	if (GPIOEnabled[7]  === 1) { socket.on(GPIONameT+'7', function(data) {ToggleButton(GPIOvalue,UseGPIO,7)}); }
	if (GPIOEnabled[7]  === 1) { socket.on(GPIOName+'7', function(data) {MomentaryButton(GPIOvalue,UseGPIO,7,data)}); }
	if (GPIOEnabled[8]  === 1) { socket.on(GPIONameT+'8', function(data) {ToggleButton(GPIOvalue,UseGPIO,8)}); }
	if (GPIOEnabled[8]  === 1) { socket.on(GPIOName+'8', function(data) {MomentaryButton(GPIOvalue,UseGPIO,8,data)}); }
	if (GPIOEnabled[9]  === 1) { socket.on(GPIONameT+'9', function(data) {ToggleButton(GPIOvalue,UseGPIO,9)}); }
	if (GPIOEnabled[9]  === 1) { socket.on(GPIOName+'9', function(data) {MomentaryButton(GPIOvalue,UseGPIO,9,data)}); }
	if (GPIOEnabled[10] === 1) { socket.on(GPIONameT+'10', function(data) {ToggleButton(GPIOvalue,UseGPIO,10)}); }
	if (GPIOEnabled[10] === 1) { socket.on(GPIOName+'10', function(data) {MomentaryButton(GPIOvalue,UseGPIO,10,data)}); }
	if (GPIOEnabled[11] === 1) { socket.on(GPIONameT+'11', function(data) {ToggleButton(GPIOvalue,UseGPIO,11)}); }
	if (GPIOEnabled[11] === 1) { socket.on(GPIOName+'11', function(data) {MomentaryButton(GPIOvalue,UseGPIO,11,data)}); }
	if (GPIOEnabled[12] === 1) { socket.on(GPIONameT+'12', function(data) {ToggleButton(GPIOvalue,UseGPIO,12)}); }
	if (GPIOEnabled[12] === 1) { socket.on(GPIOName+'12', function(data) {MomentaryButton(GPIOvalue,UseGPIO,12,data)}); }
	if (GPIOEnabled[13] === 1) { socket.on(GPIONameT+'13', function(data) {ToggleButton(GPIOvalue,UseGPIO,13)}); }
	if (GPIOEnabled[13] === 1) { socket.on(GPIOName+'13', function(data) {MomentaryButton(GPIOvalue,UseGPIO,13,data)}); }
	if (GPIOEnabled[14] === 1) { socket.on(GPIONameT+'14', function(data) {ToggleButton(GPIOvalue,UseGPIO,14)}); }
	if (GPIOEnabled[14] === 1) { socket.on(GPIOName+'14', function(data) {MomentaryButton(GPIOvalue,UseGPIO,14,data)}); }
	if (GPIOEnabled[15] === 1) { socket.on(GPIONameT+'15', function(data) {ToggleButton(GPIOvalue,UseGPIO,15)}); }
	if (GPIOEnabled[15] === 1) { socket.on(GPIOName+'15', function(data) {MomentaryButton(GPIOvalue,UseGPIO,15,data)}); }
	if (GPIOEnabled[16] === 1) { socket.on(GPIONameT+'16', function(data) {ToggleButton(GPIOvalue,UseGPIO,16)}); }
	if (GPIOEnabled[16] === 1) { socket.on(GPIOName+'16', function(data) {MomentaryButton(GPIOvalue,UseGPIO,16,data)}); }
	if (GPIOEnabled[17] === 1) { socket.on(GPIONameT+'17', function(data) {ToggleButton(GPIOvalue,UseGPIO,17)}); }
	if (GPIOEnabled[17] === 1) { socket.on(GPIOName+'17', function(data) {MomentaryButton(GPIOvalue,UseGPIO,17,data)}); }
	if (GPIOEnabled[18] === 1) { socket.on(GPIONameT+'18', function(data) {ToggleButton(GPIOvalue,UseGPIO,18)}); }
	if (GPIOEnabled[18] === 1) { socket.on(GPIOName+'18', function(data) {MomentaryButton(GPIOvalue,UseGPIO,18,data)}); }
	if (GPIOEnabled[19] === 1) { socket.on(GPIONameT+'19', function(data) {ToggleButton(GPIOvalue,UseGPIO,19)}); }
	if (GPIOEnabled[19] === 1) { socket.on(GPIOName+'19', function(data) {MomentaryButton(GPIOvalue,UseGPIO,19,data)}); }
	if (GPIOEnabled[20] === 1) { socket.on(GPIONameT+'20', function(data) {ToggleButton(GPIOvalue,UseGPIO,20)}); }
	if (GPIOEnabled[20] === 1) { socket.on(GPIOName+'20', function(data) {MomentaryButton(GPIOvalue,UseGPIO,20,data)}); }
	if (GPIOEnabled[21] === 1) { socket.on(GPIONameT+'21', function(data) {ToggleButton(GPIOvalue,UseGPIO,21)}); }
	if (GPIOEnabled[21] === 1) { socket.on(GPIOName+'21', function(data) {MomentaryButton(GPIOvalue,UseGPIO,21,data)}); }
	if (GPIOEnabled[22] === 1) { socket.on(GPIONameT+'22', function(data) {ToggleButton(GPIOvalue,UseGPIO,22)}); }
	if (GPIOEnabled[22] === 1) { socket.on(GPIOName+'22', function(data) {MomentaryButton(GPIOvalue,UseGPIO,22,data)}); }
	if (GPIOEnabled[23] === 1) { socket.on(GPIONameT+'23', function(data) {ToggleButton(GPIOvalue,UseGPIO,23)}); }
	if (GPIOEnabled[23] === 1) { socket.on(GPIOName+'23', function(data) {MomentaryButton(GPIOvalue,UseGPIO,23,data)}); }
	if (GPIOEnabled[24] === 1) { socket.on(GPIONameT+'24', function(data) {ToggleButton(GPIOvalue,UseGPIO,24)}); }
	if (GPIOEnabled[24] === 1) { socket.on(GPIOName+'24', function(data) {MomentaryButton(GPIOvalue,UseGPIO,24,data)}); }
	if (GPIOEnabled[25] === 1) { socket.on(GPIONameT+'25', function(data) {ToggleButton(GPIOvalue,UseGPIO,25)}); }
	if (GPIOEnabled[25] === 1) { socket.on(GPIOName+'25', function(data) {MomentaryButton(GPIOvalue,UseGPIO,25,data)}); }
	if (GPIOEnabled[26] === 1) { socket.on(GPIONameT+'26', function(data) {ToggleButton(GPIOvalue,UseGPIO,26)}); }
	if (GPIOEnabled[26] === 1) { socket.on(GPIOName+'26', function(data) {MomentaryButton(GPIOvalue,UseGPIO,26,data)}); }
	if (GPIOEnabled[27] === 1) { socket.on(GPIONameT+'27', function(data) {ToggleButton(GPIOvalue,UseGPIO,27)}); }
	if (GPIOEnabled[27] === 1) { socket.on(GPIOName+'27', function(data) {MomentaryButton(GPIOvalue,UseGPIO,27,data)}); }

    // Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
	console.log('A user disconnected');
    });
}); 
