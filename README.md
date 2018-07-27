**ATTENTION: please run on your local enviroment from the text editor to see full website functionalities. Github pages does not allow API Calls**
# Welcome To The Daily Planner!

Hi! This website was created to serve as an online planner that allows the user to customize by clicking a button on the navigation bar.

# Navigation Bar

Below I will give an explanation of the navigation bar. 

## Messages

The messages button is not fully developed yet but it is a special feature that I want to implement in the coming weeks. Once the user clicks the message button a modal should pop up allowing the user to customize the greeting message. Possibility for allowing the user to get a different inspirational quote everyday, a specific phrase/reminder, and change color or text size.

### Code Explantion
**N/A**

## Tasks

The task button is a special feature that I will be working on in the coming weeks. The button should pop up a modal that allows the user to enter various tasks and allows the user to move the tasks up or down depending the priority. The user will also have the option of scratching off a task or removing it completely. The top three tasks of the day will appear somewhere on the main page of the website reminding the user of them.

### Code Explantion
**N/A**

## Background

When the user clicks on the background button a input field shows up and allows the user to search for a specific content of images. About twenty images will pop up in the middle of the main page and the user will have the option to click on one. Whichever image the user picks the picture will then become the website background.

### Code Explanation
Using jquery and javascript I send a request and receive a response from a flickr API 
that delivers the twenty most recent images posted to flickr matching what the user specification. I accessed the JSON message and was able to use jquerry's .html() and .on('click', function()) to send to the DOM the url of the images and display it on the website. 
I was able to get all of the images side by side by using flex box and resizing them to fit the size of the squares.
## About
About will be a modal that pops up and gives the user an explanation of how the site came to be. How I used CSS, HTML, Javascript, and more to get it running. Will also explain any current features on the site and will keep the user updated on coming updates.

# Credits
A special thanks to Code Louisville for teaching me html, css, javascript, bootstrap, and so many more skills that have awaken a curiosity in me that I never imagined having. Thank you Code Louisville team !
