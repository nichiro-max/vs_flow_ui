// components/ListItem.tsx

import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
}   

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <li className='border-[1px] border-neutral-700 p-3 rounded'>{children}</li>;
};

export default ListItem;
