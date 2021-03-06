<p align="left">
<a href="https://www.npmjs.com/package/react-native-contact-multi-select"><img alt="npm version" src="https://img.shields.io/badge/npm-v1.0.4-green.svg"></a>
<a href="https://www.npmjs.com/package/react-native-contact-multi-select"><img src="https://img.shields.io/badge/downloads-%3E1K-yellow.svg"></a>
<a href="https://www.npmjs.com/package/react-native-contact-multi-select"<><img src="https://img.shields.io/badge/license-MIT-orange.svg"></a>
</p>

### React Native Contact Multi Select


[In this article](https://www.logisticinfotech.com/blog/react-native-multi-select-library/) you will get step by step details about the library and its implementations with your React Native project

# Guide

![](RNContactMultiSelect.gif)

### Properties

#### Basic

| Prop                | Default          | Type       | Description                                                                                                               |
| ------------------- | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| searchBgColor       | rgb(202,201,207) | `String`   | Background color of searchbar.                                                                                            |
| searchPlaceholder   | Search...        | `String`   | Searchbar placeholder text.                                                                                               |
| viewCloseStyle      | {}               | `style`    | Style of the remove selected contact icon style.                                                                          |
| viewCheckMarkStyle  | {}               | `style`    | Style of the selected contact tick icon style .                                                                           |
| sepratorStyle       | {}               | `style`    | Style of the contact list seprator.                                                                                       |
| viewSepratorStyle   | {}               | `style`    | Style of the selected list and list seprator .                                                                            |
| otherContactList    | []               | `Array`    | Array of other contacts if need to add [{fullname:"Logistic Infotech",phonenumber:"123456789",avatar:"avatar path/url"}]. |
| onContactSelected   | () => {}         | `function` | Return contact item when selected.                                                                                        |
| onContactRemove     | () => {}         | `function` | Return contact item when removed from selected list.                                                                      |
| getSelectedContacts | --               | --         | Return list of the selected contacts.                                                                                     |
