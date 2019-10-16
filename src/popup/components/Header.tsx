import * as React from 'react';
import InfoButton from './InfoButton';

export interface HeaderProps {
  toggleInfoDisplay: () => void,
  shouldInfoDisplay: boolean,
}

export default ({ shouldInfoDisplay, toggleInfoDisplay }: HeaderProps) => (
  <div id="header">
    Cypress Recorder
    <InfoButton shouldInfoDisplay={shouldInfoDisplay} toggleInfoDisplay={toggleInfoDisplay} />
  </div>
);
