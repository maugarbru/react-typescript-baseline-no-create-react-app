import * as React from 'react';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = ({ userName, lang }: HelloWorldProps): JSX.Element => (
  <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
    <div className="sm:flex sm:items-center px-6 py-4">
      <img
        className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
        src="https://plchldr.co/i/100x100"
        alt=""
      />
      <div className="text-center sm:text-left sm:flex-grow">
        <div className="mb-4">
          <p className="text-xl leading-tight">{userName}</p>
          <p className="text-sm leading-tight text-grey-dark">
            Developed with {lang}.
          </p>
        </div>
        <div>
          <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
            Message
          </button>
        </div>
      </div>
    </div>
  </div>
);
