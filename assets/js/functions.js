function clicked(id) {
  let itens = window.document.getElementsByClassName("opt");

  for (let x = 0; x < itens.length; x++) {
    if (itens[x].id != id) {
      itens[x].style.display = "none";
    } else {
      itens[x].style.display = "block";
    }
  }
}
function ChangeLang(language) {
  const btnHome = document.getElementById("btn-home");
  const btnAbout = document.getElementById("btn-about");
  const btnSkills = document.getElementById("btn-skills");
  const btnProjects = document.getElementById("btn-projects");
  const btnContact = document.getElementById("btn-contact");

  const subtitle = document.getElementById("subtitle");
  const download = document.getElementById("download");
  const about = document.getElementById("about-title");
  const skills = document.getElementById("skills-title");
  const project = document.getElementById("projects-title");

  const info = document.getElementById("myInfo");
  const placeholder = document.getElementById("placeholder");

  const html = document.getElementById("html");
  const css = document.getElementById("css");
  const sass = document.getElementById("sass");
  const javascript = document.getElementById("javascript");
  const react = document.getElementById("react");
  const bootstrap = document.getElementById("bootstrap");
  const git = document.getElementById("git");

  const repo = document.getElementById("repositorios");
  const email = document.getElementById("email");

  if (language === "English") {
    btnHome.innerHTML = "Home";
    btnAbout.innerHTML = "About me";
    btnSkills.innerHTML = "Skills";
    btnProjects.innerHTML = "Projects";
    btnContact.innerHTML = "Contact";

    subtitle.innerHTML = "Frontend Developer, illustrator and graphic Designer";
    download.innerHTML = "curriculum";
    about.innerHTML = "About me";
    skills.innerHTML = "Skills";
    project.innerHTML = "Projects";

    info.innerHTML =
      "My name is Lucas and I am passionate about technology. I started my programming journey in 2018, developing games on the Unity platform, in 2021 I started to get interested in Web Development and it was from that point onwards that I started to delve into the area, creating projects, taking courses and studying on my own. I currently have knowledge of technologies aimed at the Front-end, as well as mastering design skills using Photoshop.";
    placeholder.innerHTML = "Click in an item to show more";

    html.innerHTML =
      "HTML is the base component of the web. It allows the construction of websites and the insertion of new content, such as images and videos, through hypertexts.";
    css.innerHTML =
      "CSS helps you style, align, remove, and work in the space between elements of an HTML page.";
    sass.innerHTML =
      "SASS is a CSS extension language, Its idea is to add special features like variables, mixins, functions among others.";
    javascript.innerHTML =
      "JavaScript is a programming language created, in principle, to run in browsers and manipulate web page behaviors.";
    react.innerHTML =
      "React is a library created to build screens declaratively. Or create web applications: React creates web applications to be in browsers, whether they are for desktop, mobile or any other device.";
    bootstrap.innerHTML =
      "Bootstrap is a front-end framework that provides CSS frameworks for creating responsive websites and applications quickly and simply.";
    git.innerHTML =
      "GitHub is the world's largest shared data repository, with 28 million users today. It is a platform mostly used by developers as it allows convenient hosting of source code and files in the cloud.";
    repo.innerHTML = "Github repositories";
    email.innerHTML =
      "Email for contact: <a href='mailto:lucastheldl@gmail.com'>lucastheldl@gmail.com</a>";
  }
  if (language === "Pt-Br") {
    window.location.reload();
  }
}
