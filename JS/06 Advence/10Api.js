fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Data : ",data);
    var jock = data.value;
    console.log("JOCK : ",jock);
  })
  .catch();
