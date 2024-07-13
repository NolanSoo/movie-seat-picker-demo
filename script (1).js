// Create the modal once outside the function
let reservationModal;
let reservationModal2;

function createModal(ID) {
    reservationModal = document.createElement("div");
    reservationModal.setAttribute("class", "modal");
    reservationModal.style.display = "none"; // Hide it initially
    const element = document.getElementById(ID);

    const modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");
    modalContent.textContent = "Seat " + ID + " ";

    const reserveButton = document.createElement("button");
    reserveButton.textContent = "Reserve Seat " + ID + " ";
    reserveButton.setAttribute("class", "reserve");
    reserveButton.addEventListener("click", function() {
      element.classList.remove("box");
      element.classList.add("box2");
      reservationModal.style.display = "none";
    });
    modalContent.appendChild(reserveButton);

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("class", "Cancel");
    cancelButton.addEventListener("click", function() {
      reservationModal.style.display = "none"; // Hide the modal
    });
    modalContent.appendChild(cancelButton);

    reservationModal.appendChild(modalContent);
    document.body.appendChild(reservationModal); // Append to the body
  }

function createModal2(ID) {

    reservationModal2 = document.createElement("div");
    reservationModal2.setAttribute("class", "modal");
    reservationModal2.style.display = "none"; // Hide it initially

    const modalContent2 = document.createElement("div");
    modalContent2.setAttribute("class", "modal-content");
    modalContent2.textContent = "Seat " + ID + " (Booked) ";

    const cancelButton2 = document.createElement("button");
    cancelButton2.textContent = "Cancel";
    cancelButton2.setAttribute("class", "Cancel");
    cancelButton2.addEventListener("click", function() {
      reservationModal2.style.display = "none"; // Hide the modal
    });
    modalContent2.appendChild(cancelButton2);

    reservationModal2.appendChild(modalContent2);
    document.body.appendChild(reservationModal2); // Append to the body
  }


function myBoxClick(ID) {
  createModal(ID); // Create the modal if it doesn't exist
  createModal2(ID);
  const element = document.getElementById(ID);
  if (element.classList.contains("box")) {
    // Update the modal content (if needed)
    // ...
    reservationModal.style.display = "block"; // Show the modal
  }
  else {
    reservationModal2.style.display = "block"; // Show the modal
  }
}

