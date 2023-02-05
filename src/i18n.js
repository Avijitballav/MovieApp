import { I18nManager } from 'react-native';
import I18n from 'react-native-i18n';
import en from './locales/en';
import ar from './locales/ar';
import AsyncStorage from '@react-native-community/async-storage';
/*
    We are very likely not to have all the languages translated,
    so fallback to default locale in case we don't
 */
I18n.fallbacks = true;
I18n.translations = {
  en,
  ar,
};

I18n.defaultLocale = 'en';

AsyncStorage.getItem('language').then((value) => {
    if(value == "Arabic"){
        I18n.locale = 'ar';
    }else{
        I18n.locale = 'en';
    }
}).done();

//I18n.locale = I18nManager.isRTL ? 'ar' : 'en';

/*
    Only allow RTL if we have translations for RTL languages (ie. not fallbacks)
*/
I18nManager.allowRTL(true);
I18nManager.forceRTL(false);

/*
    Set start/end for developer use in non-RTL aware cases,
    for example, when using 'react-native-navigation':

        this.props.navigator.toggleDrawer({
            side: I18n.start, //instead of hardcoing left/right
            animated: true
        });
 */
I18n.start = I18nManager.isRTL ? 'right' : 'left';
I18n.end = I18nManager.isRTL ? 'left' : 'right';
I18n.isRTL=I18nManager.isRTL; 

// I18n.start = 'left' ;
// I18n.end = 'right' ;
// I18n.isRTL = true;
export default I18n;
