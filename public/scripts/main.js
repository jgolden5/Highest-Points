const states = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado",
  "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho",
  "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana",
  "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi"
];

function loadNavbar(currentState) {
  const nav = document.createElement("nav");
  states.forEach((state, i) => {
    const link = document.createElement("a");
    link.textContent = " " + state.charAt(0).toUpperCase() + state.slice(1) + " ";
    if (state === currentState) {
      if (state === "kentucky") {
        link.style.color = "white";
      } else {
        link.style.color = "black";
      }
    } else {
      link.style.color = "green";
      link.href = `${state}.html`;
    }
    nav.appendChild(link);
    if (i < states.length - 1) {
      const dot = document.createElement("span");
      dot.className = "small-circle";
      if (currentState === "kentucky") {
        dot.style.backgroundColor = "white";
      }
      nav.appendChild(dot);
    }
  });
  document.body.prepend(nav);
}

function googleMap(place) {
  window.open(`https://www.google.com/maps/place/${encodeURIComponent(place)}`);
}

function addPageNavHandlers(leftPage, rightPage) {
  document.querySelector(".arrow-left")?.addEventListener("click", () => {
    if (leftPage) window.location.href = leftPage;
  });
  document.querySelector(".arrow-right")?.addEventListener("click", () => {
    if (rightPage) window.location.href = rightPage;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "h") {
      if (leftPage) window.location.href = leftPage;
    } else if (event.key === "ArrowRight" || event.key === "l") {
      if (rightPage) window.location.href = rightPage;
    }
  });
}
