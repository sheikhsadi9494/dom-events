// function 
function makered(){
    document.body.style.backgroundColor="red";
};

// set name funcation
const blueButton = document.getElementById('make-bg-blue');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor="blue"
}

//  handle event using anonymous funcation
const greenButton = document.getElementById('make-bg-green');
greenButton.onclick = function () {
    document.body.style.backgroundColor="green";
}

// handle by using add eventlisenter
const goldenRodButton = document.getElementById('make-bg-goldenRod');
goldenRodButton.addEventListener('click', handleGoldenRod)

function handleGoldenRod(){
    document.body.style.backgroundColor=" #DAA520";
}

// add eventlistener
const hotPinkButton = document.getElementById('make-bg-hotpink');
hotPinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor="hotpink";
})

// shotcart 
document.getElementById('make-bg-lightBlue').addEventListener('click', function() {
    document.body.style.backgroundColor="lightblue";
})

