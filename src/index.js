import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'testing .. 1. 2. 3', 'halp, gimmeh the image asdf!'], ' ');

  return element;
}

document.body.appendChild(component());
