var people = document.getElementsByClassName("contact-item cf");
for (var i = 0; i < people.length; i += 1) {
  if (i > 9) {
    people[i].style.display = "none";
  } else {
    people[i].style.display = "";
  }
}

function showSelectedElements(number) {
  var people = document.getElementsByClassName("contact-item cf");
  switch (number) {
    case 1:
      for (var i = 0; i < people.length; i += 1) {
        if (i > 9) {
          people[i].style.display = "none";
        } else {
          people[i].style.display = "";
        }
      }
      document.getElementsByClassName("contact-list").innerhtml = people;
      break;
    case 2:
      for (var i = 0; i < people.length; i += 1) {
        if (i < 10 || i > 19) {
          people[i].style.display = "none";
        } else {
          people[i].style.display = "";
        }
      }
      document.getElementsByClassName("contact-list").innerhtml = people;
      break;
    case 3:
      for (var i = 0; i < people.length; i += 1) {
        if (i < 20 || i > 29) {
          people[i].style.display = "none";
        } else {
          people[i].style.display = "";
        }
      }
      document.getElementsByClassName("contact-list").innerhtml = people;
      break;
    case 4:
      for (var i = 0; i < people.length; i += 1) {
        if (i < 30 || i > 39) {
          people[i].style.display = "none";
        } else {
          people[i].style.display = "";
        }
      }
      document.getElementsByClassName("contact-list").innerhtml = people;
      break;
    case 5:
      for (var i = 0; i < people.length; i += 1) {
        if (i < 40 || i > 49) {
          people[i].style.display = "none";
        } else {
          people[i].style.display = "";
        }
      }
      document.getElementsByClassName("contact-list").innerhtml = people;
      break;
    case 6:
      for (var i = 0; i < people.length; i += 1) {
        if (i < 50 || i > 59) {
          people[i].style.display = "none";
        } else {
          people[i].style.display = "";
        }
      }
      document.getElementsByClassName("contact-list").innerhtml = people;
      s;
      break;
  }
}

document.getElementById("1").addEventListener("click", function () {
  showSelectedElements(1);
});
document.getElementById("2").addEventListener("click", function () {
  showSelectedElements(2);
});
document.getElementById("3").addEventListener("click", function () {
  showSelectedElements(3);
});
document.getElementById("4").addEventListener("click", function () {
  showSelectedElements(4);
});
document.getElementById("5").addEventListener("click", function () {
  showSelectedElements(5);
});
document.getElementById("6").addEventListener("click", function () {
  showSelectedElements(6);
});
