import * as React from 'react';

import { FlyOut } from '../../components/Input';

export default function Compound() {
  return (
    <div className="card">
      <FlyOut>
        <FlyOut.Input placeholder="Enter an address, city, or ZIP code" />
        <FlyOut.List>
          <FlyOut.Item value="San Francisco, CA">San Francisco, CA</FlyOut.Item>
          <FlyOut.Item value="Seattle, WA">Seattle, WA</FlyOut.Item>
          <FlyOut.Item value="Austin, TX">Austin, TX</FlyOut.Item>
          <FlyOut.Item value="Miami, FL">Miami, FL</FlyOut.Item>
          <FlyOut.Item value="Boulder, CO">Boulder, CO</FlyOut.Item>
        </FlyOut.List>
      </FlyOut>
    </div>
  );
}
