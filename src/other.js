export function sayHello() {
  console.log("Hello from other module!");
}

export function doSomething() {
  console.log("Doing something...");
}

// Add independent entry point
if (typeof window !== 'undefined') {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Other bundle loaded independently!");
    sayHello();
    doSomething();
  });
}
