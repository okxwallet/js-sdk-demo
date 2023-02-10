import jsonview from '@pgrabovets/json-view';

export function displayResult(div, ...info) {
  div.innerHTML = '';
  console.log(info);
  info.forEach(i => {
    const tree = jsonview.create(JSON.stringify(i));
    jsonview.render(tree, div);
  })
}
