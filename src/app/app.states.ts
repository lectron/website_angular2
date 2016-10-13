import {AppPageComponent} from "./pages/app-page/app-page.component";
import {Ng2StateDeclaration, loadNgModule} from "ui-router-ng2";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
/** The top level state(s) */
export let APP_STATES: Ng2StateDeclaration[] = [
  // The top-level app state.
  // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
  { name: 'minecraftly', component: AppPageComponent },

  { name: 'minecraftly.home', url: '', component: HomePageComponent },

  { name: 'minecraftly.about', url: 'about', component: AboutPageComponent }

];
