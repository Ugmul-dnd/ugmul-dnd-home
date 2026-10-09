const token = document.getElementById('demo-token');
const button = document.getElementById('demo-button');
const status = document.getElementById('demo-status');
let inside = false;
button.addEventListener('click', () => {
  inside = !inside;
  token.classList.toggle('inside', inside);
  status.replaceChildren();
  const heading = document.createElement('strong');
  heading.textContent = inside ? 'Entry event → configured activity.' : 'The token is outside the Region.';
  status.append(heading, inside ? 'In Foundry, your selected activity would run for an eligible token.' : 'Move it inside to illustrate an entry trigger.');
  button.textContent = inside ? 'Reset the illustration ↺' : 'Move token into Region →';
});
