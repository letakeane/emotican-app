## Project Name & Pitch
*emotican*: Many children, due to autism, developmental delays, or trauma have difficulty both in recognizing facial expressions and in emoting.

Built with React, this 'game' utilizes Microsoft's Cognitive Services Emotion API and the device webcam to help children practice making and recognizing facial expressions.

## Project Status

This project is currently in development. Next steps are to create components and containers.

## Project Screen Shot(s)
The initial wireframe/comp:
[Initial wireframe/comp](http://imgur.com/a/Z8fSe)

The app in use:
* [Screenshot of app in use; starting the webcam](http://i.imgur.com/Fy6BWnm.png)
* [Screenshot of app in use; getting results](http://i.imgur.com/efQ4ijD.png)

An example of the Learn component information:
[Screenshot of the info about Happiness](http://i.imgur.com/lsKA9pJ.png)


## Installation and Setup Instructions

To use:
* Clone down the repo
* ```$ npm install```
* ```$ cd emotican-express/app/components```
* ```$ touch key.js```
* ```$ atom .```
* In the ```key.js``` file, add ```export const key = 'YOUR_API_KEY'``` which you can get from Microsoft Cognitive Services
*```$ npm start```
* Open your browser to ```localhost:3000```

## Reflection
*emotican* was a two-week-long school assignment, built in my third (of four) modules at Turing School of Software and Design.

I set out to build an app that would do tangible good in the world. When I found Cognitive Services' Emotion API, I immediately recalled conversations had with an old coworker who had once worked as a counselor for kids and families, and the "emotions charades" game she described, which helped her clients better learn to nonverbally communicate their emotions.

The biggest challenges I have run into was correctly formatting the data pulled from the user's mediastream (via the webRTC API) to be acceptable to the Emotion API, and testing with the webRTC API (so far, I haven't solved this second challenge).

####The stack:

* The app is built primarily with React and Router.
* It utilizes the WebRTC API to access the user's webcam
* It posts images to Microsoft's Cognitive Services Emotion API for analysis
* Also found: JSX, VanillaJS, CSS, Express, Webpack

I built this using Turing's 'express boilerplate', because although it doesn't utilize it now, a future iteration of *emotican* will need it. I am also a greener-than-novice with express; I hope to use future iterations of this project to understand it better.


####Future goals:

* The app is not currently very accessible; I hope to improve the webcam interface to audibly alert the user as to when their face is in the frame in order to make the app useful for the blind community.
* I hope to add a secondary version of the game which presents users with photographs of diverse individuals (varying in age, race, gender, and identifiers) modeling various facial expressions, in order to help users recognize and identify emotions in others.
* The app currently has Express but is not utilizing it. I hope to build out a backend so users can be stored and progress can be tracked (i.e. the user can see their growth over time, and see patterns in their abilities).

## Resources
  - [Microsoft Cognitive Services Emotion API](https://azure.microsoft.com/en-us/services/cognitive-services/emotion/)
  - Many thanks also to MDN, StackOverflow, my instructors, and the whole of the 1701-FE cohort for cheering me on, debugging issues, and loaning me their faces throughout the build of *emotican* v1 <3
