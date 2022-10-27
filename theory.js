console.log("111 :>> ", 111);
fetch("https://cors-anywhere.herokuapp.com/http://web/api/index.php")
  .then((response) => {
    console.log("response :>> ", response);
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then((json) => console.log(json));

//https://cors-anywhere.herokuapp.com/corsdemo
