# React Componet Boilerplate

Basic React component setup with a minimal server for both development and demo.



## Usage

Clone the repo into your own directory

```bash
git clone https://github.com/MainShayne233/react-component-boilerplate my-react-component
cd my-react-component
```

Run setup the script

```bash
npm run setup
# Installs dependencies
# Removes boilerplate names
# Removes setup scripts
# Initializes Git
```

Run development server
```bash
npm run start
# This runs the application that starts in ./src/main.js, which is just the
# development/demo app for your component, but is not included in the build.
```

and visit [localhost:4000](http://localhost:4000)

## Build

When you are ready to publish/use in applications, simply run the build scripts
```bash
npm run build
```

This will produce an `index.js` file, which will expose the exports
listed in `src/index.js`

Then you can just require/import like any React component:

```javascript
import { MyComponent } from 'my-component'
// or
const MyComponent = require('my-component').MyComponent
```

## Directory breakdown
```bash
├── README.md # The file you are currently reading
├── demo # Contains files for demo/dev application
│   ├── demo_container.js # Container that renders your component in the demo/dev app
│   ├── index.html # HTML file for demo/dev app
│   └── main.js # Entry point for demo/dev app
├── favicon.ico # Favicon for demo/dev app
├── index.js # Compiled component that exposes exports contained in ./src/index.js
├── lib # Build directory, just a dumping ground for webpack
├── package.json # Dependencies and package information
├── scripts # Scripts directory, is removed on setup
│   └── setup.js # Setup script, removes itself
├── src # Where your code goes
│   ├── components # Where you put your components
│   │   ├── counter.jsx # Sample component, a simple counter
│   │   └── counter_container.jsx # Sample component container for the counter
│   └── index.js # Exposes exports
└── webpack.config.js # Webpack/Server config
```
