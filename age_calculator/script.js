document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
});
