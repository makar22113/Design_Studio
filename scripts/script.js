document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');
    const leftRadio = document.getElementById('left_radio');
    const centerRadio = document.getElementById('center_radio');
    const rightRadio = document.getElementById('right_radio');
    const image = document.querySelector('.main__completed-projects_examples');
    
    const projectItems = document.querySelectorAll('.main__completed-projects_item'); // Get all list items
    const exampleLabels = document.querySelectorAll('.main__completed-projects_example'); // Get all example labels

    let currentIndex = 0; // 0 for left, 1 for center, 2 for right
    const imageWidth = 679; // Width of each image part

    function updateRadioButtons() {
        leftRadio.checked = currentIndex === 0;
        centerRadio.checked = currentIndex === 1;
        rightRadio.checked = currentIndex === 2;
        updateImagePosition();
        updateProjectItems(); // Update the styles of the list items
        updateExampleLabels(); // Update the styles of the example labels
    }

    function updateImagePosition() {
        const offset = currentIndex * imageWidth; // Calculate offset
        image.style.transform = `translateX(-${offset}px)`; // Apply offset
    }

    function updateProjectItems() {
        projectItems.forEach((item, index) => {
            item.style.opacity = index === currentIndex ? '1' : '0.3'; // Set opacity based on current index
        });
    }

    function updateExampleLabels() {
        exampleLabels.forEach((label, index) => {
            if (index === currentIndex) {
                label.style.color = '#E3B873';
                label.style.textDecoration = 'underline';
                label.style.opacity = '1';
                label.style.transition = 'all 0.15s ease-in';
                label.style.cursor = 'pointer';
            } else {
                label.style.color = ''; // Reset to default color
                label.style.textDecoration = 'none'; // Reset to default
                label.style.opacity = '0.3'; // Set opacity for inactive labels
            }
        });
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = 2; // If current index is 0 (left), switch to 2 (right)
        }
        updateRadioButtons();
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0; // If current index is 2 (right), switch to 0 (left)
        }
        updateRadioButtons();
    });

    updateRadioButtons(); // Initialize radio buttons and image on page load
});