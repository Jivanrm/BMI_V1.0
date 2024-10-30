// Function to calculate BMI based on user input
function calculateBMI() {
    // Retrieve weight and height values from the input fields
    const weightInLbs = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);

    // Validate weight input
    if (isNaN(weightInLbs) || weightInLbs <= 0) {
        displayResult("Please enter a valid weight in lbs.", "");
        return; // Exit the function if the weight is invalid
    }
    
    // Validate height input
    if (isNaN(feet) || feet < 0 || isNaN(inches) || inches < 0 || inches >= 12) {
        displayResult("Please enter a valid height in feet and inches.", "");
        return; // Exit the function if the height is invalid
    }

    // Convert weight to kilograms and height to meters
    const weightInKg = weightInLbs * 0.453592;
    const heightInMeters = ((feet * 12) + inches) * 0.0254;

    // Calculate BMI and round to two decimal places
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the calculated BMI and category
    displayResult(`Your BMI is ${bmi} (${category})`, category);
}

// Function to reset input fields and results
function resetFields() {
    // Clear the input fields
    document.getElementById('weight').value = '';
    document.getElementById('feet').value = '';
    document.getElementById('inches').value = '';
    
    // Reset the displayed result
    displayResult('', '');
}

// Function to display the result message and relevant tips
function displayResult(message, category) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = message; // Display the result message

    const tipsDiv = document.getElementById('bmi-tips');
    
    // Provide health tips based on the BMI category
    if (category) {
        const tips = {
            'Underweight': "Consider consulting a healthcare provider for a balanced diet.",
            'Normal weight': "Keep up the good work! Maintain a healthy lifestyle.",
            'Overweight': "Consider a balanced diet and regular exercise.",
            'Obesity': "Consult a healthcare provider for personalized advice."
        };
        
        // Display the relevant tip
        tipsDiv.innerText = tips[category] || '';
    } else {
        tipsDiv.innerText = ''; // Clear tips if no category is provided
    }
}
