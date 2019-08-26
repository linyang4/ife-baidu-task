const $toggleBtn = document.querySelector('.toggle-btn')
const $menuLabel = document.querySelector('.menu-label')

$toggleBtn.onclick= () => {
  $menuLabel.classList.toggle('active')
}