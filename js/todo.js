document.addEventListener("DOMContentLoaded", () => {
  const day = document.querySelectorAll(".daybox");
  const act = document.querySelectorAll(".activity");

  act.forEach(a => a.style.display = "none");

  day.forEach((dayBox, index) => {
    dayBox.addEventListener("click", () => {
      const isOpen = act[index].style.display === "inline";

      act.forEach(a => a.style.display = "none");

      if (!isOpen) {
        act[index].style.display = "inline";
        act[index].style.animation = "fade 0.4s ease";
      }
    });
  });
});
