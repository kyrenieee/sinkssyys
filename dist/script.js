function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Function to close a specific modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Attach click event to buttons to open respective modals
  var buttons = document.querySelectorAll("button[data-modal]");
  buttons.forEach(function(button) {
    button.onclick = function() {
      var modalId = this.getAttribute("data-modal");
      openModal(modalId);
    };
  });
  
  // Attach click event to close buttons
  var spans = document.querySelectorAll(".close");
  spans.forEach(function(span) {
    span.onclick = function() {
      var modalId = this.getAttribute("data-modal");
      closeModal(modalId);
    };
  });
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target.id);
    }
  };