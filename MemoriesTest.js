let inputDiv = document.querySelector('.inputDiv');
let input = document.querySelector('.input');
let input2 = document.querySelector('.input2');
let uploadLabel = document.getElementById('upload');
let container = document.querySelector('.container');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');

let createBtn = document.querySelector('.create');
let goToBottom = document.querySelector('.goToBottom');
editBtn = document.querySelector('.editBtn');

let card = document.querySelector('.card');
let blur = document.querySelector('.blur');

let cards = document.querySelectorAll('.card');
let blurdivs = document.querySelectorAll('.blur');


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



window.onload = function () {
    let savedDivs = localStorage.getItem('savedDivs');

    if (savedDivs) {
        savedDivs = JSON.parse(savedDivs);
        savedDivs.forEach((divData) => {
            createAndDisplayDiv(divData);
        });

        hoverEffectListener();

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



// ================= Input Functions =================


function deleteLastDiv() {
    let savedDivs = JSON.parse(localStorage.getItem('savedDivs'));
    
    if (savedDivs && savedDivs.length > 0) {
        savedDivs.pop(); // Remove the last div object
        localStorage.setItem('savedDivs', JSON.stringify(savedDivs)); // Update local storage
        refreshDivs(savedDivs); // Refresh displayed divs

        hoverEffectListener();
    }
}


function refreshDivs (savedDivs) {
    container.innerHTML = `<div class="card1">
    <p class="primTitle">The Greatest One</p>
    <p class="date">🤍 Friday 29 / 12 / 2023 🤍</p>
</div>

<div class="card c1">
    <div class="blur">Sunday 21 / 1 / 2024</div>
    <div class="memoryDetails">This was the day after your birthday, we sat and chat. This was a nice memory as this was our first date ❤.</div>
</div>

<div class="card c2">
    <div class="blur">Sunday 10 / 3 / 2024</div>
    <div class="memoryDetails">This was another day and the second date, I met you and we sat and talked with each other and drank smoothie, I told you that I am afraid that you leave me but you told me that you love me and you won't do this ( اللي بيننا مش بسيط ). I love you too very much ❤.</div>
</div>

<div class="card c3">
    <div class="blur">Friday 22 / 3 / 2024</div>
    <div class="memoryDetails">On this day I took you after E3dad 5odam and we sat in Pianista and talked and I loved this very much because I needed you very much as I was exhausted and needed to see you ❤.</div>
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

function hoverEffectListener () {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.querySelector('.blur').style.display = 'none';
            e.target.querySelector('.memoryDetails').style.display = 'flex';
        })

        card.addEventListener('mouseleave', (e) => {
            e.target.querySelector('.blur').style.display = 'flex';
            e.target.querySelector('.memoryDetails').style.display = 'none';
        })
    })
}