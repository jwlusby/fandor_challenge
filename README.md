# fandor_challenge
UI Challenge for Fandor

This was my first attempt at using ReactJS to replicate the Festivals page on Fandor.com.
In the interest of time, much of the CSS was lifted directly from the site. As was the Header and Footer bars. I focused my efforts mostly around implementing the Festivals listings and slideshow using the provided Festivals.json since that seemed to be the goal of the challenge.

#Install required node_modules  
`npm install`

#Building  
`npm run build`

#Testing
The fastest way to see this running would probably be to use the "http_server" module to server the .\src\client folder.

If you don't already have the http-server module installed globally already, you may do so with this command:  
`npm install http-server -g`

If you have the http-server module installed globally run this command:  
`http-server -a localhost -p 8000 .\src\client\`


Then open the page in your browser:  
`http://localhost:8000/`

#Bugs, known issues, and other notes
-There is a slight alignment issue with the left/right slider overlays 
-Header navigation menus are not implemented.
-In the footer, I replaced the social networking links/buttons with mock images taken from a screenshot of the original site 
-CSS isn't managed very elegantly. It would be nice to manage styles in a more React-like way as suggested in this blog: https://medium.com/@jviereck/modularise-css-the-react-way-1e817b317b04
-Since the image URLs were broken on a few entries, I took the liberty of updating them in the .json file
-I added a couple additional festivals to slideshow collection in the .json file to show off the functioning slider. Originally it contained a single element. It will work with a single element as well but it looks like a static image that way.


