## Requirements

To run this project properly, you will need Node.js.

### Node.js

brew install node

### Installation

Use the node package manager to install node_modules.

```bash
npm install
```

### Running the Server

use this command to run rest API project, It will open on port 4009 [http://localhost:4009](http://localhost:4009)

```bash
npm start
```

### Accessing the Docs

With your local server running, the generated swagger docs are available here: [http://localhost:4009/api-docs](http://localhost:4009/api-docs)

### hints

The basic idea is display:

1. List of products and filter them by product structure. [http://localhost:4009/products](http://localhost:4009/products)
2. List of lookups and filter them by id, name and type. [http://localhost:4009/lookups](http://localhost:4009/lookups)
3. List of lookups types in the system. [http://localhost:4009/lookups/types](http://localhost:4009/lookups/types)
