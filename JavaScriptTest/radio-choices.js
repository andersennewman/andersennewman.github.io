window.onload = () => {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'language') {
            showChoice(value);
        } else {
            if (value.toLowerCase() === 'downloads') {
                showChoice(value);
            } else {
                if (value.toLowerCase() === 'status') {
                    showChoice(value);
                } else {
                    if (value.toLowerCase() === 'category') {
                        showChoice(value);
                    } else {
                        showChoice(value);
                    }
                }
            }
        }
    });
}

function showChoice(value) {
    const inputDis = document.getElementById('user-choice');

    inputDis.textContent = value;
}