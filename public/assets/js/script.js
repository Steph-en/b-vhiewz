const contactForm = document.querySelector('.contact-form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value 
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong');
        }
    }
    xhr.send(JSON.stringify(formData))
})

//h1 Bounce effect
$(document).ready(function () {
       var letters = $('.ha').text();
       var nHTML = '';
       for (var letter of letters) {
           nHTML += "<span class='a'>" + letter + "</span>";
       }
       $('.ha').html(nHTML);
    }   
)

$(document).ready(function () {
        var letters = $('.hs').text();
        var nHTML = '';
        for (var letter of letters) {
            nHTML += "<span class='a'>" + letter + "</span>";
        }
        $('.hs').html(nHTML);
    }
)

// h2 bounce SKILLS
$(document).ready(function () {
    var letters = $('.sk').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='a'>" + letter + "</span>";
    }
    $('.sk').html(nHTML);
})

// h2 bounce WORKS
$(document).ready(function () {
    var letters = $('.wrk').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='a'>" + letter + "</span>";
    }
    $('.wrk').html(nHTML);
})

// h2 bounce CONTACT
$(document).ready(function () {
    var letters = $('.con').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='a'>" + letter + "</span>";
    }
    $('.con').html(nHTML);
})


// Animated text
var typed = new Typed(".text", {
        strings: ["graphic designer.", "content creator.", "animator.", "digital artist."],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    }
)


// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    }
)

document.addEventListener('click', () => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    }
)