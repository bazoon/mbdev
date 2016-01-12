import config from './config.js';
import ArticleIcon from './components/article_icon.jsx';
import DummyIcon from './components/dummy_icon.jsx';
import IndexIcon from './components/index_icon.jsx';
import MenuIcon from './components/menu_icon.jsx';
import React from 'react';

export function constructIconPath(id) {
  if (id==='index') {
    id = 'about';
  }
  var path = `${config.iconPath}${id}.svg`;
  return path;
}

export function itemsToIcons(items) {
  items = items ? items : [];
  return items.map(itemToIcon);
}

export function itemToIcon(item) {
  switch (item.type) {
    case 'article':
      return <ArticleIcon icon={item.icon} itemId={item.itemId} key={item.itemId}/>;
    case 'dummy':
      return <DummyIcon icon={item.icon} key={item.itemId} />;
    case 'menu':
      return <MenuIcon icon={item.icon} itemId={item.itemId} key={item.itemId} />;
    default:
      return <IndexIcon icon={item.icon} key={item.itemId} />;
  }
}


export function breadcrumbs(items, id) {
  var element = _.find(items, (item) => (item.itemId === id));
  var result = [];

  while (element) {
    let parentElement = _.find(items, (item) => (item.itemId === element.parentId));
    if (parentElement) {
      result.unshift(parentElement);
    } else {
      result.unshift({ icon: 'about.svg', itemId: 'about' });
    }

    element = parentElement;
  }
  return result;
}
