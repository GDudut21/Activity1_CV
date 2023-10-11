const Home = document.getElementsByClassName("HomePage")[0];
const About = document.getElementsByClassName("AboutPage")[0];
const Experience = document.getElementsByClassName("ExperiencePage")[0];
const Project = document.getElementsByClassName("ProjectPage")[0];
const Contacts = document.getElementsByClassName("ContactPage")[0];
const homeButton = document.getElementById("Home");
const aboutButton = document.getElementById("About");
const expButton = document.getElementById("Experience");
const projectButton = document.getElementById("Project");
const contactButton = document.getElementById("Contacts");
Home.style.visibility = "visible";
About.style.visibility = "hidden";
Experience.style.visibility = "hidden";
Project.style.visibility = "hidden";
Contacts.style.visibility = "hidden";

aboutButton.onclick = function about() {
  About.style.visibility = "visible";
  Home.style.visibility = "hidden";
  Experience.style.visibility = "hidden";
  Project.style.visibility = "hidden";
  Contacts.style.visibility = "hidden";
};
homeButton.onclick = function home() {
  Home.style.visibility = "visible";
  About.style.visibility = "hidden";
  Experience.style.visibility = "hidden";
  Project.style.visibility = "hidden";
  Contacts.style.visibility = "hidden";
};
expButton.onclick = function experience() {
  Experience.style.visibility = "visible";
  About.style.visibility = "hidden";
  Home.style.visibility = "hidden";
  Project.style.visibility = "hidden";
  Contacts.style.visibility = "hidden";
};
projectButton.onclick = function project() {
  Project.style.visibility = "visible";
  About.style.visibility = "hidden";
  Experience.style.visibility = "hidden";
  Home.style.visibility = "hidden";
  Contacts.style.visibility = "hidden";
};
contactButton.onclick = function contact() {
  Contacts.style.visibility = "visible";
  About.style.visibility = "hidden";
  Experience.style.visibility = "hidden";
  Home.style.visibility = "hidden";
  Project.style.visibility = "hidden";
};
