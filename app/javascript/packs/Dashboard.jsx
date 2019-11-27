import ReactOnRails from 'react-on-rails';
 
import Dashboard from '../bundles/Dashboard/components/Dashboard'
import Challenge from '../bundles/Challenge/components/Challenge'
import Landing from '../bundles/Landing/components/Landing'
import Tips from '../bundles/Tips/components/Tips'
import Leaderboard from '../bundles/Leaderboard/components/Leaderboard'
import Network from '../bundles/Network/components/Network'

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Dashboard,
  Challenge,
  Landing,
  Tips,
  Leaderboard,
  Network
})
