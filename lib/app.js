import Component from './component';

const component = new Component();

document.addEventListener('DOMContentLoaded', () => {
  const tags = document.getElementsByTagName('Component');
  if (!tags || tags.length === 0) {
    return;
  }
  component.onRender(html => {
    for (let i = 0; i < tags.length; i++) {
      tags[i].innerHTML = html;
    }
  });

  console.log('ready!');
});
