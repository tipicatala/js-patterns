import React from 'react';
import { useDataContext } from '../patterns/hook/useDataContext';

export default function Input(props) {
  const listingData = useDataContext();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <div className="flyout">
      <input
        onFocus={toggle}
        onBlur={toggle}
        onChange={(e) => setValue(e.target.value)}
        className="flyout-input"
        value={value}
        placeholder="Enter an address, city ,or ZIP code"
        {...props}
      />
      {open && listingData && (
        <div className="flyout-list">
          <ul>
            {listingData.listings.map((listing) => (
              <li
                key={listing.id}
                onMouseDown={() => {
                  setValue(listing.name);
                }}
                className="flyout-list-item"
              >
                {listing.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
