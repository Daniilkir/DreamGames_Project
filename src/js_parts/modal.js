document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('myModal');
    const closeModalButton = document.getElementById('closeModal');
    const saveButton = document.getElementById('saveButton');

    modal.style.display = 'block';

    closeModalButton.addEventListener('click', function () {
        closeModal();
    });

    saveButton.addEventListener('click', function () {
        saveName();
    });

    function closeModal() {
        modal.style.display = 'none';
    }

    function saveName() {
        const userName = document.getElementById('userName').value;
        alert('Ваше ім\'я: ' + userName);
        closeModal();
    }
});
