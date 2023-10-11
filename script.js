const Home = document.getElementsByClassName("HomePage")[0];
const About = document.getElementsByClassName("AboutPage")[0];
const homeButton = document.getElementById("Home");
const aboutButton = document.getElementById("About");
About.style.visibility = "hidden";
Home.style.visibility = "visible";
aboutButton.onclick = function hideCheck() {
  About.style.visibility = "visible";
  Home.style.visibility = "hidden";
};
homeButton.onclick = function hideCheck() {
  About.style.visibility = "hidden";
  Home.style.visibility = "visible";
};
