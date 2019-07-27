// Type definitions for react-native-modal-dropdown 0.6
// Project: https://github.com/sohobloo/react-native-modal-dropdown
// Definitions by: Carlos Li <https://github.com/echoulen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

import Contact = RNContact.Contact;
export = Contact;

declare namespace RNContact {
  interface ContactProps {
    otherContactList?: Array<Object>;
    viewCloseStyle?: StyleSheet;
    viewCheckMarkStyle?: StyleSheet;
    sepratorStyle?: StyleSheet;
    viewSepratorStyle?: StyleSheet;
    searchBgColor?: String;
    searchPlaceholder?: String;
    onContactSelected?: (item: object) => void;
    onContactRemove?: (index: object) => void;
  }

  class Contact extends React.Component<ContactProps> {
    static default: typeof Contact;
  }
}
