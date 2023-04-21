import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { WorkComponent } from './content/work/work.component';
import { OffshoreComponent } from './content/offshore/offshore.component';
import { CareerComponent } from './content/career/career.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { ServicesComponent } from './content/services/services.component';
import { WebDevelopmentComponent } from './content/services/web-development/web-development.component';
import { MobileDevelopmentComponent } from './content/services/mobile-development/mobile-development.component';
import { UiUxDesignComponent } from './content/services/ui-ux-design/ui-ux-design.component';
import { GraphicDesignComponent } from './content/services/graphic-design/graphic-design.component';
import { DigitalMarketingComponent } from './content/services/digital-marketing/digital-marketing.component';
import { SalesFunnelComponent } from './content/services/sales-funnel/sales-funnel.component';
import { AngularDevelopmentComponent } from './content/services/web-development/angular-development/angular-development.component';
import { ReactjsDevelopmentComponent } from './content/services/web-development/reactjs-development/reactjs-development.component';
import { NodejsDevelopmentComponent } from './content/services/web-development/nodejs-development/nodejs-development.component';
import { PythonDevelopmentComponent } from './content/services/web-development/python-development/python-development.component';
import { Html5DevelopmentComponent } from './content/services/web-development/html5-development/html5-development.component';
import { WordpressDevelopmentComponent } from './content/services/web-development/wordpress-development/wordpress-development.component';
import { MagentoDevelopmentComponent } from './content/services/web-development/magento-development/magento-development.component';
import { WoocommerceDevelopmentComponent } from './content/services/web-development/woocommerce-development/woocommerce-development.component';
import { ShopifyDevelopmentComponent } from './content/services/web-development/shopify-development/shopify-development.component';
import { CmsWebsiteDevelopmentComponent } from './content/services/web-development/cms-website-development/cms-website-development.component';
import { MongodbDatabaseDesignComponent } from './content/services/web-development/mongodb-database-design/mongodb-database-design.component';
import { MysqlDatabaseDesignComponent } from './content/services/web-development/mysql-database-design/mysql-database-design.component';
import { IosAppDevelopmentComponent } from './content/services/mobile-development/ios-app-development/ios-app-development.component';
import { AndroidAppDevelopmentComponent } from './content/services/mobile-development/android-app-development/android-app-development.component';
import { HybridAppDevelopmentComponent } from './content/services/mobile-development/hybrid-app-development/hybrid-app-development.component';
import { FlutterAppDevelopmentComponent } from './content/services/mobile-development/flutter-app-development/flutter-app-development.component';
import { MobileAppDesignComponent } from './content/services/ui-ux-design/mobile-app-design/mobile-app-design.component';
import { WebsiteDesignComponent } from './content/services/ui-ux-design/website-design/website-design.component';
import { WebAppDesignComponent } from './content/services/ui-ux-design/web-app-design/web-app-design.component';
import { GameDesignComponent } from './content/services/ui-ux-design/game-design/game-design.component';
import { LogoDesignComponent } from './content/services/graphic-design/logo-design/logo-design.component';
import { BrandingDesignComponent } from './content/services/graphic-design/branding-design/branding-design.component';
import { MockupsDesignComponent } from './content/services/graphic-design/mockups-design/mockups-design.component';
import { InfographicDesignComponent } from './content/services/graphic-design/infographic-design/infographic-design.component';
import { SocialMediaPostDesignComponent } from './content/services/graphic-design/social-media-post-design/social-media-post-design.component';
import { BannerDesignComponent } from './content/services/graphic-design/banner-design/banner-design.component';
import { SeoComponent } from './content/services/digital-marketing/seo/seo.component';
import { SemPpcComponent } from './content/services/digital-marketing/sem-ppc/sem-ppc.component';
import { SmmComponent } from './content/services/digital-marketing/smm/smm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      
      // { path: 'services', loadChildren: () => import('../app/content/services/services.module').then(m => m.ServicesModule) },
      { path: 'services', component: ServicesComponent,
      children: [
        { path: 'web-development', component: WebDevelopmentComponent },
      ]
    },
    
          { path: 'services/web-development/angular-development', component: AngularDevelopmentComponent },
          { path: 'services/web-development/reactjs-development', component: ReactjsDevelopmentComponent },
          { path: 'services/web-development/nodejs-development', component: NodejsDevelopmentComponent },
          { path: 'services/web-development/python-development', component: PythonDevelopmentComponent },
          { path: 'services/web-development/html5-development', component: Html5DevelopmentComponent },
          { path: 'services/web-development/wordpress-development', component: WordpressDevelopmentComponent },
          { path: 'services/web-development/magento-development', component: MagentoDevelopmentComponent },
          { path: 'services/web-development/woocommerce-development', component: WoocommerceDevelopmentComponent },
          { path: 'services/web-development/shopify-development', component: ShopifyDevelopmentComponent },
          { path: 'services/web-development/cms-website-development', component: CmsWebsiteDevelopmentComponent },
          { path: 'services/web-development/mongodb-database-design', component: MongodbDatabaseDesignComponent },
          { path: 'services/web-development/mysql-database-design', component: MysqlDatabaseDesignComponent },
        { path: 'services/mobile-app-development', component: MobileDevelopmentComponent },
          { path: 'services/mobile-app-development/ios-app-development', component: IosAppDevelopmentComponent },
          { path: 'services/mobile-app-development/android-app-development', component: AndroidAppDevelopmentComponent },
          { path: 'services/mobile-app-development/hybrid-app-development', component: HybridAppDevelopmentComponent },
          { path: 'services/mobile-app-development/flutter-app-development', component: FlutterAppDevelopmentComponent },
          { path: 'services/mobile-app-development/react-native-app-development', component: ReactjsDevelopmentComponent },
        { path: 'services/ui-ux-design', component: UiUxDesignComponent },
          { path: 'services/ui-ux-design/mobile-app-design', component: MobileAppDesignComponent },
          { path: 'services/ui-ux-design/website-design', component: WebsiteDesignComponent },
          { path: 'services/ui-ux-design/web-app-design', component: WebAppDesignComponent },
          { path: 'services/ui-ux-design/game-design', component: GameDesignComponent },
          { path: 'services/ui-ux-design/website-revamp-design', component: WebsiteDesignComponent },
        { path: 'services/graphic-design', component: GraphicDesignComponent },
          { path: 'services/graphic-design/logo-design', component: LogoDesignComponent },
          { path: 'services/graphic-design/branding-design', component: BrandingDesignComponent },
          { path: 'services/graphic-design/mockups-design', component: MockupsDesignComponent },
          { path: 'services/graphic-design/infographic-design', component: InfographicDesignComponent },
          { path: 'services/graphic-design/social-media-post-design', component: SocialMediaPostDesignComponent },
          { path: 'services/graphic-design/banner-design', component: BannerDesignComponent },
        { path: 'services/digital-marketing', component: DigitalMarketingComponent },
          { path: 'services/digital-marketing/seo', component: SeoComponent },
          { path: 'services/digital-marketing/sem-ppc', component: SemPpcComponent },
          { path: 'services/digital-marketing/smm', component: SmmComponent },
        { path: 'services/sales-funnels-design', component: SalesFunnelComponent },

      { path: 'work', component: WorkComponent },
        { path: 'work/portfolio', component: WorkComponent },
        { path: 'work/testimonials', component: WorkComponent },

      { path: 'offshore', component: OffshoreComponent },
      { path: 'career', component: CareerComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ]
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
