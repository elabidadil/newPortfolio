// Function To Open Navbar And Animate Hamburger Icon
let hamburgerIcon = document.querySelector(".navbarHamburgerIcon");
hamburgerIcon.addEventListener('click', () => {
  document.querySelector(".navbarMenu").classList.toggle("navbarMenuActive");
  document.querySelector(".hamburgerIconTopBar").classList.toggle("navbarhamburgerTopBarActive");
  document.querySelector(".hamburgerIconMiddleBar").classList.toggle("navbarHamburgerMiddleBarActive");
  document.querySelector(".hamburgerIconBottomBar").classList.toggle("navbarHamburgerBottomBarActive");
})

// Function To Close Navbar And Animate Hamburger Icon
let navbarMenuLinks = document.querySelectorAll(".navbarMenu ul li");
navbarMenuLinks.forEach(link => {
  link.onclick = function () {
    document.querySelector(".navbarMenu").classList.remove("navbarMenuActive");
    document.querySelector(".hamburgerIconTopBar").classList.remove("navbarhamburgerTopBarActive");
    document.querySelector(".hamburgerIconMiddleBar").classList.remove("navbarHamburgerMiddleBarActive");
    document.querySelector(".hamburgerIconBottomBar").classList.remove("navbarHamburgerBottomBarActive");
  }
})

// Light Theme Function
let lightThemeButton = document.querySelector(".lightThemeButton");

lightThemeButton.addEventListener('click', () => {
  // Move The Theme Toggle Cover
  document.querySelector(".themeToggleButtonCover").style.left = "50%";
  document.querySelector(".themeToggleButtonCover").style.borderRadius = "0 .3rem .3rem 0";
  
  // Chnage Theme Colors
  document.body.classList.add("whiteThemeBody");
  document.querySelector(".smScreenNavbar").classList.add("lightThemeNavbar");
  let hamburgerBars = document.querySelectorAll(".navbarHamburgerIcon span");
  hamburgerBars.forEach(bar => {
    bar.classList.add("lightHamburgerIcon");
  });

  document.querySelector(".navbarMenu").classList.add("lightNavbarMenu");
  let navbarMenuLinks = document.querySelectorAll(".navbarMenu ul li a");
  navbarMenuLinks.forEach(link => {
    link.classList.add("lightNavbarMenuLinks");
  });

  document.querySelector(".greetingAndName").classList.add("lightGreetingAndSubtitle");
  document.querySelector(".subtitle").classList.add("lightGreetingAndSubtitle");
  document.querySelector(".subtitle b").classList.add("lightDeveloper");

  let homePageButtons = document.querySelectorAll(".homePageButtons button");
  homePageButtons.forEach(button => {
    button.classList.add("lightPageButtons");
  });

  document.querySelector(".lightThemeButton").classList.add("lightPageButtons");
  document.querySelector(".darkThemeButton").classList.add("lightPageButtons");
  document.querySelector(".darkHomePageImage").style.display = "none";
  document.querySelector(".lightHomePageImage").style.display = "block";

  let pageTitles = document.querySelectorAll(".pageTitle h2");
  pageTitles.forEach(title => {
    title.classList.add("lightPageTitle");
  });

  let pageTextContent = document.querySelectorAll(".pageTextContent");
  pageTextContent.forEach(text => {
    text.classList.add("lightPageTextContent");
  })
  
  let aboutMePageButtons = document.querySelectorAll(".aboutMePageButtonsContainer button");
  aboutMePageButtons.forEach(button => {
    button.classList.add("lightPageButtons");
  })

  let skillListNames = document.querySelectorAll(".skillsList span");
  skillListNames.forEach(skill => {
    skill.classList.add("lightSkillListName");
  })

  let projectTextContentTitle = document.querySelectorAll(".projectTextContent h4");
  projectTextContentTitle.forEach(title => {
    title.classList.add("lightProjectTextContentTitle")
  })

  let projectTextContentParagraph = document.querySelectorAll(".projectTextContent p");
  projectTextContentParagraph.forEach(paragraph => {
    paragraph.classList.add("lightProjectTextContentParagraph")
  })

  let formLabels = document.querySelectorAll("form label");
  formLabels.forEach(label => {
    label.classList.add("lightFormLabels");
  })

  document.querySelector(".homePageMouseScroller").classList.add("lightHomePageMouseScroller");
  document.querySelector(".homePageGlass").classList.add("lightHomePageGlass");
  let formInputs = document.querySelectorAll("form input");
  formInputs.forEach(input => {
    input.classList.add("lightFormInput");
  })
  document.querySelector("form textarea").classList.add("lightFormInput");
  document.querySelector(".greetingAndName i").classList.add("greetingAndNameArrow");
  document.querySelector(".lightThemeButton").classList.add("lightThemeToggleButton");
  document.querySelector(".darkThemeButton").classList.add("darkThemeToggleButton");
})

