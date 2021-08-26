## Project Name & Pitch
### *emotican*:
Many children, due to autism, developmental delays, or trauma have difficulty nonverbally communicating their emotions through facial expressions.

A common practice in behavioral therapy is to build up muscle memory by playing "emotion charades" - the child is given an emotion to perform, and is also tasked with guessing what emotion another person is expressing.

Built with React, this 'game' utilizes Microsoft's Cognitive Services Emotion API and the device webcam to help children practice making (and, in a future iteration, recognizing/identifying) facial expressions. A planned future version will also help them recognize and identify facial expressions in others.

## Project Status

<!-- This project is currently in development. Next steps are to create components and containers.
 -->
 This project is currently in an icebox and no further development is planned. The Azure facial emotion API this app is built on is no longer supported by Microsoft.
 
## Project Screen Shot(s)
The initial wireframe/comp:
![Initial wireframe/comp](http://i.imgur.com/kXKRfGa.png)

The app (v1) in use:
![Screenshot of app in use](http://g.recordit.co/vi6ae7XXwN.gif)

An example of the Learn component information (v1):
![Screenshot of the info about Happiness](http://i.imgur.com/lsKA9pJ.png)

Probably my favorite moment from v0.5 usability tests:
![Screenshot of Dave using app](http://g.recordit.co/HP82wO4TRb.gif)


## Installation and Setup Instructions

To use:
* Clone down the repo
* ```$ npm install```
* ```$ cd emotican-express/app/components```
* ```$ touch key.js```
* ```$ atom .```
* In the ```key.js``` file,
    * add ```export const key = 'YOUR_API_KEY'``` which you can get from Microsoft Cognitive Services
* ```$ npm start```
* Open your browser to ```localhost:3000```

## Reflection
*emotican* was a two-week-long school assignment, built in my third (of four) module at Turing School of Software and Design.

I set out to build an app that would do tangible good in the world. When I found Cognitive Services' Emotion API, I immediately recalled conversations had with an old coworker who had once worked as a counselor for kids and families, and the "emotions charades" game she described, which helped her clients better learn to nonverbally communicate their emotions.

The biggest challenges I've run into have been correctly formatting the data pulled from the user's mediastream (via the webRTC API) to be acceptable to the Emotion API, and testing with the webRTC API (so far, I haven't solved this second challenge).

#### The stack:

* The app is built primarily with React and Router.
* It utilizes the WebRTC API to access the user's webcam
* It posts images to Microsoft's Cognitive Services Emotion API for analysis
* Also used: JSX, VanillaJS, CSS, Webpack
* Also included for future versions of the app: Redux, Express

I built this using Turing's 'express boilerplate', because although it doesn't utilize it now, a future iteration of *emotican* will need it. I am also a greener-than-novice with express; I hope to use future iterations of this project to understand it better.


#### Future goals:

* The app is not currently very accessible; I hope to improve the webcam interface to audibly alert the user as to when their face is in the frame in order to make the app useful for the blind community.
* I am continuing to refine the UI
* I hope to add a secondary version of the game which presents users with photographs of diverse individuals (varying in age, race, gender, and identifiers) modeling various facial expressions, in order to help users recognize and identify emotions in others.
* The app currently has Express but is not utilizing it. I hope to build out a backend so users can be stored and progress can be tracked (i.e. the user can see their growth over time, and see patterns in their abilities).

## Resources
  - [Microsoft Cognitive Services Emotion API](https://azure.microsoft.com/en-us/services/cognitive-services/emotion/)
  - WebRTC API

## Acknowledgements
  Many thanks to MDN, StackOverflow, my instructors, Jeff Duke for kindly doing PR reviews and giving me industry-level production insights, Tiffany Nuessle for the fascinating conversations that sparked the idea for this app, and the whole of the 1701-FE cohort for cheering me on, debugging issues, and loaning me their faces throughout the build of *emotican* v1 <3
