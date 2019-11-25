import ReactOnRails from 'react-on-rails';
 
import Dashboard from '../bundles/Dashboard/components/Dashboard';
import Challenge from '../bundles/Challenge/components/Challenge';
import Landing from '../bundles/Landing/components/Landing';
import Leaderboard from '../bundles/Leaderboard/components/Leaderboard';
// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Dashboard,
  Challenge,
  Landing,
  Leaderboard
});
