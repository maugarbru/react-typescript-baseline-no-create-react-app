import * as React from 'react';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = ({ userName, lang }: HelloWorldProps): JSX.Element => (
  <h1>
    Hi {userName}! Welcome to React + {lang}!
  </h1>
);