/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
/* ------------------------------------------------------ */

// Dark Theme Function
let darkThemeButton = document.querySelector(".darkThemeButton");

darkThemeButton.addEventListener('click', () => {
  // Move The Theme Toggle Cover
  document.querySelector(".themeToggleButtonCover").style.left = "0";
  document.querySelector(".themeToggleButtonCover").style.borderRadius = ".3rem 0 0 .3rem";
  
  // Chnage Theme Colors
  document.body.classList.remove("whiteThemeBody");
  document.querySelector(".smScreenNavbar").classList.remove("lightThemeNavbar");
  let hamburgerBars = document.querySelectorAll(".navbarHamburgerIcon span");
  hamburgerBars.forEach(bar => {
    bar.classList.remove("lightHamburgerIcon");
  });

  document.querySelector(".navbarMenu").classList.remove("lightNavbarMenu");
  let navbarMenuLinks = document.querySelectorAll(".navbarMenu ul li a");
  navbarMenuLinks.forEach(link => {
    link.classList.remove("lightNavbarMenuLinks");
  });

  document.querySelector(".greetingAndName").classList.remove("lightGreetingAndSubtitle");
  document.querySelector(".subtitle").classList.remove("lightGreetingAndSubtitle");
  document.querySelector(".subtitle b").classList.remove("lightDeveloper");

  let homePageButtons = document.querySelectorAll(".homePageButtons button");
  homePageButtons.forEach(button => {
    button.classList.remove("lightPageButtons");
  });

  document.querySelector(".lightThemeButton").classList.remove("lightPageButtons");
  document.querySelector(".darkThemeButton").classList.remove("lightPageButtons");
  document.querySelector(".darkHomePageImage").style.display = "block";
  document.querySelector(".lightHomePageImage").style.display = "none";

  let pageTitles = document.querySelectorAll(".pageTitle h2");
  pageTitles.forEach(title => {
    title.classList.remove("lightPageTitle");
  });

  let pageTextContent = document.querySelectorAll(".pageTextContent");
  pageTextContent.forEach(text => {
    text.classList.remove("lightPageTextContent");
  })
  
  let aboutMePageButtons = document.querySelectorAll(".aboutMePageButtonsContainer button");
  aboutMePageButtons.forEach(button => {
    button.classList.remove("lightPageButtons");
  })

  let skillListNames = document.querySelectorAll(".skillsList span");
  skillListNames.forEach(skill => {
    skill.classList.remove("lightSkillListName");
  })

  let projectTextContentTitle = document.querySelectorAll(".projectTextContent h4");
  projectTextContentTitle.forEach(title => {
    title.classList.remove("lightProjectTextContentTitle")
  })

  let projectTextContentParagraph = document.querySelectorAll(".projectTextContent p");
  projectTextContentParagraph.forEach(paragraph => {
    paragraph.classList.remove("lightProjectTextContentParagraph")
  })

  let formLabels = document.querySelectorAll("form label");
  formLabels.forEach(label => {
    label.classList.remove("lightFormLabels");
  })

  document.querySelector(".homePageMouseScroller").classList.remove("lightHomePageMouseScroller");
  document.querySelector(".homePageGlass").classList.remove("lightHomePageGlass");
  let formInputs = document.querySelectorAll("form input");
  formInputs.forEach(input => {
    input.classList.remove("lightFormInput");
  })
  document.querySelector("form textarea").classList.remove("lightFormInput");
  document.querySelector(".greetingAndName i").classList.remove("greetingAndNameArrow");
  document.querySelector(".lightThemeButton").classList.remove("lightThemeToggleButton");
  document.querySelector(".darkThemeButton").classList.remove("darkThemeToggleButton");
})

