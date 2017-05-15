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

## Testing

Tests go in the ```__tests__```, and you can run them with:
```bash
npm run test
```

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
