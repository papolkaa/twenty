import { Column, Items } from '../Board';

export const items: Items = {
  'item-1': { id: 'item-1', content: 'Item 1' },
  'item-2': { id: 'item-2', content: 'Item 2' },
  'item-3': { id: 'item-3', content: 'Item 3' },
  'item-4': { id: 'item-4', content: 'Item 4' },
  'item-5': { id: 'item-5', content: 'Item 5' },
  'item-6': { id: 'item-6', content: 'Item 6' },
};

export const initialBoard = [
  {
    id: 'column-1',
    title: 'New',
    itemKeys: ['item-1', 'item-2', 'item-3', 'item-4'],
  },
  {
    id: 'column-2',
    title: 'Screening',
    itemKeys: ['item-5', 'item-6'],
  },
  {
    id: 'column-3',
    title: 'Meeting',
    itemKeys: [],
  },
  {
    id: 'column-4',
    title: 'Meeting',
    itemKeys: [],
  },
  {
    id: 'column-5',
    title: 'Customer',
    itemKeys: [],
  },
] satisfies Column[];
