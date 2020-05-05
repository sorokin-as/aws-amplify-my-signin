import { createStackNavigator } from 'react-navigation'
import ScreenMaps from './ScreenMaps'
import { SCREEN_MAPS } from '../routes'

export default createStackNavigator(
    {
        [SCREEN_MAPS]: ScreenMaps
    },
    {
        headerMode: 'none'
    }
)
