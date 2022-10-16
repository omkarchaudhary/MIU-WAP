window.onload = function(){
    let intervalId = null;
    let growthRate =250;
    const circleDiv = document.getElementById("circle");
    const circleWidth = document.getElementById("width");
    const circleGrowthAmount = document.getElementById("amount");
    const circleGrowthRate = document.getElementById("rate");
    const circleNumber = document.getElementById("circle-number");
    const startBtn = document.getElementById("start-button");
    circleDiv.onclick = stop;
    startBtn.onclick = growCircleByInput;
    
    function animation(rate){
        if(intervalId == null){
            intervalId = setInterval(function(){
                let height = circleDiv.clientHeight;
                let width = circleDiv.clientWidth;
                circleDiv.style.height = height+10+"px";
                circleDiv.style.width = width+10+"px";
                circleDiv.style.borderRadius = height/2 +"px";
                 
            },rate);
        }
    }
    animation(growthRate);

    function growCircleByInput(){
        circleDiv.style.height = circleGrowthAmount.value+"px";
        circleDiv.style.width = circleWidth.value+"px";
        circleDiv.style.borderRadius = circleWidth.value/2 +"px";
        animation(circleGrowthRate.value);
        //createCircle();
    }
    function createCircle(){
        let positionChange = false;
        for(let i =0; i<circleNumber.value;i++){
            let newCircleDiv = document.createElement("div");
            document.getElementById("circleDiv").appendChild(newCircleDiv);
            newCircleDiv.style.height = circleGrowthAmount.value+"px";
            newCircleDiv.style.width = circleWidth.value+"px";
            newCircleDiv.style.borderRadius = circleWidth.value/2 +"px";
            if(!positionChange){
                newCircleDiv.style.left = "5px";
                positionChange = true;
            }else{
                newCircleDiv.style.right = "5px";
                positionChange = false;
            }
            animation(circleGrowthRate.value);
        }
    }

    function stop(){
        clearInterval(intervalId);
        resetCircle();
        intervalId= null;
    }
    function resetCircle(){
        circleDiv.style.height = "0px";
        circleDiv.style.width = "0px";
        circleDiv.style.borderRadius = "0px";
    }
}