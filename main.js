fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    // Your existing code inside the fetch
    const activities = {};

    jsonData.forEach(activity => {
      activities[activity.title] = activity;
    });

    // Assign variables inside the fetch
    const Work = activities['Work'];
    const Play = activities['Play'];
    const Study = activities['Study'];
    const Exercise = activities['Exercise'];
    const Social = activities['Social'];
    const SelfCare = activities['Self Care'];

    // Now update the DOM
    const workCurrentHoursElement = document.querySelector('.work-card .current-hours');
    const workPreviousHoursElement = document.querySelector('.work-card .previous-hours');

    const playCurrentHoursElement = document.querySelector('.play-card .current-hours');
    const playPreviousHoursElement = document.querySelector('.play-card .previous-hours');

    const studyCurrentHoursElement = document.querySelector('.study-card .current-hours');
    const studyPreviousHoursElement = document.querySelector('.study-card .previous-hours');

    const exerciseCurrentHoursElement = document.querySelector('.exercise-card .current-hours');
    const exercisePreviousHoursElement = document.querySelector('.exercise-card .previous-hours');

    const socialCurrentHoursElement = document.querySelector('.social-card .current-hours');
    const socialPreviousHoursElement = document.querySelector('.social-card .previous-hours');

    const selfcareCurrentHoursElement = document.querySelector('.selfcare-card .current-hours');
    const selfcarePreviousHoursElement = document.querySelector('.selfcare-card .previous-hours');

    // Function to update data based on the selected timeframe
    function updateData(timeframe) {
      let previousTimeframeLabel;
      if (timeframe === 'daily') {
        previousTimeframeLabel = 'Yesterday';
      } else if (timeframe === 'weekly') {
        previousTimeframeLabel = 'Last Week';
      } else if (timeframe === 'monthly') {
        previousTimeframeLabel = 'Last Month';
      }

      workCurrentHoursElement.textContent = `${Work.timeframes[timeframe].current}hrs`;
      workPreviousHoursElement.textContent = `${previousTimeframeLabel} - ${Work.timeframes[timeframe].previous}hrs`;

      playCurrentHoursElement.textContent = `${Play.timeframes[timeframe].current}hrs`;
      playPreviousHoursElement.textContent = `${previousTimeframeLabel} - ${Play.timeframes[timeframe].previous}hrs`;

      studyCurrentHoursElement.textContent = `${Study.timeframes[timeframe].current}hrs`;
      studyPreviousHoursElement.textContent = `${previousTimeframeLabel} - ${Study.timeframes[timeframe].previous}hrs`;

      exerciseCurrentHoursElement.textContent = `${Exercise.timeframes[timeframe].current}hrs`;
      exercisePreviousHoursElement.textContent = `${previousTimeframeLabel} - ${Exercise.timeframes[timeframe].previous}hrs`;

      socialCurrentHoursElement.textContent = `${Social.timeframes[timeframe].current}hrs`;
      socialPreviousHoursElement.textContent = `${previousTimeframeLabel} - ${Social.timeframes[timeframe].previous}hrs`;

      selfcareCurrentHoursElement.textContent = `${SelfCare.timeframes[timeframe].current}hrs`;
      selfcarePreviousHoursElement.textContent = `${previousTimeframeLabel} - ${SelfCare.timeframes[timeframe].previous}hrs`;
    }

    // Call updateData with 'daily' to set the default data
    updateData('daily');

    // Select the timeframe buttons
    const timeframeButtons = document.querySelectorAll('.header-switch');

    // Add click event listeners
    timeframeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const timeframe = button.dataset.timeframe;
        
        // Update the data displayed based on the selected timeframe
        updateData(timeframe);
        
        // Update active state
        timeframeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));
