import {creyente, creyentes} from "./API.js";

document.addEventListener("DOMContentLoaded",showCreyentes);
const creyente = document.querySelector('#creyente');


async function showCreyentes(){
  const info = await creyentes();
  console.log(info);
  info.forEach(element => {
    // aca puede destructurar//
    creyente.innerHTML += `
    <tr>
      <th></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    `
  });
}