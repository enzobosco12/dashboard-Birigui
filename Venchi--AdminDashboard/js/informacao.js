const toggleButton = document.querySelector('.toggle-button');
const infoTab = document.getElementById('info-tab');

toggleButton.addEventListener('click', function() {
  infoTab.classList.toggle('show');
});
