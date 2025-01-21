document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    
    // Select form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Error feedback container
    const feedbackContainer = document.querySelector('.contact-intro');
    let feedbackMessage = document.querySelector('.form-feedback');
    
    // Add a feedback message container if it doesn't exist
    if (!feedbackMessage) {
      feedbackMessage = document.createElement('p');
      feedbackMessage.className = 'form-feedback';
      feedbackContainer.appendChild(feedbackMessage);
    }
  
    // Helper to display feedback messages
    function displayFeedback(message, color) {
      feedbackMessage.textContent = message;
      feedbackMessage.style.color = color;
      feedbackMessage.style.marginTop = '1rem';
      feedbackMessage.style.fontWeight = 'bold';
      feedbackMessage.style.textAlign = 'center';
    }
  
    // Validation checks
    if (!name || !email || !message) {
      displayFeedback('Please fill in all required fields (Name, Email, and Message).', '#dc3545'); // Red for error
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      displayFeedback('Please enter a valid email address.', '#dc3545'); // Red for error
      return;
    }
  
    if (phone && !/^\+?[\d\s\-().]{7,15}$/.test(phone)) {
      displayFeedback('Please enter a valid phone number or leave it blank.', '#dc3545'); // Red for error
      return;
    }
  
    // If all validations pass
    displayFeedback('Thank you for reaching out! Your message has been sent.', '#28a745'); // Green for success
  
    // Submit the form
    this.submit();
  });