/* =========================================================
   PASSWORD
========================================================= */

const SECRET_PASSWORD = "1102005";

const lockScreen =
    document.getElementById("lockScreen");

const cakeScene =
    document.getElementById("cakeScene");

const mainSite =
    document.getElementById("mainSite");

const unlockForm =
    document.getElementById("unlockForm");

const loginError =
    document.getElementById("loginError");


/* =========================================================
   PASSWORD CHECK
========================================================= */

if (unlockForm) {

    unlockForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const password =
            document
                .getElementById("password")
                .value
                .trim();


        if (password === SECRET_PASSWORD) {

            sessionStorage.setItem(
                "birthdayUnlocked",
                "1"
            );

            lockScreen.classList.add("hidden");

            cakeScene.classList.remove("hidden");

            loginError.textContent = "";

        }

        else {

            loginError.textContent =
                "Wrong birthday code ♡";


            unlockForm.animate(

                [
                    {
                        transform: "translateX(0)"
                    },

                    {
                        transform: "translateX(-7px)"
                    },

                    {
                        transform: "translateX(7px)"
                    },

                    {
                        transform: "translateX(0)"
                    }
                ],

                {
                    duration: 280
                }

            );

        }

    });

}


/* =========================================================
   CAKE + FLOWERS
========================================================= */

const cakeButton =
    document.getElementById("cakeButton");

const flowerAnimation =
    document.getElementById("flowerAnimation");

let cakeOpened = false;


/* =========================================================
   CREATE FLOWERS
========================================================= */

function createFlowers(){

    if(!flowerAnimation){
        return;
    }

    flowerAnimation.innerHTML = "";

    flowerAnimation.classList.add("active");


    const colors = [

        "flower-red",
        "flower-pink",
        "flower-rose",
        "flower-white",
        "flower-yellow",
        "flower-purple",
        "flower-blue",
        "flower-peach"

    ];


    const totalFlowers = 150;


    for (let i = 0; i < totalFlowers; i++) {

        const flower =
            document.createElement("span");


        flower.className =
            "orbit-flower " +
            colors[i % colors.length];


        const ring =
            i % 7;


        const position =
            Math.floor(i / 7);


        const perRing =
            Math.ceil(totalFlowers / 7);


        const angle =
            (
                position *
                (360 / perRing)
            ) +
            (ring * 9);


        const radiusOne =
            55 +
            ring * 25;


        const radiusTwo =
            125 +
            ring * 42;


        const radiusThree =
            210 +
            ring * 55;


        const radiusFour =
            300 +
            ring * 70;


        const fallX =
            (
                (Math.random() - 0.5) *
                1050
            );


        const fallY =
            430 +
            Math.random() * 470;


        const duration =
            2.9 +
            Math.random() * 1.1;


        const delay =
            (
                (i % 24) *
                0.012
            ) +
            Math.random() * 0.08;


        flower.style.setProperty(
            "--angle",
            angle + "deg"
        );


        flower.style.setProperty(
            "--radius-one",
            radiusOne + "px"
        );


        flower.style.setProperty(
            "--radius-two",
            radiusTwo + "px"
        );


        flower.style.setProperty(
            "--radius-three",
            radiusThree + "px"
        );


        flower.style.setProperty(
            "--radius-four",
            radiusFour + "px"
        );


        flower.style.setProperty(
            "--fall-x",
            fallX + "px"
        );


        flower.style.setProperty(
            "--fall-y",
            fallY + "px"
        );


        flower.style.setProperty(
            "--orbit-duration",
            duration + "s"
        );


        flower.style.setProperty(
            "--delay",
            delay + "s"
        );


        if (i % 4 === 0) {

            flower.classList.add(
                "small"
            );

        }


        if (i % 13 === 0) {

            flower.classList.add(
                "big"
            );

        }


        flowerAnimation.appendChild(
            flower
        );

    }


    setTimeout(function(){

        flowerAnimation.classList.remove(
            "active"
        );

        flowerAnimation.innerHTML = "";

    }, 2450);

}


/* =========================================================
   START FLOWER ANIMATION
========================================================= */

function startFlowerAnimation() {

    if (!flowerAnimation) {
        return;
    }

    createFlowers();

}


/* =========================================================
   CLICK CAKE
========================================================= */

