let linuxOverviewHTML = `OS is b/w applications and H/W, manage storage, memory, GUI, CLI, networking, security, users, and utilities
Linux originated from Unix which is leading in 1970-90. 
GNU mission is to use free/open source tools for Unix. 
1992, Linus Torvalds added kernel to GNU and completes Linux OS.  
Linux distribution includes kernel, GNU tools, additional software, and a package manager.  
Support is required for software maintenance. So distributions do that 
Distributions:  
Debian : Ubuntu, Mint, Kali  
RedHat : CentOS, Fedora  
SUSE   : OpenSUSE  
Arch Linux : LinuxHES, Monjaro 
`;

let shellHTML = `Shell is interpreter to execute commands.
Commands contains command [options] [arguments] 
Ex : ls -a /etc 
`;

let binHTML = `<b>Essential user command binaries </b>
bash/sh - command language interpreter that executes commands from standard input/file. 
date - print or set the system date and time 
echo - display a line of text 
uname - print system information 
mount/umount - mount/unmount a filesystem 
hostname - show or set the system's host name 
ping - send ICMP ECHO_REQUEST to network hosts 
su - run a command with substitute user and group ID(Default - root) 
ssh - Connect to remote servers securely
history - display previously executed commands
info - read Info documents
who - show who is logged on

<b>File System Commands</b> 
chmod - change file mode bits 
chown - change file owner and group 
touch - change file timestamps 
cat - concatenate files and print on the standard output 
grep, egrep, fgrep - print lines matching a pattern 
find - search for files in a directory hierarchy 
pwd - print name of current/working directory 
ls/dir - list directory contents 
mkdir - make directories 
dir - list directory contents 
ln - make links between files 
nano - File editor 
vim - is a text editor that is upwards compatible to Vi 
cp - copy files and directories 
mv - move (rename) files 
rm - remove files or directories 
more/less - is a filter for paging through text one screenful at a time 
gzip, gunzip, zcat - compress or expand files 
tar - an archiving utility 

<b>Prcoessor Commands</b> 
ps - report a snapshot of the current processes 
top - display Linux processes 
openvt - start a program on a new virtual terminal (VT). 
kill - terminate a process `;

let etcHTML = `
<b>Configuration files for the system</b> 
crontab is the program used to install a crontab table file, remove or list the existing tables used to serve the cron(8) daemon
cups - a standards-based, open source printing system 
fstab - static information about the filesystems 
host.conf - resolver configuration file 
hosts - static table lookup for hostnames 
init/systemmd - it acts as init system that brings up and maintains userspace services 
issue - prelogin message and identification file 
machine-id - Local machine ID configuration file 
mtab - file contains the currently mounted filesystems 
mtools - utilities to access DOS disks in Unix. 
passwd - is used to update user's authentication token(s). 
profile - contains Linux system wide environment and other startup scripts. 
rpc - RPC program number data base 
securetty - file which lists terminals from which root can log in 
services - Internet network services list 
shells - pathnames of valid login shells 
tzset, tzname, timezone, daylight - initialize time conversion information 
`;


let linuxNodeDataArray = [

    {key: "Linux", desc: "Linux", color: "LightSteelBlue", isGroup: true, group: "OS Layer", category: "tree", img: "assets/img/linux.png", expand: false},
    {key: "Abstract", desc: "Abstract", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", value: "Overview",group: "Linux",
        toolTipHTML: linuxOverviewHTML},

    {key: "Log In", desc: "Log In", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "Linux"},
    {key: "GUI", desc: "GUI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "CLI", desc: "CLI", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "SSH", desc: "SSH", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},
    {key: "PuTTY", desc: "PuTTY", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", group: "Log In"},

    {key: "User Space", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree", group: "Linux"},
    {key: "Shell", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space", toolTipHTML: shellHTML},
    {key: "Applications", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space",
        items: [{text: "Browser", color: "LightBlue"},
            {text: "IDE", color: "LightBlue"},
            {text: "Explorer", color: "LightBlue"}]},
    {key: "System Software", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "User Processes", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "System Utilities", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},
    {key: "Compilers/Interpreters", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "User Space"},


    {key: "Kernel Space", color: "LightSteelBlue", isGroup: true, expand: true, category: "grid", group: "Linux"},
    {key: "System Call Interface", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "Storage Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "Memory Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "Process Management", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},


    {key: "Virtual File System", color: "LightSteelBlue", isGroup: true, expand: false, group: "Kernel Space", category: "grid",
        toolTipHTML: "File system is a software that dictates how to store and read data from disks. "},
    {key: "/root", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Root user directories</b> "
    },
    {key: "/bin", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: binHTML
    },
    {key: "/etc", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: etcHTML
    },
    {key: "/sbin", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Essential System binaries</b> "
    },
    {key: "/user", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>User Application data/binaries</b> "
    },
    {key: "/var", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Variable Data Files</b> "
    },
    {key: "/dev", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Device Files</b> "
    },
    {key: "/home", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>User home directories</b> "
    },
    {key: "/lib", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>System Libraries</b> "
    },
    {key: "/opt", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Optional Software Applications</b> "
    },
    {key: "/proc", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Virtual File System",
        toolTipHTML: "<b>Process and Kernel information files</b> "
    },


    {key: "Network Drivers", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},
    {key: "IO Drivers", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Kernel Space"},

    {key: "Hardware", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Linux"},
    {key: "Motherboard", color: "LightSteelBlue", isGroup: true, expand: true, category: "tree90", group: "Hardware"},
    {key: "CPU", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Memory", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Motherboard"},
    {key: "Storage", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
    {key: "Ethernet", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
    {key: "IO", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Hardware"},
];

let linuxLinkDataArray = [
    {name: "logInToUS", from: "Log In", to: "User Space", category: "simplelink"},
    {name: "USToKS", from: "User Space", to: "Kernel Space", category: "simplelink"},

    {name:"ksToh", from:"Kernel Space", to: "Hardware", category: "simplelink" },

    {name:"sToM", from:"Storage", to: "Memory", category: "simplelink" },
    {name:"mToCPU", from:"Memory", to: "CPU", category: "simplelink" },

];

function linuxContainer() {
    let glModel = new go.GraphLinksModel(linuxNodeDataArray,linuxLinkDataArray);
    diagram.model = glModel;
    return diagram;
}