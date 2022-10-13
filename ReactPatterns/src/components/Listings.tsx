import React from 'react';
import withLoader from '../patterns/hoc/withLoader';

import { Listing } from './List';
import { ListingsGrid } from './ListingsGrid';

export function ListingsLayout({ data }) {
  return (
    <ListingsGrid>
      {data.map((listing, i) => (
        <Listing listing={listing} key={i}/>
      ))}
    </ListingsGrid>
  );
}

const Listings = withLoader(ListingsLayout, 'https://house-lydiahallie.vercel.app/api/listings');
export default Listings;
