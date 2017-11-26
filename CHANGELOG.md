# CHANGELOG

This changelog references the relevant changes done between versions.

To get the diff for a specific change, go to https://github.com/FriendsOfECMAScript/BenGorCookies/commit/XXX where XXX is the change hash 
To get the diff between two versions, go to https://github.com/FriendsOfECMAScript/BenGorCookies/compare/v0.8.0...v0.9.0

* 0.9.0
    * Removed support for node5 in TravisCI.
    * Removed non strict equals statements from `CookiesHelper.js`.
    * Removed Bower support.
    * Rewritten all the code related to dependencies, webpack and distribution packages generation.
    * Ignored yarn-error.log and package-lock.json files.
    * Added node7 and node8 compatiblity in the TravisCI.
    * Removed more use strict statements.
    * Updated license headers.
    * Fixed GFM typos.
* 0.8.0
    * Added `onAcceptCallback` property to the Cookies constructor.
