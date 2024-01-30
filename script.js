document.addEventListener("DOMContentLoaded", function () {
  typeText("Hello There!...", "typed-text", function () {
    setTimeout(function () {
      hideText("typed-text", function () {
        typeText("My Name Is Y.Shantan", "typed-text", function () {
          typeSubText(
            [
              "I am a Computer Science student",
              "I am a Programmer",
              "I am a Frontend Developer",
            ],
            "typed-subtext",
            function () {
              setTimeout(function () {
                hideText("typed-text", function () {
                  hideText("typed-subtext", function () {
                    typeText("Shantan's Portfolio", "typed-text", function () {
                      showButtons(); // Show buttons after typing is complete
                    });
                  });
                });
              }, 1000);
            }
          );
        });
      });
    }, 1000);
  });

  function typeText(text, elementId, callback) {
    let i = 0;
    const speed = 100;

    function type() {
      if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        if (callback) {
          callback();
        }
      }
    }

    setTimeout(type, 0);
  }

  function hideText(elementId, callback) {
    document.getElementById(elementId).style.opacity = 0;
    setTimeout(function () {
      document.getElementById(elementId).innerHTML = "";
      document.getElementById(elementId).style.opacity = 1;
      if (callback) {
        callback();
      }
    }, 500);
  }

  function typeSubText(subTextArray, elementId, callback) {
    let index = 0;
    let i = 0;
    const speed = 100;

    function innerType() {
      if (i < subTextArray[index].length) {
        document.getElementById(elementId).innerHTML +=
          subTextArray[index].charAt(i);
        i++;
        setTimeout(innerType, speed);
      } else {
        index++;
        i = 0;
        setTimeout(type, 500);
      }
    }

    function type() {
      if (index < subTextArray.length) {
        document.getElementById(elementId).innerHTML = "";
        innerType();
      } else {
        if (callback) {
          callback();
        }
      }
    }

    setTimeout(type, 0);
  }

  function showButtons() {
    const buttonContainer = document.createElement("div");

    // GitHub Button
    const githubButton = createButton(
      "GitHub",
      "https://github.com/shantan125"
    );
    buttonContainer.appendChild(githubButton);

    // Add space between buttons
    buttonContainer.appendChild(document.createTextNode("\u00A0\u00A0"));

    // LinkedIn Button
    const linkedinButton = createButton(
      "LinkedIn",
      "https://linkedin.com/in/shantan-yeddula-b9a435215"
    );
    buttonContainer.appendChild(linkedinButton);

    // Add space between buttons
    buttonContainer.appendChild(document.createTextNode("\u00A0\u00A0"));

    // Explore Button
    const exploreButton = createButton("Explore", "#about");
    buttonContainer.appendChild(exploreButton);

    document.getElementById("typed-text").appendChild(buttonContainer);
  }

  function createButton(text, href) {
    const button = document.createElement("a");
    button.href = href;
    button.className = "btn btn-primary mr-5"; // Adjusted margin to mr-5
    button.innerText = text;
    return button;
  }
});
