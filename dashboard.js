document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.main-content');
    const bmiContent = document.querySelector('.bmi-content');
    const achievementContent = document.querySelector('.achievement-content');
    const calendarContent = document.querySelector('.calendar-content');
    const waterContent = document.querySelector('.water-content');

    const bmiButton = document.querySelector('.bmi');
    const achievementButton = document.querySelector('.achievement');
    const calendarButton = document.querySelector('.calendar');
    const chatButton = document.querySelector('.chat');
    const waterButton = document.querySelector('.water');
    
    const progressContainer = document.querySelector('.progress-container');
    const currentSelector = progressContainer.querySelector('.current-selectors');
    const currentSelectorImg = currentSelector.querySelector('img');
    const currentSelectorWrapper = currentSelector.querySelector('.icon-wrapper');

    
    const backButtons = document.querySelectorAll('.back-button-container');


    backButtons.forEach(backButton => {
        backButton.addEventListener('click', function() {
            mainContent.style.display = 'block';
            bmiContent.style.display = 'none';  
            achievementContent.style.display = 'none';
            calendarContent.style.display = 'none';
            waterContent.style.display = 'none';
            currentSelector.style.display = 'none';
            currentSelectorWrapper.style.display = 'none';
        });
    });

    bmiButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        bmiContent.style.display = 'block';
        currentSelectorImg.src = '../Assets/icons/bmi.svg';
        currentSelector.style.display = 'flex';
        currentSelectorWrapper.style.display = 'flex';
    });
    achievementButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        achievementContent.style.display = 'block';
        currentSelectorImg.src = '../Assets/icons/achievement.svg';
        currentSelector.style.display = 'flex';
        currentSelectorWrapper.style.display = 'flex';
    });
    
    calendarButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        calendarContent.style.display = 'block';
        currentSelectorImg.src = '../Assets/icons/calendar.svg';
        currentSelector.style.display = 'flex';
        currentSelectorWrapper.style.display = 'flex';
    });
    waterButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        waterContent.style.display = 'block';
        currentSelectorImg.src = '../Assets/icons/water.svg';
        currentSelector.style.display = 'flex';
        currentSelectorWrapper.style.display = 'flex';
    });

    
    // BMI Calculator
    const calculateBMIButton = document.getElementById('calculateBMI');
    
    
    calculateBMIButton.addEventListener('click', function() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
        
        if (weight && height) {
            const bmi = weight / (height * height);
            const bmiValue = document.getElementById('bmiValue');
            const bmiCategory = document.getElementById('bmiCategory');
            
            bmiValue.textContent = bmi.toFixed(1);
            
            
            if (bmi < 18.5) {
                bmiCategory.textContent = 'Underweight';
                bmiCategory.className = 'text-center text-warning';
            } else if (bmi < 25) {
                bmiCategory.textContent = 'Normal weight';
                bmiCategory.className = 'text-center text-success';
            } else if (bmi < 30) {
                bmiCategory.textContent = 'Overweight';
                bmiCategory.className = 'text-center text-warning';
            } else {
                bmiCategory.textContent = 'Obese';
                bmiCategory.className = 'text-center text-danger';
            }
        } else {
            alert('Please enter both weight and height');
        }
    });

    // WATER CONSUMPTION LOGIC
    const waterButtons = document.querySelectorAll('.water-add-btn');
    const waterProgressBar = document.getElementById('waterProgressBar');
    const waterGoalLabel = document.getElementById('waterGoalLabel');
    const waterCheckboxes = document.querySelectorAll('.water-schedule-row .form-check-input');

    // Set your daily goal in ounces (4.5 liters = ~152 oz)ds
    const WATER_GOAL_OZ = 152;
    let currentWaterOz = 0;

    function updateWaterProgress() {
        const percent = Math.min((currentWaterOz / WATER_GOAL_OZ) * 100, 100);
        waterProgressBar.style.width = percent + '%';
        // Optionally, update the label to show current intake
        waterGoalLabel.textContent = `${(currentWaterOz / 33.814).toFixed(2)} Liters / 4.5 Liters`;
    }

    waterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const oz = parseInt(this.getAttribute('data-oz'));
            currentWaterOz += oz;
            updateWaterProgress();
        });
    });

    // Allow toggling checkboxes (default browser behavior is enough, but you can add custom logic if needed)
    waterCheckboxes.forEach(cb => {
        cb.addEventListener('change', function() {
            // You can add logic here if you want to track which times are checked
        });
    });

    // If you want to show water-content when clicking the water button:
    waterButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        waterContent.style.display = 'block';
        currentSelectorImg.src = '../Assets/icons/water.svg';
        currentSelector.style.display = 'flex';
        currentSelectorWrapper.style.display = 'flex';
    });
});
