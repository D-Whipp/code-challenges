window.addEventListener('DOMContentLoaded', (event) => {
  let menuArray = [
    {
      name: 'Boneless Buffalo Wings',
      vegetarian: false,
    },
    {
      name: 'Boneless Buffalo Chicken Salad',
      vegetarian: false,
    },
    {
      name: 'Soup & House Salad',
      vegetarian: true,
    },
    {
      name: 'Soup & Caesar Salad',
      vegetarian: true,
    },
    {
      name: 'Side House Salad',
      vegetarian: true,
    },
    {
      name: 'Bowl of Soup',
      vegetarian: true,
    },
    {
      name: 'Chicken Fajitas',
      vegetarian: false,
    },
    {
      name: 'Steak Fajitas',
      vegetarian: false,
    },
    {
      name: 'Shrimp Fajitas',
      vegetarian: false,
    },
  ];

  let vegetarianItems = menuArray.filter(
    (item) => item.vegetarian === true
  );

  let vegetarianChoices = [];

  let vegetarianItemNames = vegetarianItems.forEach((item) =>
    vegetarianChoices.push(item.name)
  );

  const ulTag = document.querySelector('#vegetarian-menu_ul');

  vegetarianChoices.forEach((item) => {
    const liTag = document.createElement('li');
    liTag.innerText = item;
    ulTag.append(liTag);
  });
});
