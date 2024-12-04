// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

import routesConfig from '~/config/routes';


// public routes
const publicRoutes =[
    {path: routesConfig.home, component: Home},            
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.path, component: Search, layout: null}                  
]   

const privateRoutes = [
     
]

export {publicRoutes, privateRoutes}