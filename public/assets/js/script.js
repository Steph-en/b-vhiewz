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

// scroll effect
const Scroll = document.querySelectorAll('.featurette')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerPoint = window.innerHeight / 5 * 4

    Scroll.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerPoint) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

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

// h3 bounce Pricing
$(document).ready(function () {
    var letters = $('.prc').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='a'>" + letter + "</span>";
    }
    $('.prc').html(nHTML);
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