/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
		currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue à la formation 'Animateur' Flower Campings by Holidée & nxlvl ! \r \r La formation se déroulera en visio principalement sur la terrasse \r \r Les espaces visio sont matérialisés par un trait vert \r Une fois arrivé dans une zone de visio il faut taper 'Espace' pour rejoindre la conversation. \r \r Pour te rendre directement sur la terrasse, clique sur ce bouton :", [{
			label: "MARCHER VERS LA TERRASSE",
			className: "primary",
			callback: () => {
				WA.player.moveTo(1248, 224, 10);
		}
		}]);

    WA.room.area.onLeave('welcome').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
