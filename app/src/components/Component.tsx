import * as React from 'react';
import {useStore, useAction} from 'easy-peasy';

interface Props extends React.Props<any> {
  name: String  
}

export const Component: React.FC<Props> = ({name}) => {
  const tickets = useStore(state => state.items.tickets)

  return (
    <ul>
      {tickets.map((ticket, i) => (
        <li key={i} style={{padding: '10px'}}>
          {ticket}
        </li>
      )
    )}
  </ul>
  )
};

