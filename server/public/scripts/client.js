const { trace, get } = require("../../routes/koala.router");

console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios.get('/koalas').then((response) => {
    console.log(response);
    let koalasFromServer = response.data;
    console.log('koalas from server', koalasFromServer);
    let koalaDiv = document.querySelector('#viewKoalas');
    // clear out the table before starting to loop 
    koalaDiv.innerHTML = '';
    for(let koala of koalasFromServer) {
          // create a loop for koala transfer status
      let transferStatus = '';
      if (koala.transfer === 'yes' || koala.transfer === 'Yes') {
        transferStatus = 'Pending';
      }
      else if (koala.transfer === 'no' || koala.transfer === 'No') {
        transferStatus = `<button onClick="transferKoala(event)">Transfer ready</button>`
      };
      koalaDiv.innerHTML += `
      <tr>
      <td>${koalasFromServer.indexOf(koala)+1}</td>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.color}</td>
      <td>${transferStatus}</td>
      <td>${koala.notes}</td>
      <td><button onClick="deleteKoala(event)">Delete</button></td>
      </tr>`
    };
  }).catch((error) => {
    console.error(error);
  });
  // clear inputs
  document.querySelector('#nameIn').value = '';
  document.querySelector('#ageIn').value = '';
  document.querySelector('#colorIn').value = '';
  document.querySelector('#readyForTransferIn').value = '';
  document.querySelector('#notesIn').value = '';
} // end getKoalas

// function for changing transfer status
function transferKoala(event) {
  console.log('in transfer koala');
  event.preventDefault();
  // this changes it only on the DOM.
  event.target.parentElement.innerHTML = `<td>Pending</td>`;
  // event.target.parentElement.parentElement
  // getKoalas();
}


function saveKoala(event){
  console.log( 'in saveKoala' );
  // axios call to server to post koalas
  event.preventDefault();
  let koalaName = document.querySelector('#nameIn').value;
  let koalaAge = document.querySelector('#ageIn').value;
  let koalaColor = document.querySelector('#colorIn').value;
  let koalaTransfer = document.querySelector('#readyForTransferIn').value;
  let koalaNotes = document.querySelector('#notesIn').value;
  let koala = {
    name: koalaName,
    age: koalaAge,
    color: koalaColor,
    transfer: koalaTransfer,
    notes: koalaNotes,
  }
  axios.post('/koalas', koala).then((response => {
    console.log(response);
    // function that will display all koalas in the table
    getKoalas();
  })).catch((error) => {
    console.error(error);
  });
}

deleteKoala(event)
