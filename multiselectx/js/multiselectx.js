/*
PLUGIN
MULTI SELECT X 
VERSION 1.0.0
*/

// [OPTIONAL]
// Create a <link> element if automatic connection (css) is needed
/*
// Find where the script is located
let currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
})();
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
let currentDir = currentScript.src.substring(0, currentScript.src.lastIndexOf('/') + 1);
link.href = currentDir + "../css/multiselectx.css";
// Add the <link> element to <head>
document.head.appendChild(link);
*/

(function ($) {
    
    $.fn.multiSelectX = function (options) {
        // Default values
        const settings = $.extend({
            html:   `<div id="multiSelectX" class="fixed-search">
                        <div class="fixed-search-sticky">
                            <input type="text" id="searchInputX" placeholder="Search...">
                        </div>
                        <div id="optionsX">
                        </div>
                    </div>`,
            jsonData: [],
        }, options);

        // Generate HTML and add it to the element
        this.html(settings.html);

        // Add options to #optionsX
        const $optionsContainer = this.find('#optionsX');
        settings.jsonData.forEach(item => {
            // Convert item.data to an object
            const dataObject = JSON.parse(item.data);  // If item.data is a string, use JSON.parse
            const dataAttributes = Object.entries(dataObject[0]) // Assuming item.data is an array with one object
                .map(([key, value]) => `data-${key}="${value}"`) // Create a string with attributes
                .join(' '); // Join into one string
        
            $optionsContainer.append(
                `<label style='font-weight: 400;'>
                    <input type="checkbox" ${dataAttributes} data-search="${item.search}" ${item.checked} data-id="${item.id}">  ${item.name}
                </label>`
            );
        });

        // Function to update the order of items
        const updateOptions = () => {
            let selectedOptions = $optionsContainer.find('input:checked').parent(); // selected options
            let allOptions = $optionsContainer.find('label').not(selectedOptions); // all options except selected
            $optionsContainer.empty().append(selectedOptions).append(allOptions);
        }

        // Handle checkbox state changes
        $optionsContainer.on('change', 'input', function () {
            updateOptions();
        });

        // Search function
        this.find('#searchInputX').on('input', function() {
            let searchValue = $(this).val().toLowerCase();
            $optionsContainer.find('label').each(function() {
                let text = $(this).text().toLowerCase();
                let search = $(this).find('input').data('search') ? $(this).find('input').data('search').toLowerCase() : '';
                let id = $(this).find('input').data('id') ? $(this).find('input').data('id').toString() : '';
                
                // Check if the search value is contained in the text or values
                if (text.indexOf(searchValue) > -1 || search.indexOf(searchValue) > -1 || id.indexOf(searchValue) > -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });

        // Initial sorting
        updateOptions();

        // Expose updateOptions function
        this.updateOptions = updateOptions;

        // Return for chaining
        return this;
    };
}(jQuery));
