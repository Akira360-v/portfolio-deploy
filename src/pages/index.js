import './404';
import initHome from './home';
import initAbout from './about';
import initProjects from './projects';
import initReviews from './reviews';
import initContacts from './contacts';

// import initExample from './example'; // need remove;

export default () => {
  console.log('init pages');
  initHome();
  initAbout();
  initProjects();
  initReviews();
  initContacts();

  // initExample();
};
