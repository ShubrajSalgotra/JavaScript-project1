const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

function myFunctionClosed(){
    if (openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
}

function myFunctionOpen(){
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
}

// Add event listener
closedFace.addEventListener('click', myFunctionClosed);
openFace.addEventListener('click', myFunctionOpen);
