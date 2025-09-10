

/************* PROCESS DATA TO/FROM Client ****************************/


if(ProjectFound === 1) {
	
	var socket = io.connect("/", {path: "/socket.io"}); //load socket.io-client and connect to the host that serves the page

	window.addEventListener("load", function(){ //when page loads
		if( isMobile.any() ) {
			// alert('Mobile');  
			document.addEventListener("touchstart", ReportTouchStart, false);
			document.addEventListener("touchend", ReportTouchEnd, false);
			document.addEventListener("touchmove", TouchMove, false);
		}
		else {
			// alert('Desktop');  
			document.addEventListener("mouseup", ReportMouseUp, false);
			document.addEventListener("mousedown", ReportMouseDown, false);
	  }
	});

	function CSSEnableColorfulToggles() {
		for (let i = 2; i <= 27; i++) {
			var UseGPIONumberS           = CSSIDSwitch+i;
			var elementS                 = document.getElementById(UseGPIONumberS);
			var UseCSSToggleColorDefault = CSSColorPrefixSwitch+CSSToggleColorDefault;
			var UseCSSToggleColorGPIO    = CSSColorPrefixSwitch+CSSColorGPIO[i];
			
			if (UseColorfulToggles === 1) {
				// console.log(UseGPIONumberS+" remove Class "+CSSToggleColorDefault);
				// console.log(UseGPIONumberS+" add Class "+CSSToggleColorGPIO);
				elementS.classList.remove(UseCSSToggleColorDefault);
				elementS.classList.add(UseCSSToggleColorGPIO);
			}		
			else {
				// console.log(UseGPIONumberS+" remove Class "+CSSClassDisable);
				// console.log(UseGPIONumberS+" add Class "+CSSToggleColorGPIO);
				elementS.classList.remove(UseCSSToggleColorGPIO);
				elementS.classList.add(UseCSSToggleColorDefault);
			}
		}
	}

	CSSEnableColorfulToggles();

	function CSSDisableGPIO() {
		
		var DisableSystemPins = 0;
		
		for (let i = 2; i <= 27; i++) {
			var UseGPIONumber              = CSSIDText+i;
			var UseGPIONumberS             = CSSIDSwitch+i;
			var UseGPIONumberM             = CSSIDButton+i;
			var UseGPIONumberP             = CSSIDPin+i;
			
			var CSSPinColorEnabled         = CSSColorPrefixPin+CSSColorGPIO[i];
			var CSSPinColorDisabled        = CSSColorPrefixPin+CSSColorGPIO[i]+CSSColorApendixDisabled;
			
			
			if (UseColorfulToggles === 1) {
				var CSSToggleColorDisabled = CSSColorPrefixSwitch+CSSColorGPIO[i]+CSSColorApendixDisabled;
			}
			else {
				var CSSToggleColorDisabled = CSSColorPrefixSwitch+CSSToggleColorDefault+CSSColorApendixDisabled;
			}
			var element    = document.getElementById(UseGPIONumber);
			var elementS   = document.getElementById(UseGPIONumberS);
			var elementM   = document.getElementById(UseGPIONumberM);
			var elementP   = document.getElementById(UseGPIONumberP);

			if (GPIOEnabled[i] === 1) {
			//	console.log(UseGPIONumber+" remove Class "+CSSClassDisable);
			//	console.log(UseGPIONumberM+" remove Class "+CSSClassDisable);
			//	console.log(UseGPIONumberS+" remove Class "+CSSClassDisable);
			//	console.log(UseGPIONumberS+" remove Class "+CSSPinColorDisabled);
			//	console.log(UseGPIONumberS+" add Class "+CSSPinColorEnabled);
				element.classList.remove(CSSClassDisable);
				elementS.classList.remove(CSSClassDisable);
				elementM.classList.remove(CSSClassDisable);
				elementS.classList.remove(CSSToggleColorDisabled);
				elementP.classList.remove(CSSPinColorDisabled);
				elementP.classList.add(CSSPinColorEnabled);
				
			}		
			else {
				DisableSystemPins = 1;
			//	console.log(UseGPIONumber+" add Class "+CSSClassDisable);
			//	console.log(UseGPIONumberM+" add Class "+CSSClassDisable);
			//	console.log(UseGPIONumberS+" add Class "+CSSClassDisable);
			//	console.log(UseGPIONumberS+" remove Class "+CSSPinColorEnabled);
			//	console.log(UseGPIONumberS+" add Class "+CSSPinColorDisabled);
				element.classList.add(CSSClassDisable);
				elementS.classList.add(CSSClassDisable);
				elementM.classList.add(CSSClassDisable);
				elementS.classList.add(CSSToggleColorDisabled);
				elementP.classList.remove(CSSPinColorEnabled);
				elementP.classList.add(CSSPinColorDisabled);
			}
		}
		
		if(DisableSystemPins === 1) {
		
			var CountBlack  = 8;
			var CountRed    = 2;
			var CountOrange = 2;
			var CountYellow = 2;
			
			for (let b = 1; b <= CountBlack; b++) {
				
				var UseGPIONumberPSB           = CSSIDPin+CSSColorBlack+b;
				var CSSPinColorBlack           = CSSColorPrefixPin+CSSColorBlack;
				var CSSPinColorBlackDisabled   = CSSColorPrefixPin+CSSColorBlack+CSSColorApendixDisabled;
				var elementPSB = document.getElementById(UseGPIONumberPSB);
				// console.log(UseGPIONumberS+" remove Class "+CSSPinColorBlack);
				// console.log(UseGPIONumberS+" add Class "+CSSPinColorBlackDisabled);
				elementPSB.classList.remove(CSSPinColorBlack);
				elementPSB.classList.add(CSSPinColorBlackDisabled);
			}
			for (let r = 1; r <= CountRed; r++) {
				var UseGPIONumberPSR           = CSSIDPin+CSSColorRed+r;
				var CSSPinColorRedDisabled     = CSSColorPrefixPin+CSSColorRed+CSSColorApendixDisabled;
				var CSSPinColorRed             = CSSColorPrefixPin+CSSColorRed;
				var elementPSR = document.getElementById(UseGPIONumberPSR);
				// console.log(UseGPIONumberS+" remove Class "+CSSPinColorRed);
				// console.log(UseGPIONumberS+" add Class "+CSSPinColorRedDisabled);
				elementPSR.classList.remove(CSSPinColorRed);
				elementPSR.classList.add(CSSPinColorRedDisabled);
			}
			for (let o = 1; o <= CountOrange; o++) {
				var UseGPIONumberPSO           = CSSIDPin+CSSColorOrange+o;
				var CSSPinColorOrange          = CSSColorPrefixPin+CSSColorOrange;
				var CSSPinColorOrangeDisabled  = CSSColorPrefixPin+CSSColorOrange+CSSColorApendixDisabled;
				var elementPSO = document.getElementById(UseGPIONumberPSO);
				// console.log(UseGPIONumberS+" remove Class "+CSSPinColorOrange);
				// console.log(UseGPIONumberS+" add Class "+CSSPinColorOrangeDisabled);
				elementPSO.classList.remove(CSSPinColorOrange);
				elementPSO.classList.add(CSSPinColorOrangeDisabled);
			}
			for (let y = 1; y <= CountYellow; y++) {
				var UseGPIONumberPSY           = CSSIDPin+CSSColorYellow+y;
				var CSSPinColorYellow          = CSSColorPrefixPin+CSSColorYellow;
				var CSSPinColorYellowDisabled  = CSSColorPrefixPin+CSSColorYellow+CSSColorApendixDisabled;
				var elementPSY = document.getElementById(UseGPIONumberPSY);
				// console.log(UseGPIONumberS+" remove Class "+CSSPinColorYellow);
				// console.log(UseGPIONumberS+" add Class "+CSSPinColorYellowDisabled);
				elementPSY.classList.remove(CSSPinColorYellow);
				elementPSY.classList.add(CSSPinColorYellowDisabled);
			}
		}
	}

	CSSDisableGPIO();

	function UpdateGPIOFeedback (GPIONumber,data) {
		var UseGPIONumber = GPIOName+GPIONumber;
		var myJSON        = JSON.stringify(data);
		// console.log(GPIOName+UseGPIONumber+' function called');
		// console.log(data);
		// console.log(myJSON);
		document.getElementById(UseGPIONumber).checked = data;
		// console.log(GPIOName+UseGPIONumber+': '+data.toString());

	}

	// Update gpio feedback when server changes GPIO state
	socket.on(GPIOName+'2', function (data) {UpdateGPIOFeedback (2,data)});
	socket.on(GPIOName+'3', function (data) {UpdateGPIOFeedback (3,data)});
	socket.on(GPIOName+'4', function (data) {UpdateGPIOFeedback (4,data)});
	socket.on(GPIOName+'5', function (data) {UpdateGPIOFeedback (5,data)});
	socket.on(GPIOName+'6', function (data) {UpdateGPIOFeedback (6,data)});
	socket.on(GPIOName+'7', function (data) {UpdateGPIOFeedback (7,data)});
	socket.on(GPIOName+'8', function (data) {UpdateGPIOFeedback (8,data)});
	socket.on(GPIOName+'9', function (data) {UpdateGPIOFeedback (9,data)});
	socket.on(GPIOName+'10', function (data) {UpdateGPIOFeedback (10,data)});
	socket.on(GPIOName+'11', function (data) {UpdateGPIOFeedback (11,data)});
	socket.on(GPIOName+'12', function (data) {UpdateGPIOFeedback (12,data)});
	socket.on(GPIOName+'13', function (data) {UpdateGPIOFeedback (13,data)});
	socket.on(GPIOName+'14', function (data) {UpdateGPIOFeedback (14,data)});
	socket.on(GPIOName+'15', function (data) {UpdateGPIOFeedback (15,data)});
	socket.on(GPIOName+'16', function (data) {UpdateGPIOFeedback (16,data)});
	socket.on(GPIOName+'17', function (data) {UpdateGPIOFeedback (17,data)});
	socket.on(GPIOName+'18', function (data) {UpdateGPIOFeedback (18,data)});
	socket.on(GPIOName+'19', function (data) {UpdateGPIOFeedback (19,data)});
	socket.on(GPIOName+'20', function (data) {UpdateGPIOFeedback (20,data)});
	socket.on(GPIOName+'21', function (data) {UpdateGPIOFeedback (21,data)});
	socket.on(GPIOName+'22', function (data) {UpdateGPIOFeedback (22,data)});
	socket.on(GPIOName+'23', function (data) {UpdateGPIOFeedback (23,data)});
	socket.on(GPIOName+'24', function (data) {UpdateGPIOFeedback (24,data)});
	socket.on(GPIOName+'25', function (data) {UpdateGPIOFeedback (25,data)});
	socket.on(GPIOName+'26', function (data) {UpdateGPIOFeedback (26,data)});
	socket.on(GPIOName+'27', function (data) {UpdateGPIOFeedback (27,data)});

	function ReportTouchStart(e) {
		var y = e.target.previousElementSibling;
		if (y !== null) var x = y.id;
		if (x !== null) { 
			// Now we know that x is defined, we are good to go.
			for (let i = 2; i < 28; i++) {
				var CheckGPIONumber  = GPIOName+i;
				var CheckGPIONumberT = GPIONameT+i;
				var CheckGPIONumberM = CSSIDButton+i;
				if (x === CheckGPIONumber) {
				  // console.log(CheckGPIONumber+" toggle");
				  socket.emit(CheckGPIONumberT);  // send GPIO button toggle to node.js server
				}		
				if (e.target.id === CheckGPIONumberM) {
					socket.emit(CheckGPIONumber, 1); 
					document.getElementById(CheckGPIONumber).checked = 1;
				}
			}
		}
	}

	function ReportTouchEnd(e) {

		for (let i = 2; i < 28; i++) {
			var CheckGPIONumber  = GPIOName+i;
			var CheckGPIONumberM = CSSIDButton+i;
			if (e.target.id === CheckGPIONumberM) {
				socket.emit(CheckGPIONumber, 0); 
				document.getElementById(CheckGPIONumber).checked = 0;
			}
		}
	}

	function ReportMouseDown(e) {
		var y = e.target.previousElementSibling;
		if (y !== null) var x = y.id;
		if (x !== null) { 
			// Now we know that x is defined, we are good to go.
			for (let i = 2; i < 28; i++) {
				var CheckGPIONumber  = GPIOName+i;
				var CheckGPIONumberT = GPIONameT+i;
				var CheckGPIONumberM = CSSIDButton+i;
				if (x === CheckGPIONumber) {
				  // console.log(CheckGPIONumber+" toggle");
				  socket.emit(CheckGPIONumberT);  // send GPIO button toggle to node.js server
				}		
				if (e.target.id === CheckGPIONumberM) {
					socket.emit(CheckGPIONumber, 1); 
					document.getElementById(CheckGPIONumber).checked = 1;
				}
			}
		}
	}

	function ReportMouseUp(e) {

		for (let i = 2; i < 28; i++) {
			var CheckGPIONumber  = GPIOName+i;
			var CheckGPIONumberM = CSSIDButton+i;
			if (e.target.id === CheckGPIONumberM) {
				socket.emit(CheckGPIONumber, 0); 
				document.getElementById(CheckGPIONumber).checked = 0;
			}
		}
	}

	function TouchMove(e) {

	}

	/** function to sense if device is a mobile device ***/
	// Reference: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var content = document.getElementById("content");
    var display = getComputedStyle(content).display;
	content.style.display = "block";
}