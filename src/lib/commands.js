export default {
  "en": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "cs": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "de": {
    "license:apply": {
      "icon": 59182,
      "description": "Registriere MaxTo sofort mit einem Lizenzschlüssel",
      "detailedDescription": "Wendet eine MaxTo Lizenz sofort an.",
      "displayName": "Lizenz benutzen",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Lizenzschlüssel",
          "description": "Der zu verwendende Lizenzschlüssel",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Entfernt aktive Lizenz.",
      "detailedDescription": "Entfernt aktive Lizenz.",
      "displayName": "Lizenz entfernen",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Zeigt Details zur aktuellen Lizenz. Der Lizenzschlüssel wird nicht ausgegeben.",
      "detailedDescription": "Zeigt Details zur aktuellen Lizenz. Der Lizenzschlüssel wird nicht ausgegeben.",
      "displayName": "Prüfe ob MaxTo lizensiert ist.",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Lade eine Voreinstellung auf einen Monitor",
      "detailedDescription": "Lade eine Regions-Voreinstellung auf einen Monitor.",
      "displayName": "Lade Voreinstellung",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Standardeinstellung für den Monitor, in dem sich das Fenster gerade befindet.\r\n\r\nSie können Monitore finden, indem Sie deren Nummer, deren Monitor-Handle (HMONITOR, als Hexadezimalformat, formatiert als 0xdeadbeef), oder mit ihrem genauen Gerätenamen (\"\\\\.\\DISPLAY1\"), ihrer Seriennummer oder Anzeigenamen angeben.",
          "defaultDescription": "Aktiver Monitor"
        },
        "name": {
          "title": "Name der Voreinstellung",
          "description": "Name der zu ladenden Voreinstellung.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Kurzzeitiges Hervorheben der Regionen",
      "detailedDescription": "Verwenden Sie diese Option, um schnell einen Überblick der derzeit aktiven Regionen zu erhalten.",
      "displayName": "Regionen hervorheben",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Standardeinstellung für alle Monitore.\r\n\r\nSie können Monitore finden, indem Sie deren Nummer, deren Monitor-Handle (HMONITOR, als Hexadezimalformat, formatiert als 0xdeadbeef), oder mit ihrem genauen Gerätenamen (\"\\\\.\\DISPLAY1\"), ihrer Seriennummer oder Anzeigenamen angeben.",
          "defaultDescription": "Alle Monitore"
        },
        "timeout": {
          "title": "Zeitüberschreitung in Millisekunden.",
          "description": "Anzahl der Millisekunden, die gewartet wird, bevor die Hervorhebung ausgeblendet wird.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Verschiebe ein Fenster",
      "detailedDescription": "Verschiebt das aktuelle Vordergrund-Fenster (oder ein bestimmtes Fenster mit dem Schalter /Window).",
      "displayName": "Verschiebe Fenster",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Fenster",
          "description": "Standardeinstellung für das aktuelle Vordergrund-Fenster\r\n\r\nSie können Fenster anhand des genauen Fenstertitels, der genauen Fensterklasse oder des Fensterhandles (in hexadezimaler Form, formatiert als \"0xdeadbeef\") suchen.",
          "defaultDescription": "Vordergrund-Fenster"
        },
        "virtualDesktop": {
          "title": "Virtueller Desktop",
          "description": "Die virtuelle Desktopnummer, zu der das Fenster verschoben werden soll. Der aktive virtuelle Desktop wechselt als Nebeneffekt.",
          "defaultDescription": "Aktiver virtueller Desktop"
        },
        "region": {
          "title": "Region",
          "description": "In welche Region soll das Fenster eingefügt werden?\r\n\r\nGeben Sie Regionen an, indem Sie relative Koordinaten verwenden, die durch ein Komma voneinander getrennt sind, beginnend mit 0,0 für die linke obere Ecke. Die erste Zahl ist die Position auf der X-Achse, die zweite ist die Y-Achse.\r\n\r\nSie können Einheiten angeben, z. \"30px, 50%\" für 30px vom linken Rand, 50% vom oberen Rand. Die unterstützten Einheiten sind px und %.\r\n\r\nBestimmte englische Wörter werden ebenfalls erkannt, daher können Sie hier \"bottom right\" oder \"center\" verwenden.",
          "defaultDescription": "Keine"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Standardeinstellung für den Monitor, in dem sich das Fenster gerade befindet.\r\n\r\nSie können Monitore finden, indem Sie deren Nummer, deren Monitor-Handle (HMONITOR, als Hexadezimalformat, formatiert als 0xdeadbeef), oder mit ihrem genauen Gerätenamen (\"\\\\.\\DISPLAY1\"), ihrer Seriennummer oder Anzeigenamen angeben.",
          "defaultDescription": "Aktiver Monitor"
        },
        "direction": {
          "title": "Richtung",
          "description": "Die Richtung, in die das Fenster verschoben werden soll.",
          "defaultDescription": "Keine Bewegung (bleibe in Region)"
        },
        "swap": {
          "title": "Tausche mit den Fenstern in der Zielregion",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximiere ein Fenster auf den gesamten Monitor",
      "detailedDescription": "Maximiere ein bestimmtes Fenster auf den gesamten, derzeit aktiven, Monitor, erlaubt Windows' die Maximierung zu übernehmen.",
      "displayName": "Maximiere ein Fenster auf den Bildschirm",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Fenster",
          "description": "Standardeinstellung für das aktuelle Vordergrund-Fenster\r\n\r\nSie können Fenster anhand des genauen Fenstertitels, der genauen Fensterklasse oder des Fensterhandles (in hexadezimaler Form, formatiert als \"0xdeadbeef\") suchen.",
          "defaultDescription": "Vordergrund-Fenster"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Standardeinstellung für den Monitor, in dem sich das Fenster gerade befindet.\r\n\r\nSie können Monitore finden, indem Sie deren Nummer, deren Monitor-Handle (HMONITOR, als Hexadezimalformat, formatiert als 0xdeadbeef), oder mit ihrem genauen Gerätenamen (\"\\\\.\\DISPLAY1\"), ihrer Seriennummer oder Anzeigenamen angeben.",
          "defaultDescription": "Aktiver Monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Fokus auf Fenster",
      "detailedDescription": "Setzt den Fokus auf ein Fenster in einer bestimmten Richtung.",
      "displayName": "Fokus auf Fenster",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Fenster",
          "description": "Das Fenster das den Fokus erhalten soll. Wenn zusätzlich eine Richtung angegeben wird, wird das Fenster für die Startposition angegeben.\r\n\r\nSie können Fenster anhand des genauen Fenstertitels, der genauen Fensterklasse oder des Fensterhandles (in hexadezimaler Form, formatiert als \"0xdeadbeef\") suchen.",
          "defaultDescription": "Vordergrund Fenster"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Richtung",
          "description": "In welcher Richtung wir nach Fenstern suchen sollen.",
          "defaultDescription": "Nächstes Fenster in jede Richtung"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Zentriere ein Fenster",
      "detailedDescription": "Zentriert das aktuelle Vordergrund-Fenster (oder ein bestimmtes Fenster mit dem Schalter /Window) auf dem aktuellen oder angegebenen Monitor, ohne die Fenstergröße zu ändern.",
      "displayName": "Fenster zentrieren",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Standardeinstellung für den Monitor, in dem sich das Fenster gerade befindet.\r\n\r\nSie können Monitore finden, indem Sie deren Nummer, deren Monitor-Handle (HMONITOR, als Hexadezimalformat, formatiert als 0xdeadbeef), oder mit ihrem genauen Gerätenamen (\"\\\\.\\DISPLAY1\"), ihrer Seriennummer oder Anzeigenamen angeben.",
          "defaultDescription": "Aktiver Monitor"
        },
        "window": {
          "title": "Fenster",
          "description": "Standardeinstellung für das aktuelle Vordergrund-Fenster\r\n\r\nSie können Fenster anhand des genauen Fenstertitels, der genauen Fensterklasse oder des Fensterhandles (in hexadezimaler Form, formatiert als \"0xdeadbeef\") suchen.",
          "defaultDescription": "Vordergrund-Fenster"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Startet ein Programm",
      "detailedDescription": "Startet ein anderes Programm mit einem angegebenen Parametersatz.",
      "displayName": "Starte ein Programm",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Programm",
          "description": "Das Programm, das gestartet werden soll. Muss eine Datei auf der Festplatte sein. Umgebungsvariablen werden unterstützt.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Argumente",
          "description": "Alle Argumente, die an das Programm übergeben werden sollen.",
          "defaultDescription": "Kein"
        },
        "waitForInputIdle": {
          "title": "Warte auf Bereitschaft des Programms",
          "description": "Warte auf den Start der Hauptprozedur des Programm, welche anzeigt, dass das Programm bereit ist.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Fenster auf das gewartet wird",
          "description": "Warten bis der Prozess ein Hauptfenster erstellt hat, das über eine Fensterklasse verfügt, die genau mit diesem Parameter übereinstimmt, oder einen Fenstertitel, der diesen Parameter ohne Berücksichtigung der Groß- und Kleinschreibung enthält.",
          "defaultDescription": "Kein"
        },
        "waitForExit": {
          "title": "Warte auf Beendigung des Programms",
          "description": "Warte auf Beendigung des Programms, bevor fortgesetzt wird.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "In den Vordergrund",
          "description": "Erzwinge das Fenster in den Vordergrund zu verschieben. Könnte nützlich sein, wenn es in Kombination mit anderen Befehlen verwendet wird.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Zeitüberschreitung in Sekunden",
          "description": "Wie lange wird gewartet, bis das Programm bereit ist oder beendet wird. Wenn Sie angeben, dass sowohl auf die Bereitschaft des Programms als auch auf das Beenden gewartet werden soll, kann die Gesamtwartezeit das Zweifache des Zeitüberschreitung-Werts betragen.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "es": {
    "license:apply": {
      "icon": 59182,
      "description": "Registrar MaxTo inmediatamente mediante una clave de licencia.",
      "detailedDescription": "Aplica una clave de licencia de MaxTo inmediatamente.",
      "displayName": "Aplicar licencia",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Clave de licencia",
          "description": "La clave de licencia que se vaya a usar",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Elimina la licencia actual.",
      "detailedDescription": "Elimina la licencia actual.",
      "displayName": "Eliminar licencia",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Obtener los detalles sobre la actual licencia. La clave de licencia no se ha devuelto.",
      "detailedDescription": "Obtener los detalles sobre la actual licencia. La clave de licencia no se ha devuelto.",
      "displayName": "Verificar que MaxTo posea una licencia.",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Cargar un preajuste en un monitor",
      "detailedDescription": "Cargar un preajuste de región en un monitor.",
      "displayName": "Cargar preajuste",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Muestra por defecto el monitor en el que esté la ventana actual.\r\n\r\nSe pueden encontrar monitores por su número específico, por sus puntos de anclaje (HMONITOR, como hexadecimal, formateado 0xdeadbeef) o por el nombre exacto del dispositivo (\"\\\\.\\DISPLAY1\"), por su número de serie o por su nombre.",
          "defaultDescription": "Monitor actual"
        },
        "name": {
          "title": "Nombre del preajuste",
          "description": "El nombre del preajuste que se vaya a cargar.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Destacar las áreas activas durante un breve periodo de tiempo",
      "detailedDescription": "Usar esto para obtener rápidamente un panorama de las áreas actualmente activas",
      "displayName": "Destacar áreas",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Por defecto para todos los monitores.\r\n\r\nPuede encontrar los monitores especificando su número, su apodo de monitor (HMONITOR, como hexadecimal, formateado como 0xdeadbeef) o por su numero exacto de dispositivo (\"\\\\.\\DISPLAY1\"), número de serie o nombre descriptivo.",
          "defaultDescription": "Todos los monitores"
        },
        "timeout": {
          "title": "Tiempo de espera en milisegundos",
          "description": "Número de milisegundos que se esperan antes de ocultar el área destacada.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Mover una ventana",
      "detailedDescription": "Mueve la ventana de primer plano actual (o una ventana específica usando el conmutador /Ventana).",
      "displayName": "Mover ventana",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Ventana",
          "description": "Por defecto para el monitor en el que la ventana está actualmente activa.\r\n\r\nPuede encontrar ventanas especificando el título de ventana exacto, la clase de ventana exacta o el apodo de la ventana (en hexadecimal, formateado como \"0xdeadbeef\").",
          "defaultDescription": "Ventana de primer plano"
        },
        "virtualDesktop": {
          "title": "Escritorio virtual",
          "description": "El número de escritorio virtual al que se va a mover la ventana. El escritorio virtual actual se activará como un efecto secundario.",
          "defaultDescription": "Escritorio virtual actual"
        },
        "region": {
          "title": "Área",
          "description": "¿En qué área debe colocarse la ventana?\r\n\r\nEspecifique las áreas usando coordenadas con referencia al monitor separadas por una coma, comenzando por 0,0 para la esquina superior izquierda. El primer número es la posición en el eje X, el segundo es la posición en el eje Y.\r\n\r\nPuede especificar unidades, p. ej., \"30 px, 50 %\" para 30 px desde el borde izquierdo, 50 % desde la parte superior. Las unidades soportadas son px y %.\r\n\r\nTambién se reconocen palabras inglesas específicas, por lo que puede introducir \"bottom right\" (parte superior derecha) o \"center\" (centro) como valores aquí.",
          "defaultDescription": "Ninguna"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Por defecto para el monitor en el que la ventana está actualmente activa.\r\n\r\nPuede encontrar monitores especificando su número, su apodo de monitor (HMONITOR, como hexadecimal, formateado como 0xdeadbeef) o por su nombre exacto de dispositivo  (\"\\\\.\\DISPLAY1\"), número de serie o nombre descriptivo.",
          "defaultDescription": "Monitor actual"
        },
        "direction": {
          "title": "Dirección",
          "description": "En qué dirección mover la ventana.",
          "defaultDescription": "Sin movimiento (fijarse en área)"
        },
        "swap": {
          "title": "Alternar con ventanas en el área de destino",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximizar una ventana para adaptarse al monitor entero",
      "detailedDescription": "Maximiza una ventana específica al monitor entero que está actualmente activo. dejando que ocurra una maximización de ventanas natural.",
      "displayName": "Maximizar ventana al tamaño de pantalla",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Ventana",
          "description": "Por defecto para la ventana de primer plano actual.\r\n\r\nPuede encontrar ventanas por el título de la ventana exacto, la clase exacta de ventana o el apodo de la ventana (en hexadecimal, formateado como \"0xdeadbeef\").",
          "defaultDescription": "Ventana de primer plano"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Por defecto para el monitor en el que la ventana está actualmente activa.\r\n\r\nPuede encontrar monitores especificando su número, su apodo de monitor (HMONITOR, como hexadecimal, formateado como 0xdeadbeef) o por su nombre exacto de dispositivo (\"\\\\.\\DISPLAY1\"), número de serie o nombre descriptivo.",
          "defaultDescription": "Monitor actual"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Enfoque en ventana",
      "detailedDescription": "Mover el enfoque a una ventana en una dirección específica.",
      "displayName": "Enfoque en ventana",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Ventana",
          "description": "La ventana en la que desea recibir el enfoque. Si además de esto, se especifica la Dirección, se especifica la ventana que se usará para la posición inicial.\r\n\r\nPuede encontrar ventanas por el título de ventana exacto , la clase  de ventana exacta o el apodo de la ventana (en hexadecimal, formateado como \"0xdeadbeef\")",
          "defaultDescription": "Ventana de primer plano"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Dirección",
          "description": "En qué dirección deberíamos buscar ventanas",
          "defaultDescription": "Ventana más cercana en cualquier dirección"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Centrar una ventana",
      "detailedDescription": "Centra el primer plano actual (o una ventana específica utilizando el conmutador /Ventana) en el monitor actual o especificado sin cambiar el tamaño de la ventana.",
      "displayName": "Centrar ventana",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Por defecto para el monitor en el que la ventana está actualmente activa.\r\n\r\nPuede encontrar monitores especificando su número, su apodo de monitor (HMONITOR, como hexadecimal, formateado como 0xdeadbeef) o por su nombre exacto de dispositivo (\"\\\\.\\DISPLAY1\"), número de serie o nombre descriptivo.",
          "defaultDescription": "Monitor actual"
        },
        "window": {
          "title": "Ventana",
          "description": "Por defecto para la ventana de primer plano actual.\r\n\r\nPuede encontrar ventanas por el título de la ventana exacto, la clase de ventana exacta o el apodo de la ventana (en hexadecimal, formateado como \"0xdeadbeef\").",
          "defaultDescription": "Ventana de primer plano"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Lanza un programa",
      "detailedDescription": "Lanzar otro programa con unos parámetros dados.",
      "displayName": "Lanzar un programa",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Programa",
          "description": "El programa que se vaya a lanzar. Debe haber un archivo en el disco. Admite variables en el entorno.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Argumentos",
          "description": "Ningún argumento para pasar al programa.",
          "defaultDescription": "Ninguno"
        },
        "waitForInputIdle": {
          "title": "Esperar a que el programa esté listo",
          "description": "Espera a que el programa inicie su bucle de mensaje, indicando que el programa está listo.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Ventana de espera",
          "description": "Esperar a que el proceso cree una ventana principal que tenga una clase de ventana que coincida exactamente con este parámetro, o tenga un título de ventana que lo contenga sin tener en cuenta mayúsculas o minúsculas.",
          "defaultDescription": "Ninguno"
        },
        "waitForExit": {
          "title": "Esperar a salir del programa",
          "description": "Esperar a que el programa termine de ejecutarse antes de continuar.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Traer al frente",
          "description": "Forzar a que la ventana se convierta en ventana en primer plano. Podría resultar útil cuando se utiliza en combinación con otros comandos.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Contador en segundos",
          "description": "Cuánto esperar a que el programa esté listo o a que cierre. Tenga en cuenta que, si especifica tanto esperar a que esté listo como esperar a que se cierre, el tiempo total de espera puede ser el doble del valor indicado.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "fr": {
    "license:apply": {
      "icon": 59182,
      "description": "Enregistrez MaxTo immédiatement à l'aide d'une clé de licence",
      "detailedDescription": "Utilise de façon immédiate une clé de licence MaxTo",
      "displayName": "Utilisez la licence",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Clé d'activation",
          "description": "Clé d'activation à utiliser",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Supprime la licence actuelle.",
      "detailedDescription": "Supprime la licence actuelle.",
      "displayName": "Supprimez la licence",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Obtenez les détails sur la licence actuelle. La clé de licence n'est pas retournée.",
      "detailedDescription": "Obtenez les détails sur la licence actuelle. La clé de licence n'est pas retournée.",
      "displayName": "Vérifiez si MaxTo est sous licence",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Chargez un préréglage sur un moniteur",
      "detailedDescription": "Chargez une région prédéfinie sur un moniteur.",
      "displayName": "Charger le préréglage",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Moniteur",
          "description": "Par défaut, le moniteur sur lequel la fenêtre est actuellement activée.\r\n\r\nVous pouvez trouver des moniteurs en spécifiant leur numéro, leur identifiant (HMONITOR, en hexadécimal, formaté en 0xdeadbeef), ou par leur nom exact (\"\\\\.\\DISPLAY1\"), numéro de série ou nom familier.",
          "defaultDescription": "Moniteur actuel"
        },
        "name": {
          "title": "Nom prédéfini",
          "description": "Le nom prédéfini à charger.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Sélectionner les régions actives pendant un court moment",
      "detailedDescription": "Utilisez cela pour obtenir rapidement un aperçu des régions actuellement actives.",
      "displayName": "Régions sélectionnées",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Moniteur",
          "description": "Par défaut, tous les moniteurs.\r\n\r\nVous pouvez trouver des moniteurs en spécifiant leur numéro, leur identifiant (HMONITOR, en hexadécimal, formaté en 0xdeadbeef), ou par leur nom exact (\"\\\\.\\DISPLAY1\"), numéro de série ou nom familier.",
          "defaultDescription": "Tous les moniteurs"
        },
        "timeout": {
          "title": "Délai d'attente en millisecondes",
          "description": "Nombre de millisecondes d'attente avant de masquer la sélection.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Déplacer une fenêtre",
      "detailedDescription": "Déplace la fenêtre de premier plan actuelle (ou une fenêtre spécifique à l’aide du /Window de fenêtre).",
      "displayName": "Déplacer la fenêtre",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Fenêtre",
          "description": "Sélectionne par défaut la fenêtre actuellement au premier plan.\r\n\r\nVous pouvez trouver des fenêtres en spécifiant leur nom exact, leur type exact, le descripteur de fenêtre (en hexadécimal, au format \"0xdeadbeef\").",
          "defaultDescription": "Fenêtre au premier plan"
        },
        "virtualDesktop": {
          "title": "Bureau virtuel",
          "description": "Le numéro de bureau virtuel vers lequel déplacer la fenêtre. Le bureau virtuel actif va changer par répercussions.",
          "defaultDescription": "Bureau virtuel actuel"
        },
        "region": {
          "title": "Région",
          "description": "Dans quelle région faut-il placer la fenêtre ?\r\n\r\nSpécifiez les régions en utilisant des coordonnées relatives au moniteur, séparées par une virgule, à partir de 0,0 pour le coin supérieur gauche. Le premier numéro correspond à la position sur l'axe des X, le second à l'axe des Y.\r\n\r\nVous pouvez spécifier des unités, par exemple \"30px, 50%\" pour 30px du bord gauche, 50% du haut. Les unités prises en compte sont px et %.\r\n\r\nDes mots anglais spécifiques sont également reconnus, vous pouvez donc indiquer \"bottom right\" ou \"center\" comme valeurs.",
          "defaultDescription": "Aucun"
        },
        "monitor": {
          "title": "Moniteur",
          "description": "Par défaut, le moniteur sur lequel la fenêtre est actuellement activée.\r\n\r\nVous pouvez trouver des moniteurs en spécifiant leur numéro, leur identifiant (HMONITOR, en hexadécimal, formaté en 0xdeadbeef), ou par leur nom exact (\"\\\\.\\DISPLAY1\"), numéro de série ou nom familier.",
          "defaultDescription": "Moniteur actuel"
        },
        "direction": {
          "title": "Direction",
          "description": "Dans quelle direction déplacer la fenêtre.",
          "defaultDescription": "Aucun déplacement (fixer à la région)"
        },
        "swap": {
          "title": "Permuter les fenêtres dans la région de destination",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Agrandir une fenêtre l'afficher en plain écran.",
      "detailedDescription": "Agrandit une fenêtre spécifique sur l'intégralité de la surface de l'écran sur lequel elle s'affiche, permettant de passer au mode plein écran naturelle de Windows.",
      "displayName": "Agrandir la fenêtre au format de l'écran",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Fenêtre",
          "description": "Sélectionne par défaut la fenêtre actuellement au premier plan.\r\n\r\nVous pouvez trouver des fenêtres en spécifiant leur nom exact, leur type exact, le descripteur de fenêtre (en hexadécimal, au format \"0xdeadbeef\").",
          "defaultDescription": "Fenêtre au premier plan"
        },
        "monitor": {
          "title": "Moniteur",
          "description": "Par défaut, le moniteur sur lequel la fenêtre est actuellement activée.\r\n\r\nVous pouvez trouver des moniteurs en spécifiant leur numéro, leur identifiant (HMONITOR, en hexadécimal, formaté en 0xdeadbeef), ou par leur nom exact (\"\\\\.\\DISPLAY1\"), numéro de série ou nom familier.",
          "defaultDescription": "Moniteur actuel"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus sur la fenêtre",
      "detailedDescription": "Déplace le focus vers une fenêtre dans une direction spécifique.",
      "displayName": "Focus sur la fenêtre",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Fenêtre",
          "description": "La fenêtre sur laquelle vous souhaitez recevoir le focus. Si la Direction est spécifiée en plus de cela, il spécifie la fenêtre à utiliser pour la position de départ.\r\n\r\nVous pouvez trouver des fenêtres en spécifiant leur nom exact, leur type exact, le descripteur de fenêtre (en hexadécimal, au format \"0xdeadbeef\".",
          "defaultDescription": "Fenêtre au premier plan"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Dans quelle direction nous devrions chercher des fenêtres.",
          "defaultDescription": "Fenêtre la plus proche dans une quelconque direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Centrer une fenêtre",
      "detailedDescription": "Centre l'affichage actuel au premier plan (ou une fenêtre spécifique à l'aide du /commutateur de fenêtre) sur le moniteur actuel ou spécifié sans modifier la taille de la fenêtre.",
      "displayName": "Fenêtre centrale",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Moniteur",
          "description": "Par défaut, le moniteur sur lequel la fenêtre est actuellement activée.\r\n\r\nVous pouvez trouver des moniteurs en spécifiant leur numéro, leur identifiant (HMONITOR, en hexadécimal, formaté en 0xdeadbeef), ou par leur nom exact (\"\\\\.\\DISPLAY1\"), numéro de série ou nom familier.",
          "defaultDescription": "Moniteur actuel"
        },
        "window": {
          "title": "Fenêtre",
          "description": "Sélectionne par défaut la fenêtre actuellement au premier plan.\r\n\r\nVous pouvez trouver des fenêtres en spécifiant leur nom exact, leur type exact, le descripteur de fenêtre (en hexadécimal, au format \"0xdeadbeef\").",
          "defaultDescription": "Fenêtre au premier plan"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Lance un programme",
      "detailedDescription": "Lancer un autre programme avec un ensemble donné de paramètres.",
      "displayName": "Lancez un programme",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Programme",
          "description": "Le programme à lancer. Il doit y avoir un fichier sur le disque. Les variables d'environnement sont prises en charge.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Aucun argument à transmettre au programme.",
          "defaultDescription": "Aucun"
        },
        "waitForInputIdle": {
          "title": "Attendez que le programme soit prêt",
          "description": "Attend que le programme démarre sa boucle de messages, indiquant que le programme est prêt.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Fenêtre d'attente",
          "description": "Attendez que le processus crée une fenêtre principale dont la catégorie correspond exactement à ce paramètre, ou dont le titre contient ce paramètre de manière peu perceptible.",
          "defaultDescription": "Aucune"
        },
        "waitForExit": {
          "title": "Attendez la fin du programme",
          "description": "Attendez que le programme ait fini de s'exécuter avant de continuer.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Mettez en avant",
          "description": "Forcez la fenêtre à être la fenêtre d'avant-plan.  Cela peut être utile en combinaison avec d'autres commandes.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Délai imparti en secondes",
          "description": "Combien de temps faut-il attendre que le programme soit prêt ou qu'il se termine ? Notez que si vous précisez attendre à la fois  que le programme soit prêt et qu'il se termine, le temps d'attente total peut être deux fois supérieur au délai imparti.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "it": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "ja": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "ko": {
    "license:apply": {
      "icon": 59182,
      "description": "라이센스 키를 사용해서 MaxTo를 즉시 등록합니다",
      "detailedDescription": "MaxTo에 라이센스 키를 즉시 적용합니다.",
      "displayName": "라이센스 적용",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "라이센스 키",
          "description": "사용할 라이센스 키",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "현재의 라이센스를 제거합니다.",
      "detailedDescription": "현재의 라이센스를 제거합니다.",
      "displayName": "라이센스 제거",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "현재 라이센스에 대한 상세사항을 받아옵니다. 라이센스 키는 반환되지 않습니다.",
      "detailedDescription": "현재 라이센스에 대한 상세사항을 받아옵니다. 라이센스 키는 반환되지 않습니다.",
      "displayName": "MaxTo의 라이센스 확인",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "모니터에 프리셋을 로드합니다",
      "detailedDescription": "모니터에 지역(region) 프리셋을 로드합니다.",
      "displayName": "프리셋 로드",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "모니터",
          "description": "현재 작동 중인 윈도우를 모니터링하는 것을 기본값으로 설정합니다.\r\n\r\n숫자, 모니터 핸들(HMONITOR, 헥사데시멀값, 0xdeadbeef 포멧) 또는 정확한 기기명(\"\\\\.\\DISPLAY1\"), 시리얼 번호 또는 별칭을 명시해서 모니터들을 찾을 수 있습니다.",
          "defaultDescription": "현재 모니터"
        },
        "name": {
          "title": "프리셋 이름",
          "description": "로드할 프리셋 이름.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "짧은 시간 동안 활성 지역 강조 표시",
      "detailedDescription": "이 기능을 사용하면 현재 활성 지역에 대한 개요를 빠르게 얻을 수 있습니다.",
      "displayName": "지역 강조 표시하기",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "모니터",
          "description": "모든 모니터의 기본값.\r\n\r\n모니터 번호, 모니터 핸들(HMONITOR, 16 진수, 0xdeadbeef 형식), 또는 정확한 장치 이름(\"\\\\.\\DISPLAY1\"), 일련 번호 또는 친숙한 이름을 지정하여 모니터를 찾을 수 있습니다.",
          "defaultDescription": "모든 모니터"
        },
        "timeout": {
          "title": "밀리 초 단위의 시간 제한",
          "description": "강조 표시를 숨기기 전에 대기할 밀리 초 단위 시간입니다.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "창을 이동하세요",
      "detailedDescription": "형재 전면 창(또는 /Window 스위치를 사용하는 특정 창)을 이동하세요.",
      "displayName": "창 이동하기",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "창",
          "description": "현재 전면 창의 기본값.\r\n\r\n정확한 창 제목, 정확한 창 분류 또는 \"0xdeadbeef\" 형식의 창 핸들(16 진수)을 기준으로 창을 찾을 수 있습니다.",
          "defaultDescription": "전면 창"
        },
        "virtualDesktop": {
          "title": "가상 데스크톱",
          "description": "창을 이동할 가상 데스크톱 번호. 활성 가상 데스크톱이 부작용으로 전환됩니다.",
          "defaultDescription": "현재 가상 데스크톱"
        },
        "region": {
          "title": "지역",
          "description": "어떤 영역을 창에 넣어야 합니까?\r\n\r\n쉼표로 구분된 모니터 기준 좌표를 사용하여 영역을 지정하세요. 맨 위 왼쪽 모서리는 0,0에서 시작합니다. 첫 번째 숫자는 X축의 위치이고, 두 번째 숫자는 Y축의 위치입니다.\r\n\r\n단위를 지정할 수 있습니다. 예:  \"30px, 50%\"는 좌측 상단에서 30px, 상단에서 50%. 지원되는 단위는 px와 %입니다.\r\n\r\n특정 영어 단어도 인식되므로, \"bottom right\" 또는 \"center\"를 값으로 사용할 수 있습니다.",
          "defaultDescription": "없음"
        },
        "monitor": {
          "title": "모니터",
          "description": "현재 창이 있는 모니터의 기본값.\r\n\r\n모니터 번호, 모니터 핸들(HMONITOR, 16 진수, 0xdeadbeef 형식) 또는 정확한 장치 이름(\"\\\\.\\DISPLAY1\"), 일련 번호 또는 친숙한 이름을 지정하여 모니터를 찾을 수 있습니다.",
          "defaultDescription": "현재 모니터"
        },
        "direction": {
          "title": "방향",
          "description": "창을 이동할 방향.",
          "defaultDescription": "움직이지 않음(지역에 충실)"
        },
        "swap": {
          "title": "대상 지역의 창으로 교환",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "전체 모니터로 창을 최대화하세요.",
      "detailedDescription": "특정 창을 현재 사용중인 전체 모니터로 최대화하여, 윈도우의 자연스러운 최대화를 실현합니다.",
      "displayName": "창을 화면으로 최대화",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "창",
          "description": "현재 전면 창의 기본값.\r\n\r\n정확한 창 제목, 정확한 창 분류, 또는 \"0xdeadbeef\" 형식의 창 핸들(16 진수)을 기준으로 창을 찾을 수 있습니다.",
          "defaultDescription": "전면 창"
        },
        "monitor": {
          "title": "모니터",
          "description": "현재 창이 있는 모니터의 기본값.\r\n\r\n모니터 번호, 모니터 핸들(HMONITOR, 16 진수, 0xdeadbeef 형식), 또는 정확한 장치 이름(\"\\\\.\\DISPLAY1\"), 일련 번호 또는 친숙한 이름을 지정하여 모니터를 찾을 수 있습니다.",
          "defaultDescription": "현재 모니터"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "창에 포커스",
      "detailedDescription": "포커스를 특정 방향의 창으로 이동하세요.",
      "displayName": "창에 포커스",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "창",
          "description": "포커스를 받을 창. 이 외에도 방향이 지정되면, 시작 위치에 사용할 창을 지정합니다.\r\n\r\n정확한 창 제목, 정확한 창 분류, 또는 \"0xdeadbeef\" 형식의 창 핸들(16 진수)을 기준으로 창을 찾을 수 있습니다.",
          "defaultDescription": "전면 창"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "방향",
          "description": "어떤 방향으로 창을 찾아야 하는지.",
          "defaultDescription": "어느 방향으로나 가장 가까운 창"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "창 중앙 맞추기",
      "detailedDescription": "창 크기를 변경하지 않고 현재 모니터 또는 지정된 모니터에서 현재 전면(또는 /Window 스위치를 사용하는 특정 창)을 중앙에 맞춥니다.",
      "displayName": "중앙 창",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "모니터",
          "description": "현재 창이 표시된 모니터의 기본값.\r\n\r\n모니터 번호, 모니터 핸들(HMONITOR, 16 진수, 0xdeadbeef 형식) 또는 정확한 장치 이름(\"\\\\.\\DISPLAY1\"), 일련 번호 또는 친숙한 이름을 지정하여 모니터를 찾을 수 있습니다.",
          "defaultDescription": "현재 모니터"
        },
        "window": {
          "title": "창",
          "description": "현재 전면 창의 기본값.\r\n\r\n정확한 창 제목, 정확한 창 분류, 또는 \"0xdeadbeef\" 형식의 창 핸들(16 진수)을 기준으로 창을 찾을 수 있습니다.",
          "defaultDescription": "전면 창"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "프로그램을 실행합니다",
      "detailedDescription": "주어진 파라미터 셋으로 다른 프로그램을 실행합니다.",
      "displayName": "프로그램 실행",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "프로그램",
          "description": "실행할 프로그램. 디스크 상의 파일이어야 합니다. 환경 변수가 지원됩니다.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "인자값",
          "description": "프로그램에 전달할 인자값이 없습니다.",
          "defaultDescription": "없음"
        },
        "waitForInputIdle": {
          "title": "프로그램이 준비되기를 기다려 주세요",
          "description": "프로그램이 메시지 루프를 시작하며, 준비가 되면 표시해주기를 기다려 주세요.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "대기 윈도우",
          "description": "프로세스가 이 파라미터에 정확히 일치하는 윈도우 클래스를 가졌거나,  이 파라미터를 대소문자 구분없이 포함한 윈도우를 가진 메인 윈도우를 생성하기를 기다려 주세요.",
          "defaultDescription": "없음"
        },
        "waitForExit": {
          "title": "프로그램이 종료되기를 기다려 주세요",
          "description": "계속 진행하시기 전에 프로그램이 종료되기를 기다려 주세요.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "앞으로 가져오기",
          "description": "윈도우를 강제로 전경 윈도우가 되도록 합니다. 다른 명령어와 함께 사용될 때 유용할 수 있습니다.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "타임아웃(초)",
          "description": "프로그램이 준비 또는 종료되기 위해서 기다려야 하는 시간입니다. 프로그램 준비 및 종료를 모두 명시하실 경우, 총 대기 시간이 두배가 될 수 있음을 양지하시기 바랍니다.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "no": {
    "license:apply": {
      "icon": 59182,
      "description": "Registrer MaxTo umiddelbart med en lisensnøkkel",
      "detailedDescription": "Bruker en MaxTo-lisensnøkkel umiddelbart.",
      "displayName": "Bruk lisens",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Lisensnøkkel",
          "description": "Lisensnøkkelen som skal tas i bruk",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Fjerner gjeldende lisens.",
      "detailedDescription": "Fjerner gjeldende lisens.",
      "displayName": "Fjern lisensen",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Få detaljer om gjeldende lisens. Lisensnøkkel returneres ikke.",
      "detailedDescription": "Få detaljer om gjeldende lisens. Lisensnøkkel returneres ikke.",
      "displayName": "Sjekk om MaxTo er lisensiert",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Laster en mal på en skjerm",
      "detailedDescription": "Last en mal på den skjermen du ønsker.",
      "displayName": "Last mal",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Skjerm",
          "description": "Bruker skjermen som vinduet med fokus som standard.\r\n\r\nDu kan finne skjermer ved å oppgi deres nummer, skjermreferanse (HMONITOR, som hexadesimal, formattert 0xdeadbeef), eller ved å bruke eksakt navn (\"\\\\.\\DISPLAY1\"), serienummer eller visningsnavn.",
          "defaultDescription": "Nåværende skjerm"
        },
        "name": {
          "title": "Mal",
          "description": "Navnet på malen du vil laste.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Vis aktive regioner i en kort periode",
      "detailedDescription": "Bruk dette for å raskt få et overblikk over de aktive regionene.",
      "displayName": "Vis regioner",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Skjerm",
          "description": "Bruker alle skjermer som standard.\r\n\r\nDu kan finne en skjerm ved å angi nummeret, skjermreferansen (HMONITOR, som heksadesimalt tall, formatert som 0xdeadbeef), eller ved dens nøyaktige enhetsnavn (\"\\\\.\\DISPLAY1\"), serienummer eller visningsnavn.",
          "defaultDescription": "Alle skjermer"
        },
        "timeout": {
          "title": "Tidsavbrudd i millisekunder",
          "description": "Antall millisekunder det skal ventes før uthevingen skjules.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Flytt ett vindu",
      "detailedDescription": "Flytter forgrunnsvinduet (eller et spesifikt vindu ved å bruke /Window).",
      "displayName": "Flytt vindu",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Vindu",
          "description": "Bruker forgrunnsvinduet som standard.\r\n\r\nDu kan finne vinduer ved å bruke nøyaktig vindustittel, nøyaktig vindusklasse eller vindusreferansen (som heksadesimalt tall, formatert som \"0xdeadbeef\").",
          "defaultDescription": "Forgrunnsvindu"
        },
        "virtualDesktop": {
          "title": "Virtuelt skrivebord",
          "description": "Nummeret til det virtuelle skriveborder du vil flytte vinduet til. Det aktive virtuelle skrivebordet byttes som en bivirkning.",
          "defaultDescription": "Det aktive virtuelle skrivebordet"
        },
        "region": {
          "title": "Region",
          "description": "Hvilket område skal vinduet settes i?\r\n\r\nAngi områder ved hjelp av skjerm-relative koordinater atskilt med komma, der 0,0 tilsvarer øvre venstre hjørne. Det første tallet er posisjon på x-aksen, andre er y-aksen.\r\n\r\nDu kan angi enheter, f.eks \"30px, 50%\" for 30px fra venstre kant, 50% fra toppen. De støttede enhetene er px og %.\r\n\r\nBestemte (engelske) ord er også anerkjent, så du kan bruke verdier som \"bottom right\" eller \"center\" her.",
          "defaultDescription": "Ingen"
        },
        "monitor": {
          "title": "Skjerm",
          "description": "Bruker skjermen som vinduet er på som standard.\r\n\r\nDu kan finne en skjerm ved å angi nummeret, skjermreferansen (HMONITOR, som heksadesimalt tall, formatert som 0xdeadbeef), eller ved dens nøyaktige enhetsnavn (\"\\\\.\\DISPLAY1\"), serienummer eller visningsnavn.",
          "defaultDescription": "Nåværende skjerm"
        },
        "direction": {
          "title": "Hvilken retning vinduet skal flyttes i.",
          "description": "Hvilken retning vinduet skal flyttes i.",
          "defaultDescription": "Ingen bevegelse (plasser i nærmeste region)"
        },
        "swap": {
          "title": "Bytt med vindu i målregionen",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maksimere et vindu på hele skjermen.",
      "detailedDescription": "Maksimerer et bestemt vindu til hele skjermen det er på, la Windows' naturlige maksimering skje.",
      "displayName": "Maksimer vindu til hele skjermen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Hvilket vindu skal brukes? Faller tilbake på forgrunnsvinduet.\r\n\r\nDu kan finne vindu ved å søke på eksakt tittel, exakt vindusklasse, eller vindushåndtak (handle, oppgitt i hexadesimal, formattert \"0xdeadbeef\")",
          "description": "Bruker forgrunnsvinduet som standard.\r\n\r\nDu kan finne vinduer ved å bruke nøyaktig vindustittel, nøyaktig vindusklasse eller vindusreferansen (som heksadesimalt tall, formatert som \"0xdeadbeef\").",
          "defaultDescription": "Forgrunnsvindu"
        },
        "monitor": {
          "title": "Skjerm",
          "description": "Bruker skjermen med det aktive vinduet som standard. Du kan finne en skjerm ved å angi nummeret, skjermreferansen (HMONITOR, som heksadesimalt tall, formatert som 0xdeadbeef), eller ved dens nøyaktige enhetsnavn (\"\\\\.\\DISPLAY1\"), serienummer eller visningsnavn.",
          "defaultDescription": "Nåværende skjerm"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Fokuser på vindu",
      "detailedDescription": "Flytter fokus til et vindu i en bestemt retning.",
      "displayName": "Fokuser på vindu",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Vindu",
          "description": "Vinduet du vil motta skal motta fokus. Hvis retningen angis i tillegg til dette, angir det vinduet du bruker startpunktet.\r\n\r\nDu kan finne vinduer ved å bruke nøyaktig vindustittel, nøyaktig vindusklasse eller vindusreferansen (som heksadesimalt tall, formatert som \"0xdeadbeef\").",
          "defaultDescription": "Forgrunnsvindu"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Retning",
          "description": "I hvilken retning skal vi lete etter vinduer?",
          "defaultDescription": "Nærmeste vindu i hvilken som helst retninge"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Midtstiller et vindu",
      "detailedDescription": "Sentrerer gjeldende et vindu på gjeldende eller angitt skjerm uten å endre vindusstørrelsen.",
      "displayName": "Midtstill vindu",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Skjerm",
          "description": "Bruker skjermen med det aktive vinduet som standard.\r\n\r\nDu kan finne en skjerm ved å angi nummeret, skjermreferansen (HMONITOR, som heksadesimalt tall, formatert som 0xdeadbeef), eller ved dens nøyaktige enhetsnavn (\"\\\\.\\DISPLAY1\"), serienummer eller visningsnavn.",
          "defaultDescription": "Nåværende skjerm"
        },
        "window": {
          "title": "Vindu",
          "description": "Bruker forgrunnsvinduet som standard.\r\n\r\nDu kan finne vinduer ved å bruke nøyaktig vindustittel, nøyaktig vindusklasse eller vindusreferansen (som heksadesimalt tall, formatert som \"0xdeadbeef\").",
          "defaultDescription": "Forgrunnsvindu"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Kjører et program",
      "detailedDescription": "Kjør et program med et gitt sett parametre.",
      "displayName": "Kjør et program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "Programmet som skal startes. Må være en fil på disken. Miljøvariabler støttes.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Argumenter",
          "description": "Argumenter som sendes til programmet.",
          "defaultDescription": "Ingen"
        },
        "waitForInputIdle": {
          "title": "Vente på at programmet er klart",
          "description": "Venter på at programmet starter sin meldingsløkke, som angir at programmet er klart.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Vindu å vente på",
          "description": "Vent til prosessen for å opprette et hovedvindu som har en vindusklasse som samsvarer nøyaktig med denne parameteren, eller har en vindustittel som inneholder denne parameteren (ser ikke forskjell på store og små bokstaver).",
          "defaultDescription": "Ingen"
        },
        "waitForExit": {
          "title": "Vent på at programmet avsluttes",
          "description": "Venter på at programmet skal avsluttes før du fortsetter.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Vis &øverst",
          "description": "Ta vinduet til forgrunnen. Kan være nyttige når de brukes i kombinasjon med andre kommandoer.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Tidsavbrudd i sekunder",
          "description": "Hvor lenge skal vi vente før programmet skal være klart eller avslutte. Merk at hvis du angir både å vente på at programmet skal være klart og på at det avslutter, vil total ventetid kunne bli inntil to ganger tidsavbruddsverdien.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "pl": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "pt-BR": {
    "license:apply": {
      "icon": 59182,
      "description": "Registrar MaxTo imediatamente utilizando uma chave (licença)",
      "detailedDescription": "Aplicas a licença ao MaxTo imediatamente.",
      "displayName": "Aplicar licença",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Chave (Licença)",
          "description": "A chave (licença) usada",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Remover a licença atual.",
      "detailedDescription": "Remove a licença atual.",
      "displayName": "Remover licença",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Obtenha os detalhes sobre a licença atual. Chave de licença não é retornada.",
      "detailedDescription": "Obtenha os detalhes sobre a licença atual. Chave de licença não é retornada.",
      "displayName": "Checar licença do MaxTo",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Carregar uma predefinição em um monitor",
      "detailedDescription": "Carregue uma predefinição de região em um monitor.",
      "displayName": "Carregar predefinição",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Padrões para o monitor em que a janela está atualmente.\r\n\r\nVocê pode encontrar monitores especificando seu número, seu identificador de monitor (HMONITOR, como hexadecimal, formatado como 0xdeadbeef) ou pelo nome exato do dispositivo (\"\\\\. \\ DISPLAY1\"), número de série ou nome amigável.",
          "defaultDescription": "Monitor atual"
        },
        "name": {
          "title": "Nome da predefinição",
          "description": "O nome da predefinição que irá carregar.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Realce momentaneamente as regiões ativas",
      "detailedDescription": "Use isso para obter rapidamente uma visão geral das regiões ativas.",
      "displayName": "Realçar regiões",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Padrões para todos os monitores.\r\n\r\nVocê pode encontrar monitores especificando seu número, seu identificador de monitor (HMONITOR, como hexadecimal, formatado como 0xdeadbeef) ou pelo nome exato do dispositivo (\"\\\\. \\ DISPLAY1\"), número de série ou nome amigável.",
          "defaultDescription": "Todos os monitores"
        },
        "timeout": {
          "title": "Tempo limite em milisegundos",
          "description": "Número de milissegundos a aguardar antes de ocultar o realce.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Mover uma janela",
      "detailedDescription": "Move a janela atual em primeiro plano (ou uma janela específica usando a opção / Window).",
      "displayName": "Mover janela",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Janela",
          "description": "Padrões para a janela atual em primeiro plano.\r\n\r\nVocê pode encontrar janelas especificando o título exato da janela, a classe exata da janela ou o identificador da janela (em hexadecimal, formatado como \"0xdeadbeef\").",
          "defaultDescription": "Janela em primeiro plano"
        },
        "virtualDesktop": {
          "title": "Desktop virtual",
          "description": "O número da área de trabalho virtual para mover a janela para. A área de trabalho virtual ativa alternará como um efeito colateral.",
          "defaultDescription": "Desktop virtual atual"
        },
        "region": {
          "title": "Região",
          "description": "Em qual região a janela deve ser colocada?\r\n\r\nEspecifique regiões usando coordenadas relativas ao monitor separadas por uma vírgula, iniciando em 0,0 para o canto superior esquerdo. O primeiro número é a posição no eixo X, o segundo é o eixo Y.\r\n\r\nVocê pode especificar unidades, por exemplo \"30px, 50%\" para 30px a partir da borda esquerda, 50% a partir do topo. As unidades suportadas são px e%.\r\n\r\nPalavras específicas em inglês também são reconhecidas, assim você pode colocar \"bottom right\" ou \"center\" como valores aqui.",
          "defaultDescription": "Nenhum"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Padrões para o monitor em que a janela está atualmente.\r\n\r\nVocê pode encontrar monitores especificando seu número, seu identificador de monitor (HMONITOR, como hexadecimal, formatado como 0xdeadbeef) ou pelo nome exato do dispositivo (\"\\\\. \\ DISPLAY1\"), número de série ou nome amigável.",
          "defaultDescription": "Monitor atual"
        },
        "direction": {
          "title": "Direção",
          "description": "Qual direção para mover a janela.",
          "defaultDescription": "Sem movimento (manter a região)"
        },
        "swap": {
          "title": "Troque com janelas na região de destino",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximizar a janela para todo o monitor",
      "detailedDescription": "Maximiza uma janela específica para todo o monitor em que está atualmente, permitindo que a maximização natural do Windows ocorra.",
      "displayName": "Maximizar janela na tela",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Janela",
          "description": "Padrões para a janela atual em primeiro plano.\r\n\r\nVocê pode encontrar janelas especificando o título exato da janela, a classe exata da janela ou o identificador da janela (em hexadecimal, formatado como \"0xdeadbeef\").",
          "defaultDescription": "Janela em primeiro plano"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Padrões para o monitor em que a janela está atualmente.\r\n\r\nVocê pode encontrar monitores especificando seu número, seu identificador de monitor (HMONITOR, como hexadecimal, formatado como 0xdeadbeef) ou pelo nome exato do dispositivo (\"\\\\. \\ DISPLAY1\"), número de série ou nome amigável.",
          "defaultDescription": "Monitor atual"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focar na janela",
      "detailedDescription": "Mova o foco para uma janela em uma direção específica.",
      "displayName": "Focar na janela",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Janela",
          "description": "A janela que você deseja receber o foco. Se Direção for especificado além disso, especifica a janela a ser usada para a posição inicial.\r\n\r\nVocê pode encontrar janelas especificando o título exato da janela, a classe exata da janela ou o identificador da janela (em hexadecimal, formatado como \"0xdeadbeef\").",
          "defaultDescription": "Janela em primeiro plano"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direção",
          "description": "Em qual direção devemos procurar janelas.",
          "defaultDescription": "Janela mais próxima em qualquer direção"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Centralizar uma janela",
      "detailedDescription": "Centraliza o primeiro plano atual (ou uma janela específica usando a opção / Window) no monitor atual ou especificado sem alterar o tamanho da janela.",
      "displayName": "Centralizar janela",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Padrões para o monitor em que a janela está atualmente.\r\n\r\nVocê pode encontrar monitores especificando seu número, seu identificador de monitor (HMONITOR, como hexadecimal, formatado como 0xdeadbeef) ou pelo nome exato do dispositivo (\"\\\\. \\ DISPLAY1\"), número de série ou nome amigável.",
          "defaultDescription": "Monitor atual"
        },
        "window": {
          "title": "Janela",
          "description": "Padrões para a janela atual em primeiro plano.\r\n\r\nVocê pode encontrar janelas especificando o título exato da janela, a classe exata da janela ou o identificador da janela (em hexadecimal, formatado como \"0xdeadbeef\").",
          "defaultDescription": "Janela em primeiro plano"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Iniciar um programa",
      "detailedDescription": "Inicia um programa com um conjunto de parâmetros",
      "displayName": "Iniciar um programa",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Programa",
          "description": "O programa para abrir. Deve ser um arquivo no disco. Variáveis de Ambiente são suportadas.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Argumentos",
          "description": "Qualquer argumento para passar ao programa",
          "defaultDescription": "Nenhum"
        },
        "waitForInputIdle": {
          "title": "Aguardar o programa ficar pronto",
          "description": "Aguardar o programa iniciar seu loop de mensagem, indicando que o programa está pronto.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Aguardar a janela para",
          "description": "Aguarde o processo criar uma janela principal que tenha uma classe de janela que corresponda exatamente a esse parâmetro ou que tenha um título de janela que insensível a maiúsculas e minúsculas contenha esse parâmetro.",
          "defaultDescription": "Nenhum"
        },
        "waitForExit": {
          "title": "Aguardar o programa para sair",
          "description": "Aguardar até que o programa concluir a execução antes de continuar.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Trazer para frente",
          "description": "Forçar a janela ficar em primeiro plano. Pode ser útil quando usado em combinação com outros comandos.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Tempo limite em segundos",
          "description": "Quanto tempo esperar ao esperar que o programa esteja pronto ou saia. Observe que, se você especificar os dois para aguardar até que o programa esteja pronto e para que ele seja encerrado, o tempo total de espera poderá ser duas vezes o valor de tempo limite.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "ru": {
    "license:apply": {
      "icon": 59182,
      "description": "Зарегистрируйте MaxTo сейчас при помощи лицензионного ключа",
      "detailedDescription": "Применяет лицензионный ключ MaxTo прямо сейчас.",
      "displayName": "Применить лицензию",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Лицензионный ключ",
          "description": "Лицензионный ключ для использования",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Удаляет текущую лицензию.",
      "detailedDescription": "Удаляет текущую лицензию.",
      "displayName": "Удалить лицензию",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Получить подробную информацию о текущей лицензии. Лицензионный ключ не возвращается.",
      "detailedDescription": "Получить подробную информацию о текущей лицензии. Лицензионный ключ не возвращается.",
      "displayName": "Проверить, есть ли у MaxTo лицензия",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Загрузить пресет на монитор",
      "detailedDescription": "Загрузите региональный пресет на монитор.",
      "displayName": "Загрузить пресет",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Монитор",
          "description": "По умолчанию используется монитор, где сейчас находится окно.\r\n\r\nВы можете найти мониторы, указав их номер, идентификатор монитора (HMONITOR, в шестнадцатеричном формате – 0xdeadbeef) или же по их точному имени устройства (\"\\\\.\\DISPLAY1\"), серийному номеру или же установленному понятному имени.",
          "defaultDescription": "Текущий монитор"
        },
        "name": {
          "title": "Название пресета",
          "description": "Название пресета для загрузки.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Выделите активные области на непродолжительное время",
      "detailedDescription": "Используйте это для оперативного получения анализа по активным в данный момент областям.",
      "displayName": "Выделить области",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Монитор",
          "description": "Значения по умолчанию для всех мониторов.\r\n\r\nВы можете отыскать мониторы, указав их номер, обработчика монитора (HMONITOR, как шестнадцатеричный код, отформатированный как 0xdeadbeef), точное название устройства (\"\\\\.\\DISPLAY1\"), серийный номер или понятное имя.",
          "defaultDescription": "Все мониторы"
        },
        "timeout": {
          "title": "Время ожидания в миллисекундах",
          "description": "Сколько миллисекунд нужно подождать прежде, чем скрыть выделенное.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Переместить окно",
      "detailedDescription": "Перемещает текущее окно переднего плана (или конкретное окно, используя переключатель /Окон).",
      "displayName": "Переместить окно",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Окно",
          "description": "Значения по умолчанию для текущего окна переднего плана.\r\n\r\nВы можете отыскать окно, указав его точное название, точный класс окна или его обработчика (как шестнадцатеричный код, отформатированный как \"0xdeadbeef\").",
          "defaultDescription": "Окно переднего плана"
        },
        "virtualDesktop": {
          "title": "Виртуальный рабочий стол",
          "description": "Номер виртуального рабочего стола, на который нужно перенести окно. Активный виртуальный рабочий стол будет включен как побочный эффект.",
          "defaultDescription": "Текущий виртуальный рабочий стол"
        },
        "region": {
          "title": "Область",
          "description": "В какую область следует переместить окно?\r\n\r\nУкажите регионы, используя связанные с монитором координаты, разделенные запятыми, начиная с 0,0 для левого верхнего угла. Первое число – позиция на оси X, второе – на оси Y.\r\n\r\nВы можете указать единицы измерения, напр., \"30px,50%\" для 30px от левого края, 50% от верха. Поддерживаемые единицы – px и %.\r\n\r\nОпределенные слова английского языка также распознаются, так что вы можете ввести здесь \"bottom right\" или \"center\" в качестве значений.",
          "defaultDescription": "Ничего"
        },
        "monitor": {
          "title": "Монитор",
          "description": "Значения по умолчанию для монитора, на котором в данный момент открыто окно.\r\n\r\nВы можете отыскать мониторы, указав их номер, обработчика монитора (HMONITOR, как шестнадцатеричный код, отформатированный как 0xdeadbeef), точное название устройства (\"\\\\.\\DISPLAY1\"), серийный номер или понятное имя.",
          "defaultDescription": "Текущий монитор"
        },
        "direction": {
          "title": "Направление",
          "description": "В каком направлении следует переместить окно.",
          "defaultDescription": "Никакого перемещения (оставаться в области)"
        },
        "swap": {
          "title": "Поменять местами с окнами в области назначения",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Увеличить окно на весь монитор.",
      "detailedDescription": "Увеличивает конкретное окно на весь размер монитора, на котором оно сейчас открыто, разрешая провести естественную максимизацию окна.",
      "displayName": "Увеличить окно на весь экран",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Окно",
          "description": "Значения по умолчанию для текущего окна переднего плана.\r\n\r\nВы можете отыскать окно, указав его точное название, точный класс окна или его обработчика (как шестнадцатеричный код, отформатированный как \"0xdeadbeef\").",
          "defaultDescription": "Окно переднего плана"
        },
        "monitor": {
          "title": "Монитор",
          "description": "Значения по умолчанию для монитора, на котором в данный момент открыто окно.\r\n\r\nВы можете отыскать мониторы, указав их номер, обработчика монитора (HMONITOR, как шестнадцатеричный код, отформатированный как 0xdeadbeef), точное название устройства (\"\\\\.\\DISPLAY1\"), серийный номер или понятное имя.",
          "defaultDescription": "Текущий монитор"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Сфокусироваться на окне",
      "detailedDescription": "Перенести фокус на окно в конкретном направлении.",
      "displayName": "Сфокусироваться на окне",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Окно",
          "description": "Окно, на котором вы хотите сфокусироваться. Если в добавление к этому указано Направление, оно определяет окно, которое будет использоваться для начальной позиции.\r\n\r\nВы можете отыскать окно, указав его точное название, точный класс окна или его обработчика (как шестнадцатеричный код, отформатированный как \"0xdeadbeef\").",
          "defaultDescription": "Окно переднего плана"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Направление",
          "description": "В каком направлении нам следует искать окна.",
          "defaultDescription": "Ближайшее в любом направлении окно"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Выровнять окно по центру",
      "detailedDescription": "Выравнивает по центру текущее окно переднего плана (или конкретное окно, используя переключатель /Окон) на текущем или указанном мониторе, не изменяя размер окна.",
      "displayName": "Окно по центру",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Монитор",
          "description": "Значения по умолчанию для монитора, на котором в данный момент открыто окно.\r\n\r\nВы можете отыскать мониторы, указав их номер, обработчика монитора (HMONITOR, как шестнадцатеричный код, отформатированный как 0xdeadbeef), точное название устройства (\"\\\\.\\DISPLAY1\"), серийный номер или понятное имя.",
          "defaultDescription": "Текущий монитор"
        },
        "window": {
          "title": "Окно",
          "description": "Значения по умолчанию для текущего окна переднего плана.\r\n\r\nВы можете отыскать окно, указав его точное название, точный класс окна или его обработчика (как шестнадцатеричный код, отформатированный как \"0xdeadbeef\").",
          "defaultDescription": "Окно переднего плана"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Запускает программу",
      "detailedDescription": "Запустить другую программу с заданным набором параметров.",
      "displayName": "Запустить программу",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Программа",
          "description": "Программа для запуска. Должна быть файлом на диске. Переменные среды поддерживаются.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Аргументы",
          "description": "Любые аргументы для передачи в программу.",
          "defaultDescription": "Нет"
        },
        "waitForInputIdle": {
          "title": "Подождать, пока программа будет готова",
          "description": "Ожидает запуска цикла сообщений, что означает, что программа готова.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Окно, которого нужно ждать",
          "description": "Подождите, пока процесс создаст главное окно с классом окна, точно соответствующим этому параметру, или же окно с заголовком, который содержит этот параметр без учета регистра.",
          "defaultDescription": "Нет"
        },
        "waitForExit": {
          "title": "Подождать, пока программа выйдет",
          "description": "Подождать, пока программа завершит выполнение, прежде чем продолжить.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "На передний план",
          "description": "Принудительно перевести окно на передний план. Может быть полезно при использовании в сочетании с другими командами.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Время ожидания в секундах",
          "description": "Как долго нужно ждать готовности или завершения программы. Обратите внимание, что если вы укажете и время ожидание готовности программы, и время ожидания завершение, то общее время ожидания может быть в два раза больше указанного значения.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "sk": {
    "license:apply": {
      "icon": 59182,
      "description": "Registrovať MaxTo s licenčným kľúčom",
      "detailedDescription": "Použiť licenčný kľúč.",
      "displayName": "Použiť.",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "Licen. kľúč",
          "description": "Použiť licenčný kľúč",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Odstrániť súčasnú licenciu.",
      "detailedDescription": "Odstrániť súčasnú licenciu.",
      "displayName": "Odstrániť lic.",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Získať detaily o súčasnej licencii. Licenčný kľúč nebude zobrazený.",
      "detailedDescription": "Získať detaily o súčasnej licencii. Licenčný kľúč nebude zobrazený.",
      "displayName": "Kontrola licencie MaxTo",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Nahrať sadu nast. na obraz.",
      "detailedDescription": "Nahrať región nastavení na obrazovku.",
      "displayName": "Nahrať sadu",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Obraz.",
          "description": "Východzie nastavenie pre obrazovku, na ktorej je aktuálne aktívne okno.\r\n\r\nObrazovky môžete odlíšiť cez ich číslo, ich popisovač (HMONITOR ako hexadecimálne číslo, formátované ako 0xdeadbeef) alebo cez názov zariadenia (\"\\\\.\\DISPLAY1\"), sériové číslo alebo názov.",
          "defaultDescription": "Súčasná obraz."
        },
        "name": {
          "title": "Sada nast.",
          "description": "Sada nastavení na nahratie.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Zvýrazniť aktívne oblasti na obmedzený čas",
      "detailedDescription": "Použite toto na rýchle získanie prehľadu o teraz aktívnych oblastiach.",
      "displayName": "Zvýrazniť oblasti",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Obraz.",
          "description": "Východzie nastavenie pre všetky obrazovky.\r\n\r\nObrazovky môžete odlíšiť cez ich číslo, ich popisovač (HMONITOR ako hexadecimálne číslo, formátované ako 0xdeadbeef) alebo cez názov zariadenia (\"\\\\.\\DISPLAY1\"), sériové číslo alebo názov.",
          "defaultDescription": "Všetky obr."
        },
        "timeout": {
          "title": "Časový interval (v ms)",
          "description": "Počet ms pred skrytím zvýraznenia.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Presunúť okno",
      "detailedDescription": "Presunúť terajšie okno na popredí (alebo upresniť okno použitím parametra /Window).",
      "displayName": "Presunúť o.",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Okno",
          "description": "Východzie nastavenie pre aktívne okno v popredí.\r\n\r\nOkná môžete odlíšiť cez nadpis okna, presný názov triedy okna alebo cez popisovač okna (ako hexadecimálne číslo, formátované ako \"0xdeadbeef\").",
          "defaultDescription": "Okno v popredí"
        },
        "virtualDesktop": {
          "title": "Virtuál. plocha",
          "description": "Číslo virtuálnej plochy, do ktorej presunúť okno. Súčasne sa zmení aktívna virtuálna plocha.",
          "defaultDescription": "Súčasn virtuálna plocha"
        },
        "region": {
          "title": "Oblasť",
          "description": "V ktorej oblasti má byť okno umiestnené?\r\n\r\nUpresni oblasti použitím súradníc oddelených čiarkou, začínajúcich 0,0 pre ľavý horný roh. Prvé číslo je pozíciou na osi X, druhé na osi Y.\r\n\r\nMôžete upresniť jednotky, napr. \"30px,50%\" pre 30px z ľavého okraja a 50% z horného okraja. Podporované jednotky sú px a %.\r\n\r\nVybrané anglické slová sú taktiež rozpoznané, takže môžete napísať \"bottom right\" alebo \"center\" namiesto presných súradníc.",
          "defaultDescription": "----"
        },
        "monitor": {
          "title": "Obraz.",
          "description": "Východzie nastavenie pre obrazovku s teraz aktívnym oknom.\r\n\r\nObrazovky môžete odlíšiť cez ich číslo, ich popisovač (HMONITOR ako hexadecimálne číslo, formátované ako 0xdeadbeef) alebo cez názov zariadenia (\"\\\\.\\DISPLAY1\"), sériové číslo alebo názov.",
          "defaultDescription": "Súčasná obraz."
        },
        "direction": {
          "title": "Smer",
          "description": "Ktorým smerom presunúť okno.",
          "defaultDescription": "Bez pohybu (prip. k oblasti)"
        },
        "swap": {
          "title": "Vymeniť okná v cieľovej oblasti.",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximalizuj okno na celú obrazovku.",
      "detailedDescription": "Maximalizuj dané okno na celú obrazovku, na ktorom je teraz zobrazené, tak ako by maximalizoval Windows.",
      "displayName": "Maximalizuj okno na obr.",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Okno",
          "description": "Východzie nastavenie pre súčasné okno na popredí.\r\n\r\nOkná môžete odlíšiť cez nadpis okna, presný názov triedy okna alebo cez popisovač okna (ako hexadecimálne číslo, formátované ako \"0xdeadbeef\").",
          "defaultDescription": "Okno na popredí"
        },
        "monitor": {
          "title": "Obraz.",
          "description": "Východzie nastavenie pre obrazovku s teraz aktívnym oknom.\r\n\r\nObrazovky môžete odlíšiť cez ich číslo, ich popisovač (HMONITOR ako hexadecimálne číslo, formátované ako 0xdeadbeef) alebo cez názov zariadenia (\"\\\\.\\DISPLAY1\"), sériové číslo alebo názov.",
          "defaultDescription": "Súčasná obraz."
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Fokus na okno",
      "detailedDescription": "Presunúť fokus na okno v danom smere.",
      "displayName": "Fokus na okno",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Okno",
          "description": "Okno, ktoré má získať fokus. Ak je naviac upresnený smer, bude použité pre okno ako východzia štartovacia pozícia.\r\n\r\nOkná môžete odlíšiť cez nadpis okna, presný názov triedy okna alebo cez popisovač okna (ako hexadecimálne číslo, formátované ako \"0xdeadbeef\").",
          "defaultDescription": "Okno na popredí"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Smer",
          "description": "V akom smere hľadať okno.",
          "defaultDescription": "Najbližšie okno v akomkoľvek smere"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Vystrediť okno",
      "detailedDescription": "Vystrediť súčasné popredie (alebo špecifikovať okno použitím parametra /Window) na súčasnej alebo upresnenej obrazovke bez zmeny veľkosti okna.",
      "displayName": "Vystrediť o.",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Obraz.",
          "description": "Východzie nastavenie pre obrazovku, na ktorej je aktuálne aktívne okno.\r\n\r\nObrazovky môžete odlíšiť cez ich číslo, ich popisovač (HMONITOR ako hexadecimálne číslo, formátované ako 0xdeadbeef) alebo cez názov zariadenia (\"\\\\. \\ DISPLAY1\"), sériové číslo alebo názov.",
          "defaultDescription": "Aktuálna obraz."
        },
        "window": {
          "title": "Ono",
          "description": "Východzie nastavenie pre okno na popredí.\r\n\r\nOkná môžete odlíšiť cez nadpis okna, presný názov triedy okna alebo cez popisovač okna (ako hexadecimálne číslo, formátované ako \"0xdeadbeef\").",
          "defaultDescription": "Okno na popredí"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Spustí program",
      "detailedDescription": "Spustiť iný program s danými parametrami.",
      "displayName": "Spustiť program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "Program na spustenie. Musí byť súbor na disku. Premenné prostredia sú podporované.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Parametre",
          "description": "Argumenty na odovzdanie programu.",
          "defaultDescription": "----"
        },
        "waitForInputIdle": {
          "title": "Čakať na odozvu z programu",
          "description": "Čakať na program, kým si spustí frontu správ, indikujúcu pripravenosť programu.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Okno na ktoré čaká",
          "description": "Počkajte, kým proces vytvorí hlavné okno, ktoré má triedu okien, ktorá presne zodpovedá tomuto parametru, alebo má názov okna s týmto parametrom (bez ohľadu na veľkosť písmen).",
          "defaultDescription": "----"
        },
        "waitForExit": {
          "title": "Čakať na ukončenie",
          "description": "Čakať na ukončenie programu a potom pokračovať.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Presunúť vpred",
          "description": "Vynútené okno je okno popredia. Môže byť užitočné pri použití v kombinácii s inými príkazmi.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Časový limit (s)",
          "description": "Ako dlho čakať na odozvu z programu alebo na jeho ukončenie. Pozn.: ak zadáte, aby program čakal na odozvu a zároveň aj na ukončenie, celková doba čakania môže byť dvojnásobok hodnoty časového limitu.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "tr": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "zh-CN": {
    "license:apply": {
      "icon": 59182,
      "description": "使用许可秘钥立刻注册 MaxTo",
      "detailedDescription": "立刻使用 MaxTo 许可秘钥。",
      "displayName": "使用许可",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "许可秘钥",
          "description": "要使用的许可秘钥",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "移除当前许可。",
      "detailedDescription": "移除当前许可。",
      "displayName": "移除许可",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "得到当前许可的详细信息。不返回许可秘钥。",
      "detailedDescription": "得到当前许可的详细信息。不返回许可秘钥。",
      "displayName": "检查 MaxTo 是否被许可使用",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "在一个显示器上载入预设",
      "detailedDescription": "将一个区域预设载入到一个显示器上",
      "displayName": "载入预设",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "显示器",
          "description": "默认为该窗口当前所在的显示器。\r\n\r\n你可以通过显示器的编号、句柄（HMONITOR，十六进制格式，例如0xdeadbeef）、具体设备名称（“\\\\.\\DISPLAY1”）、序列号或昵称来指定（查找）显示器。",
          "defaultDescription": "当前显示器"
        },
        "name": {
          "title": "预设名称",
          "description": "要载入的预设名称",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "短时突出显示活动区域",
      "detailedDescription": "使用该选项可快速获取当前活动区域的概述",
      "displayName": "突出显示区域",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "显示器",
          "description": "默认为所有显示器。\r\n\r\n你可以通过显示器的编号、句柄（HMONITOR，十六进制格式，例如0xdeadbeef）、具体设备名称（“\\\\.\\DISPLAY1”）、序列号或昵称来指定（查找）显示器。",
          "defaultDescription": "所有显示器"
        },
        "timeout": {
          "title": "超时时间（毫秒）",
          "description": "隐藏高光前的等待时间",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "移动一个窗口",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "移动窗口",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "窗口",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "前排窗口"
        },
        "virtualDesktop": {
          "title": "虚拟桌面",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "当前虚拟桌面"
        },
        "region": {
          "title": "区域",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "无"
        },
        "monitor": {
          "title": "显示器",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "当前显示器"
        },
        "direction": {
          "title": "方向",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "最大化窗口到整个显示器",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "最大化窗口到屏幕",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "窗口",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "前排窗口"
        },
        "monitor": {
          "title": "显示器",
          "description": "默认为该窗口当前所在的显示器。\r\n\r\n你可以通过显示器的编号、句柄（HMONITOR，十六进制格式，例如0xdeadbeef）、具体设备名称（“\\\\.\\DISPLAY1”）、序列号或昵称来指定（查找）显示器。",
          "defaultDescription": "当前显示器"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "聚焦窗口",
      "detailedDescription": "将焦点按特定方向移动到窗口。",
      "displayName": "聚焦窗口",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "窗口",
          "description": "要接收焦点的窗口。如果除此之外还指定了 \"方向\", 则指定用于起始位置的窗口。\r\n\r\n你可以通过特定的窗口标题、确切的窗口类或窗口句柄 (十六进制, 格式化为 \"0xdeadbeef\") 找到窗口。",
          "defaultDescription": "前排窗口"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "方向",
          "description": "指向查找窗口",
          "defaultDescription": "最近的任意方向的窗口"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "居中窗口",
      "detailedDescription": "在不改变窗口大小的情况下，将当前页（或Windows特定窗口）居中",
      "displayName": "中间窗口",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "显示器",
          "description": "默认为该窗口当前所在的显示器。\r\n\r\n你可以通过显示器的编号、句柄（HMONITOR，十六进制格式，例如0xdeadbeef）、具体设备名称（“\\\\.\\DISPLAY1”）、序列号或昵称来指定（查找）显示器。",
          "defaultDescription": "当前显示器"
        },
        "window": {
          "title": "窗口",
          "description": "默认为当前前台窗口。\r\n\r\n你可以通过特定的窗口标题、确切的窗口类型或窗口句柄（十六进制，格式为“0xdeadbeef”）定位窗口。",
          "defaultDescription": "前排窗口"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "启动一个程序",
      "detailedDescription": "用给定的参数启动另一个程序",
      "displayName": "启动一个程序",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "程序",
          "description": "要启动的程序。必须是磁盘上存在的文件。支持环境变量。",
          "defaultDescription": null
        },
        "arguments": {
          "title": "参数",
          "description": "任意传入程序的参数",
          "defaultDescription": "无"
        },
        "waitForInputIdle": {
          "title": "等待程序准备",
          "description": "等待程序启动消息循环来指示程序准备完毕。",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "要等待的窗口",
          "description": "等待程序创建一个完全符合参数或标题包含参数（非大小写敏感）的主窗口。",
          "defaultDescription": "无"
        },
        "waitForExit": {
          "title": "等待程序退出",
          "description": "在继续前等待程序完成。",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "置于前面",
          "description": "强制将此窗口置于前面。可与其他命令组合使用。",
          "defaultDescription": null
        },
        "timeout": {
          "title": "超时（秒）",
          "description": "程序退出等待时间。如果同时设置了等待程序准备和等待程序退出，总等待时间将为两者之和。",
          "defaultDescription": "60"
        }
      }
    }
  },
  "zh-Hans": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  },
  "zh-Hant": {
    "license:apply": {
      "icon": 59182,
      "description": "Register MaxTo immediately using a license key",
      "detailedDescription": "Applies a MaxTo license key immediately.",
      "displayName": "Apply license",
      "isRecipeCapable": false,
      "arguments": {
        "key": {
          "title": "License key",
          "description": "The license key to use",
          "defaultDescription": null
        }
      }
    },
    "license:remove": {
      "icon": 59182,
      "description": "Removes the current license.",
      "detailedDescription": "Removes the current license.",
      "displayName": "Remove license",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "license:status": {
      "icon": 59182,
      "description": "Get the details about the current license. License key is not returned.",
      "detailedDescription": "Get the details about the current license. License key is not returned.",
      "displayName": "Check if MaxTo is licensed",
      "isRecipeCapable": false,
      "arguments": {}
    },
    "regions:apply": {
      "icon": 60581,
      "description": "Load a preset on a monitor",
      "detailedDescription": "Load a region preset onto a monitor.",
      "displayName": "Load preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "name": {
          "title": "Preset name",
          "description": "The name of the preset to load.",
          "defaultDescription": null
        }
      }
    },
    "regions:cycle": {
      "icon": 59180,
      "description": "Load the next preset from a preset cycle.",
      "detailedDescription": "Allows you to quickly cycle through a set of presets through repeated invocations with the same parameters.",
      "displayName": "Cycle presets",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "presets": {
          "title": "Presets",
          "description": "The presets to cycle through (separated by comma on the command line).",
          "defaultDescription": null
        }
      }
    },
    "regions:highlight": {
      "icon": 59366,
      "description": "Highlight the active regions for a short time",
      "detailedDescription": "Use this to quickly get an overview over the currently active regions.",
      "displayName": "Highlight regions",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to all monitors.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "All monitors"
        },
        "timeout": {
          "title": "Timeout in milliseconds",
          "description": "Number of milliseconds to wait before hiding the highlight.",
          "defaultDescription": null
        }
      }
    },
    "regions:select": {
      "icon": 59621,
      "description": "Select a preset from a list of available presets.",
      "detailedDescription": "Use this to select a preset to apply on a given monitor whenever the command is run.",
      "displayName": "Select preset",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "You can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "mouse:position": {
      "icon": 60581,
      "description": "Move the mouse cursor to a specific position, window or monitor.",
      "detailedDescription": "Move the mouse cursor to a specific position, window or monitor.",
      "displayName": "Move mouse cursor",
      "isRecipeCapable": true,
      "arguments": {
        "position": {
          "title": "Position",
          "description": "Coordinates where the mouse cursor should be placed. Accepts absolute units (pixels) or relative units (percent). In case of relative units, they are measured relative to either the entire desktop, the selected monitor or the selected window.",
          "defaultDescription": "Centered"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor to place the mouse cursor relative to.",
          "defaultDescription": "No monitor"
        },
        "window": {
          "title": "Window",
          "description": "The window to place the mouse cursor relative to. Defaults to no window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "No window"
        }
      }
    },
    "window:move": {
      "icon": 59551,
      "description": "Move a window",
      "detailedDescription": "Moves the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Move window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "virtualDesktop": {
          "title": "Virtual desktop",
          "description": "The virtual desktop number to move the window to. The active virtual desktop will switch as a side effect.",
          "defaultDescription": "Current virtual desktop"
        },
        "region": {
          "title": "Region",
          "description": "Which region should the window be put in?\r\n\r\nSpecify regions by using monitor-relative coordinates separated by a comma, starting at 0,0 for the top left corner. The first number is position on the X-axis, the second is Y-axis.\r\n\r\nYou can specify units, e.g. \"30px,50%\" for 30px from the left edge, 50% from the top. The supported units are px and %.\r\n\r\nSpecific English words are also recognized, so you can put \"bottom right\" or \"center\" as values here.",
          "defaultDescription": "None"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "Which direction to move the window.",
          "defaultDescription": "No movement (stick to region)"
        },
        "swap": {
          "title": "Swap with windows in destination region",
          "description": null,
          "defaultDescription": null
        }
      }
    },
    "window:minimize": {
      "icon": 59681,
      "description": "Minimize a window.",
      "detailedDescription": "Minimize one or more windows at once.",
      "displayName": "Minimize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Find windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": null
        },
        "monitor": {
          "title": "Monitor",
          "description": "Minimize all windows on this monitor.",
          "defaultDescription": null
        },
        "all": {
          "title": "Minimize all windows",
          "description": "Set this flag to minimize all visible windows.",
          "defaultDescription": null
        }
      }
    },
    "window:size": {
      "icon": 59542,
      "description": "Resize a window",
      "detailedDescription": "Resizes the current foreground window (or a specific window using the /Window switch).",
      "displayName": "Resize window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "size": {
          "title": "Size",
          "description": "The desired size of the window. If a dimension is given in percent, it is relative to the current monitor working area.",
          "defaultDescription": null
        },
        "origin": {
          "title": "Origin",
          "description": "The origin of the resize operation. Specify \"50%,50%\" (or \"center, center\") to resize from the middle.",
          "defaultDescription": "0%,0%"
        }
      }
    },
    "window:maximize": {
      "icon": 59682,
      "description": "Maximize a window to the entire monitor.",
      "detailedDescription": "Maximizes a specific window to the entire monitor it is currently on, letting Windows' natural maximization take place.",
      "displayName": "Maximize window to screen",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        }
      }
    },
    "window:focus": {
      "icon": 59552,
      "description": "Focus on window",
      "detailedDescription": "Move the focus to a window in a specific direction.",
      "displayName": "Focus on window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The window you want to receive the focus. If Direction is specified in addition to this, it specifies the window to use for the starting position.\r\n\r\nDefaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "region": {
          "title": "Region",
          "description": "The region you want to search for the window. The window has to be maximized to this region.",
          "defaultDescription": "Any region"
        },
        "monitor": {
          "title": "Monitor",
          "description": "The monitor you want to search for the window. The window has to be partially covering this monitor's working area to be included.",
          "defaultDescription": "Any monitor"
        },
        "direction": {
          "title": "Direction",
          "description": "In which direction we should look for windows.",
          "defaultDescription": "Closest window in any direction"
        }
      }
    },
    "window:fit": {
      "icon": 59402,
      "description": "Fit windows to closest region",
      "detailedDescription": "Fits windows to the currently closest regions.",
      "displayName": "Fit to region",
      "isRecipeCapable": true,
      "arguments": {
        "windows": {
          "title": "Windows",
          "description": "Defaults to all maximizable, non-minimized windows.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "All maximizable, non-minimized windows"
        },
        "monitor": {
          "title": "Monitor",
          "description": "Only fit the windows whose current position intersects with this monitors bounds.",
          "defaultDescription": "All monitors"
        }
      }
    },
    "window:expand": {
      "icon": 59551,
      "description": "Expand edge of window",
      "detailedDescription": "Resize the window by expanding a window edge.",
      "displayName": "Expand edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the expansion stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:cycle-position": {
      "icon": 59203,
      "description": "Cycle a window through a given list of positions.",
      "detailedDescription": "Emulates WinSplit Revolution behavior to quickly place a window in specific positions of the monitor by cycling the position through a given set of positions on repeated invocations.",
      "displayName": "Cycle position",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "positions": {
          "title": "Positions",
          "description": "Accepts a list of relative rectangles, separated by pipe characters.",
          "defaultDescription": "No value"
        },
        "preset": {
          "title": "Preset",
          "description": "Use a preset positioning list.",
          "defaultDescription": null
        },
        "number": {
          "title": "Position number",
          "description": "Allow you always select a specific position number. E.g. the top left position has 3 possible placements that it cycles between. Specifying \"2\" here will disable cycling and always select the last position (top left, two thirds wide).",
          "defaultDescription": "No value"
        }
      }
    },
    "window:contract": {
      "icon": 59552,
      "description": "Contract edge of window",
      "detailedDescription": "Resize the window by contracting a window edge.",
      "displayName": "Contract edge",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        },
        "edge": {
          "title": "Edge",
          "description": "Which edge of the window should be moved?",
          "defaultDescription": "None"
        },
        "to": {
          "title": "To",
          "description": "Which edges should the contraction stop at? Valid values are Screen, Monitor and Window.",
          "defaultDescription": "Windows and monitor edges"
        }
      }
    },
    "window:center": {
      "icon": 60649,
      "description": "Center a window",
      "detailedDescription": "Centers the current foreground (or a specific window using the /Window switch) on the current or specified monitor without changing the window's size.",
      "displayName": "Center window",
      "isRecipeCapable": true,
      "arguments": {
        "monitor": {
          "title": "Monitor",
          "description": "Defaults to the monitor the window is currently on.\r\n\r\nYou can find monitors by specifying their number, their monitor handle (HMONITOR, as hexadecimal, formatted as 0xdeadbeef), or by their exact device name (\"\\\\.\\DISPLAY1\"), serial number or friendly name.",
          "defaultDescription": "Current monitor"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:transparency": {
      "icon": 59647,
      "description": "Set the transparency of a window.",
      "detailedDescription": "Set the transparency of a selected window.\r\n\r\nNote that changing the window transparency can make a window unusable (because you cannot see things that are really there), and should be used with caution. If you accidentally set a window to be transparent when you didn't mean to, the transparency will disappear whenever the affected window is closed and reopened.",
      "displayName": "Set transparency",
      "isRecipeCapable": true,
      "arguments": {
        "amount": {
          "title": "Transparency amount",
          "description": "How transparent should the window be? Ranges from 0 (completely transparent) to 255 (completely opaque).",
          "defaultDescription": null
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "window:topmost": {
      "icon": 59456,
      "description": "Toggle always on top for a window.",
      "detailedDescription": "Toggle or set always on top (topmost) for a window.",
      "displayName": "Always on top",
      "isRecipeCapable": true,
      "arguments": {
        "mode": {
          "title": "Mode",
          "description": "Choose if you want to set the windows to always on top or a regular window, or to toggle between the values.",
          "defaultDescription": "Toggle"
        },
        "window": {
          "title": "Window",
          "description": "Defaults to the current foreground window.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "Foreground window"
        }
      }
    },
    "ui:open": {
      "icon": 59559,
      "description": "Open a MaxTo window.",
      "detailedDescription": "Open a MaxTo window of your choosing.",
      "displayName": "Open MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to open.",
          "defaultDescription": null
        }
      }
    },
    "ui:close": {
      "icon": 59716,
      "description": "Close a MaxTo window.",
      "detailedDescription": "Close a MaxTo window of your choosing.",
      "displayName": "Close MaxTo window",
      "isRecipeCapable": true,
      "arguments": {
        "window": {
          "title": "Window",
          "description": "The MaxTo window to close.",
          "defaultDescription": null
        }
      }
    },
    "ui:notify": {
      "icon": 59367,
      "description": "Show a notification bubble to the end user.",
      "detailedDescription": "Shows a notification bubble in the notification area (Action Center on Windows 10) with a custom title and text.",
      "displayName": "Notification bubble",
      "isRecipeCapable": true,
      "arguments": {
        "title": {
          "title": "Title",
          "description": "The title of the notification bubble.",
          "defaultDescription": null
        },
        "text": {
          "title": "Text",
          "description": "The text of the notification bubble.",
          "defaultDescription": null
        },
        "severity": {
          "title": "Severity",
          "description": "The severity of the message. This affects the display style of the message.",
          "defaultDescription": null
        }
      }
    },
    "settings:set": {
      "icon": 59155,
      "description": "Change a setting.",
      "detailedDescription": "Change a MaxTo setting. You can only change simple settings, such as numbers, strings or boolean values.",
      "displayName": "Toggle a setting",
      "isRecipeCapable": true,
      "arguments": {
        "setting": {
          "title": "Setting",
          "description": "Which setting to toggle. Should be a path into the config.json structure, separated by periods; e.g. behavior.passiveMode.",
          "defaultDescription": null
        },
        "mode": {
          "title": "Mode",
          "description": "Quickly turn on, off or toggle boolean values.",
          "defaultDescription": null
        },
        "value": {
          "title": "Value",
          "description": "Must be a valid value for the setting you are setting. Values will be attempted to be coerced to the correct data type, so passing the string 'true' to a boolean setting will work.",
          "defaultDescription": null
        }
      }
    },
    "uncategorized:launch": {
      "icon": 59222,
      "description": "Launches a program",
      "detailedDescription": "Launch another program with a given set of parameters.",
      "displayName": "Launch a program",
      "isRecipeCapable": true,
      "arguments": {
        "executable": {
          "title": "Program",
          "description": "The program to launch. Must be a file on disk. Environment variables are supported.",
          "defaultDescription": null
        },
        "arguments": {
          "title": "Arguments",
          "description": "Any arguments to pass to the program.",
          "defaultDescription": "None"
        },
        "waitForInputIdle": {
          "title": "Wait for program to be ready",
          "description": "Waits for the program to start its message loop, indicating that the program is ready.",
          "defaultDescription": null
        },
        "waitForWindow": {
          "title": "Window to wait for",
          "description": "Wait until a window exists that matches this query. Note that the window does not have to be from the started process, unless you limit that yourself using the process name.\r\n\r\nFind windows by searching for the process name, window class and window title. All parts support wildcards or regular expressions. When setting up this command in the user interface, a nice editor is provided for the separate parts.\r\n\r\nWhen searching from the command line, the syntax is: \\[process name]\\[window class]\\[window title]. All parts are optional, meaning you can use \"\\\\\\Untitled - Notepad\" to find the window with that title.\r\n\r\nWildcards are supported for each part. You can use regular expressions by surrounding the part with forwards slashes: \"\\\\\\/.* - Notepad/\" will find any Notepad window, and is equivalent to \"\\\\\\* - Notepad\".",
          "defaultDescription": "None"
        },
        "waitForExit": {
          "title": "Wait for program to exit",
          "description": "Wait for the program to finish executing before continuing.",
          "defaultDescription": null
        },
        "skipIfAlreadyRunning": {
          "title": "Do not launch if process is already running",
          "description": "Set this flag if you do not want to run a second instance of this process. If you set this flag, MaxTo will first check to see if the process is already running, and only launch a new process if no existing process can be found. Note that MaxTo will use the full path of the executable to check if the process is running.",
          "defaultDescription": null
        },
        "bringToFront": {
          "title": "Bring to front",
          "description": "Force the window to be the foreground window. May be useful when used in combination with other commands.",
          "defaultDescription": null
        },
        "timeout": {
          "title": "Timeout in seconds",
          "description": "How long to wait when waiting for program to be ready or for it to exit. Note that if you specify both to wait for the program to be ready and for it to exit, the total wait time can be two times the timeout value.",
          "defaultDescription": "60"
        }
      }
    }
  }
}