let inputDiv = document.querySelector('.inputDiv');
let input = document.querySelector('.input');
let input2 = document.querySelector('.input2');
let uploadLabel = document.getElementById('upload');
let container = document.querySelector('.container');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let createBtn = document.querySelector('.create');
let goToBottom = document.querySelector('.goToBottom');

let card = document.querySelector('.card');
let blur = document.querySelector('.blur');

let cards = document.querySelectorAll('.card');
let blurdivs = document.querySelectorAll('.blur');

editBtn = document.querySelector('.editBtn');

let i = 3;








function edit () {
    console.log(divData.content);
}



let mood = 'down';

goToBottom.onclick = function () {

    if (mood === 'down') {
        goToBottom.href = '#CM';
        goToBottom.innerHTML = '↑';
        mood = 'up';

    } else if (mood === 'up') {
        goToBottom.href = '#';
        goToBottom.innerHTML = '↓'
        mood = 'down';
    }
};


// c2.onclick = function () {
//     // console.log('clicked');
//     window.open('assets/10-3-2024.jpg');
// }

// function openBackgroundImages (div) {
//     let computedStyle = window.getComputedStyle(div);
//     let background = computedStyle.getPropertyValue('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1');

//     if (background && background !== 'none') {
//         window.open(background, '_blank');
//     }
// }

// function openBackgroundImages (div) {
//     let computedStyle = window.getComputedStyle(div);
//     let backgroundImageUrl = computedStyle.getPropertyValue('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1');

//     if (backgroundImageUrl && backgroundImageUrl !== 'none') {
//         window.open(backgroundImageUrl, '_blank');
//     }
// };



window.onload = function () {
    let savedDivs = localStorage.getItem('savedDivs');

    if (savedDivs) {
        savedDivs = JSON.parse(savedDivs);
        savedDivs.forEach((divData) => {
            createAndDisplayDiv(divData);
        });


        c1.addEventListener('mouseenter', (e) => {
            e.target.querySelector('.blur').style.display = 'none';
            e.target.querySelector('.memoryDetails').style.display = 'flex';
        })
        
        c1.addEventListener('mouseleave', (e) => {
            e.target.querySelector('.blur').style.display = 'flex';
            e.target.querySelector('.memoryDetails').style.display = 'none';
        })
        
        
        c2.addEventListener('mouseenter', (e) => {
            e.target.querySelector('.blur').style.display = 'none';
            e.target.querySelector('.memoryDetails').style.display = 'flex';
        })
        
        c2.addEventListener('mouseleave', (e) => {
            e.target.querySelector('.blur').style.display = 'flex';
            e.target.querySelector('.memoryDetails').style.display = 'none';
        })

    }
    
};



function createAndDisplayDiv(divData) {
    let div = document.createElement('div');
    let blurDiv = document.createElement('div');
    let memoryDetailsDiv = document.createElement('div');

    blurDiv.classList.add('blur');
    div.classList.add('card');
    memoryDetailsDiv.classList.add('memoryDetails');

    // div.innerHTML = divData.content;
    blurDiv.innerHTML = divData.content;
    memoryDetailsDiv.innerHTML = divData.details;


    // let file = uploadLabel.files[0];

    // if (file) {
    //     let reader = new FileReader();
    //     reader.onload = function(event) {
    //         div.style.backgroundImage = `url('${event.target.result}')`;
    //     };

    //     reader.readAsDataURL(file);
    // } else {
    //     // blurDiv.style.display = 'none';
    //     // div.innerHTML = divData.content;
    // }

    div.appendChild(memoryDetailsDiv);
    div.appendChild(blurDiv);
    container.appendChild(div);


    div.addEventListener('mouseenter', (e) => {
        e.target.querySelector('.blur').style.display = 'none';
        e.target.querySelector('.memoryDetails').style.display = 'flex';
    })

    div.addEventListener('mouseleave', (e) => {
        e.target.querySelector('.blur').style.display = 'flex';
        e.target.querySelector('.memoryDetails').style.display = 'none';
    })



    

}

// ============================= Creating Card Function =============================


