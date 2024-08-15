# MultiSelectX - A jQuery Plugin for Enhanced Multi-Select Functionality

![License](https://img.shields.io/badge/license-Apache-blue.svg)

## Description

MultiSelectX is a lightweight jQuery plugin that enhances the standard multi-select functionality by providing a customizable and user-friendly interface. With features like search filtering, dynamic option sorting, and easy integration, MultiSelectX simplifies the selection process in your web applications.

## Features

- **Customizable HTML Structure**: Easily modify the default HTML structure to fit your UI needs.
- **Dynamic Data Loading**: Populate options using JSON data, allowing for flexibility in content management.
- **Search Functionality**: Quickly find options using a live search input, making it easy to locate items from large datasets.
- **Smart Sorting**: Selected options move to the top, ensuring users can identify their choices at a glance.
- **Lightweight and Easy to Use**: With a simple plugin interface, integrating MultiSelectX into your project is a breeze.

## Setup

### Prerequisites

- jQuery (version 3.0 or higher)

### Installation

1. Include jQuery and the MultiSelectX plugin in your HTML file:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   <script src="path/to/multiSelectX.js"></script>
   <link rel="stylesheet" href="path/to/multiSelectX.css"> <!-- Optional CSS -->
   ```

2. Create a container for the multi-select:

   ```html
   <div id="myMultiSelect"></div>
   ```

3. Initialize the plugin:

   ```javascript
   $(document).ready(function() {
       $('#myMultiSelect').multiSelectX({
           jsonData: [
               { "data": '{"option": "Item 1"}', "search": "item 1", "id": "1", "name": "Item 1", "checked": "" },
               { "data": '{"option": "Item 2"}', "search": "item 2", "id": "2", "name": "Item 2", "checked": "" },
               // Add more items here
           ]
       });
   });
   ```

## Usage

### Options

You can customize the plugin behavior by passing options:

- `html`: Custom HTML layout for the search box and options.
- `jsonData`: An array of objects containing the options to be displayed. Each object can have `data`, `search`, `id`, `name`, and `checked` properties.

### Example

Here’s an example of how to use MultiSelectX:

```javascript
$(document).ready(function() {
    $('#myMultiSelect').multiSelectX({
        html: '<div class="custom-search"><input type="text" id="search" placeholder="Search..."><div id="options"></div></div>',
        jsonData: [
            { "data": '{"option": "Apple"}', "search": "apple", "id": "1", "name": "Apple", "checked": "" },
            { "data": '{"option": "Banana"}', "search": "banana", "id": "2", "name": "Banana", "checked": "" },
            { "data": '{"option": "Cherry"}', "search": "cherry", "id": "3", "name": "Cherry", "checked": "" }
        ]
    });
});
```

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for more details.

## Contributing

We welcome contributions! If you have suggestions for improvements or bug fixes, please feel free to submit a pull request.

## Contact

For questions or support, feel free to reach out:

- Email: [icraftixxx@gmail.com](mailto:icraftixxx@gmail.com)
- GitHub: [https://github.com/icrafti](https://github.com/icrafti)

---

Enhance your forms with MultiSelectX and make selecting options an effortless experience! 🌟
