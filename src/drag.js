let current = null;
let targetItem = null;

export const dragStart = (event) => {
  current = event.target;
  current.classList.add('current-active');
};

export const dragEnd = () => {
  current.classList.remove('current-active');
  current = null;
};

export const dragEnter = (event) => {
  event.preventDefault();
};

export const dragLeave = () => {
  targetItem = null;
};

export const allowDrop = (event) => {
  event.preventDefault();
};

export const drop = (event) => {
  targetItem = document.getElementById(event.target.parentNode.id);
  current.parentElement.insertBefore(current, targetItem);
  const children = Array.from(current.parentElement.children);
  const updatedList = children.map((el, index) => ({
    index, completed: el.children[0].checked, description: el.children[1].value,
  }
  ));
  localStorage.setItem('TodoList', JSON.stringify(updatedList));
};
