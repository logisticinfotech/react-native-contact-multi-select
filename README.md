<p align="left">
<a href="https://www.npmjs.com/package/react-native-contact-multi-select"><img alt="npm version" src="https://img.shields.io/badge/npm-v1.0.0-green.svg"></a>
<a href="https://www.npmjs.com/package/react-native-contact-multi-select"><img src="https://img.shields.io/badge/downloads-%3E1K-yellow.svg"></a>
<a href="https://www.npmjs.com/package/react-native-contact-multi-select"<><img src="https://img.shields.io/badge/license-MIT-orange.svg"></a>
</p>

### React Native Contact Multi Select

## Npm repo
https://www.npmjs.com/package/react-native-contact-multi-select

## Git repo
https://github.com/logisticinfotech/react-native-contact-multi-select

# Guide

# Installation
```
To use this module you need to install it and configure the permissions. Please read the below entire section.

npm i react-native-contact-multi-select

react-native link react-native-contacts

```
# Configure your project 

## iOS
```
1. Add kit specific "permission" keys to your Xcode Info.plist file, in order to make requestPermission work. Otherwise your app crashes when requesting the specific permission. Open Info.plist. Add key Privacy - Contacts Usage Description with your kit specific permission. The value for the key is optional in development. If you submit to the App Store the value must explain why you need this permission.
```
![](PlistImage.png)
# Usage
```
import Contacts from "react-native-contact-multi-select";

...
getContact = () => {
    console.log(this.test.getSelectedContacts());
};
...
<Contacts 
    ref={ref => {
        this.test = ref;
    }}
/>
<Button onPress={this.getContact}/>

```

![](RNContactMultiSelect.gif)

### Properties

#### Basic

| Prop | Default | Type | Description |
| ------ | -------- | ----- | ------------- |
| searchBgColor |  rgb(202,201,207) | `String` | Background color of searchbar.  |
| searchPlaceholder | Search... | `String` | Searchbar placeholder text. |
| viewCloseStyle | null | `style` | Style of the remove selected contact icon style. |
| viewCheckMarkStyle | null | `style` | Style of the selected contact tick icon style . |
| sepratorStyle | null | `style` | Style of the contact list seprator. |
| viewSepratorStyle | null | `style` | Style of the selected list and list seprator . |
| otherContactList | [] | `Array` | Array of other contacts if need to add [{fullname:"Logistic Infotech",phonenumber:"123456789",avatar:"avatar path/url"}]. |
| onContactSelected | () => {} | `function` | Return contact item when selected. |
| onContactRemove | () => {} | `function` | Return contact item when removed from selected list. |
| getSelectedContacts | -- | -- | Return list of the selected contacts. | 
