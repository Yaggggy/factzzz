const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Clear the facts list initially
factsList.innerHTML = "";

// Load facts from the API
loadFacts();

async function loadFacts() {
  try {
    const res = await fetch(
      "https://lorgfimscviwoguuolxj.supabase.co/rest/v1/facts",
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcmdmaW1zY3Zpd29ndXVvbHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0Mzg5NjgsImV4cCI6MjA0NTAxNDk2OH0.2jmB5ebnC9PhnDDfA33a6AU46nbWgcnfh9qMLJMamCc",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcmdmaW1zY3Zpd29ndXVvbHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0Mzg5NjgsImV4cCI6MjA0NTAxNDk2OH0.2jmB5ebnC9PhnDDfA33a6AU46nbWgcnfh9qMLJMamCc",
        },
      }
    );
    const data = await res.json();
    // const filterData = data.filter((fact) => fact.category === "society");

    createFactsList(data);
  } catch (err) {
    console.error("Failed to load facts:", err);
  }
}

// Create and render the facts list
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
      <li class="fact">
        <p>
          ${fact.text}
          <a class="source" href="${fact.source}" target="_blank" rel="noopener noreferrer">
            (source)
          </a>
        </p>
        <span class="tag" style="background-color: #3b82f6">${fact.category}</span>
      </li>`
  );
  // Join the HTML strings and set it as the innerHTML of factsList
  factsList.innerHTML = htmlArr.join("");
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
