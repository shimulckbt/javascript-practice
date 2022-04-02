const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);
dbRequest.onSuccess = function (event) {
  const db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });
  objStore.transaction.oncomplete = function (event) {
    db.transaction('products', 'readonly');
  };
}

dbRequest.onError = function (event) {
  console.log('error');
}

storeBtn.addEventListener('click', () => {

});

retrBtn.addEventListener('click', () => {

});