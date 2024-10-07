// Declare variables in a higher scope if needed
let Work, Play, Study, Exercise, Social, SelfCare;

fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    const activities = {};

    jsonData.forEach(activity => {
      activities[activity.title] = activity;
    });

    // Assign variables
    Work = activities['Work'];
    Play = activities['Play'];
    Study = activities['Study'];
    Exercise = activities['Exercise'];
    Social = activities['Social'];
    SelfCare = activities['Self Care'];

    // Now update the DOM
    const workCurrentHoursElement = document.querySelector('.work-card .current-hours');
    const workPreviousHoursElement = document.querySelector('.work-card .previous-hours');

    workCurrentHoursElement.textContent = `${Work.timeframes.daily.current}hrs`;
    workPreviousHoursElement.textContent = `Yesterday - ${Work.timeframes.daily.previous}hrs`;

    // Similarly update other elements
  })
  .catch(error => console.error('Error fetching data:', error));
