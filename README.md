# Corodva-Preference-Plugin

# 1. Description

This plugin allows you to store information ( like username ). It uses Preferences in Android and NSUserDefaults in iPhone.

a) Works with PhoneGap >= 3.0.

b) Supported value types : String, int, boolean 

# 2. Installation


# iOS

1. Add the following xml to your config.xml:
    <feature name=“MyStore”>
    <param name="ios-package" value="AppPreferences" />
    </feature>

2. Grab a copy of plugins.js, add it to your project and reference it in index.html:

    <script type="text/javascript" src=“js/plugins.js"></script>

3. Download the source files for iOS and copy them to your project.

    Copy AppPreferences.h and AppPreferences.m to platforms/ios/<ProjectName>/Plugins

4. Click your project in Xcode, clean and build.

# Android

1. Add the following xml to your config.xml:

    <!-- for Android -->
    <feature name=“MyStore”>
        <param name="ios-package" value="AppPreferences" />
    </feature>

2. Grab a copy of plugins.js, add it to your project and reference it in index.html:
    <script type="text/javascript" src=“js/plugins.js"></script>

3. Download the source files for Android and copy them to your project.
    Android: Copy AppPreferences.java to platforms/android/src/com/vamsi/plugins (create the folders/packages).

# 3. Usage 

    var MyStore = cordova.require("com.vamsi.plugins.preferences”);

    function success (value) {alert('success'); }

    function failure (error) { alert('failure');}

    MyStore.save("userName","test","string",success,failure);

    MyStore.fetch("userName",success,failure);

    MyStore.remove("userName",success,failure);
