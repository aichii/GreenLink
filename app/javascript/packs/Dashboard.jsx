import ReactOnRails from 'react-on-rails';
 
import Dashboard from '../bundles/Dashboard/components/Dashboard';
import Challenge from '../bundles/Challenge/components/Challenge';

// This is how react_on_rails can see the Search in the browser.
ReactOnRails.register({
  Dashboard, Challenge
});
