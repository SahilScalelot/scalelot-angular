import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { OurTopServiceComponent } from './layouts/our-top-service/our-top-service.component';
import { ProcessWeFollowComponent } from './layouts/process-we-follow/process-we-follow.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ServicesComponent } from './content/services/services.component';
import { WorkComponent } from './content/work/work.component';
import { OffshoreComponent } from './content/offshore/offshore.component';
import { CareerComponent } from './content/career/career.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
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
import { ReactNativeAppDevelopmentComponent } from './content/services/mobile-development/react-native-app-development/react-native-app-development.component';
import { MobileAppDesignComponent } from './content/services/ui-ux-design/mobile-app-design/mobile-app-design.component';
import { WebsiteDesignComponent } from './content/services/ui-ux-design/website-design/website-design.component';
import { WebAppDesignComponent } from './content/services/ui-ux-design/web-app-design/web-app-design.component';
import { GameDesignComponent } from './content/services/ui-ux-design/game-design/game-design.component';
import { WebsiteRevampDesignComponent } from './content/services/ui-ux-design/website-revamp-design/website-revamp-design.component';
import { LogoDesignComponent } from './content/services/graphic-design/logo-design/logo-design.component';
import { BrandingDesignComponent } from './content/services/graphic-design/branding-design/branding-design.component';
import { MockupsDesignComponent } from './content/services/graphic-design/mockups-design/mockups-design.component';
import { InfographicDesignComponent } from './content/services/graphic-design/infographic-design/infographic-design.component';
import { SocialMediaPostDesignComponent } from './content/services/graphic-design/social-media-post-design/social-media-post-design.component';
import { BannerDesignComponent } from './content/services/graphic-design/banner-design/banner-design.component';
import { SeoComponent } from './content/services/digital-marketing/seo/seo.component';
import { SemPpcComponent } from './content/services/digital-marketing/sem-ppc/sem-ppc.component';
import { SmmComponent } from './content/services/digital-marketing/smm/smm.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurTopServiceComponent,
    ProcessWeFollowComponent,
    AboutUsComponent,
    ServicesComponent,
    WorkComponent,
    OffshoreComponent,
    CareerComponent,
    ContactUsComponent,
    AngularDevelopmentComponent,
    ReactjsDevelopmentComponent,
    NodejsDevelopmentComponent,
    PythonDevelopmentComponent,
    Html5DevelopmentComponent,
    WordpressDevelopmentComponent,
    MagentoDevelopmentComponent,
    WoocommerceDevelopmentComponent,
    ShopifyDevelopmentComponent,
    CmsWebsiteDevelopmentComponent,
    MongodbDatabaseDesignComponent,
    MysqlDatabaseDesignComponent,
    IosAppDevelopmentComponent,
    AndroidAppDevelopmentComponent,
    HybridAppDevelopmentComponent,
    FlutterAppDevelopmentComponent,
    ReactNativeAppDevelopmentComponent,
    MobileAppDesignComponent,
    WebsiteDesignComponent,
    WebAppDesignComponent,
    GameDesignComponent,
    WebsiteRevampDesignComponent,
    LogoDesignComponent,
    BrandingDesignComponent,
    MockupsDesignComponent,
    InfographicDesignComponent,
    SocialMediaPostDesignComponent,
    BannerDesignComponent,
    SeoComponent,
    SemPpcComponent,
    SmmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