function createCard() {
    let divContent = input.value;
    let memoryDetails = input2.value;

    // let file = uploadLabel.files[0];
    
    if (divContent) {
        // let reader = new FileReader();
        // reader.onload = function(event) {
            let divData = {
                content: divContent,
                details: memoryDetails,
            };
            
            createAndDisplayDiv(divData);
            
            let savedDivs = localStorage.getItem('savedDivs');
            savedDivs = savedDivs ? JSON.parse(savedDivs) : [];
            savedDivs.push(divData);
            localStorage.setItem('savedDivs', JSON.stringify(savedDivs));
        // };

        input.value = '';
        input2.value = '';
        
        // reader.readAsDataURL(file);
    } else {
        alert('❤ Enter A Valid Date And Details ❤');
    }
}

// function createCard () {
//     let divContent = input.value;

//     if (divContent) {
//         let divData = {
//             content : divContent,
//         };

//         createAndDisplayDiv(divData);

//         i++;

//         let savedDivs = localStorage.getItem('savedDivs');

//         if (savedDivs) {
//             savedDivs = JSON.parse(savedDivs);
//             savedDivs.push(divData);
//         } else {
//             savedDivs = [divData];
//         }

//         // input.value = '';
//         uploadLabel.value = '';

//         localStorage.setItem('savedDivs', JSON.stringify(savedDivs));

//     } else {
//         alert('Please Enter A Valid Date');
//     }
// };


// ================= Input Functions =================


function deleteLastDiv() {
    let savedDivs = JSON.parse(localStorage.getItem('savedDivs'));
    
    if (savedDivs && savedDivs.length > 0) {
        savedDivs.pop(); // Remove the last div object
        localStorage.setItem('savedDivs', JSON.stringify(savedDivs)); // Update local storage
        refreshDivs(savedDivs); // Refresh displayed divs
    }
}


function refreshDivs (savedDivs) {
    container.innerHTML = `<div class="card1">
    <p class="primTitle">The Greatest One</p>
    <p class="date">❤ Friday 29 / 12 / 2023 ❤</p>
</div>

<div class="card c1">
    <div class="blur">Sunday 21 / 1 / 2024</div>
    <div class="memoryDetails">This was the day after your birthday, we sat and chat. This was a nice memory as this was our first date ❤.</div>
</div>

<div class="card c2">
    <div class="blur">Sunday 10 / 3 / 2024</div>
    <div class="memoryDetails">This was another day and the second date, I met you and we sat and talked with each other and drank smoothie, I told you that I am afraid that you leave me but you told me that you love me and you won't do this ( اللي بيننا مش بسيط ). I love you too very much ❤.</div>
</div>`;

// container.innerHTML = '';


savedDivs.forEach( (divData) => {
    createAndDisplayDiv(divData);
    });

}

function focused () {
    input.style.zIndex = 100;
    input2.style.zIndex = 98;
    inputDiv.style.opacity = '0';
    inputDiv.style.display = 'block';
    setTimeout(() => {
        inputDiv.style.opacity = '1';
    }, 10);
}

function blurred () {
    input.style.zIndex = 98;
    input2.style.zIndex = 100;
    // inputDiv.style.display = 'none';
    inputDiv.style.opacity = '0';
    setTimeout(() => {
       inputDiv.style.display = 'none'; 
       setTimeout(() => {
        inputDiv.style.opacity = '1';
       }, 10);
    }, 300);
}

function focused2 () {
    input.style.zIndex = 98;
    input2.style.zIndex = 100;
    inputDiv.style.opacity = '0';
    inputDiv.style.display = 'block';
    setTimeout(() => {
        inputDiv.style.opacity = '1';
    }, 10);
}

function blurred2 () {
    // inputDiv.style.display = 'none';
    input.style.zIndex = 100;
    input2.style.zIndex = 98;
    inputDiv.style.opacity = '0';
    setTimeout(() => {
       inputDiv.style.display = 'none'; 
       setTimeout(() => {
        inputDiv.style.opacity = '1';
       }, 10);
    }, 300);
}


editBtn.addEventListener('click', () => {
    console.log('hello');
    const lastDiv = container.lastElementChild;
    const divcontent = lastDiv.querySelector('.blur').textContent;
    const divdetails = lastDiv.querySelector('.memoryDetails').textContent;

    input.value = divcontent;
    input2.value = divdetails;
})