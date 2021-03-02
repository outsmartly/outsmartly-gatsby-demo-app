import * as React from 'react';

export function FakeLink({ Component = 'a', children, ...rest }) {
  return (
    <Component
      {...rest}
      href="/"
      onClick={(event) => {
        event.preventDefault();

        alert(
          'This link does not go anywhere. This is a demo page for doing Edge Slice Rerendering with Outsmartly.',
        );
      }}
    >
      {children}
    </Component>
  );
}
