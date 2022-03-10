"use strict";

var contactForm = document.querySelector('.contact-form');
var name = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  };
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == 'success') {
      alert('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Something went wrong');
    }
  };

  xhr.send(JSON.stringify(formData));
}); //h1 Bounce effect

$(document).ready(function () {
  var letters = $('.ha').text();
  var nHTML = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var letter = _step.value;
      nHTML += "<span class='a'>" + letter + "</span>";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  $('.ha').html(nHTML);
});
$(document).ready(function () {
  var letters = $('.hs').text();
  var nHTML = '';
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = letters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var letter = _step2.value;
      nHTML += "<span class='a'>" + letter + "</span>";
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  $('.hs').html(nHTML);
}); // h2 bounce SKILLS

$(document).ready(function () {
  var letters = $('.sk').text();
  var nHTML = '';
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = letters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var letter = _step3.value;
      nHTML += "<span class='a'>" + letter + "</span>";
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  $('.sk').html(nHTML);
}); // h2 bounce WORKS

$(document).ready(function () {
  var letters = $('.wrk').text();
  var nHTML = '';
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = letters[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var letter = _step4.value;
      nHTML += "<span class='a'>" + letter + "</span>";
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  $('.wrk').html(nHTML);
}); // h2 bounce CONTACT

$(document).ready(function () {
  var letters = $('.con').text();
  var nHTML = '';
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = letters[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var letter = _step5.value;
      nHTML += "<span class='a'>" + letter + "</span>";
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  $('.con').html(nHTML);
}); // Animated text

var typed = new Typed(".text", {
  strings: ["graphic designer.", "content creator.", "animator.", "digital artist."],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
}); // Cursor

var cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function (e) {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});
document.addEventListener('click', function () {
  cursor.classList.add("expand");
  setTimeout(function () {
    cursor.classList.remove("expand");
  }, 500);
});