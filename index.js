
var btn = document.querySelector("button");
var tabl = document.querySelector("table");

var firstname = document.querySelector("#firstname");
var lastname = document.querySelector("#lastname");
var pincode = document.querySelector("#pincode");
var address = document.querySelector("#address");
var state = document.querySelector("#state");
var country = document.querySelector("#country");

btn.addEventListener("click", post)

function post() {
    var inputfn = firstname.value;
    var inputln = lastname.value;
    var inputpin = pincode.value;
    var inputadd = address.value;
    var inputsta = state.value;
    var inputcou = country.value;


    var dyntable = `
    <tr>
    <td>${inputfn}</td>
    <td>${inputln}</td>
    <td>${inputpin}</td>
    <td>${inputadd}</td>
    <td>${inputsta}</td>
    <td>${inputcou}</td>
  </tr>
    `;
    tabl.innerHTML += dyntable;
}

