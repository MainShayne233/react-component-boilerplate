# React Componet Boilerplate

Basic React component setup with a minimal server for both development and demo.

## Usage

Clone the repo into your own directory

```bash
git clone https://github.com/MainShayne233/react-component-boilerplate my-react-component
cd my-react-component
```

Run setup scripts

```bash
coming soon...
```

Run development server
```bash
npm run start

```
and visit [localhost:4000](http://localhost:4000)

## Build

When you are to publish/use in applications, simply run the build scripts
```bash
npm run build
```

This will produce an `index.js` file, which will compile and expose the exports
listed in `src/index.js`

Then you can just require/import like any React component:

```javascript
import { MyComponent } from 'my-component'
// or
const MyComponent = require('my-component').MyComponent
```
