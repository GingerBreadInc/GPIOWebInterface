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

function SetCSSVariable (vName,vValue) {
	var CSSVar = document.querySelector(':root');
	CSSVar.style.setProperty('--'+vName,vValue);
}

function SelectStyle (Style) {
	if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		var ClientStyle = StyleDark;
	}
	else {
		var ClientStyle = StyleLight;
	}
	if(Style === StyleAuto) { var UseStyle = ClientStyle; }
	else                    { var UseStyle = Style; }
	
	switch(UseStyle) {
		case StyleLight:
			var SelectedStyle = StyleLightCSS;
			SetCSSVariable (CSSVarPinImage,"url(/"+ImagesPath+"/"+DefaultPin+")");
			SetCSSVariable (CSSVarPinImageDisabled,"url(/"+ImagesPath+"/"+DefaultPinDisabled+")");
			break;
		case StyleDark:
			var SelectedStyle = StyleDarkCSS;
			SetCSSVariable (CSSVarPinImage,"url(/"+ImagesPath+"/"+DefaultPin+")");
			SetCSSVariable (CSSVarPinImageDisabled,"url(/"+ImagesPath+"/"+DefaultPinDark+")");
			break;
		default:
			var SelectedStyle = StyleLightCSS;
			SetCSSVariable (CSSVarPinImage,"url(/"+ImagesPath+"/"+DefaultPin+")");
			SetCSSVariable (CSSVarPinImageDisabled,"url(/"+ImagesPath+"/"+DefaultPinDisabled+")");
	}
	
	var CSSLink = document.createElement('link');
	CSSLink.setAttribute('rel', 'stylesheet');
	CSSLink.setAttribute('type', 'text/css');
	CSSLink.setAttribute('href', CSSPath+'/'+SelectedStyle);
	document.head.appendChild(CSSLink);
	
	var CSSLink = document.createElement('link');
	CSSLink.setAttribute('rel', 'stylesheet');
	CSSLink.setAttribute('type', 'text/css');
	CSSLink.setAttribute('href', CSSPath+'/'+StylesCSS);
	document.head.appendChild(CSSLink);
	return UseStyle;
}

function InitLoading (Style,CustomLoadingImage) {
	
	if(CustomLoadingImage) { SetCSSVariable (CSSVarLoadingImage,"url(/"+ImagesPath+"/"+CustomLoadingImage+")") }
	else                   { SetCSSVariable (CSSVarLoadingImage,"url(/"+ImagesPath+"/"+DefaultLoadingImage+")") }
}

async function ShowSiteContent () {
	setTimeout(() => {
		console.log("Delayed for 1 second.");
		var element  = document.getElementById(CSSIDSiteContent);
		var elementL = document.getElementById(CSSIDLoading);
		elementL.classList.add(CSSClassSiteContentHide);
		element.classList.remove(CSSClassSiteContentHide);
	}, 500);
}

