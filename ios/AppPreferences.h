//
//  AppPreferences.h
//  CordovaLib
//
//  Created by Vamsi on 4/6/16.
//
//


#import <Foundation/Foundation.h>

#import <Cordova/CDV.h>

@interface AppPreferences : CDVPlugin

- (void)defaultsChanged:(NSNotification *)notification;
- (void)watch:(CDVInvokedUrlCommand*)command;
- (void)fetch:(CDVInvokedUrlCommand*)command;
- (void)remove:(CDVInvokedUrlCommand*)command;
- (void)clearAll:(CDVInvokedUrlCommand*)command;
- (void)show:(CDVInvokedUrlCommand*)command;
- (void)store:(CDVInvokedUrlCommand*)command;
- (NSString*)getSettingFromBundle:(NSString*)settingsName;


@end