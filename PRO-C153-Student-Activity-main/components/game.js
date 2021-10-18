AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {
            type: "string",
            default: "#ring",
        }
    },
    updateScore: function () { 
        var element = document.querySelector("#score"); 
        var count = element.getAttribute("text").value; 
        var currentScore = parseInt(count); 
        currentScore += 50; 
        element.setAttribute("text", { value: currentScore, }); 
    },

    updateTargets: function () {
        var element = document.querySelector("#targets");
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", { value: currentTargets, });
    },

    init: function () {
        var duration = 120
        var timer = document.querySelector("#timer");
        this.startTime(duration, timer)
    },

    update: function () {
        this.isCollided(this.data.elementId);
    },
    gameOver: function () {
        var plane = document.querySelector("#plane_model");
        var element = document.querySelector("#game_over")
        element.setAttribute("visible", true)
        plane.setAttribute("dynamic-body", {
            mass: 1
        })

    },
    startTime: function (duration, timer) {
        var minutes;
        var seconds;
        setInterval(() => {
            if (duration >= 0) {
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60)
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (seconds < 10) {
                    seconds = "0" + seconds
                }
                timer.setAttribute("text", {
                    value: minutes + " : " + seconds
                })
                duration -= 1;
            }
            else {
                this.gameOver();
            }
        }, 1000)
    },
    isCollided: function (elementId) {
        var element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
            if (elementId.includes("#ring")) {
                //console.log(elementId + " collision");
                element.setAttribute("visible",false);
                this.updateTargets();
                this.updateScore()
            }
            else {
               //console.log("bird collision");
               this.gameOver()
            }
        });

    }
})

