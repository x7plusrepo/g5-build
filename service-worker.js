// eslint-disable-next-line no-restricted-globals
self.addEventListener('push', event => {
  let data = event.data.json();
  const image = 'https://ai.g5-app.com/logo192.png';
  const options = {
    body: data.options.body,
    icon: image,
  };
  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(data.title, options);
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('notificationclick', event => {
  // TODO
});