if (cakeButton) {

    cakeButton.addEventListener(
        "click",
        function() {

            if (cakeOpened) {
                return;
            }


            cakeOpened = true;


            sessionStorage.setItem(
                "birthdayOpen",
                "1"
            );


            startFlowerAnimation();


            cakeButton.animate(

                [

                    {
                        transform: "scale(1)",
                        opacity: 1
                    },

                    {
                        transform: "scale(1.08)",
                        opacity: 1
                    },

                    {
                        transform:
                            "scale(.2) translateY(60px)",
                        opacity: 0
                    }

                ],

                {

                    duration: 1100,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)",

                    fill: "forwards"

                }

            );


            setTimeout(function() {

                if (mainSite) {

                    mainSite.classList.remove(
                        "hidden"
                    );


                    mainSite.animate(

                        [
                            {
                                opacity: 0
                            },

                            {
                                opacity: 1
                            }
                        ],

                        {
                            duration: 1200,
                            fill: "forwards"
                        }

                    );


                    const doors =
                        document.getElementById(
                            "mainSite"
                        );


                    if (doors) {

                        doors.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }


                    createHeroPetals();

                    startReveal();

                }

            }, 2200);

        }
    );

}


/* =========================================================
   BACK TO THREE DOORS
========================================================= */

const backTop =
    document.getElementById("backTop");

const threeDoors =
    document.getElementById("threeDoors");


