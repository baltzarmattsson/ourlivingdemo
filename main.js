let wisibel = new Wisibel.Wisibel();
document.addEventListener("DOMContentLoaded", () => {
	initWisibelConfigurator();
})

function initWisibelConfigurator() {
	let wisibel3dContainer = document.getElementById("wisibel3dContainer");
	wisibel.initConfigurator({
		tenantSlug: "ourliving",
		configuratorSlug: "modultest",
		rendererElement: wisibel3dContainer,
		cb: () => {
			document.getElementById("loadingText").remove();
			console.log("Wisibel loaded");
		}
	})
}
/**
 * 
 * @param {string} contextName  - Kategorin av val, såsom "fasad", "wc-kakel", "golv", "tvättmaskin"
 * @param {string} changeType - Antingen "design" eller "material". 
 * 									Design = byte av 3D-modell (t.ex. en fasadmodell till en annan)
 * 									Material = byte av färger/texturer i en 3D-modell
 * @param {string} choiceName - Namnet på valet, såsom "röd", "kakel 40x40", "hattprofil"
 * @param {string} menuButtonName - Namnet på wisibel-knappen som i sin tur 
 * 									spelar upp en animation, laddar in/ur saker, byter kameravinkel
 */
function onOptionButtonClicked(contextName, changeType, choiceName, menuButtonName) {
	if (changeType == "material") {
		wisibel.swapDesignMaterialInComponentByContextName(choiceName, contextName);
	} else if (changeType == "design") {
		wisibel.swapDesignInComponentByContextName(choiceName, contextName);
	}
	wisibel.clickMenuButtonByTextEN(menuButtonName);
}