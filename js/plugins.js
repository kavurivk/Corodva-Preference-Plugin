/**
 * All Cordova plugins 
 *
 * Created by Vamsi 
 */

cordova.define("com.vamsi.plugins.preferences", function(require, exports, module) {
    var exec = require('cordova/exec');

    var Preferences = function() {};

    Preferences.prototype.save = function(key, value, type, successCallback, errorCallback) {
    		exec(
   	            successCallback, // success callback function
   	            errorCallback, // error callback function
   	            'MyStore',// mapped to our native Java class called "AppPreferences"
   	            'store', // with this action name
   	            [{ 
   	            	"key": key,
   	            	"value": value,
   	            	"type" : type
   	            }]
   	        );
    }

    Preferences.prototype.fetch = function(key, successCallback, errorCallback) {
    		exec(
   	            successCallback, // success callback function
   	            errorCallback, // error callback function
   	            'MyStore', // mapped to our native Java class called "AppPreferences"
   	            'fetch', // with this action name
   	            [{                  
   	            	 "key": key
   	            }]
   	        );
    }

    Preferences.prototype.remove = function(key, successCallback, errorCallback) {
    		exec(
   	            successCallback, // success callback function
   	            errorCallback, // error callback function
   	            'MyStore', // mapped to our native Java class called "AppPreferences"
   	            'remove', // with this action name
   	            [{                
   	                "key": key
   	            }]
   	        );
    }

    var preferences = new Preferences();
    module.exports = preferences;
});