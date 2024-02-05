
let hadoopNodeDataArray = [

    {key: "Hadoop", desc: "Hadoop", color: "LightSteelBlue", isGroup: true, category: "tree",
        img: "assets/img/linux.png", expand: true, toolTipHTML: hadoopHTML},

    {key: "Log In", desc: "Log In", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Linux"},
    {key: "GUI", desc: "GUI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "CLI", desc: "CLI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "SSH", desc: "SSH", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "PuTTY", desc: "PuTTY", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},

    {key: "User Space", desc: "User Space", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Linux"},
    {key: "Shell", desc: "Shell", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space", toolTipHTML: shellHTML},
    {key: "Applications", desc: "Applications",color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space",
        items: [{text: "Browser", color: "LightBlue"},
            {text: "IDE", color: "LightBlue"},
            {text: "Explorer", color: "LightBlue"}]},
    {key: "System Software", desc: "System Software", height: 45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "User Processes", desc: "User Processes", height: 45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "System Utilities", desc: "System Utilities", height: 45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "Compilers/Interpreters", desc: "Compilers/Interpreters", height: 45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},


    {key: "Kernel Space", desc: "Kernel Space",color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "Linux"},
    {key: "System Call Interface", desc: "System Call Interface", height: 45,color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space", toolTipHTML: systemCallsHTML},

    {key: "Kernel", desc: "Kernel",color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "Kernel Space", toolTipHTML: kernelHTML},

    {key: "tempfs", desc: "tempfs", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel"},
    {key: "Memory Management", desc: "Memory Manager (MM)",  height: 45,color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: memoryHTML},

    {key: "procfs", desc: "procfs", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: processHTML},
    {key: "Process Management", desc: "Process Scheduler (SCHED)", height: 45,color: "WhiteSmoke", category: "tree90", shape: "RoundedRectangle",
        isGroup: true, expand: true, group: "Kernel"},
    {key: "IPC", desc: "IPC (ipcs)", height: 45,color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Process Management",
         toolTipHTML: ipcHTML},

    {key: "Virtual File System", desc: "Virtual File System(VFS)", height:45, color: "LightSteelBlue", isGroup: true, expand: false, group: "Kernel", category: "grid",
        toolTipHTML: vfsHTML},
    {key: "/root", desc: "/root", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "Root user directories "
    },
    {key: "/bin", desc: "/bin", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: binHTML
    },
    {key: "/etc", desc: "/etc", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: etcHTML
    },
    {key: "/sbin", desc: "/sbin", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "Essential System binaries "
    },
    {key: "/user", desc: "/user", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "User Application data/binaries "
    },
    {key: "/var", desc: "/var", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "Variable Data Files "
    },
    {key: "/dev", desc: "/dev", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: devfsHTML
    },
    {key: "/home", desc: "/home", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "User home directories "
    },
    {key: "/lib", desc: "/lib", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "System Libraries "
    },
    {key: "/opt", desc: "/opt", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "Optional Software Applications "
    },
    {key: "/proc", desc: "/proc", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: procfsHTML
    },
    {key: "/sys", desc: "/sys", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: sysfsHTML
    },

    {key: "Storage FS", desc: "Storage FS", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: storageHTML},
    {key: "Storage Management", desc: "Storage Management", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: storageMgmtHTML},

    {key: "NFS", desc: "NFS", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: networkHTML},
    {key: "Network Management", desc: "Network Interface (NET)", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: nwInterfaceHTML},

    {key: "IO Management", desc: "IO Management", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: ioMgmtHTML},
    {key: "Device Drivers", desc: "Device Drivers", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel", toolTipHTML: deviceDriversHTML},

    {key: "Services", desc: "Services", height: 45,color: "WhiteSmoke", category: "grid5", shape: "RoundedRectangle",
        isGroup: true, expand: true, group: "Kernel Space"},

    {key: "Security", desc: "Security", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle",
        isGroup: true, expand: false, group: "Services", toolTipHTML: securityHTML},
    {key: "Users", desc: "Users", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: usersHTML},
    {key: "Groups", desc: "Groups", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: groupsHTML},
    {key: "Systems", desc: "Systems", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: systemsHTML},
    {key: "Environment", desc: "Environment", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: environmentsHTML},
    {key: "Resource Limits", desc: "Resource Limits", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: resourceLimitsHTML},
    {key: "Privileges", desc: "Privileges", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: privilegesHTML},
    {key: "PAM", desc: "PAM", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Security", toolTipHTML: pamHTML},


    {key: "Systemd", desc: "systemd", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle",
        isGroup: true, expand: false, group: "Services", toolTipHTML: systemdHTML},
    {key: "Units", desc: "Units", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Systemd", toolTipHTML: unitsHTML},
    {key: "runLevels", desc: "runLevels", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Systemd", toolTipHTML: runLevelsHTML},
    {key: "systemctl", desc: "systemctl", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Systemd", toolTipHTML: systemctlHTML},
    {key: "journalctl", desc: "journalctl", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Systemd", toolTipHTML: journalctlHTML},

    {key: "Modules", desc: "Modules", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle",
        isGroup: true, expand: false, group: "Services", toolTipHTML: modulesHTML},

    {key: "Hardware", desc: "Hardware", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Tech Skills"},
    {key: "Motherboard", desc: "Motherboard", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Hardware"},
    {key: "CPU", desc: "CPU", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Memory", desc: "Memory", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Storage", desc: "Storage", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware", toolTipHTML: storageHTML},
    {key: "Ethernet", desc: "Ethernet", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
    {key: "IO", desc: "IO", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},

    {key: "Package Managers", desc: "Package Managers", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle",
        isGroup: true, expand: false, group: "Services", toolTipHTML: packageManagerHTML},
    {key: "Debian", desc: "dpkg/apt-get ", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Package Managers", toolTipHTML: debianHTML},
    {key: "rpm", desc: "rpm/yum", height:45, color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Package Managers", toolTipHTML: rpmHTML},

    {key: "DNS", desc: "DNS", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle", isGroup: true, expand: false, group: "Services", toolTipHTML: DNSHTML},
    {key: "Mail", desc: "Mail", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle", isGroup: true, expand: false, group: "Services", toolTipHTML: mailHTML},
    {key: "SSH", desc: "SSH", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle", isGroup: true, expand: false, group: "Services", toolTipHTML: sshHTML},
    {key: "HTTP", desc: "HTTP", height: 45,color: "WhiteSmoke", category: "grid", shape: "RoundedRectangle", isGroup: true, expand: false, group: "Services", toolTipHTML: HTTPHTML},
];

let linuxLinkDataArray = [
    {name: "logInToUS", from: "Log In", to: "User Space", category: "simplelink"},
    {name: "USToKS", from: "User Space", to: "Kernel Space", category: "simplelink"},

    {name:"ksToh", from:"Kernel Space", to: "Hardware", category: "simplelink" },

    {name:"sToM", from:"Storage", to: "Memory", category: "simplelink" },
    {name:"mToCPU", from:"Memory", to: "CPU", category: "simplelink" },
    {name:"sciToKernel", from:"System Call Interface", to: "Kernel", category: "simplelink" },
    // {name:"sciToSystemd", from:"System Call Interface", to: "Systemd", category: "simplelink" },

    {name:"vfsToSfs", from:"Virtual File System", to: "Storage FS", category: "simplelink" },
    {name:"SfsToSM", from:"Storage FS", to: "Storage Management", category: "simplelink" },

    {name:"vfsTotfs", from:"Virtual File System", to: "tempfs", category: "simplelink" },
    {name:"tfsToMM", from:"tempfs", to: "Memory Management", category: "simplelink" },
    {name:"vfsTopfs", from:"Virtual File System", to: "procfs", category: "simplelink" },
    {name:"pfsToPM", from:"procfs", to: "Process Management", category: "simplelink" },

    {name:"vfsToNfs", from:"Virtual File System", to: "NFS", category: "simplelink" },
    {name:"nfsToNM", from:"NFS", to: "Network Management", category: "simplelink" },

    {name:"vfsToIOM", from:"Virtual File System", to: "IO Management", category: "simplelink" },
    {name:"iomToDD", from:"IO Management", to: "Device Drivers", category: "simplelink" },





];

    nodeDataArray = nodeDataArray.concat(linuxNodeDataArray);
    linkDataArray = linkDataArray.concat(linuxLinkDataArray);

function linuxContainer() {
    let glModel = new go.GraphLinksModel(linuxNodeDataArray,linuxLinkDataArray);
    diagram.model = glModel;
    return diagram;
}