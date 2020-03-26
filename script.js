//var mykey = config.MY_KEY;

function fetchData() {
   fetch("https://covid-193.p.rapidapi.com/statistics?country=philippines",{
    "method":"GET",
    "headers" : {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key":MY_KEY
    }
  }
  ).then(response => {
    return response.json()
  }).then(data => {
    // console.log(data.response);
    const html = data.response.map(user =>{
      return `
      <div class="container ">
      <h1 class="text-center">${user.country}</h1>
      <p class="text-center">As of ${user.day} </p>

      <div class="container">
        <div class="row">
      <div class="col-sm bg-warning text-dark">
        <h2 class="text-center">New Cases</h2>
        <h3 class="text-center">${user.cases.new}</h3>
      </div>
      <div class="col-sm bg-danger">
        <h2 class="text-center">Total Cases</h2>
        <h3 class="text-center">${user.cases.total}</h3>
      </div>
      <div class="col-sm bg-success">
        <h2 class="text-center">Total Recovered</h2>
        <h3 class="text-center">${user.cases.recovered}</h3>
      </div>
  </div>
</div>
<br>
<div class="container">
  <div class="row">
    <div class="col-sm bg-secondary">
    <h2 class="text-center">New Deaths</h2>
    <h3 class="text-center">${user.deaths.new}</h3>
    </div>
    <div class="col-sm bg-danger">
    <h2 class="text-center">Total Deaths</h2>
    <h3 class="text-center">${user.deaths.total}</h3>
    </div>
   
  </div>
</div>


      `;
    }).join('')

    
    document.querySelector('#app').innerHTML = html
  }).catch(error =>{
    console.log(error);
    
  });
}

fetchData();
