const hintBox = document.getElementById("hint-box");
const video = document.getElementById("bgVideo");
const LOOP_OFFSET = 2;
const audio = document.getElementById("bgAudio");
const loginContainer = document.getElementById("login-container");
const loginTitle = document.getElementById("login-title");
const visible = document.getElementById("password");
const eye = document.getElementById("visible");
const eyeOpenImg = "img/eyeopen.png";
const eyeOpenHoverImg = "img/eyeopenhover.png";
const eyeClosedImg = "img/eyeclosed.png";
const eyeClosedHoverImg = "img/eyeclosehover.png";
const talkOne = document.getElementById("talk-box-one");
const talkTwo = document.getElementById("talk-box-two");

function isStrongPassword(password) {
    specialUser();
    if (password.length < 8) {
        return false;
    };

    if (password.indexOf("password") !== -1) {
        return false;
    };

    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && password[i] !== password[i].toLowerCase()) {
            return true;
        }
    }
    return false;
};

function passwordDescriptor() {
    let password = document.getElementById("password").value;
    if (isStrongPassword(password)) {
        alert("Password is strong.");
    }
    else {
        alert("Password is weak");
    };
};

let typing1, typing2, typing3, typing4, typing5, typing6, typing7, typing8, typing9, typing10;
let currentCharTimeout;

//Resets page to default state.
function resetState() {
    clearTimeout(typing1);
    clearTimeout(typing2);
    clearTimeout(typing3);
    clearTimeout(typing4);
    clearTimeout(typing5);
    clearTimeout(typing6);
    clearTimeout(typing7);
    clearTimeout(typing8);
    clearTimeout(typing9);
    clearTimeout(typing10);
    clearTimeout(currentCharTimeout);
    talkOne.textContent = "";

    loginContainer.classList.remove("waterfall", "fireplace", "ffseven", "fffourteen", "ffsix", "guildwarstwo", "ragnarok");
    loginTitle.classList.remove("waterfall", "fireplace", "ffseven", "fffourteen", "ffsix", "guildwarstwo", "ragnarok");
    talkOne.classList.remove("waterfall", "fireplace", "ffseven", "fffourteen", "ffsix", "guildwarstwo", "ragnarok");
    talkOne.textContent = "";

    eye.style.top = 112 + "px";
    video.src = "";
    audio.src = "";
    
    loginContainer.querySelectorAll(".rain").forEach(d => d.remove());
    loginContainer.querySelectorAll(".wind").forEach(d => d.remove());
    loginContainer.querySelectorAll(".souls").forEach(d => d.remove());
    loginContainer.querySelectorAll(".star").forEach(d => d.remove());
    loginContainer.querySelectorAll(".snow").forEach(d => d.remove());
    loginContainer.querySelectorAll(".pollen").forEach(d => d.remove());
    loginContainer.querySelectorAll(".petals").forEach(d => d.remove());

    loginContainer.style.height = "280px";
}

