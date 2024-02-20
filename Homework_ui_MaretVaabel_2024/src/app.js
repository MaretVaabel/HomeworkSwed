document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  displayMenuItems('home')
})

const menu = [
  {
    id: 'home',
    title: 'Home',
    component: `<home-page></home-page>`,
  },
  {
    id: 'banking',
    title: 'Everyday banking',
    component: `<daily-banking></daily-banking>`,
  },
]

function displayMenuItems(categoryId) {
  const sectionCenter = document.querySelector('.sectionCenter')

  const displayMenu = menu.map(function (item) {
    if (item.id == categoryId) {
      return `<div class="container">
             <h1>${item.title}</h1>
            ${item.component}
            </div>
            `
    }
  })

  displayMenuText = displayMenu.filter((n) => n)
  sectionCenter.innerHTML = displayMenuText
}
