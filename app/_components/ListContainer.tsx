import React, { Suspense, lazy, ReactNode } from 'react';

// Define the type for list item data
interface ListContainerProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  loadingComponent: ReactNode;
}

const ListItem = lazy(() => import('./ListItem'));

function ListContainer<T,>({ items, renderItem, loadingComponent }: ListContainerProps<T>) {
  return (
    <div className='max-h-80 w-full px-8 py-5 overflow-y-auto flex flex-col gap-3'>
      {/* create this search into a reusable component */}
      <input className='outline-none text-white p-3 text-xs rounded bg-neutral-900' placeholder='search templates 🔍' type="search" name="search" />
      <Suspense fallback={loadingComponent}>
        <ul className='flex flex-col gap-3'>
          {items.map((item, index) => (
            <ListItem key={index}>
              {renderItem(item)}
            </ListItem>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default ListContainer