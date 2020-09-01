componentDidMount() {
  const script = document.createElement("script");
  script.src = "./loadMyCarousel.js";
  script.async = true;
  document.body.appendChild(script);
}