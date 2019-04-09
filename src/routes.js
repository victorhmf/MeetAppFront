import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Signin from '~/pages/Signin';

const Routes = createAppContainer(createSwitchNavigator({ Signin }));

export default Routes;
