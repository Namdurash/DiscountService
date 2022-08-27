import * as React from 'react';
import {Provider} from 'react-redux';

import {setupStore} from './rootStore';

export const RootProvider: React.FC<React.PropsWithChildren> = ({children}) => (
  <Provider store={setupStore()}>{children}</Provider>
);
