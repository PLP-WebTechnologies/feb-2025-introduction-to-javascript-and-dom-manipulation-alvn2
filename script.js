// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const textElement = document.getElementById('changeableText');
    const textBtn = document.getElementById('textBtn');
    const styleBtn = document.getElementById('styleBtn');
    const itemsContainer = document.getElementById('itemsContainer');
    const addBtn = document.getElementById('addBtn');
    const removeBtn = document.getElementById('removeBtn');

    let itemCount = 1;
    let isStyled = false;

    // Function to change text content
    function changeText() {
        textElement.textContent = `Text Changed at ${new Date().toLocaleTimeString()}`;
    }

    // Function to toggle styles
    function toggleStyle() {
        isStyled = !isStyled;
        if (isStyled) {
            textElement.style.color = 'blue';
            textElement.style.fontSize = '2rem';
            textElement.style.backgroundColor = '#f0f0f0';
        } else {
            textElement.style.color = '';
            textElement.style.fontSize = '';
            textElement.style.backgroundColor = '';
        }
    }

    // Function to add new item
    function addItem() {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = `Item ${itemCount}`;
        itemsContainer.appendChild(newItem);
    }

    // Function to remove last item
    function removeItem() {
        const items = itemsContainer.getElementsByClassName('item');
        if (items.length > 0) {
            itemsContainer.removeChild(items[items.length - 1]);
            itemCount--;
        }
    }

    // Event listeners
    textBtn.addEventListener('click', changeText);
    styleBtn.addEventListener('click', toggleStyle);
    addBtn.addEventListener('click', addItem);
    removeBtn.addEventListener('click', removeItem);
});