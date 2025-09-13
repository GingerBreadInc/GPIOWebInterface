	
	function ShowTemperature (RunSecond,ShowTemperatureEnabled) {
		if(ShowTemperatureEnabled === 1) {
			element = document.getElementById(CSSIDShowTemperature);
			element.classList.remove(CSSClassShowTemperatureHide);
			if (RunSecond === 1) {
				reloadJs(JSPath+"/"+TemperatureFile,"off");
				reloadJs(JSPath+"/"+TemperatureFile,"on");
			}
			else {
				reloadJs(JSPath+"/"+TemperatureFile,"on");
			}
			document.getElementById(CSSIDShowTemperatureText).innerHTML=CPUTemperature;
			RunSecond = 1;
			setTimeout(() => {
				ShowTemperature(RunSecond,ShowTemperatureEnabled);
			}, 5000);
		}
	}
	
	function reloadJs(scriptFile,state) {
		var head    = document.getElementsByTagName('head')[0];
		var script  = document.createElement('script');
		script.src  = scriptFile;
		script.type = "text/javascript";
		script.id   = JSIDShowTemperature;
		if(state == "on")  { head.appendChild(script); }
		if(state == "off") { (elem=document.getElementById(JSIDShowTemperature)).parentNode.removeChild(elem) }
	}

	function EnableBGImage (UseBGImage,CSSID,CustomBGImage,BGImageOpacity,BGImageBlur,useStyle) {
		
		var element = document.getElementById(CSSID);
		if (UseBGImage === 1) {
/*
			const Rows = document.getElementsByClassName(CSSClassTableRow);
			for (let i = 0; i < Rows.length; i++) {
				Rows[i].classList.add(CSSClassTableRow+"-"+BGImageTransColor);
			}
*/
			if(useStyle === StyleDark) { BGImageOpacity = parseInt(BGImageOpacity) + OpacityDarkAdd; }
			if(BGImageOpacity < 10) { var UseBGImageOpacity = "0.0"+BGImageOpacity; }
			else {
				if(BGImageOpacity < 100) { var UseBGImageOpacity = "0."+BGImageOpacity; }
				else                     { var UseBGImageOpacity = "1"; }
			}

			if(CustomBGImage) {
				// console.log("url(/"+ImagesPath+"/"+CustomBGImage+")");
				var ShowBGImage = "/"+ImagesPath+"/"+CustomBGImage;
			}
			else {
				var ShowBGImage = "/"+ImagesPath+"/"+DefaultBGImage;
			}
			// console.log("add Class "+CSSClassBGImage);
			
			const InspectImage = new Image();
			InspectImage.src = ShowBGImage;
			InspectImage.onload = function() {
				SetCSSVariable (CSSVarBGImageMinHeight,InspectImage.height+"px")
            
				console.log(ShowBGImage+" - width: "+InspectImage.width);
				console.log(ShowBGImage+" - height: "+InspectImage.height);
			};
			
			SetCSSVariable (CSSVarBGImage,"url("+ShowBGImage+")")
			SetCSSVariable (CSSVarBGImageOpacity,UseBGImageOpacity)
			element.classList.add(CSSClassBGImage);
			if(BGImageBlur === 1) { element.classList.add(CSSClassBGImageBlur); }
		}		
		else {
			// console.log("remove Class "+CSSClassBGImage);
			element.classList.remove(CSSClassBGImage);
		}
	}
	
	function CSSEnableHeaderLogo() {

		var element  = document.getElementById(CSSIDStartPageLogo);
		var elementS = document.getElementById(CSSIDStartPageTitle);

		if (StartPageHeaderLogoEnabled === 1) {
			if(StartPageHeaderLogoCustom) { var HeaderLogo = StartPageHeaderLogoCustom; }
			else                          { var HeaderLogo = DefaultHeaderLogo; }
			// console.log("add Class "+CSSClassTitleLogo);
			element.style.backgroundImage = "url(/"+ImagesPath+"/"+HeaderLogo+")";
			element.classList.add(CSSClassTitleLogo);
			elementS.classList.add(CSSClassTitleTextWithLogo);
		}		
		else {
			// console.log("add Class "+CSSClassTitleLogoDisabled);
			element.classList.add(CSSClassTitleLogoDisabled);
		}
	}
	
	function CSSEnableColorfulToggles() {
		for (let i = 2; i <= 27; i++) {
			var UseGPIONumber            = CSSIDSwitch+i;
			var element                  = document.getElementById(UseGPIONumber);
			var UseCSSToggleColorDefault = CSSColorPrefixSwitch+CSSToggleColorDefault;
			var UseCSSToggleColorGPIO    = CSSColorPrefixSwitch+CSSColorGPIO[i];
			
			if (UseColorfulToggles === 1) {
				// console.log("remove Class "+CSSToggleColorDefault);
				// console.log("add Class "+CSSToggleColorGPIO);
				element.classList.remove(UseCSSToggleColorDefault);
				element.classList.add(UseCSSToggleColorGPIO);
			}		
			else {
				// console.log("remove Class "+CSSClassDisable);
				// console.log("add Class "+CSSToggleColorGPIO);
				element.classList.remove(UseCSSToggleColorGPIO);
				element.classList.add(UseCSSToggleColorDefault);
			}
		}
	}
	
	function CSSEnableColorfulText() {
		for (let i = 2; i <= 27; i++) {
			var UseGPIONumber          = CSSIDText+i;
			var element                = document.getElementById(UseGPIONumber);
			var UseCSSTextColorDefault = CSSColorPrefixText+CSSTextColorDefault;
			var UseCSSTextColorGPIO    = CSSColorPrefixText+CSSColorGPIO[i];
			
			if (UseColorfulText === 1) {
				// console.log("remove Class "+UseCSSTextColorDefault);
				// console.log("add Class "+UseCSSTextColorGPIO);
				element.classList.remove(UseCSSTextColorDefault);
				element.classList.add(UseCSSTextColorGPIO);
			}		
			else {
				// console.log("remove Class "+UseCSSTextColorGPIO);
				// console.log("add Class "+UseCSSTextColorDefault);
				element.classList.remove(UseCSSTextColorGPIO);
				element.classList.add(UseCSSTextColorDefault);
			}
		}
	}
	
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
			
			if (UseColorfulText === 1) {
				var CSSTextColorDisabled = CSSColorPrefixText+CSSColorGPIO[i]+CSSColorApendixDisabled;
			}
			else {
				var CSSTextColorDisabled = CSSColorPrefixText+CSSTextColorDefault+CSSColorApendixDisabled;
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
				element.classList.remove(CSSTextColorDisabled);
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
				element.classList.add(CSSTextColorDisabled);
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

	function UpdateGPIOFeedback (GPIONumber,data) {
		var UseGPIONumber = GPIOName+GPIONumber;
		var myJSON        = JSON.stringify(data);
		// console.log(GPIOName+UseGPIONumber+' function called');
		// console.log(data);
		// console.log(myJSON);
		document.getElementById(UseGPIONumber).checked = data;
		// console.log(GPIOName+UseGPIONumber+': '+data.toString());

	}