// Cursor Mouse Circle
let mouseCircle = document.querySelector(".mouseCircleEffect");
document.addEventListener('mousemove', (e) => {
  mouseCircle.style.top = `${e.clientY}px`;
  mouseCircle.style.left = `${e.clientX}px`;
})

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener('mouseover', (e) => {
    mouseCircle.style.width = "4rem";
    mouseCircle.style.opacity = ".5";
  })
})

buttons.forEach(button => {
  button.addEventListener('mouseout', (e) => {
    mouseCircle.style.width = ".8rem";
    mouseCircle.style.opacity = "1";
  })
  document.querySelector(".lightThemeButton").style.cursor = "pointer";
  document.querySelector(".darkThemeButton").style.cursor = "default";
})

hamburgerIcon.addEventListener('mouseover', (e) => {
  mouseCircle.style.opacity = "1";
  mouseCircle.style.width = "4rem";
  mouseCircle.style.backgroundColor = "transparent";
  mouseCircle.style.borderWidth = "1.5px";
  mouseCircle.style.borderColor = "#16A086";
  mouseCircle.style.borderStyle = "solid";
})

hamburgerIcon.addEventListener('mouseout', (e) => {
  mouseCircle.style.width = ".8rem";
  mouseCircle.style.opacity = "1";
  mouseCircle.style.backgroundColor = "#16A086";
  mouseCircle.style.borderWidth = "none";
})

let projectLinks = document.querySelectorAll(".projectLink");
projectLinks.forEach(link => {
  link.addEventListener('mouseover', (e) => {
    mouseCircle.style.width = "4.5rem";
    mouseCircle.style.opacity = ".5";
  })

  link.addEventListener('mouseout', (e) => {
    mouseCircle.style.width = ".8rem";
    mouseCircle.style.opacity = "1";
  })
})

navbarMenuLinks.forEach(link => {
  link.addEventListener('mouseover', (e) => {
    mouseCircle.style.width = "4rem";
    mouseCircle.style.opacity = "1";
    mouseCircle.style.backgroundColor = "transparent";
    mouseCircle.style.borderWidth = "1.5px";
    mouseCircle.style.borderColor = "#16A086";
    mouseCircle.style.borderStyle = "solid";
  })

  link.addEventListener('mouseout', (e) => {
    mouseCircle.style.width = ".8rem";
    mouseCircle.style.opacity = "1";
    mouseCircle.style.backgroundColor = "#16A086";
    mouseCircle.style.borderWidth = "none";
  })
})

document.querySelector(".darkThemeButton").addEventListener('mouseover', () => {
  mouseCircle.style.width = "3.5rem";
  mouseCircle.style.opacity = "1";
  mouseCircle.style.backgroundColor = "transparent";
  mouseCircle.style.borderWidth = "1.5px";
  mouseCircle.style.borderColor = "#16A086";
  mouseCircle.style.borderStyle = "solid";
})

document.querySelector(".darkThemeButton").addEventListener('mouseout', () => {
  mouseCircle.style.width = ".8rem";
  mouseCircle.style.opacity = "1";
  mouseCircle.style.backgroundColor = "#16A086";
  mouseCircle.style.borderWidth = "none";
})


document.querySelector(".lightThemeButton").addEventListener('mouseover', () => {
  mouseCircle.style.width = "3.5rem";
  mouseCircle.style.opacity = "1";
  mouseCircle.style.backgroundColor = "transparent";
  mouseCircle.style.borderWidth = "1.5px";
  mouseCircle.style.borderColor = "#16A086";
  mouseCircle.style.borderStyle = "solid";
})

document.querySelector(".lightThemeButton").addEventListener('mouseout', () => {
  mouseCircle.style.width = ".8rem";
  mouseCircle.style.opacity = "1";
  mouseCircle.style.backgroundColor = "#16A086";
  mouseCircle.style.borderWidth = "none";
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});