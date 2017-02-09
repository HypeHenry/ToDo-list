/**
 * Created by henrymacbook1 on 08-02-17.
 */
// icons complete en delete
var removeIcon = '<i class="fa fa-trash-o" aria-hidden="true"></i>'
var completeIcon = '<i class="fa fa-check" aria-hidden="true"></i>'

document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) {

      addItemTodo(value);
      document.getElementById('item').value = '';
  }

});

function removeItem() {

    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}

function completeItem() {

    console.log(this);

    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

}

// voeg nieuwe items toe in todo lijst
function addItemTodo(text) {
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    //click toevoegen voor item te verwijderen
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;

    //click toevoegen for item te verwijderen
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}