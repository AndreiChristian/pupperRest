document.addEventListener("alpine:init", () =>
  Alpine.store("request", {
    url: "https://expressjs-postgres-production-f8f8.up.railway.app/api/filter/?",
    selection: {
      size: "",
      use: "",
      purpose: "",
      coat_type: "",
      origin: "",
      life_expectancy: "",
      working_group: "",
      exercise_needs: "",
      trainability: "",
    },
    resetSelectedItem: (key, object) => {
      object[key] = "";
    },
    urlBuilder: (url, selection) => {
      console.log(selection);
      let copy = url.slice();

      const keys = Object.keys(selection);
      for (const key of keys) {
        if (selection[key]) {
          copy = copy + `${key}=${selection[key]}&`;
        }
      }

      copy = copy.slice(0, -1);

      return copy;
    },
    options: {
      size: ["Small", "Large", "Medium", "Varies (Standard, Miniature, Toy)"],
      use: [
        "Terrier",
        "Toy",
        "Non-Sporting",
        "Sporting",
        "Hound",
        "Working",
        "Herding",
      ],
      purpose: [
        "Companion/Hunting",
        "Companion",
        "Flushing",
        "Draft work",
        "Guarding",
        "Flushing/Retrieving",
        "Pointing",
        "Sled dog",
        "Carriage dog",
        "Water work",
        "Companion/Circus",
        "Racing",
        "Companion/Working",
        "Hunting",
        "Retrieving",
        "Gun dog",
        "Rescue",
        "Herding",
        "Water rescue",
        "Scent hound",
        "Hunting/Water retrieving",
      ],
      coat_type: [
        "Corded",
        "Wire-haired",
        "Medium to long-haired",
        "Long-haired",
        "Short-haired or long-haired",
        "Medium-haired",
        "Curly or corded",
        "Hairless or powder puff",
        "Low-shedding",
        "Curly-haired",
        "Wiry-haired",
        "Soft, wavy-haired",
        "Short-haired",
        "Curly or wavy-haired",
        "Hairless or coated",
        "Wavy or curly-haired",
      ],
      temperament: [
        "Responsive",
        "Curious",
        "Independent",
        "Even-tempered",
        "Adaptable",
        "Smart",
        "Bold",
        "Active",
        "Brave",
        "Loyal",
        "Calm",
        "Friendly",
        "Spirited",
        "Self-assured",
        "Charming",
        "Confident",
        "Strong-willed",
        "Highly intelligent",
        "Playful",
        "Cheerful",
        "Assertive",
        "Opinionated",
        "Gentle",
        "Clever",
        "Protective",
        "Energetic",
        "Aloof",
        "Alert",
        "Outgoing",
        "Docile",
        "Courageous",
        "Fearless",
        "Devoted",
        "Intelligent",
      ],
      origin: [
        "Switzerland",
        "Zimbabwe",
        "Italy",
        "Hungary",
        "China",
        "Russia",
        "Sweden",
        "Norway",
        "Scotland",
        "United Kingdom",
        "Netherlands",
        "Central Africa",
        "Australia",
        "Ireland",
        "Germany",
        "Canada",
        "Portugal",
        "Finland",
        "Malta",
        "Wales",
        "Spain",
        "Cuba",
        "Croatia",
        "Egypt",
        "Afghanistan",
        "Morocco",
        "Belgium",
        "Ancient Egypt",
        "France",
        "Mexico",
        "Tibet",
        "Poland",
        "Iceland",
        "Japan",
        "United States",
      ],
      working_group: [
        "Terrier",
        "Toy",
        "Non-Sporting",
        "Sporting",
        "Hound",
        "Working",
        "Herding",
      ],
      life_expectancy: [
        "10-16 years",
        "9-11 years",
        "9-15 years",
        "11-14 years",
        "10-14 years",
        "12-20 years",
        "10-13 years",
        "8-9 years",
        "10-12 years",
        "8-10 years",
        "14-16 years",
        "11-13 years",
        "5-8 years",
        "15-18 years",
        "10-18 years",
        "7-10 years",
        "13-14 years",
        "9-13 years",
        "12-16 years",
        "8-11 years",
        "13-16 years",
        "6-10 years",
        "11-15 years",
        "14-15 years",
        "9-12 years",
        "12-14 years",
        "10-15 years",
        "15-17 years",
        "13-15 years",
        "12-15 years",
        "6-8 years",
      ],
      exercise_needs: ["Low", "Moderate", "High"],
      trainability: [
        "Low",
        "Highly trainable",
        "Moderately trainable",
        "Independent",
      ],
    },
  })
);
