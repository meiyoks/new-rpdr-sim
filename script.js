// - AESTHETICS - //
const style = document.createElement("style");
style.textContent = `
    .card {
	    border: none;
	    cursor: pointer;
	    margin: 1rem;
	    border-radius: 15px;
	    background: #ff6ba986;
	    box-shadow: 0 0 10px #5d0c2e30;
	}
`;
document.head.appendChild(style);


// - BUG FIXING - //
function addQueenToAll(queen) {
    allQueens.push(queen);

    const card = queenCardTemplate.content.cloneNode(true).children[0];
    const cardImage = card.querySelector("[data-image]");
    const header = card.querySelector("[data-header]");
    let image = document.createElement("img");
    image.src = queen.image;
    image.setAttribute("style", `border-color: black; width: 105px; height: 105px;`);
    cardImage.appendChild(image);
    header.textContent = queen._name;
    card.setAttribute("id", queen._name);

    queenCardContainer.appendChild(card);

    showingQueens.push({ name: queen._name, element: card });
}

function downloadTR() {
    let table = document.getElementById("trackRecord");

    html2canvas(table, { useCORS: true, allowTaint: false }).then((canvas) => {
        let img = canvas.toDataURL("image/png");
        let a = document.createElement('a');
        a.setAttribute("href", img);
        a.setAttribute("download", "TrackRecord.png");
        a.click();
        a.remove();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.Scene && Scene.prototype.clean) {
        const originalClean = Scene.prototype.clean;
        Scene.prototype.clean = function(...args) {
            const btn = document.getElementById("doubleShantayBtn");
            if (btn) btn.remove();

            return originalClean.apply(this, args);
        };
    }
});

