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
npm setup
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
├── index.js # Compiled file, used as entry when imported/required
├── lib # Development build directory
├── package.json # Dependencies/package information
├── README.md # The file you are currently reading
├── src # Where all your code goes
│   ├── components # Where you put your components
│   │   ├── counter_container.jsx # Sample React component container
│   │   └── counter.jsx # Sample React component
│   ├── demo_container.js # Container used for the development/demo app
│   ├── index.html # HTML file used for development/demo app
│   ├── index.js # Where you list your exports (what you want to be import into other apps)
│   └── main.js # Entry file for development/demo app
├── webpack.config.js # Configuration for webpack build and dev server
└── favicon.ico # Just a generic favicon (You can replace it, just use the same file name)
```
