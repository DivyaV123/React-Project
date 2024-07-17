import React from 'react';

const HtmlContent = ({ htmlString, imageSrc }) => {
    const parseHtml = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const listItems = tempDiv.querySelectorAll('li');
        listItems.forEach((li) => {
            // Create a flex container
            const flexContainer = document.createElement('div');
            flexContainer.style.display = 'flex';
            flexContainer.style.alignItems = 'center';
            flexContainer.style.marginBottom = '10px'; // Adjust margin as needed

            // Create the figure and img elements
            const figure = document.createElement('figure');
            figure.style.margin = '0';
            figure.style.paddingRight = '10px'; // Adjust spacing as needed
            figure.style.display = 'flex';
            figure.style.alignItems = 'center';
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'resource';
            img.style.width = '30px'; // Set image size to 30px
            img.style.height = '30px'; // Set image size to 30px
            img.style.objectFit = 'cover'; // Ensure the image covers the box without distortion
            figure.appendChild(img);

            // Move the original li content into a new div
            const contentDiv = document.createElement('div');
            contentDiv.style.width = '100%';
            contentDiv.style.fontSize = '12px'; // Set text size to 12px
            contentDiv.innerHTML = li.innerHTML;

            // Clear the original li content and append the new elements
            li.innerHTML = '';
            flexContainer.appendChild(figure);
            flexContainer.appendChild(contentDiv);
            li.appendChild(flexContainer);
        });

        return tempDiv.innerHTML;
    };

    return <div dangerouslySetInnerHTML={{ __html: parseHtml(htmlString) }} />;
};

export default HtmlContent;
