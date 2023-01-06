# ColoRandom

## Abstract
[//]: <>
ColoRandom is an application that allows the user to generate new, random color palettes at the click of a button. Users are able to lock colors in the display to generate a custom palette and save it in a gallery. The user can view and delete their saved palettes.

## Installation Instructions
[//]: <>
1. Fork and clone [this repo](https://github.com/KatherineBlaine/coloRandom)
1. Copy the SSH key from the green "Code" button within the repo.
1. In your terminal, use the command `git clone git@github.com:[the link to your repo]`.
1. Open the repo in your text editor to make any changes or inspect code.
1. Use `open index.html` to open the app in your browser.

## App Preview
[//]: <>
![ColoRandom App Preview](https://media.giphy.com/media/YdLUitmrBiHLbHTKUd/giphy.gif)
<!-- Coming soon to Blu-Ray and DVD -->

## Context
[//]: <>
We are all students in the 2211 FE Cohort at Turing School of Software and Design in our fourth week of Mod 1.

For this project, we were provided with an image of a potential window layout along with instructions and requirements for what the app should do. No directories or files were provided and we were tasked with building the app from the ground up, creating our own `.html`, `.css`, and `.js` files.

The project was received 1/2/2022 and the base requirements were completed by 1/4/2022 after approximately 13 hours.

## Contributors
[//]: <>
[Kirk Hauck](https://github.com/kirkhauck)

[Sophie LaBelle](https://github.com/sophielabelle)

[Katherine Blaine](https://github.com/KatherineBlaine)

[Joseph (Joe) Fogiato](https://gist.github.com/jfogiato)

## Learning Goals
[//]: <>
- Write semantic HTML and efficient CSS to form a usable UI
- Write clean, DRY JavaScript and leverage classes, creating and using an effective data model
- Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
- Refine your collaboration skills

## Wins & Challenges
[//]: <>
Wins:
- We successfully applied event delegation with a strong understanding of the capturing, targeting, and bubbling phases of event listening so that we could create functional event listeners for dynamic elements. We used this process to create functional icon buttons that lock and unlock colors and delete palettes from the saved palette section.

- Throughout this process we were able to work as a cohesive team with our git workflow. We effectively divvied up the work and all contributed with our commits, merges and reviews.  

- We immediately started our project with the data model in mind and we ensured that changes in the DOM always reflected changes in the data model. For example, when the user clicks the Save Palette button, the current instance of Palette is pushed into the savedPalettes array before it is displayed in the Saved Palettes section.

- We structured our classes with descriptive class properties and methods so that we could efficiently reference and compare these values within our functions. For example, the way we designed our classes allowed us to access the keys and values of specific palettes and call our class methods to change the hex values of the displayed palette randomly and toggle the lock icon.

- While writing code we kept Developer readability in mind. We refactored parts of our code in order for easier understanding and reorganized the placement to be intuitive and understandable at a quick glance.

Challenges:
- We were challenged with some CSS styling aspects throughout the project but most specifically when it came to the border between our main section and saved color palettes. It took us quite a while to find the CSS code that could allow the border to extend down with the increased number of palettes past the origonal dimensions of the page.  

- We found it challenging using Google's Material Icons. Specifically, we found it challenging using more than one symbol and having it styled differently from another symbol. Because all the symbols share the material-symbols-outlined class, it was difficult finding correct property syntax to adjust the symbol's fill value.

- Being able to implement the full functionality to lock/unlock a color was a challenge. The complexity of this problem was related to how our HTML was structured and the properties inherent to those elements, our JS Classes, and where the event was ultimately being triggered. There were two pieces of functionality that we aimed to implement on this event.
  - First, we needed to be able to invoke a method within the object we were targeting. We accomplished this by looping through our current colors (an array of object values) and comparing the ID of the target with each object's Key, then locking/unlocking that object by invoking the appropriate function within that object.
  - Second, we needed to be able to change the icon of the event target. We accomplished this by using a simple conditional to adjust the inner text of our icon span to toggle between the locked and unlocked icon.


