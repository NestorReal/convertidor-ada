import { Login } from '../Components/Login';
import { UploadFiles } from '../Components/UploadFiles/';

const routes = [
  { component: Login, path: '/', exact: true },
  { component: UploadFiles, path: '/UploadFiles', exact: true }
];

export { routes };
