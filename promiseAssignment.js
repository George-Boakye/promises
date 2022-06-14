let loadPage = () => {
  const div = document.getElementById("canvas");
  const img = document.createElement("img");
  img.src = "/giphy.gif";
  div.appendChild(img);
};


let sillySignin = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    for (let index = 0; index < 10000000000; index++) {}
    if (success) {
      resolve("SIGNED IN");
    } else {
      reject("Can't sign in");
    }
  }, 4000);
});

sillySignin
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

loadPage();
