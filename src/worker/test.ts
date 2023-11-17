self.addEventListener("message", (e) => {
  setTimeout(() => {
    console.log("Hello from worker", e.data);
    self.postMessage({ result: e.data });
  }, 3000);
});

export default {};
