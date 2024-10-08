# XPagination

XPagination is a lightweight, customizable React component for implementing pagination in your web applications. It provides an easy-to-use interface for navigating through large datasets, with a clean and modern design.

![XPagination Demo](https://raw.githubusercontent.com/milindkusahu/XPagination/refs/heads/main/XPagination.png)

## Features

- Simple and intuitive API
- Customizable styling
- Responsive design
- Support for large datasets
- "Previous" and "Next" navigation buttons
- Current page indicator
- Easy integration with existing React projects

## Installation and Setup

To get started with XPagination, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/milindkusahu/XPagination.git
   ```

2. Navigate to the project directory:
   ```
   cd XPagination
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. To create a production build:
   ```
   npm run build
   ```

## Usage

Here's a basic example of how to use XPagination in your React application:

```jsx
import React, { useState } from 'react';
import XPagination from 'xpagination';

const MyComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Data rendering logic here */}
      <XPagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MyComponent;
```

## Props

XPagination accepts the following props:

- `itemsPerPage` (number): The number of items to display per page.
- `totalItems` (number): The total number of items in your dataset.
- `paginate` (function): A callback function to update the current page.
- `currentPage` (number): The current active page.

## Customization

You can customize the appearance of XPagination by passing custom CSS classes or by overriding the default styles.

## License

XPagination is released under the MIT License.

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub issue tracker](https://github.com/milindkusahu/XPagination/issues).





# XPagination

XPagination is a lightweight, customizable React component for implementing pagination in your web applications. It provides an easy-to-use interface for navigating through large datasets, with a clean and modern design.

![XPagination Demo](https://via.placeholder.com/600x100.png?text=XPagination+Demo)

## Features

- Simple and intuitive API
- Customizable styling
- Responsive design
- Support for large datasets
- "Previous" and "Next" navigation buttons
- Current page indicator
- Easy integration with existing React projects

## Installation and Setup

To get started with XPagination, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/XPagination.git
   ```

2. Navigate to the project directory:
   ```
   cd XPagination
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. To create a production build:
   ```
   npm run build
   ```

## Usage

Here's a basic example of how to use XPagination in your React application:

```jsx
import React, { useState } from 'react';
import { XPagination } from 'xpagination';

const MyComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Your data rendering logic here */}
      <XPagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MyComponent;
```

## Props

XPagination accepts the following props:

- `itemsPerPage` (number): The number of items to display per page.
- `totalItems` (number): The total number of items in your dataset.
- `paginate` (function): A callback function to update the current page.
- `currentPage` (number): The current active page.

## Customization

You can customize the appearance of XPagination by passing custom CSS classes or by overriding the default styles. For more information on customization options, please refer to our [documentation](https://example.com/xpagination-docs).

## Contributing

We welcome contributions to XPagination! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

XPagination is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub issue tracker](https://github.com/yourusername/xpagination/issues).

## Acknowledgements

Special thanks to all the contributors who have helped make XPagination better!
