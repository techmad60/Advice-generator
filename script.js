// Function to fetch advice from the API
function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const adviceTextElement = document.getElementById('advice-text');
        const advice = `"${data.slip.advice}"`;
        adviceTextElement.textContent = advice;
  
        const adviceNumberElement = document.getElementById('advice-number');
        adviceNumberElement.textContent = '#' + data.slip.id;
      })
      .catch(error => console.error('Error fetching advice:', error));
  }
  
  // Event listener for the button click
  document.getElementById('generateButton').addEventListener('click', fetchAdvice);
  