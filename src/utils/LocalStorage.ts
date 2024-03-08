export function getState() {
  return JSON.parse(localStorage.getItem("state") || "[]");
}

export function saveState(state: object) {
  localStorage.setItem("state", JSON.stringify(state));
}
