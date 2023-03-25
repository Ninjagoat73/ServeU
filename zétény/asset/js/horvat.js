
    // initialize the map
    var mymap = L.map('mapid').setView([47.496621, 19.076606], 13);

    // add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // add a marker for the company location
    var marker = L.marker([47.496621, 19.076606]).addTo(mymap);
    marker.bindPopup("<b>Horváth kft</b><br>1117 Budapest, Gárdonyi tér 1.").openPopup();

    // get the appointment booking button
    var bookAppointmentBtn = document.getElementById("book-appointment-btn");

    // get the appointment booking window
    var appointmentWindow = document.getElementById("demo-booking-multiple");

    // initialize the appointment booking window with the specified options
    mobiscroll.datepicker('#demo-booking-multiple', {
        controls: ['calendar', 'timegrid'],
        min: '2023-03-25T00:00',
        max: '2023-09-25T00:00',
        minTime: '08:00',
        maxTime: '19:59',
        stepMinute: 90,
        display: 'inline',
        // example for today's labels and invalids
        labels: [{
            start: '2023-03-26',
            textColor: '#e1528f',
            title: '1 SPOTS'
        }],
        invalid: [{
            start: '2023-03-25T08:00',
            end: '2023-03-25T13:00'
        }, {
            start: '2023-03-25T15:00',
            end: '2023-03-25T17:00'
        }, {
            start: '2023-03-25T19:00',
            end: '2023-03-25T20:00'
        }]
    });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("book-appointment-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the "Done" button element
var doneBtn = document.getElementById("done-btn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log("DONE")
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on the "Done" button, close the modal
doneBtn.onclick = function() {
  console.log("CLICK")
  alert("Booking successful!")
}