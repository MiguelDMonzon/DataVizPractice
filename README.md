# DataViz-DojoRandori
DataViz Dashboard Example &amp; angular.js@1.6.2 - Dojo Randori

# To start the app to develop locally

```bash
  git clone https://github.com/Pelirrojo/DataViz-DojoRandori.git
  bower i
  npm i
  npm run serve
  
  # Open your browser at: http://localhost:3000
```

# To start the server

```bash
  cd server
  npm i express
  npm i cors
  node index
```
 

# To run a project seed similar

```bash
    npm install -g yo
    npm install -g generator-fountain-webapp
    npm install -g generator-fountain-angular1
    mkdir my-new-project && cd my-new-project
    yo fountain-angular1
    
```

# To add [bootstrap](http://getbootstrap.com/) & [ui-bootstrap](https://angular-ui.github.io/bootstrap/)

```bash
  bower install angular-bootstrap --save
  bower install bootstrap-sass@3.2 --save
  bower install bootswatch-scss@3.2 --save
  bower install font-awesome@4.7 --save
  
  # add 'ui.bootstrap' to src/app/index.js
  # add dependenccies to src/index.scss
  
```

# To add D3 & NVD3

```bash
  bower install d3@3 --save
  bower install nvd3@1.8 --save
  bower install angular-nvd3 --save
  
  # add 'nvd3' to src/app/index.js
  
  # Add JS * CSS files to index.html
  # <link rel="stylesheet" href="../bower_components/nvd3/build/nv.d3.min.css">
  
  # <script src="../bower_components/d3/d3.min.js"></script>
  # <script src="../bower_components/nvd3/build/nv.d3.min.js"></script> <!-- or use another assembly -->
  # <script src="../bower_components/angular-nvd3/dist/angular-nvd3.js"></script>
  
  # use at controller with data & options  
  
```

# To add [leaflet](https://github.com/tombatossals/angular-leaflet-directive)

```bash
 
  bower i leaflet-directive --save
  
  # add 'leaflet-directive' to src/app/index.js
  
  # Add JS * CSS files to index.html  
  # <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.css">
  
  # <script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>
  # <script src="../bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.min.js"></script>
  
  # use at controller with center & options
  
```

