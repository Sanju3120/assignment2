const serviceForm = document.getElementById('serviceForm');
const appointmentsList = document.getElementById('appointmentsList');

function addAppointment(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const carModel = document.getElementById('carModel').value;
  const serviceType = document.getElementById('serviceType').value;
  const serviceDate = document.getElementById('serviceDate').value;
  const serviceTime = document.getElementById('serviceTime').value; 
  
  const listItem = document.createElement('li');
  listItem.textContent = `${userName} has booked a ${serviceType} for a ${carModel} on ${serviceDate} at ${serviceTime}.`;


  appointmentsList.appendChild(listItem);


  serviceForm.reset();
}

// Add event listener to form
serviceForm.addEventListener('submit', addAppointment);
