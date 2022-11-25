<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $visitor = $_POST['fullname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = 'From: ' . $email . '\r\n';
    

    mail('dev.elabidadil@gmail.com', $subject, $message, $headers);
  }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- -------------------- Meta Tags -------------------- -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- -------------- Import Css Stylesheet -------------- -->
    <link rel="stylesheet" href="style/style.css">
    <!-- --------------- Import Fontawesome ---------------- -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- --------------- Import Google Fonts --------------- -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- --------------- Import Google Icons --------------- -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- ---------------------- Title ---------------------- -->
    <title>El Abid Adil Developer</title>
  </head>
  <body>
    <div class="mouseCircleEffect"></div>
    <!-- Navbar For Larg Screens -->
    <img src="assets/primary-color-logo.svg" class="lgScreenLogo">
    <div class="navbarMenu">
      <ul>
        <li><a href="#homePage">01.Home</a></li>
        <li><a href="#aboutMePage">02.About me</a></li>
        <li><a href="#skillsPage">03.Skills</a></li>
        <li><a href="#projectsPage">04.Projects</a></li>
        <li><a href="#contactPage">05.Contact me</a></li>
      </ul>
    </div>
    <!-- ----------------- Home Page Start ----------------- -->
    <div class="homePage" id="firstPage">
      <div class="container">
        <!-- Navbar For Small Screens -->
        <div class="smScreenNavbar">
          <img src="assets/primary-color-logo.svg" class="smScreenNavbarLogo" alt="The main logo, Two bcurly brackets with a forward slach in the middle">
          <div class="navbarHamburgerIcon">
            <span class="hamburgerIconTopBar"></span>
            <span class="hamburgerIconMiddleBar"></span>
            <span class="hamburgerIconBottomBar"></span>
          </div>
        </div>
        <!-- Home Page Content -->
        <div class="HomePageContent" id="homePage">
          <!-- Home Page Text -->
          <div class="textContainer">
            <div class="textContent">
              <p class="greetingAndName">hello, I'm <i class="fa-solid fa-arrow-turn-down"></i> <span>Adil El Abid</span></p>
              <p class="subtitle">selft-taught front end <b>developer</b></p>
              <!-- Buttons -->
              <div class="homePageButtons">
                <div class="themeToggle">
                  <span class="themeToggleButtonCover"></span>
                  <span class="material-symbols-outlined themeToggleButtonsIcons darkThemeButton">nightlight</span>
                  <span class="material-symbols-outlined themeToggleButtonsIcons lightThemeButton">light_mode</span>
                </div>
                <button class="contactButton"><a href="#contactPage">Contact me</a></button>
                <button class="projectsButton"><a href="#projectsPage">Projects</a></button>
              </div>
            </div>
          </div>
          <!-- Home Page Image -->
          <div class="homePageImageContainer">
            <div class="homePageGlass"></div>
            <div class="homePageImageTiltContainer" data-tilt data-tilt-max="12" data-tilt-full-page-listening>
              <img src="assets/dark-main-section-logo.svg" alt="" class="darkHomePageImage">
              <img src="assets/light-main-section-logo.svg" alt="" class="lightHomePageImage">
            </div>
          </div>
        </div>
        <!-- Mouse Scrolling Animation -->
        <a href="#aboutMePage">
          <span class="homePageMouse">
            <span class="homePageMouseScroller"></span>
          </span>
        </a>
      </div>
    </div>
    <!-- ------------------ Home Page End ------------------ -->
    <!-- --------------- About Me Page Start --------------- -->
    <div class="aboutMePage" id="aboutMePage">
      <div class="container">
        <div class="pageTitle">
          <h2>About me</h2>
          <span>About</span>
        </div>
        <div class="aboutMePageContent">
          <img src="assets/logo-stamp.svg" class="aboutMePageStampLogo" alt="">
          <div class="aboutMePageProfileImageContainer">
            <img src="assets/profile-picture-2.png" class="aboutMePageProfileImage" alt="">
          </div>
          <div class="pageTextContainer">
            <p class="pageTextContent">
              I'm a Self-taught <span>Front end Developer</span> based in Morocco. I have 1 year of experience in web design <span>"Building & Customization"</span>, Fast learner, hard worker and team player who is proficient in an array of scripting languages. I enjoy turning complex problems into simple, beautiful and intuitive designs. and <span>I prefer to keep learning</span>, continue challenging myself, and do interesting things that matter.
            </p>
            <div class="aboutMePageButtonsContainer">
              <button class="linkedinButton"><a href="https://www.linkedin.com/in/elabidadil/" target="_blank">Linkedin</a></button>
              <button class="githubButton"><a href="https://www.github.com/elabidadil" target="_blank">Github</a></button>
              <button class="codepenButton"><a href="https://www.codepen.io/eaelax" target="_blank">Codepen</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------- About Me Page End ---------------- -->
    <!-- ---------------- Skills Page Start ---------------- -->
    <div class="skillsPage" id="skillsPage">
      <div class="container">
        <div class="pageTitle">
          <h2>Skills</h2>
          <span>Skills</span>
        </div>
        <p class="pageTextContent">
          The main area of my expertise is <span>front-end development</span>.
          I create <span>responsive websites</span> that are fast, easy to use, and built with best practices.
        </p>
        <div class="skillsContainer">
          <div class="theSkill">
            <h3>Languages</h3>
            <div class="skillsList">
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
            </div>
          </div>
          <div class="theSkill">
            <h3>Preprocessors</h3>
            <div class="skillsList">
              <span>Sass</span>
              <span style="color: transparent !important">Stylus</span>
              <span style="color: transparent !important">Post Css</span>
            </div>
          </div>
          <div class="theSkill">
            <h3>Frameworks</h3>
            <div class="skillsList">
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span style="color: transparent !important">Materlize</span>
            </div>
          </div>
          <div class="theSkill">
            <h3>Other</h3>
            <div class="skillsList">
              <span>Git</span>
              <span>Github</span>
              <span style="color: transparent !important">Gitlab</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ----------------- Skills Page End ----------------- -->
    <!-- --------------- Projects Page Start --------------- -->
    <div class="projectsPage" id="projectsPage">
      <div class="container">
        <div class="pageTitle">
          <h2>Projects</h2>
          <span>Projects</span>
        </div>
        <div class="projectsList">
          <div class="theProject">
            <div class="projectImageContainer">
              <img src="assets/projectTemplate-1.png" alt="">
              <div class="projectLinks">
                <a href="https://elabidadil.github.io/dogs-food-template/" target="_blank" class="projectLink"><span class="material-symbols-outlined">desktop_windows</span></a>
                <a href="https://github.com/elabidadil/dogs-food-template" target="_blank" class="projectLink"><span class="material-symbols-outlined">data_object</span></a>
              </div>
            </div>
            <div class="projectTextContent">
              <span><i class="fa-solid fa-folder-open"></i>/Html/Css</span>
              <h4>Dog's Food Template</h4>
            </div>
          </div>
          <div class="theProject">
            <div class="projectImageContainer">
              <div class="projectLinks">
                <a  href="https://elabidadil.github.io/restaurant-template/" target="_blank" class="projectLink"><span class="material-symbols-outlined">desktop_windows</span></a>
                <a href="https://github.com/elabidadil/restaurant-template" target="_blank" class="projectLink"><span class="material-symbols-outlined">data_object</span></a>
              </div>
              <img src="assets/projectTemplate-2.png" alt="">
            </div>
            <div class="projectTextContent">
              <span><i class="fa-solid fa-folder-open"></i>/Html/Css/Sass</span>
              <h4>Restaurant Template</h4>
            </div>
          </div>
          <div class="theProject">
            <div class="projectImageContainer">
              <div class="projectLinks">
                <a href="https://elabidadil.github.io/local-store-template/" target="_blank" class="projectLink"><span class="material-symbols-outlined">desktop_windows</span></a>
                <a href="https://github.com/elabidadil/local-store-template" target="_blank" class="projectLink"><span class="material-symbols-outlined">data_object</span></a>
              </div>
              <img src="assets/projectTemplate-3.png" alt="">
            </div>
            <div class="projectTextContent">
              <span><i class="fa-solid fa-folder-open"></i>/Html/Bootstrap</span>
              <h4>Tech Store Template</h4>
            </div>
          </div>
          <div class="theProject">
            <div class="projectImageContainer">
              <div class="projectLinks">
                <a href=""><span class="material-symbols-outlined">desktop_windows</span></a>
                <a href=""><span class="material-symbols-outlined">data_object</span></a>
              </div>
              <img src="assets/projectTemplate-4.png" alt="">
            </div>
            <div class="projectTextContent">
              <span><i class="fa-solid fa-folder-open"></i>/Html/Tailwind</span>
              <h4>Project name</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------- Projects Page End ---------------- -->
    <!-- -------------- Contact Me Page Start -------------- -->
    <div class="contactMePage" id="contactPage">
      <div class="container">
        <div class="pageTitle">
          <h2>Contact</h2>
          <span>Contact</span>
        </div>
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
          <input type="text" name="fullname" id="fullname" placeholder=" " autocomplete="off">
          <label for="fullname">Name</label>
          <input type="email" name="email" id="email" placeholder=" " autocomplete="off">
          <label for="email">Email</label>
          <input type="text" name="subject" id="subject" placeholder=" " autocomplete="off">
          <label for="subject">Subject</label>
          <textarea id="message" placeholder=" " name="message" autocomplete="off"></textarea>
          <label for="message">Message</label>
          <button>Send</button>
        </form>
      </div>
    </div>
    <!-- --------------- Contact Me Page End --------------- -->
    <!-- ------------------ Footer Start ------------------- -->
    <footer>
      <div class="container">
        <p>Designed & Coded By ME <i class="fa-solid fa-heart"></i> 2022</p>
      </div>
    </footer>
    <!-- ------------------- Footer End -------------------- -->
    <script src="scripts/script.js"></script>
    <script src="scripts/vanilla-tilt.js"></script>
  </body>
</html>