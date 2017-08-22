

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('send-it-button')
    .addEventListener('click', () => {
      exp.getCurrentDevice().then((device) => {
        const location = device.document.location;

        let locationName = location.name || 'Anon';

        // chat app if having a zone, should only be in one zone, so we hard code to this
        if (location.zones && location.zones.length > 0) {
          locationName += ` - ${location.zones[0].name}`;
        }

        exp
          .getChannel('testChannel')
          .broadcast(
            'messageSent',
            {
              text: document.getElementById('text-to-send-textbox').value,
              submitter: locationName,
            },
            2000,
          );
      });
    });
});

// eslint-disable-next-line no-unused-vars
window.play = function play() {
  exp.getChannel('testChannel').listen('messageSent', (payload, respondCallback) => {

    const element = document.getElementById('what-was-sent-container');

    element.innerHTML = `${element.innerHTML}<p>${payload.submitter} says: ${payload.text}</p>`;

    respondCallback();
  });
};
