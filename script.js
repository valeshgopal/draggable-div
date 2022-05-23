"use strict";
const wrapper = document.querySelector(".wrapper");
const icon = wrapper.querySelector(".icon");

function onDrag(e) {
  const getStyle = window.getComputedStyle(wrapper);
  const left = parseInt(getStyle.left);
  const top = parseInt(getStyle.top);
  console.log(left, top);
  wrapper.style.left = `${left + e.movementX}px`;
  wrapper.style.top = `${top + e.movementY}px`;
}

icon.addEventListener("mousedown", () => {
  icon.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
  icon.removeEventListener("mousemove", onDrag);
});
