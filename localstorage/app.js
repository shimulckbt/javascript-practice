const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = { name: 'shimul', age: 27 };
  document.cookie = `uid=${userId}; max-age=5`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');

  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data);
});