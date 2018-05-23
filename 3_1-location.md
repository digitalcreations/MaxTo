---
title: Configuration location
---

# Changing where your configuration is stored

MaxTo allows you to change where your configuration files are stored. This functionality is not exposed in the user interface, so you are working in advanced territory here.

MaxTo will look for a `config.location` file in the following folders, in this order, and use the first file it finds:

1. `%AppData%\MaxTo`
2. Next to the `.exe` file
3. `%LocalAppData\MaxTo` (which is where MaxTo will be installed)

If MaxTo cannot find that file in any of those locations, it will use `%AppData%\MaxTo` as the default settings location.

The `config.location` file should be a text file and only contain a folder path. You can use environment variables here, so `%USERPROFILE%\Dropbox` is perfectly valid.

Note that MaxTo's settings are designed to be roamed, and putting your configuration in a Dropbox folder should work well.

If you want to use MaxTo as a [portable application](https://en.wikipedia.org/wiki/Portable_application), you can enter only `.\settings` in this file, and MaxTo will store the configuration in the `settings` subdirectory next to the executable.

:::aside

The `config.location` file supports [environment variables(https://en.wikipedia.org/wiki/Environment_variable). Some environment variables point to specific locations on your machine:

`%AppData%`
:   The user directory where programs can store settings that will be moved between computers where the same user is logged in. This is known as roaming. Usually something like `C:\Users\username\AppData\Roaming`.

`%LocalAppData%`
:   The user directory where programs can store settings that is only kept on this computer. Usually something like `C:\Users\username\AppData\Local`.

`%UserProfile%`. 
:   The user directory. Usually something like `C:\Users\username`.

:::