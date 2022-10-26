let body = document.querySelector("body");
let form = document.querySelector("form");
let output = document.querySelector("#output");
let lText = document.querySelector('input[name="bname"]');
let lTop = document.querySelector('input[name="mtoptext"]');
let lBot = document.querySelector('input[name="mbottomtext"]');
let lSize = document.querySelector('input[name="brange"]');

function createMeme(event) {
        //console.log(lText.value, lSize.value);
        let mPic = lText.value;
        //create a div mBox for the whole thing
        const mBox = document.createElement("div");
        mBox.classList.add("mBoxes");
        //create an image, mImage
        const mImage = document.createElement("img");
        mImage.src = mPic;
        mImage.width = 600;
        mImage.position = "relative";
        //create top and bottom text
        const mTop = document.createElement("div");
        mTop.classList.add("top-text");
        mTop.innerText = lTop.value;
        const mBot = document.createElement("div");
        mBot.classList.add("bottom-text");
        mBot.innerText = lBot.value;
        //create a Remove button
        const mButton = document.createElement("button");
        mButton.innerText = "Remove";
        mButton.addEventListener("click",removeMeme)
        console.log(mButton.innerHTML);
        //put the image in the div and the div in the output section
        mBox.prepend(mImage);
        mBox.prepend(mTop);
        mBox.append(mBot);
        mBox.append(mButton);
        output.prepend(mBox);
        event.preventDefault();
        form.reset();
}

function removeMeme(event) {
    let deleteMe = event.target;
    deleteMe.parentElement.remove();
}

form.addEventListener("submit",createMeme)


/*
document.addEventListener("keydown",function(e){
    //console.dir(e);
    console.log(e.key);

            <label for="brange">Size:</label>
        <input display=hidden type="range" id="brange" name="brange" min="100" max="400"><br>  
})
*/
