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

  // let vegetarianItemNames = vegetarianItems.filter(item => item.name)
  let vegetarianItemNames = vegetarianItems.forEach((item) =>
    vegetarianChoices.push(item.name)
  );

  const pTag = document.createElement('p');
  const node = document.createTextNode(vegetarianChoices);
  pTag.appendChild(node);
  //   const spliceArray = vegetarianItemNames.splice(' ');
  const element = document.querySelector('.vegetarian-menu');
  element.appendChild(pTag);

  console.log(node);
  //   console.log(spliceArray);

  console.log(vegetarianItems);
  console.log(vegetarianChoices);
});
