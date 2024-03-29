// this was throwing an error so i commented it out
// const { trace, get } = require("../../routes/koala.router");

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
      if (koala.transfer == true) {
        transferStatus = 'Pending transfer';
      }
      else if (koala.transfer == false) {
        transferStatus = `<button onClick="transferKoala(${koala.id})">Transfer ready</button>`
      };
      koalaDiv.innerHTML += `
      <tr>
      <td>${koala.id}</td>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.color}</td>
      <td>${transferStatus}</td>
      <td>${koala.notes}</td>
      <td><button onClick="deleteKoala(${koala.id})">Delete</button></td>
      </tr>`;
      console.log(transferStatus);
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
function transferKoala(koalaId) {
  console.log('in transfer koala');
  axios.put(`/koalas/transfer/${koalaId}`).then((response) => {
    getKoalas();
  }).catch((error) => {
    console.log('Error in PUT', error);
    alert(`Something went wrong updating this koala's status`);
  });
}


function saveKoala(event){
  console.log( 'in saveKoala' );
  // axios call to server to post koalas
  event.preventDefault();
  let koalaName = document.querySelector('#nameIn').value;
  let koalaAge = document.querySelector('#ageIn').value;
  let koalaColor = document.querySelector('#colorIn').value;
  let koalaTransfer = document.querySelector('#readyForTransferIn').checked;
  let koalaNotes = document.querySelector('#notesIn').value;
  let koala = {
    name: koalaName,
    age: koalaAge,
    color: koalaColor,
    transfer: koalaTransfer,
    notes: koalaNotes,
  }
  Swal.fire({
    text: `${koala.name} has been added to the database.`,
  });
  axios.post('/koalas', koala).then((response => {
    console.log(response);
    // function that will display all koalas in the table
    getKoalas();
  })).catch((error) => {
    console.error(error);
  });
}

function deleteKoala(koalaId) {
    Swal.fire({
      title: `Are you sure you want to delete this koala's information?`,
      text: "You won't be able to recover this information!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#496b9d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `This koala's file has been deleted.`,
          icon: "success"
        });
        axios.delete(`/koalas/${koalaId}`).then((response) => {
          getKoalas();
          }).catch((error) => {
            console.log('Error in DELETE', error);
            alert(`Something went wrong removing this koala's information`);
          });
      }
    });
}
