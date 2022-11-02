import React from 'react';

const FlyOutContext = React.createContext<{ value: string, toggle: () => void, open: boolean, setValue: React.Dispatch<React.SetStateAction<string>> }>({setValue: (value) => value, open: false, value: "", toggle: () => {}});

function FlyOut(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      <div className="flyout">{props.children}</div>
    </FlyOutContext.Provider>
  );
}

function Input(props) {
  const { value, toggle } = React.useContext(FlyOutContext);

  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      {...props}
    />
  );
}

function List({ children }) {
  const { open } = React.useContext(FlyOutContext);

  return (
    open ? (
      <div className="flyout-list">
        <ul>{children}</ul>
      </div>
    ):<div/>
  );
}

function Item({ children, value }) {
  const { setValue } = React.useContext(FlyOutContext);

  return (
    <li
      onMouseDown={() => {
        setValue(value);
      }}
      className="flyout-list-item"
    >
      {children}
    </li>
  );
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.Item = Item;

export { FlyOut };
