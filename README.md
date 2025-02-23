# Bo's BattleShips

This is a front end Battleship game created with JavaScript as a focus.

The use of React router dom would be advised but I wanted to practice and see the limits of what I could do without routes. Instead using states to dictate what and when certain components are shown while using the app.

### Packages Used:
* gh-pages - To host app on github.<br/>
https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3
* tailwindCSS - easy designing and responsive app design.<br/>
https://tailwindcss.com/docs/installation/using-vite

```
npm create vite@latest
npm i gh-pages tailwindcss @tailwindcss/vite
```

### To deploy on Git Hub Pages

After installing gh-pages add these to your scripts in your package.json file:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```
And this right above scripts:
```
"homepage": "https://lonis752.github.io/bo-battleship/",
```
Then add this to your vite.config.js file right after the plugins:
```
base: "/bo-battleship/"
```
Then you just need to run:
```
npm run deploy
```

Future Updates:

* Fix image resolving error at deployment.
* Versus play to play with someone at the same monitor.
* Multi player mode to play with someone over the web. (Socket.io)

Hope you get some fun out of this Bo!