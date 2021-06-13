export default {
  "en": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "cs": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "de": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "es": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "fr": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "it": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "ja": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "ko": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "no": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "pl": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "pt-BR": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "ru": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "sk": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "tr": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "zh-CN": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "zh-Hans": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  },
  "zh-Hant": {
    "keyboard:hotkey": {
      "icon": 60839,
      "description": "Triggers when you press a specific hotkey.",
      "detailedDescription": "Use this trigger to attach a keyboard shortcut to a recipe.",
      "displayName": "Hotkey",
      "arguments": {
        "hotkey": {
          "title": "Hotkey",
          "description": "The keyboard combination you want to use to trigger this recipe.",
          "defaultDescription": "None"
        }
      }
    },
    "maxto:regions_changed": {
      "icon": 59249,
      "description": "Triggers when MaxTo's regions are changed.",
      "detailedDescription": "Use this trigger to run a recipe when MaxTo changes the active regions.",
      "displayName": "Regions changed",
      "arguments": {}
    },
    "maxto:started": {
      "icon": 59240,
      "description": "Triggers when MaxTo has started.",
      "detailedDescription": "Use this trigger to run something when MaxTo has been successfully started. This trigger will also be useful to run a recipe when Windows starts, if MaxTo is set to start with Windows.",
      "displayName": "MaxTo startup",
      "arguments": {}
    },
    "monitor:changed": {
      "icon": 60535,
      "description": "Triggers when a monitor is changed.",
      "detailedDescription": "Use this trigger when you want to respond to changes in the monitor configuration. This trigger will run if a monitor changes its resolution or DPI scaling settings, or whenever a monitor is connected or disconnected.",
      "displayName": "Monitor configuration changed",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:connected": {
      "icon": 59380,
      "description": "Triggers when a monitor is connected to the machine.",
      "detailedDescription": "Use this trigger to run a recipe when a new monitor is connected to the machine.",
      "displayName": "Monitor connected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "monitor:disconnected": {
      "icon": 59924,
      "description": "Triggers when a monitor is disconnected.",
      "detailedDescription": "Use this trigger to run a recipe when a monitor is disconnected from the machine.",
      "displayName": "Monitor disconnected",
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Which monitor should this event fire for? You can specify monitors in multiple ways:\r\n- Monitor number (as set by Windows)\r\n- Serial number\r\n- Device name (e.g. `\\\\.\\DISPLAY1`)\r\n- Friendly name (e.g. `Dell U3011`)\r\n- `$primary` is the primary monitor\r\n- `$current` is the monitor with the foreground window",
          "defaultDescription": "Any monitor"
        }
      }
    },
    "network:connected": {
      "icon": 59449,
      "description": "Triggers when a network connects.",
      "detailedDescription": "Use this trigger to run a recipe when a network connects.",
      "displayName": "Network connected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "network:disconnected": {
      "icon": 60245,
      "description": "Triggers when a network disconnects.",
      "detailedDescription": "Use this trigger to run a recipe when a network disconnects.",
      "displayName": "Network disconnected",
      "arguments": {
        "adapter": {
          "title": "Adapter name",
          "description": "The name of the network adapter connected or disconnected.",
          "defaultDescription": "Any adapter"
        }
      }
    },
    "virtualdesktop:changed": {
      "icon": 62957,
      "description": "Triggers when the virtual desktop changes.",
      "detailedDescription": "Use this trigger to run a recipe when the current virtual desktop is changed.",
      "displayName": "Virtual desktop changed",
      "arguments": {}
    },
    "virtualdesktop:created": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is created.",
      "detailedDescription": "Use this trigger to run a recipe when a new virtual desktop is created.",
      "displayName": "Virtual desktop created",
      "arguments": {}
    },
    "virtualdesktop:deleted": {
      "icon": 62957,
      "description": "Triggers when a virtual desktop is deleted.",
      "detailedDescription": "Use this trigger to run a recipe when a virtual desktop is deleted.",
      "displayName": "Virtual desktop deleted",
      "arguments": {}
    },
    "window:activated": {
      "icon": 59552,
      "description": "Triggers when a window gains focus.",
      "detailedDescription": "Use this trigger to run a recipe when a window gains focus.",
      "displayName": "Window activated",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:maximized": {
      "icon": 59682,
      "description": "Triggers when a window is maximized.",
      "detailedDescription": "Use this trigger to run a recipe when a window is maximized (to the entire monitor).",
      "displayName": "Window maximized",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:moved": {
      "icon": 59225,
      "description": "Triggers when a window has moved.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been moved.",
      "displayName": "Window moved",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:opened": {
      "icon": 59275,
      "description": "Triggers when a window has been created.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been opened the first time.\r\n\r\nThis does not trigger if the window is created as an invisible window, which is more common than you may think. In that case you may want to use the \"Window shown\" trigger instead.",
      "displayName": "Window created",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:placed": {
      "icon": 59551,
      "description": "Triggers when a window has been placed in a region.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been placed in a region.",
      "displayName": "Window placed in region",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:restored": {
      "icon": 59683,
      "description": "Triggers when a window has been restored.",
      "detailedDescription": "Use this trigger to run a recipe when a window has been restored.",
      "displayName": "Window restored",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "window:shown": {
      "icon": 59275,
      "description": "Triggers when a window is shown.",
      "detailedDescription": "Use this to trigger when a window is shown.\r\n\r\nThis does not necessarily mean it is a new window, as a window can be hidden and shown multiple times. If you want to trigger only the first time a window is shown, it may be more relevant to look at the \"Window created\" (`window:opened`) trigger instead.",
      "displayName": "Window shown",
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Which window do you want this trigger to respond to? Defaults to any window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Any window"
        }
      }
    },
    "windows:locked": {
      "icon": 59182,
      "description": "Triggers when the Windows desktop has been locked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is locked.",
      "displayName": "Windows desktop locked",
      "arguments": {}
    },
    "windows:unlocked": {
      "icon": 59269,
      "description": "Triggers when Windows is unlocked.",
      "detailedDescription": "Use this trigger to run a recipe when Windows is unlocked.",
      "displayName": "Window desktop unlocked",
      "arguments": {}
    }
  }
}