if (backTop) {

    backTop.addEventListener(
        "click",
        function() {

            if (threeDoors) {

                threeDoors.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

            else {

                window.location.href =
                    "index.html#threeDoors";

            }

        }
    );

}


/* =========================================================
   HERO PETALS
========================================================= */

function createHeroPetals() {

    const container =
        document.getElementById(
            "heroPetals"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const symbols = [
        "✿",
        "❀",
        "♡"
    ];


    for (let i = 0; i < 25; i++) {

        const petal =
            document.createElement("span");


        petal.className =
            "hero-petal";


        petal.textContent =
            symbols[
                i % symbols.length
            ];


        petal.style.left =
            Math.random() * 100 + "%";


        petal.style.top =
            (
                -10 -
                Math.random() * 30
            ) + "%";


        petal.style.fontSize =
            (
                12 +
                Math.random() * 22
            ) + "px";


        petal.style.animationDelay =
            (
                Math.random() * 6
            ) + "s";


        container.appendChild(
            petal
        );

    }

}


/* =========================================================
   VIDEO
========================================================= */

const video =
    document.getElementById("myVideo");

const videoPlaceholder =
    document.querySelector(
        ".video-placeholder"
    );


if (video) {

    video.addEventListener(
        "loadeddata",
        function() {

            if (videoPlaceholder) {

                videoPlaceholder.style.display =
                    "none";

            }

        }
    );


    video.addEventListener(
        "error",
        function() {

            if (videoPlaceholder) {

                videoPlaceholder.style.display =
                    "grid";

            }

        }
    );

}


/* =========================================================
   MUSIC
========================================================= */

const song =
    document.getElementById("song");

const playSong =
    document.getElementById("playSong");

const equalizer =
    document.getElementById("equalizer");

const volume =
    document.getElementById("volume");


if (playSong && song) {

    playSong.addEventListener(
        "click",
        function() {

            if (song.paused) {

                song
                    .play()
                    .then(function() {

                        playSong.textContent =
                            "Ⅱ";


                        if (equalizer) {

                            equalizer.classList.add(
                                "playing"
                            );

                        }

                    })
                    .catch(function() {

                        console.log(
                            "Audio could not start."
                        );

                    });

            }

            else {

                song.pause();


                playSong.textContent =
                    "▶";


                if (equalizer) {

                    equalizer.classList.remove(
                        "playing"
                    );

                }

            }

        }
    );


    song.addEventListener(
        "ended",
        function() {

            playSong.textContent =
                "▶";


            if (equalizer) {

                equalizer.classList.remove(
                    "playing"
                );

            }

        }
    );

}


if (volume && song) {

    volume.addEventListener(
        "input",
        function(e) {

            song.volume =
                e.target.value;

        }
    );

}


/* =========================================================
   MEMORY LIGHTBOX
   SUPPORTS BOTH IMAGES AND VIDEOS
========================================================= */

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImg =
    document.getElementById(
        "lightboxImg"
    );


/*
 * Create the video element for the lightbox.
 * It is created only once.
 */

let lightboxVideo = null;

if (lightbox) {

    lightboxVideo =
        document.createElement("video");

    lightboxVideo.id =
        "lightboxVideo";

    lightboxVideo.controls =
        true;

    lightboxVideo.playsInline =
        true;

    lightboxVideo.style.display =
        "none";

    lightboxVideo.style.maxWidth =
        "90vw";

    lightboxVideo.style.maxHeight =
        "85vh";

    lightboxVideo.style.width =
        "auto";

    lightboxVideo.style.height =
        "auto";

    lightbox.appendChild(
        lightboxVideo
    );

}


/*
 * Open memories.
 */

document
    .querySelectorAll(".memory")
    .forEach(function(memory) {

        memory.addEventListener(
            "click",
            function(e) {

                /*
                 * Prevent the button from doing
                 * anything unexpected.
                 */

                e.preventDefault();


                if (
                    !lightbox ||
                    !lightboxImg
                ) {
                    return;
                }


                /*
                 * Check if this memory contains
                 * an actual <video>.
                 */

                const videoElement =
                    memory.querySelector(
                        "video"
                    );


                /*
                 * Check if this memory contains
                 * an <img>.
                 */

                const image =
                    memory.querySelector(
                        "img"
                    );


                /*
                 * =====================================
                 * VIDEO MEMORY
                 * =====================================
                 */

                if (videoElement) {

                    /*
                     * Hide image.
                     */

                    lightboxImg.style.display =
                        "none";


                    /*
                     * Show lightbox video.
                     */

                    if (lightboxVideo) {

                        lightboxVideo.style.display =
                            "block";


                        /*
                         * Get video source.
                         */

                        lightboxVideo.src =
                            videoElement.currentSrc ||
                            videoElement.src;


                        /*
                         * Start from beginning.
                         */

                        lightboxVideo.currentTime =
                            0;


                        /*
                         * Open lightbox.
                         */

                        lightbox.classList.remove(
                            "hidden"
                        );


                        /*
                         * Try to play automatically.
                         * Controls remain available.
                         */

                        lightboxVideo
                            .play()
                            .catch(function() {

                                /*
                                 * Browser may block autoplay.
                                 * Controls are still available.
                                 */

                            });

                    }

                    return;

                }


                /*
                 * =====================================
                 * IMAGE MEMORY
                 * =====================================
                 */

                if (image) {

                    /*
                     * Hide video.
                     */

                    if (lightboxVideo) {

                        lightboxVideo.pause();

                        lightboxVideo.removeAttribute(
                            "src"
                        );

                        lightboxVideo.load();

                        lightboxVideo.style.display =
                            "none";

                    }


                    /*
                     * Show image.
                     */

                    lightboxImg.style.display =
                        "block";


                    lightboxImg.src =
                        image.src;


                    /*
                     * Open lightbox.
                     */

                    lightbox.classList.remove(
                        "hidden"
                    );

                }

            }
        );

    });


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightbox() {

    if (!lightbox) {
        return;
    }


    /*
     * Hide lightbox.
     */

    lightbox.classList.add(
        "hidden"
    );


    /*
     * Clear image.
     */

    if (lightboxImg) {

        lightboxImg.src = "";

        lightboxImg.style.display =
            "none";

    }


    /*
     * Stop video completely.
     */

    if (lightboxVideo) {

        lightboxVideo.pause();

        lightboxVideo.currentTime =
            0;

        lightboxVideo.removeAttribute(
            "src"
        );

        lightboxVideo.load();

        lightboxVideo.style.display =
            "none";

    }

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

const closeLightboxButton =
    document.getElementById(
        "closeLightbox"
    );


if (closeLightboxButton) {

    closeLightboxButton.addEventListener(
        "click",
        closeLightbox
    );

}


/* =========================================================
   CLICK OUTSIDE LIGHTBOX
========================================================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function(e) {

            if (e.target === lightbox) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(e) {

        if (
            e.key === "Escape" &&
            lightbox &&
            !lightbox.classList.contains("hidden")
        ) {

            closeLightbox();

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver;


function startReveal() {

    if (revealObserver) {

        revealObserver.disconnect();

    }


    if (
        typeof IntersectionObserver ===
        "undefined"
    ) {

        document
            .querySelectorAll(".reveal")
            .forEach(function(element) {

                element.classList.add(
                    "visible"
                );

            });

        return;

    }


    revealObserver =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    document
        .querySelectorAll(".reveal")
        .forEach(
            function(element) {

                revealObserver.observe(
                    element
                );

            }
        );

}


/* =========================================================
   RESTORE BIRTHDAY SESSION
========================================================= */

if (
    sessionStorage.getItem("birthdayOpen") === "1" &&
    mainSite &&
    lockScreen &&
    cakeScene
) {

    lockScreen.classList.add(
        "hidden"
    );


    cakeScene.classList.add(
        "hidden"
    );


    mainSite.classList.remove(
        "hidden"
    );


    createHeroPetals();

    startReveal();


    if (
        window.location.hash ===
        "#threeDoors"
    ) {

        setTimeout(
            function() {

                const doors =
                    document.getElementById(
                        "threeDoors"
                    );


                if (doors) {

                    doors.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            },
            1000
        );

    }

}