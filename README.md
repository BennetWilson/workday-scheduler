# 05 Third-Party APIs: Work Day Scheduler

## Criteria

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Description HTML

This calendar uses Bootsrap and Moment.js linked at the top and bottom respectively.

I created one div called "container" to contain all of my hour blocks.

Each hour block is a div labeled according to each hour of the workday (9am-5pm).

Below that is a div that displays what hour the section is for to the right of the text area.

Each hour has a text area where the user can input their hourly tasks and a save button.


## Description CSS

For this assignment, we were given a complete CSS stlyesheet.

## Description JS

At the top of the JS I started by useing moment() to display the date and time at the top of my page.

I then created a function that stores what the user inputs into the text area when they click the save button.

I then created a timeTracker function that tracks the time and changes the color of the time blocks in the HTML with CSS styling that was given to us.

I accomplished this by creating a variable called blockTime and timeNow. timeNow is set to the current time in hours. blockTime changes the time-block HTML element's styling.

I created an if, else if , else statement using jquery.

If blockTime is less than timeNow (what time it currently is), it will change the HTML class to past, and use the styling from the #past in the given CSS - it will also remove the other two classes (present and future). I did this for past, present and future.

I then had to get the items from local storage so that the text area would populate on refresh. I had to do this for all 9 hour blocks.

The last line is calling the function timeTracker that I defined above. I missed this part and it wasted almost two hours of my time. always make sure to call your functions before flipping out and rewriting code 100 times.

## Links

## Images