import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { checkDay } from './date-calculator.js';
export let inputDate;

$(document).ready(function() {
  $("form#date-input-form").submit(function(event) {
    event.preventDefault();
    inputDate = parseInt($("input#date").val());

    $("ul#output").html("This is " + checkday);
    console.log(checkday);
  });
});