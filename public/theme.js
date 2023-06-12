document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    on: JSON.parse(localStorage.getItem("isDark")) || false,

    toggle() {
      this.on = !this.on;
      localStorage.setItem("isDark", this.on);
    },
  });
});