// - UK 7 CAST - //
let BonesUK7 = new Queen("Bones", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ad/BonesDRUK7CastMug.jpg", true);
let BonnieAnnClydeUK7 = new Queen("Bonnie Ann Clyde", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3d/BonnieAnnClydeDRUK7CastMug.jpg", true);
let CatrinFeelingsUK7 = new Queen("Catrin Feelings", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/57/CatrinFeelingsDRUK7CastMug.jpg", true);
let ChaiTGrandeUK7 = new Queen("Chai T. Grande", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4c/ChaiTGrandeDRUK7CastMug.jpg", true);
let ElleVosqueUK7 = new Queen("Elle Vosque", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1f/ElleVosqueDRUK7CastMug.jpg", true);
let NyongbellaUK7 = new Queen("Nyongbella", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/02/NyongbellaDRUK7CastMug.jpg", true);
let PaigeThreeUK7 = new Queen("Paige Three", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3f/PaigeThreeDRUK7CastMug.jpg", true);
let PastyUK7 = new Queen("Pasty", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/bf/PastyDRUK7CastMug.jpg", true);
let SallyTMUK7 = new Queen("Sally™", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/56/Sally%E2%84%A2DRUK7CastMug.jpg", true);
let SilllexaDictionUK7 = new Queen("Silllexa Diction", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cb/SilllexaDictionDRUK7CastMug.jpg", true);
let TayrisMongardiUK7 = new Queen("Tayris Mongardi", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e9/TayrisMongardiDRUK7CastMug.jpg", true);
let ViolaUK7 = new Queen("Viola", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7d/ViolaDRUK7CastMug.jpg", true);

let UK7_Cast = [BonesUK7, BonnieAnnClydeUK7, CatrinFeelingsUK7, ChaiTGrandeUK7, ElleVosqueUK7, NyongbellaUK7, PaigeThreeUK7, PastyUK7, SallyTMUK7, SilllexaDictionUK7, TayrisMongardiUK7, ViolaUK7];

// - ES 5 CAST - //
let AlexandraDelRavalES5 = new Queen("Alexandra Del Raval", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/aa/AlexandradelRavalDRES5CastMug.jpg", true);
let DafneMuglerES5 = new Queen("Dafne Mugler", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/65/DafneMuglerDRES5CastMug.jpg", true);
let DenebolaMurnauES5 = new Queen("Denebola Murnau", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/16/Den%C3%A9bolaMurnauDRES5CastMug.jpg", true);
let EvaHarringtonES5 = new Queen("Eva Harrington", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/68/EvaHarringtonDRES5CastMug.jpg", true);
let FerrxnES5 = new Queen("Ferrxn", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1c/FerrxnDRES5CastMug.jpg", true);
let KrystalForeverES5 = new Queen("Krystal Forever", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/45/KrystalForeverDRES5CastMug.jpg", true);
let LaEscandaloES5 = new Queen("La Escandalo", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cc/LaEsc%C3%A1ndaloDRES5CastMug.jpg", true);
let LacaUdilaES5 = new Queen("Laca Udila", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ac/LacaUdillaDRES5CastMug.jpg", true);
let MargaritaKalifataES5 = new Queen("Margarita Kalifata", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e5/MargaritaKalifataDRES5CastMug.jpg", true);
let NixES5 = new Queen("Nix", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/22/NixDRES5CastMug.jpg", true);
let NoriES5 = new Queen("Nori", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3e/NoriDRES5CastMug.jpg", true);
let SatinGrecoES5 = new Queen("Satin Greco", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/77/Sat%C3%ADnGrecoDRES5CastMug.jpg", true);

let ES5_Cast = [AlexandraDelRavalES5, DafneMuglerES5, DenebolaMurnauES5, EvaHarringtonES5, FerrxnES5, KrystalForeverES5, LaEscandaloES5, LacaUdilaES5, MargaritaKalifataES5, NixES5, NoriES5, SatinGrecoES5];

// - SEASON 17 STAT UPDATES //
onya._actingStat = 14;
onya._comedyStat = 12;
onya._danceStat = 10;
onya._designStat = 7;
onya._improvStat = 12;
onya._runwayStat = 9;
onya._lipsyncStat = 10;

samStar._actingStat = 11;
samStar._comedyStat = 11;
samStar._danceStat = 10;
samStar._designStat = 13;
samStar._improvStat = 10;
samStar._runwayStat = 13;
samStar._lipsyncStat = 11;

suzie._actingStat = 13;
suzie._comedyStat = 9;
suzie._danceStat = 11;
suzie._designStat = 8;
suzie._improvStat = 8;
suzie._runwayStat = 10;
suzie._lipsyncStat = 10;

jewels._actingStat = 7;
jewels._comedyStat = 8;
jewels._danceStat = 12;
jewels._designStat = 11;
jewels._improvStat = 9;
jewels._runwayStat = 13;
jewels._lipsyncStat = 12;

crystalE._actingStat = 8;
crystalE._comedyStat = 6;
crystalE._danceStat = 10;
crystalE._designStat = 10;
crystalE._improvStat = 6;
crystalE._runwayStat = 13;
crystalE._lipsyncStat = 10;

lexi._actingStat = 7;
lexi._comedyStat = 6;
lexi._danceStat = 10;
lexi._designStat = 9;
lexi._improvStat = 6;
lexi._runwayStat = 13;
lexi._lipsyncStat = 12;

acacia._actingStat = 9;
acacia._comedyStat = 8;
acacia._danceStat = 6;
acacia._designStat = 6;
acacia._improvStat = 8;
acacia._runwayStat = 8;
acacia._lipsyncStat = 8;

lydia._actingStat = 5;
lydia._comedyStat = 10;
lydia._danceStat = 7;
lydia._designStat = 8;
lydia._improvStat = 7;
lydia._runwayStat = 12;
lydia._lipsyncStat = 11;

hormona._actingStat = 9;
hormona._comedyStat = 6;
hormona._danceStat = 6;
hormona._designStat = 8;
hormona._improvStat = 6;
hormona._runwayStat = 8;
hormona._lipsyncStat = 7;

kori._actingStat = 6;
kori._comedyStat = 8;
kori._danceStat = 8;
kori._designStat = 5;
kori._improvStat = 8;
kori._runwayStat = 7;
kori._lipsyncStat = 12;

lana._actingStat = 8;
lana._comedyStat = 7;
lana._danceStat = 8;
lana._designStat = 7;
lana._improvStat = 5;
lana._runwayStat = 10;
lana._lipsyncStat = 11;

arrietty._actingStat = 4;
arrietty._comedyStat = 4;
arrietty._danceStat = 5;
arrietty._designStat = 15;
arrietty._improvStat = 4;
arrietty._runwayStat = 15;
arrietty._lipsyncStat = 5;

joella._actingStat = 5;
joella._comedyStat = 4;
joella._danceStat = 5;
joella._designStat = 5;
joella._improvStat = 4;
joella._runwayStat = 6;
joella._lipsyncStat = 6;

lucky._actingStat = 4;
lucky._comedyStat = 4;
lucky._danceStat = 5;
lucky._designStat = 4;
lucky._improvStat = 4;
lucky._runwayStat = 8;
lucky._lipsyncStat = 5;

// - SLAYSIAN ROYALE IMAGES + CAST + SCREEN + STATS - //
arizona.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/95/ArizonaBrandyDRPHSR1CastMug.jpg";
bernie.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/48/BernieDRPHSR1CastMug.jpg";
brigiding.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/BrigidingDRPHSR1CastMug.jpg";
ivory.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/08/IvoryGlazeDRPHSR1CastMug.jpg";
khianna.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6c/KhiannaDRPHSR1CastMug.jpg";
kittyS.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7b/KittySpaceDRPHSR1CastMug.jpg";
yoko.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/13/MadameYokoDRPHSR1CastMug.jpg";
siam.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/SiamPhusriDRPHSR1CastMug.jpg";
suki.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7c/SukiDollDRPHSR1CastMug.jpg";
sumting.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4f/SumTingWongDRPHSR1CastMug.jpg";
vinas.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/64/ViñasDeLuxeDRPHSR1CastMug.jpg";
yuhua.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a3/YuhuaDRPHSR1CastMug.jpg";

let SLAYSIAN_Cast = [arizona, bernie, brigiding, ivory, khianna, kittyS, yoko, siam, suki, sumting, vinas, yuhua]; 

// - ALL STARS 11 - //
let AS10_Cast = [akeria, dawn, lucky, morgan, morphine, mystique, april, auraMayari, crystal, salina, silky, vivacious, hershii, jasmineK, joey, kennedy, samStar, shuga]

// - PAGE EXCLUSIVE - //
document.addEventListener("DOMContentLoaded", () => {
    const optionsBox = document.querySelector(".options");

    if (optionsBox) {
        const chocolateSection = optionsBox.querySelector("#chocolateBar")?.closest("div.aoitem");
        
        if (chocolateSection) {
            const badunkOption = document.createElement("p");
            badunkOption.innerHTML = `<input type="checkbox" id="tank2"> Badunkadunk Tank`;

            const choosable = chocolateSection.querySelector("#chocolateBarChoosable")?.parentElement;
            if (choosable) {
                choosable.insertAdjacentElement("afterend", badunkOption);
            } else {
                chocolateSection.appendChild(badunkOption);
            }
        }
    }
});

if (window.location.pathname.endsWith("index.html")) {
	UK7_Cast.forEach(q => addQueenToAll(q));
	ES5_Cast.forEach(q => addQueenToAll(q));
}

if (window.location.pathname.endsWith("predef.html")) {
    // --- Philippines: Slaysian Royale ---
    const philippinesDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div =>
        div.querySelector("h2 img[src*='PhilippinesFlag']")
    );

    if (philippinesDiv) {
        const newHeader = document.createElement("h2");
        newHeader.innerHTML = `
            <img src="image/flags/StarFlag.webp" class="countryFlag">
            <img src="image/flags/PhilippinesFlag.webp" class="countryFlag">
            Drag Race Philippines: Slaysian Royale
            <img src="image/flags/PhilippinesFlag.webp" class="countryFlag">
            <img src="image/flags/StarFlag.webp" class="countryFlag">
        `;

        const newSeasons = document.createElement("div");
        newSeasons.className = "content-seasons";
        newSeasons.style.gridTemplateAreas = "'a'";
        newSeasons.style.gridTemplateColumns = "1fr";

        const newSeason = document.createElement("div");
        newSeason.className = "content-season";
        newSeason.innerHTML = `
            <h3 class="content-season-title">PH Slaysian Royale</h3>
            <button onclick="predefCast(SLAYSIAN_Cast, 'all-stars', '')">Simulate</button>
            <div class="content-season_overlay" aria-hidden="true" id="phslaysian"
                style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                center center / cover no-repeat, 
                url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/19/DRPHSR1Logo2.jpg');">
            </div>
        `;

        newSeasons.appendChild(newSeason);
        philippinesDiv.appendChild(newHeader);
        philippinesDiv.appendChild(newSeasons);
    }

    // --- UK: Season 7 ---
    const ukDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div =>
        div.querySelector("h2 img[src*='UKFlag']")
    );

    if (ukDiv) {
        const ukSeasons = ukDiv.querySelector(".content-seasons");

        if (ukSeasons) {
            const newSeason = document.createElement("div");
            newSeason.className = "content-season";
            newSeason.innerHTML = `
                <h3 class="content-season-title">UK Season 7</h3>
                <button onclick="predefCast(UK7_Cast, 'regular', 'teams', 'par-premiere')">Simulate</button>
                <div class="content-season_overlay" aria-hidden="true" id="ukseason7" 
                    style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                    center center / cover no-repeat, 
                    url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/22/RDRUK7.jpg');">
                </div>
            `;

            ukSeasons.appendChild(newSeason);
        }
    }

	// --- ES: Season 5 ---
	const esDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div =>
        div.querySelector("h2 img[src*='SpainFlag']")
    );

    if (esDiv) {
        const esSeasons = esDiv.querySelector(".content-seasons");

        if (esSeasons) {
            const newSeason = document.createElement("div");
            newSeason.className = "content-season";
            newSeason.innerHTML = `
                <h3 class="content-season-title">ES Season 5</h3>
                <button onclick="predefCast(ES5_Cast, 'regular', 'LFTC', 'slayers-premiere')">Simulate</button>
                <div class="content-season_overlay" aria-hidden="true" id="ukseason7" 
                    style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                    center center / cover no-repeat, 
                    url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/09/DRES5.jpg');">
                </div>
            `;

            esSeasons.appendChild(newSeason);
        }
    }

	// --- AS: Season 10 ---
	const asDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div => {
	    const h2 = div.querySelector("h2");
	    const img = h2?.querySelector("img[src*='StarFlag']");
	    return img && h2.textContent.includes("All Stars");
	});

	if (asDiv) {
		const asSeasons = asDiv.querySelector(".content-seasons");

		if (asSeasons) {
			const newSeason = document.createElement("div");
            newSeason.className = "content-season";
            newSeason.innerHTML = `
                <h3 class="content-season-title">ALL STARS SEASON 11</h3>
                <button onclick="predefCast(AS10_Cast, 'all-stars', 'LFTC')">Simulate</button>
                <div class="content-season_overlay" aria-hidden="true" id="asseason10" 
                    style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                    center center / cover no-repeat, 
                    url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0e/RDRAScomingsoon.png');">
                </div>
            `;

            asSeasons.appendChild(newSeason);
		}
	}
}

// - FORCE RESULTS - //
if (all_stars == true) {
    const originalASLipSync = asLipsyncDesc;
    asLipsyncDesc = function(...args) {
        originalASLipSync.apply(this, args);
		showForceButtons();
    };
} else {
    const originalLipSync = lipsyncDesc;
    lipsyncDesc = function(...args) {
		originalLipSync.apply(this, args);
        showForceButtons();
    };

	const originalBottom6 = bottom6;
    bottom6 = function(...args) {
        originalBottom6.apply(this, args);
        showForceButtons();
    };
}

function showForceButtons() {
    const container = document.getElementById("MainBlock");
    if (!container) {
        console.warn("MainBlock not found, retrying in 100ms...");
        setTimeout(showForceButtons, 100);
        return;
    }

    document.getElementById("doubleShantayBtn")?.remove();
    document.getElementById("doubleSashayBtn")?.remove();

    const shantayBtn = document.createElement("button");
    shantayBtn.id = "doubleShantayBtn";
    shantayBtn.textContent = "Double Shantay";
    shantayBtn.onclick = () => {
        injectDoubleShantay();
        shantayBtn.remove();
        sashayBtn?.remove();
    };

    let sashayBtn = null;
    if (!all_stars) {
        sashayBtn = document.createElement("button");
        sashayBtn.id = "doubleSashayBtn";
        sashayBtn.textContent = "Double Sashay";
        sashayBtn.onclick = () => {
            injectDoubleSashay();
            shantayBtn.remove();
            sashayBtn.remove();
        };
    }

    container.prepend(shantayBtn);
    if (sashayBtn) container.prepend(sashayBtn);
}

function injectDoubleShantay() {
    if (all_stars === true) {
		allStarsDoubleShantay();
	} else {
		regularDoubleShantay();
	}
}

function createButtonLipsync() {
	let screen = new Scene(); 
	if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere || ph2Premiere || newImmTwst) && premiereCounter < 3) {
        screen.createButton("Proceed", "doublePremiere()");
    } else if (CheckForReturning()) {
        screen.createButton("Proceed", "returningQueenScreen()");
	} else {
        screen.createButton("Proceed", "untucked()");
    }
}

function regularDoubleShantay() {
	let screen = new Scene();
    screen.clean();

    for (let i = 0; i < bottomQueens.length; i++) {
        screen.createImage(bottomQueens[i].image, "magenta");
    }

    if (bottomQueens.length > 2) {
        screen.createBold("Condragulations, shantay you all stay!");
    } else {
        screen.createBold("Condragulations, shantay you both stay!");
    }

    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].addToTrackRecord(" BTM" + bottomQueens.length);
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }

    doubleShantay = true;

    if (kandyFOc) {
        screen.createButton("Proceed", "kandyFO()");
    } else {
        for (let i = 0; i < bottomQueens.length; i++) {
            if (bottomQueens[i].maxiT === true) {
                let lastIndex = bottomQueens[i].trackRecord.length - 1;
                bottomQueens[i].trackRecord[lastIndex - 1] += bottomQueens[i].trackRecord[lastIndex];
                bottomQueens[i].trackRecord.splice(lastIndex, 1);
                bottomQueens[i].maxiT = false;
            }
        }

        createButtonLipsync();
    }
}

function allStarsDoubleShantay() {
    let screen = new Scene();
    screen.clean();

    toAlots(top2, [], alotsSong);

	if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 6 && !noDouble) {
		screen.createImage(top2[0].image, "darkblue");
	    screen.createImage(top2[1].image, "darkblue");
	    screen.createBold("Condragulations, you're both winners baby!");
	
	    top2[0].favoritism += 5;
	    top2[0].ppe += 5;
	    top2[1].favoritism += 5;
	    top2[1].ppe += 5;
	
	    top2[0].addToTrackRecord(" WIN");
	    top2[1].addToTrackRecord(" WIN");

		assasintable.push(top2[0].getName() + " & " + top2[1].getName());
		assasinlipstick.push(top2[0].lipstick.getName());
    	assasintable.push(" ");
		assasinlipstick.push(top2[1].lipstick.getName());
	} else {
        toAlots([top2[0]], [top2[1]], alotsSong);
        isLSShowable = true;

        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].addToTrackRecord("WIN");

        if (immunityTwist && giveImmunity()) {
            top2[0].immune = true;
            top2[0].immuneEp.push(episodeCount);
            screen.createImage(top2[0].image, "royalblue");
            screen.createBold(top2[0].getName() + ", you're a winner, baby! You have also earned immunity for next week's challenge.");
        } else if (newImmTwst && gives16Imm()) {
            top2[0].immPotion = true;
            screen.createImage(top2[0].image, "royalblue");
            screen.createBold(top2[0].getName() + ", you're a winner baby! You've won immunity from a future elimination!");
        } else {
            screen.createImage(top2[0].image, "royalblue");
            screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        }

        if (conjoinedQueens && conjoinedCheck) {
            conjoinedReturn(top2[0]);
            conjoinedCheck = false;
        }

        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 4;
        top2[1].ppe += 5;

        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());

        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
    }

	screen.createHorizontalLine();

    if (conjoinedQueens && conjoinedCheck) {
        conjoinedReturn(top2[0], top2[1]);
        conjoinedCheck = false;
    }
	
    let names = "";
    for (let i = 0; i < bottomQueens.length; i++) {
        screen.createImage(bottomQueens[i].image, "red");
        names += bottomQueens[i].getName() + ". ";
		
		bottomQueens[i].addToTrackRecord(" BTM" + bottomQueens.length);
		bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
   }
    screen.createBold(names);
    screen.createParagraph("I'm going to give a second chance to... All of you...");
    screen.createBold("Shantay you all stay!");
    screen.createHorizontalLine();

    createButtonLipsync();
}

function injectDoubleSashay() {
    let screen = new Scene();
    screen.clean();

    for (let i = 0; i < bottomQueens.length; i++) {
        screen.createImage(bottomQueens[i].image, "firebrick");
    }
	
    if (bottomQueens.length > 2) {
        screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must all sashay away...");

        for (let i = 0; i < bottomQueens.length; i++) {
            handleChocolateBarElimination(bottomQueens[i], screen);
        }

    } else {
        screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");

        for (let i = 0; i < bottomQueens.length; i++) {
            handleChocolateBarElimination(bottomQueens[i], screen);
        }
    }

    doubleSashay = true;
    createButtonLipsync();
}

function handleChocolateBarElimination(queen, screen, index, totalBatch) {
    if (chocolateBarTwist && !chocolateBarTwistCheck) {
        screen.createBold(queen.getName() + ", now your fate rests in the hands of the drag gods.");
        screen.createBold("If you have the golden chocolate bar, you will be safe.");

        if (chocolateBarCheck(queen)) {
            screen.createImage(queen.image, "black");
            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
            screen.createBold(queen.getName() + "!! Condragulations, you are safe to slay another day!");
            queen.addToTrackRecord("CHOC");
            chocolateBarTwistCheck = true;
            return;
        } else {
            screen.createImage(queen.image, "black");
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
        }
    }

	if ((!chocolateBarTwistCheck && chocolateBarTwist) || !chocolateBarTwist) {
		screen.createImage(queen.image, "black");
	}
    screen.createBold(queen.getName() + ", sashay away...");

    queen.addToTrackRecord(" ELIM ");
	queen.rankP = "tie2"

    queen.unfavoritism += 2;
    eliminatedCast.unshift(queen);
    currentCast.splice(currentCast.indexOf(queen), 1);
}
