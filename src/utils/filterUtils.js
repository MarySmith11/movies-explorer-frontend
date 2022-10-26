export function saveFilterToStorage(filterData) {
  localStorage.setItem('last-filter', JSON.stringify(filterData));
}

export function loadFilterFromStorage() {
  const lastFilter = localStorage.getItem('last-filter');
  if (lastFilter) {
    return JSON.parse(lastFilter);
  }

  return null;
}

export function removeFilterFromStorage() {
  localStorage.removeItem('last-filter');
}
