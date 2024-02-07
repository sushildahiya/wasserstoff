# WSTF-FRONT-END-HAKATHON


### Problem Statement: [https://www.figma.com/file/ppNMpYAmwAxgSTvbr1wLmC/Wasseerstoff-Front-end-Developer-Task?type=design&mode=design]



## Technical Stack/Libraries Used:

  1. React JS - Javascript based frontend library, specially used for creating SPA's.

  2. Chart.JS  -   Javascript based library which is used to display data in different forms charts.

  3. React Loader Spinner - Javascript library which has wide variety of pre-built loader animation.

  4. React router dom - Router library which is used to navigation routes in our react acpp.

  5. Styled Components 

  6. HTML, CSS


## Steps to run the project:

  1. Make sure node js is installed in your system and also has environment build path setup for node js.

      Download Nodes: [https://nodejs.org/en]

  2. Clone the repository from [https://github.com/sushildahiya/wasserstoff] using command:

      ## #git clone https://github.com/sushildahiya/wasserstoff.git

  3. One the project directory in vs code.

  4. One the vs terminal at the root directory of project.

  5. Install the node modules using npm:

      ## #npm i

  6. Once the node modules finish downloading, run npm start command.

       ## #npm start

  7. Wait for localhost get hosted. [Default localhost port is 3000] 


## Demo Link :  [https://drive.google.com/file/d/18p2udXQJ3kfssYny8BTIBwI8FkL8Mklo/view?usp=sharing]

## Vercel Hosted Link: [https://wasserstoff-git-main-sushils-projects-5ce2d618.vercel.app/]

## Approach I tried and went while developing the project:

As soon as I got the mail regarding the hackathon, I went through it. A requirement doc was attached to as which is the important tool for thinking and developing requirement. I went through it and understood it. And  I found that I have to develop the frontend to the requirement using react and using whichever library we want, but the craziest thing is that requirement was to develop a frontend although we can't use images in whole app. 

  As I went through the figma of the requirement, at starting only I got the challenge to implement hexa world map which I have never done before, it was new for me as it was clearly mentioned that we have to implement everything using code. Initially I thought to use svg code to directly use it, but I wanted to know how we can actually implement it. I googled alot and found some map libraries. I started going through the libraris. I learned how maps are rendered in map (# either using geopoints or x y coordinates #). I found that even the library [ internally was using svg ]. So, I found that first step is to get # geoJson # of the world. The library had good support for simple map, but it didn't done any good for hexabin map as there was an example for hexabin map of US but there all the x and y coordinates where mentioned not the geoJson. I tried to find x and y cordinates for hexabin of whole again which was failure as only hexabin x and y coordinates are only available for US region. Now, I tried to generate my own hexabin by breaking the world map into small hexabins which was again failure. So I decided to once try to fetch path from svg and use it in d3js library again failure. Finally I decided to make other views and touch hexabin at last. 
  There was some communication gap looking at the requirement as there were 3 screens to be developed, but for all the screens the nav route was pointed to only overview. I decided to assign one screen to different route as analystics. 
  New challege was implement bar chart I started using d3js library for it. I was successful in implementing it but unfortunatley some times I was getting an error which looked up on internet but didn't found much support. So I decided it to create bar chart manually and finished overview page without hexabin map. And then moved to the second page where I have to develop bubble chart. Which contains bubbles of different sizes, color and shadows. I tried to create a single component for both texted bubbles and non texted bubbles using # styled component # prop based styling but I found some issue with # box-shadowing # color shades were not matching with the requirement. I switched to some other approach to create texted bubbles manually and non texted bubbles using react component for reusability. I completed the 2nd page of analytics where I followed data driven approach to get different details for different time intervals. Now I had completed my 2nd page of bubble chart.

## Screenshots: (Note: Screenshots are taken at 90% zoom level)
### Screenshot 1

![Screenshot (46)](https://github.com/sushildahiya/wasserstoff/assets/97718833/d9f394f7-881d-49c6-8b5e-ab4b527b5970)

### Screenshot 2

![Screenshot (47)](https://github.com/sushildahiya/wasserstoff/assets/97718833/97a56648-d2be-472a-ac19-fd2b7eb43171)


### Screenshot 3

![Screenshot (48)](https://github.com/sushildahiya/wasserstoff/assets/97718833/42bacdeb-499b-4c14-b232-4ed78d367ea3)

### Screenshot 4

![Screenshot (49)](https://github.com/sushildahiya/wasserstoff/assets/97718833/85439e06-db35-4981-8297-b531fea92170)

### Screenshot 5

![Screenshot (50)](https://github.com/sushildahiya/wasserstoff/assets/97718833/bef1e740-1ebd-4d9f-a622-2c85b34981a2)


















