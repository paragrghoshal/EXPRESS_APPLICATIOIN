module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// module.exports = changeColor => {
//     var computedStyle = getComputedStyle(document.body);
//     var backgroundColor = computedStyle.backgroundColor;
//     // var change = document.getElementById("text-content")
//     // var sun = document.getElementById("sun");
//     // var moon = document.getElementById("moon");
  
//     if (backgroundColor === "rgb(20, 20, 20)") {
//       setTimeout(() => {
//         // change.textContent = "dark";
//         // sun.style.display = "none";
//         // moon.style.display = "flex";
//         document.body.style.color = "black";
//         document.body.style.backgroundColor = "rgb(255, 255, 255)";
//       }, 500);
//     }
  
//     if (backgroundColor === "rgb(255, 255, 255)") {
//       setTimeout(() => {
//         // change.textContent = "light";
//         // sun.style.display = "flex";
//         // moon.style.display = "none";
//         document.body.style.color = "white";
//         document.body.style.backgroundColor = "rgb(20, 20, 20)";
//       }, 500);
//     }
//   }