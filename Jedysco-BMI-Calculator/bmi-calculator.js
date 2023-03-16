function calculateBMI() {
    const height = +document.getElementById("height").value;
    const weight = +document.getElementById("weight").value;
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");
    const doctorElement = document.getElementById('doctor');
    
    //Validation: If no value then alert patient
    if (!height || !weight) {
       alert('Enter an input');
    } else {
       doctorReport(resultElement, doctorElement, bmi);
    }
}


//Give Patient Status Update of BMI
function doctorReport(resultElement, doctorElement, bmi) {
    let myReport =  bmi <= 18.5 ? 'Underweight'
                 :  bmi <= 24.9 ? 'Healthy Weight'
                 :  bmi <= 30.0 ? 'Over Weight'
                 :  bmi <= 31.0 ? 'Obesity'
                 :  'Too Obesed, go and see a doctor';
    resultElement.textContent = bmi.toFixed(2);
    doctorElement.textContent = myReport;
}
