if(ParamFound === 1) {
   
	if(ProjectFound === 1) {
		var Title                  = Projects[UseID]["Title"];
		var Description            = Projects[UseID]["Description"];
		var UseColorfulText        = Projects[UseID]["ColorfulText"];
		var UseColorfulToggles     = Projects[UseID]["ColorfulToggles"];
        var BGImageEnabled         = Projects[UseID]["BGImageEnabled"];
        var BGImageCustom          = Projects[UseID]["BGImageCustom"];
		var BGImageOpacity         = Projects[UseID]["BGImageOpacity"];
		var BGImageBlur            = Projects[UseID]["BGImageBlur"];
		var LoadingImageCustom     = Projects[UseID]["LoadingImageCustom"];
		var ShowTemperatureEnabled = Projects[UseID]["ShowTemperature"];
		var Style                  = Projects[UseID]["Style"];
		var GPIOEnabled            = {};
		

		if(ServerGPIOEnabled[2]  === 0) { GPIOEnabled[2]  = 0; } else { GPIOEnabled[2]  = Projects[UseID]["GPIOEnabled"][2];  }
		if(ServerGPIOEnabled[3]  === 0) { GPIOEnabled[3]  = 0; } else { GPIOEnabled[3]  = Projects[UseID]["GPIOEnabled"][3];  }
		if(ServerGPIOEnabled[4]  === 0) { GPIOEnabled[4]  = 0; } else { GPIOEnabled[4]  = Projects[UseID]["GPIOEnabled"][4];  }
		if(ServerGPIOEnabled[5]  === 0) { GPIOEnabled[5]  = 0; } else { GPIOEnabled[5]  = Projects[UseID]["GPIOEnabled"][5];  }
		if(ServerGPIOEnabled[6]  === 0) { GPIOEnabled[6]  = 0; } else { GPIOEnabled[6]  = Projects[UseID]["GPIOEnabled"][6];  }
		if(ServerGPIOEnabled[7]  === 0) { GPIOEnabled[7]  = 0; } else { GPIOEnabled[7]  = Projects[UseID]["GPIOEnabled"][7];  }
		if(ServerGPIOEnabled[8]  === 0) { GPIOEnabled[8]  = 0; } else { GPIOEnabled[8]  = Projects[UseID]["GPIOEnabled"][8];  }
		if(ServerGPIOEnabled[9]  === 0) { GPIOEnabled[9]  = 0; } else { GPIOEnabled[9]  = Projects[UseID]["GPIOEnabled"][9];  }
		if(ServerGPIOEnabled[10] === 0) { GPIOEnabled[10] = 0; } else { GPIOEnabled[10] = Projects[UseID]["GPIOEnabled"][10]; }
		if(ServerGPIOEnabled[11] === 0) { GPIOEnabled[11] = 0; } else { GPIOEnabled[11] = Projects[UseID]["GPIOEnabled"][11]; }
		if(ServerGPIOEnabled[12] === 0) { GPIOEnabled[12] = 0; } else { GPIOEnabled[12] = Projects[UseID]["GPIOEnabled"][12]; }
		if(ServerGPIOEnabled[13] === 0) { GPIOEnabled[13] = 0; } else { GPIOEnabled[13] = Projects[UseID]["GPIOEnabled"][13]; }
		if(ServerGPIOEnabled[14] === 0) { GPIOEnabled[14] = 0; } else { GPIOEnabled[14] = Projects[UseID]["GPIOEnabled"][14]; }
		if(ServerGPIOEnabled[15] === 0) { GPIOEnabled[15] = 0; } else { GPIOEnabled[15] = Projects[UseID]["GPIOEnabled"][15]; }
		if(ServerGPIOEnabled[16] === 0) { GPIOEnabled[16] = 0; } else { GPIOEnabled[16] = Projects[UseID]["GPIOEnabled"][16]; }
		if(ServerGPIOEnabled[17] === 0) { GPIOEnabled[17] = 0; } else { GPIOEnabled[17] = Projects[UseID]["GPIOEnabled"][17]; }
		if(ServerGPIOEnabled[18] === 0) { GPIOEnabled[18] = 0; } else { GPIOEnabled[18] = Projects[UseID]["GPIOEnabled"][18]; }
		if(ServerGPIOEnabled[19] === 0) { GPIOEnabled[19] = 0; } else { GPIOEnabled[19] = Projects[UseID]["GPIOEnabled"][19]; }
		if(ServerGPIOEnabled[20] === 0) { GPIOEnabled[20] = 0; } else { GPIOEnabled[20] = Projects[UseID]["GPIOEnabled"][20]; }
		if(ServerGPIOEnabled[21] === 0) { GPIOEnabled[21] = 0; } else { GPIOEnabled[21] = Projects[UseID]["GPIOEnabled"][21]; }
		if(ServerGPIOEnabled[22] === 0) { GPIOEnabled[22] = 0; } else { GPIOEnabled[22] = Projects[UseID]["GPIOEnabled"][22]; }
		if(ServerGPIOEnabled[23] === 0) { GPIOEnabled[23] = 0; } else { GPIOEnabled[23] = Projects[UseID]["GPIOEnabled"][23]; }
		if(ServerGPIOEnabled[24] === 0) { GPIOEnabled[24] = 0; } else { GPIOEnabled[24] = Projects[UseID]["GPIOEnabled"][24]; }
		if(ServerGPIOEnabled[25] === 0) { GPIOEnabled[25] = 0; } else { GPIOEnabled[25] = Projects[UseID]["GPIOEnabled"][25]; }
		if(ServerGPIOEnabled[26] === 0) { GPIOEnabled[26] = 0; } else { GPIOEnabled[26] = Projects[UseID]["GPIOEnabled"][26]; }
		if(ServerGPIOEnabled[27] === 0) { GPIOEnabled[27] = 0; } else { GPIOEnabled[27] = Projects[UseID]["GPIOEnabled"][27]; }
	}
	else {
		if(ProjectIsEmpty === 1) { var Title = "No Project provided!"; }
		else                     { var Title = "No Config found for Project '"+ProjectName+"'! -> Check siteConfig.js"; }
	}
}
else {
	var Title = "Parameter not found or is unknown!";
}