//Easteregg usernames and passwords.
function specialUser() {
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (user === "undertale") {
        resetState();

        switch (password) {
            case "Waterfall":
                video.src = "vid/UndertaleWP.mp4";
                video.pause();
                video.currentTime = 0;
                video.play();    

                audio.src = "sound/UndertaleWaterfall.ogg";
                audio.play();

                loginContainer.classList.add("waterfall");
                talkOne.classList.add("waterfall");
                loginTitle.classList.add("waterfall");

                //Raindrops on login-container
                for (let i = 0; i < 30; i++) {
                    const rain = document.createElement("div");
                    rain.classList.add("rain");
                    rain.style.left = Math.random() * 100 + "%";
                    rain.style.animationDuration = (0.5 + Math.random()) + "s";
                    rain.style.animationDelay = Math.random() * 2 + "s";
                    loginContainer.appendChild(rain);
                }

                typing1 = setTimeout(() => { 
                    talkOne.textContent="";
                    typeText(talkOne, "Make sure to take some time to get out.", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Even if it's raining...", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Nature is still beautiful.", 100);
                }, 24000);
                typing4 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Me? Oh don't worry.", 100);
                }, 36000);
                typing5 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "This rain is just javascript and css code.", 100);
                }, 44000);
                typing6 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "But uh....", 100);
                }, 52000);
                typing7 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "You wouldn't happen to have an umbrella on you?", 100);
                }, 60000);

                loginContainer.style.height = "280px";
                break;

            case "Fireplace":
                video.src = "vid/UndertaleFP.webm";
                video.pause();
                video.currentTime = 10;
                video.play();

                audio.src = "sound/UndertaleHome.ogg";
                audio.play();

                loginContainer.classList.add("fireplace");
                loginTitle.classList.add("fireplace");
                talkOne.classList.add("fireplace");

                typing1 = setTimeout(() => { 
                    typeText(talkOne, "Awww, this pretty relaxing.... so warm.", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "It's been a long semester for you humans.", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Don't forget to take some time to relax.", 100);
                }, 24000);

                loginContainer.style.height = "280px"
                break;
            }
            return true;
        }
    else if (user === "finalfantasy") {
        resetState();

        switch (password) {
            case "Number7":
                video.src = "vid/FF7.webm";
                video.pause();
                video.currentTime = 0;
                video.play();

                audio.src = "sound/aeriths_theme.ogg";
                audio.play();

                loginContainer.classList.add("ffseven");
                loginTitle.classList.add("ffseven");
                talkOne.classList.add("ffseven");
                eye.style.top = 143 + "px";

                //For the wind particles coming from login-container
                for (let i = 0; i < 10; i++) {
                    const particle = document.createElement("div");
                    particle.classList.add("wind");
                    particle.style.top = Math.random() * 200 + "px";
                    particle.style.left = Math.random() * 200 + "px";
                    particle.style.animationDelay = Math.random() * 3 + "s";
                    loginContainer.appendChild(particle);
                }
                
                typing1 = setTimeout(() => { 
                    typeText(talkOne, "Don't forget to enjoy a good story.", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Could be from a game, a book, whatever.", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "The story from this game was brilliant.", 100);
                }, 24000);
                typing4 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "In fact....", 100);
                }, 36000);
                typing5 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Does anyone have a tissue?", 100);
                }, 44000);

                loginContainer.style.height = "320px"
                break;

            case "Number14":
                video.src = "vid/FF14Thule.mp4";
                video.pause();
                video.currentTime = 0;
                video.play();    

                audio.src = "sound/FF14Distance.mp3";
                audio.play();

                loginContainer.classList.add("fffourteen");
                loginTitle.classList.add("fffourteen");
                talkOne.classList.add("fffourteen");

                //The souls coming from the login-container
                for (let i = 0; i < 15; i++) {
                    const soul = document.createElement("div");
                    soul.classList.add("souls");
                    soul.style.top = Math.random() * 250 + "px";
                    soul.style.left = Math.random() * 200 + "px";
                    soul.style.animationDuration = (6 + Math.random() * 5) + "s";
                    soul.style.animationDelay = Math.random() * 3 + "s";
                    loginContainer.appendChild(soul);
                }

                //The stars in the main login-container body
                for (let i = 0; i < 25; i++) {
                    const star = document.createElement("span");
                    star.classList.add("star");
                    star.style.top = Math.random() * loginContainer.offsetHeight + "px";
                    star.style.left = Math.random() * loginContainer.offsetWidth + "px";
                    star.style.animationDelay = Math.random() * 3 + "s";
                    loginContainer.appendChild(star);
                }

                typing1 = setTimeout(() => { 
                    typeText(talkOne, "Are you just starting your degree?", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Does it seem that your goal is so far away?", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Does it seem beyond the horizon?", 100);
                }, 24000);
                typing4 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "It's alright, keep walking, keep moving forward.", 100);
                }, 36000);
                typing5 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "It won't always be easy.", 100);
                }, 44000);
                typing6 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "You will fail, and feeling of hoplessness will appear.", 100);
                }, 52000);
                typing7 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "But keep walking.", 100);
                }, 60000);
                typing8 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Keep going.", 100);
                }, 68000);
                typing9 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "That distance will become so small.", 100);
                }, 76000);
                typing10 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "You will only truly fail if you quit, so keep going.", 100);
                }, 84000);

                loginContainer.style.height = "280px"
                break;

            case "Number6":
                video.src = "vid/FF6.mp4";
                video.pause();
                video.currentTime = 0;
                video.play();          

                audio.src = "sound/FF6Terra.flac";
                audio.play();

                loginContainer.classList.add("ffsix");
                loginTitle.classList.add("ffsix");
                talkOne.classList.add("ffsix");

                //Snow on the login-container, figure out how to stop the buildiup
                //when page starts?
                for (let i = 0; i < 30; i++) {
                    const snow = document.createElement("div");
                    let size = Math.random() * 5 + 2 + "px";
                    snow.style.height = size;
                    snow.style.width = size;
                    snow.classList.add("snow");
                    snow.style.left = Math.random() * 250 + (Math.random() * 250) + (Math.random() * -250) + "px";
                    snow.style.animationDuration = 4 + Math.random() * 8 + "s";
                    snow.style.animationDelay = Math.random() * 4 + "s";
                    loginContainer.appendChild(snow);
                }

                typing1 = setTimeout(() => { 
                    typeText(talkOne, "Have you ever taken a late night stroll in the snow?", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Can't say that I have.", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Because I don't have legs.", 100);
                }, 24000);
                typing4 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "But it would seem kinda relaxing.", 100);
                }, 36000);
                typing5 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "It's almost winter where you humans are at, right?", 100);
                }, 44000);
                typing6 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "When you get a break from school, why not take a walk?", 100);
                }, 52000);
                typing7 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Clear that mind of yours.", 100);
                }, 60000);
                typing8 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "But make sure you dress warmly.", 100);
                }, 68000);
                typing9 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "I kinda wish I had clothes.", 100);
                }, 76000);
                typing10 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "It's a little cold in here.", 100);
                }, 84000);

                loginContainer.style.height = "280px"
                break;
            }
        return true;
    }
    else if (user == "guildwars2") {
        resetState();

        switch (password) {
            case "Planetarium":
                video.src = "vid/GuildWars2.mkv";
                video.pause();
                video.currentTime = 0;
                video.play();          

                audio.src = "sound/GuildWars2Relaxing.mp3";
                audio.play();

                loginContainer.classList.add("guildwarstwo");
                loginTitle.classList.add("guildwarstwo");
                talkOne.classList.add("guildwarstwo");

                //Pollen going across the login-container
                for (let i = 0; i < 60; i++) {
                    const pollen = document.createElement("div");
                    let size = Math.random() * 4 + 2 + "px";
                    pollen.style.height = size;
                    pollen.style.width = size;
                    pollen.classList.add("pollen");
                    pollen.style.top = Math.random() * 250 + (Math.random() * 250) + (Math.random() * -250) + "px";
                    pollen.style.left = Math.random() * 220 + (Math.random() * 250) + (Math.random() * -250) + "px";
                    pollen.style.animationDuration = 5 + Math.random() * 6 + "s";
                    pollen.style.animationDelay = Math.random() * 4 + "s";
                    loginContainer.appendChild(pollen);
                }

                typing1 = setTimeout(() => { 
                    typeText(talkOne, "What type of space do you study in?", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Do you feel anxious? Relaxed?", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Think about changing it to best suite you.", 100);
                }, 24000);
                typing4 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Put on music that helps you relax or focus.", 100);
                }, 36000);
                typing5 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Is it messy? Take some time to make it neat.", 100);
                }, 44000);
                typing6 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Consider some snacks, maybe a little stash?", 100);
                }, 52000);
                typing7 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Studying doesn't have to be stressful.", 100);
                }, 60000);
                typing8 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Take control of your space and make it work for you.", 100);
                }, 68000);

                loginContainer.style.height = "280px"
                break;
        }
        return true;
    }
    else if (user === "ragnarok") {
        resetState();

        switch (password) {
            case "Prontera":
                video.src = "vid/ROProntera.mp4";
                video.pause();
                video.currentTime = 0;
                video.play();

                audio.src = "sound/ThemeOfProntera.flac"
                audio.play();

                loginContainer.classList.add("ragnarok");
                loginTitle.classList.add("ragnarok");
                talkOne.classList.add("ragnarok");

                //Flower Petals going across the login-container
                for (let i = 0; i < 12; i++) {
                    const petal = document.createElement("div");
                    petal.classList.add("petals");
                    petal.style.top = Math.random() * 200 + (Math.random() * 250) + (Math.random() * -250) + "px";
                    petal.style.left = Math.random() * 250 + (Math.random() * 250) + (Math.random() * -250) + "px";
                    petal.style.animationDuration = 4 + Math.random() * 3 + "s";
                    petal.style.animationDelay = Math.random() * 3 + "s";
                    loginContainer.appendChild(petal);
                }

                typing1 = setTimeout(() => { 
                    typeText(talkOne, "Do you have a game that you loved when you were younger?", 100)
                }, 8000);
                typing2 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "This is Ragnarok Online.", 100);
                }, 16000);
                typing3 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "A MMORPG that my creator used to play back in 2004.", 100);
                }, 24000);
                typing4 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "He was in Highschool and he played with his friends.", 100);
                }, 36000);
                typing5 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "He always says that when he hears this music...", 100);
                }, 44000);
                typing6 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "He wants to play the game again.", 100);
                }, 52000);
                typing7 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "He says it brings him back to a more innocent time.", 100);
                }, 60000);
                typing8 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "If school gets you down, consider going back to those games.", 100);
                }, 68000);
                typing9 = setTimeout(() => {
                    talkOne.textContent = "";
                    typeText(talkOne, "Have some fun and relax.", 100);
                }, 76000);

                loginContainer.style.height = "280px"
                break;
        }
    }
    else {
        resetState();
    }
};

//Helper function for eye in the password field
function passwordVisible() {
  if (visible.type === "password") {
    eye.src = eyeOpenImg;
    eye.alt = "Eye-open Password Visible";
    visible.type = "text";
  } else {
    eye.src = eyeClosedImg;
    eye.alt = "Eye-Closed Password Not Visible";
    visible.type = "password";
  }
};

//Helper for eye change when hovering over it
function hoverEye(isEntering) {
  if (isEntering) {
    if (eye.src.endsWith("eyeopen.png")) {
      eye.src = eyeOpenHoverImg;
    } 
    else if (eye.src.endsWith("eyeclosed.png")) {
      eye.src = eyeClosedHoverImg;
    }
  } 
  else {
    if (eye.src.endsWith("eyeopenhover.png")) {
      eye.src = eyeOpenImg;
    } 
    else if (eye.src.endsWith("eyeclosehover.png")) {
      eye.src = eyeClosedImg;
    }
  }
};

//Makes it look like text is being typed out.
function typeText(element, text, speed = 100, i = 0) {
  if (i < text.length) {
    element.textContent += text[i];
    currentCharTimeout = setTimeout(() => typeText(element, text, speed, i + 1), speed);
  }
}