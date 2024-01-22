let linuxOverviewHTML = `OS is b/w applications and H/W, manage CPU, storage, memory, GUI, CLI, networking, security, users, and utilities <br/>
Linux originated from Unix which is leading in 1970-90. <br/>
GNU mission is to use free/open source tools for Unix.  <br/>
1992, Linus Torvalds added kernel to GNU and completes Linux OS.  <br/>
Linux's distribution includes kernel, GNU tools, additional software, and a package manager.   <br/>
Support is required for software maintenance. So distributions do that  <br/>
Distributions:  <br/>
Debian : Ubuntu, Mint, Kali   <br/>
RedHat : CentOS, Fedora  <br/>
SUSE   : OpenSUSE  <br/>
Arch Linux : LinuxHES, Monjaro 
<br/>
Boot process : <br/>
1) Switch on, will start bootstrap program called BIOS is executed using ROM(CMOS batter backed) <br/>
2) POST power on system test is executed  <br/>
3) Bootloader will be loaded using MBR(first segment in boot partition) <br/>
4) Bootloader loads the kernel selected, into RAM <br/>
5) Kernel, will start init process (systemd) <br/>
6) Kernel starts systemd in user space, and systemd starts all required initial programs. <br/>
$cat /etc/os-release     - (to get os release version) <br/>
`;

let systemdHTML =
`Systemd is the init process with PID 1 responsible for initializing system <br/>
1) Mounting devices  <br/>
2) Configuring the environment <br/>
3) Starts all enabled services <br/>
4) Cleans up terminated processes (orphans, zombies) <br/>
<br/>
systemd consists of <br/>
1) systemctl <br/>
2) journalctl <br/>
3) Init <br/>
4) Process management <br/>
5) Network management (networkd) <br/>
6) Login management (logind) <br/>
7) Logs (journlad) <br/>
etc... <br/>
<br/>
Init process reads /etc/inittab to run rc.sysinit script with runlevel argument <br/>
rc.sysinit runs each script under /etc/rc.d/rc with prefixed run order <br/>
We can change the runLevel after boot also using <br/>
sudo runlevel N 5 <br/>
sudo telinit 5 <br/>
`;

let unitsHTML =
`Units <br/>
Any entity managed by sysmted, is called a unit. <br/>
It can be <br/>
1) Service <br/>
2) Socket <br/>
3) Device <br/>
4) Mountpoint or Automount point <br/>
5) Swap file <br/>
6) Partition <br/>
7) Startup target <br/>
8) Watched filesystem paths <br/>
9) Group of externally created processes <br/> 

Systemd labels services as units <br/>
Units can be run with depend upon or conflict with other units <br/>
Units are only started after the depends on unit has been started <br/>
Each unit is configured via test file instead of a shell script <br/>
<br/>
/lib/systemd/system - standard systemd unit files (distro maintainers) <br/>
/user/lib/systemd/system - locally installed unit files (via apt-get) <br/>
/run/systemd/system - transient unit files <br/>
/etc/systemd/system - custom unit files <br/>

`;

let runLevelsHTML =
`Systemd defines following targets <br/>
rescue.target - run level 1 (Single user mode) <br/>
              - run level 2 (multiple user, no NFS, text login) <br/>
multi-user.target - run level 3 (multiple user, NFS, Networking, text login) <br/>
graphical.target - run level 5 (Multiple users, NFS, Networking, GUI) <br/>
poweroff.target - run level 0 <br/>
reboot.target - run level 6 <br/>    
`;

let systemctlHTML =
`systemctl(mostly) how we talk to systemd <br/>
With systemctl, we normally pass subcommands <br/>
systemctl [sub-command] --flags/options <br/>
Commands <br/>
systemctl list-units --type=service <br/>
systemctl status/enable/disable/start/stop/restart/reload/kill/mask ngnix <br/>

`;

let journalctlHTML =
    `systemctl(mostly) how we talk to systemd <br/>

`;

let shellHTML = `Shell is interpreter to execute commands. <br/>
Commands contains command [options] [arguments]  <br/>
Ex : ls -a /etc 
`;

let binHTML = `Essential user command binaries <br/>
bash/sh - command language interpreter that executes commands from standard input/file.  <br/>
date - print or set the system date and time  <br/>
echo - display a line of text  <br/>
uname - print system information  <br/>
mount/umount - mount/unmount a filesystem <br/>
hostname - show or set the system's host name  <br/>
ping - send ICMP ECHO_REQUEST to network hosts  <br/>
su - run a command with substitute user and group ID(Default - root)  <br/>
ssh - Connect to remote servers securely <br/>
history - display previously executed commands <br/>
info - read Info documents <br/>
who - show who is logged on
`;





let etcHTML = `Configuration files for the system <br/>
crontab is the program used to install a crontab table file, remove or list the existing tables used to serve the cron(8) daemon <br/>
cups - a standards-based, open source printing system <br/>
fstab - static information about the filesystems <br/>
host.conf - resolver configuration file <br/>
hosts - static table lookup for hostnames <br/>
init/systemmd - it acts as init system that brings up and maintains userspace services <br/>
issue - prelogin message and identification file <br/>
machine-id - Local machine ID configuration file <br/>
mtab - file contains the currently mounted filesystems <br/>
mtools - utilities to access DOS disks in Unix. <br/>
passwd - is used to update user's authentication token(s). <br/>
profile - contains Linux system wide environment and other startup scripts. <br/>
rpc - RPC program number data base <br/>
securetty - file which lists terminals from which root can log in <br/>
services - Internet network services list <br/>
shells - pathnames of valid login shells <br/>
tzset, tzname, timezone, daylight - initialize time conversion information 
`;

let storageHTML =
`Block device or block storage is hardware device which store and retrieve data at high speed. <br/>
We call them block devices, because we read/write the data in chunks/blocks. (1024 bytes) <br/>
Block devices can be mounted anywhere in the VFS <br/>
Dividing the storage space for different purposes(boot/root/swap) is called Partitioning <br/>
A block device has an entry in /dev, for each device and partition on that device <br/>
There are 2 partition types present today <br/>
MBR (master boot record) <br/>
1) It can hold 4 primary partitions <br/>
2) Manage disk devices upto 2 TB in size <br/>
3) We can add additional logical partitions using extents <br/>
GPT (GUID partition table) (Globally unique identifier) <br/>
1) It can have upto 128 partitions <br/>
2) Manage disk devices upto 9,400,000,000 TB in size <br/>
Formatting block devices <br/>
Formatting prepares the defined partition to hold data using particular file system <br/>
File Systems <br/>
Ext4 - Extended file system 4 suited for linux os and C programs <br/>
FAT32 - <br/>
NTFS - <br/>
XFS - high performance file system, using metadata journaling <br/>
BTRFS - modern feature rich copy on write file system(cloning, snapshots, volumes, etc...) <br/>
ZFS - <br/>
Files <br/>
In Linux everything is a file <br/>
lsblk - to list all physical blocks present in the system <br/>
RAID - you can group block devices together to form robust storage structures <br/>
LVM - logical volume manager <br/>
Manages block devices by defining logical structures from physical devices. <br/>
Use LVM to create file systems which span multiple disks <br/>
LVM allows to create, expand, snapshot, etc... <br/>

`;

let kernelHTML =
`Linux is a monolithic operating system. <br/>
It has single executable file and runs in system space <br/>
MacOS is micro kernel based operating system. <br/>

`;

let systemCallsHTML =
`System calls provide an interface to the services made by an operating system <br/>
A set of interfaces to interact with hardware <br/>
Frees the user from learning low level programming <br/>
Increases system security and portability <br/>
A system call is generated by a user process(program) and they are called software interrupts or traps <br/>
strace - command to trace the system calls. <br/>

`;

let vfsHTML =
`Virtual File System is an abstraction layer <br/>
Main functionality is to route the system calls implementer fs <br/>
File System Commands <br/>
chmod - change file mode bits  <br/>
chown - change file owner and group <br/>
touch - change file timestamps <br/>
cat - concatenate files and print on the standard output <br/>
grep, egrep, fgrep - print lines matching a pattern  <br/>
find - search for files in a directory hierarchy <br/>
pwd - print name of current/working directory <br/>
ls/dir - list directory contents <br/>
mkdir - make directories <br/>
dir - list directory contents <br/>
ln - make links between files <br/>
nano - File editor <br/>
vim - is a text editor that is upwards compatible to Vi  <br/>
cp - copy files and directories <br/>
mv - move (rename) files <br/>
rm - remove files or directories <br/>
more/less - is a filter for paging through text one screenful at a time <br/>
gzip, gunzip, zcat - compress or expand files <br/>
tar - an archiving utility <br/>
`;

let processHTML =
`Any running program is a process and assigned a PID and tracked by Kernel<br/>
Every process has parent process, PPID, except the init process. <br/>
Process can be assigned priority <br/>
When a process loaded into memory, it has stack, heap, code segment, data segment <br/>
Each process description is stored in Process descriptor <br/>
When the scheduler wants to switch to another process, current process state is saved <br/>
and reloaded once its back, it's called Context Switch <br/>
<br/>
Creating a process can be done by <br/>
1) system() - creates a sub process running the standard shell <br/>
2) fork() - creates child process by making an exact copy of parent <br/>
3) exec() - creates a new child process, replaces parent process, and returns only after error/failure <br/>
<br/>
States of process are New, Running, Waiting, Ready, Terminated
<br/>
Shell is a process, when you enter a command, control passes from shell to the process <br/>
And when command completes, control passes back from process to shell <br/>
<br/>
ps, top, htop are commands for process management 
Prcoessor Commands <br/>
ps - report a snapshot of the current processes <br/>
top - display Linux processes <br/>
openvt - start a program on a new virtual terminal (VT). <br/>
kill - terminate a process
bg - to send stopped job to background
fg - to get the job foreground
& at the end - to pu the job in background
jobs - to display all jobs running
sleep - to make the job sleep for some time
 `;
let ipcHTML =
`PIPE <br/>
FIFO <br/>
Message Queues <br/>
Shared Memory <br/>
Semaphores <br/>
Signals<br/>
`;
let memoryHTML =
`Every executing process uses memory. <br/>
Memory in linux is divided into 2, OS and Application. <br/>
Memory management involve RAM to Disk, Disk to RAM <br/>
Mapping between logical memory and physical memory is called virtual memory <br/>
Virtual memory is divided into chunks called Pages <br/>
Physical memory is divided into chunks called frames <br/>
Pages are mapped to Frames using Page Table <br/>
Linux will move pages between memory and swap <br/>
<br/>
Protection - linux checks and if program access memory outside its granted locations, it terminates.
<br/>
Programs can be organized into modules, and compiled independently. <br/>
Different degree of protection can be given to modules <br/>
Modules can be shared among processes <br/>
readelf - command to analyze the process structure <br/>
`;

let networkHTML =
`To share file/directory in network, we need to enable nfs-service. <br/>
<b>$sudo dnf install nfs-utils</b><br/>
<b>$sudo systemctl start nfs-server.service</b><br/>
<b>$sudo systemctl enable nfs-server.service</b><br/>
To share the which directory to share over network <br/>
<b>sudo vim /etc/exports</b><br/>
/etc 127.0.0.1(ro) <br/>
<b>$sudo exportfs -r </b> Re export - reload 
<b>$sudo vim /etc/auto.shares </b> - to define the directories to share <br/>
<b>$sudo vim /etc/auto.master </b> - to define timeout for directories which are not used <br/>
<b>$sudo systemctl reload autofs</b> - to reload autofs configuration <br/>
System ports span between 0-1023 called root ports. <br/>
User ports span between 1024-49151 <br/>
Dynamic ports - 49151-65535 <br/>
/etc/services - contains port numbers commonly defined in linux. <br/>
<b>$ss -ltnup</b> - display currently listening ports/sockets <br/>
Temporary changes <br/>
<b>$ip -c address </b>- to display the ip addresses of all NI <br/>
<b>$sudo ip link set dev eth1 up </b>- to enable/disable a NI <br/>
<b>$sudo ip address add 192.169.85.125/20 dev eth1</b> - to add ip address to a NI <br/>
<b>$sudo ip address delete 192.169.85.125/20 dev eth1</b> - to delete ip address from NI <br/>
Permanent change <br/>
<b>$netplan get</b> - to get the current netplan settings <br/>
<b>$vi /etc/netplan/99-mysettings.yaml</b> - to set the settings permanently for network <br/>
<b>$sudo netplan try/apply </b> - to apply the changes to NI <br/>
<b>$ping www.google.com </b> - uses icmp protocol to check connectivity <br/>
<b>$vi /etc/hosts </b> - converts domain name to ip-address <br/>
<b>$dig</b> - shows domain name information <br/>
whois - shows domain name metadata <br/>
`;

let nwInterfaceHTML =
`Bond - Combining two or more NIC into once, for reliability and bandwidth <br/>
        Bonding is implemented in 6 different modes <br/>         
Bridge - Connecting two NICs, so that they can communicate each other <br/>
Using /usr/share/doc/netplan/examples, /etc/netplan/ we can create bridges and bonds <br/>
Packet Filtering Firewall <br/>
<b>$sudo ufw enable/disable/delete/allow 22/deny </b> we can try firewall <br/>
<b>$sudo ufw allow in on eth1 from 192.168.1.29 to 192.169.1.81 port 80 proto tcp </b> <br/>
Port redirect and NAT <br/>
We can enable IP forwarding using /etc/sysctl.conf or /etc/sysctl.d/99-sysctl.conf <br/>
Prefer /etc/sysctl.d/99-sysctl.conf as /etc/sysctl.conf will be modified due to software package updates. <br/>
After uncommenting <b>net.ipv4.ip_forward=1</b> we need to reload all these sysctl config files using <br/>
<b>$sudo sysctl --system</b><br/>
All networking work done by kernel using Netfilter framework. <br/>
`;

let mailHTML =
`Mail Server - postfix<br/>
<b>$sudo dnf install postfix</b> - to install postfix mail system<br/>
<b>$sudo systemctl start/enable postfix</b> - to start/enable postfix mail system<br/>
<b>$sendmail ec2-user@localhost <<< "Hi Ganesh" </b> - to send mail<br/>
<b>$sudo cat /var/spool/mail/ec2-user</b> - to check the mail <br/>
<b>$sudo vim /etc/aliases</b> - to set the mail aliases <br/>
<b>$sudo newaliases</b> - to enable aliases again<br/>
Mail Client - dovecot (IMAP - internet message access protocol)<br/>
<b>$sudo dnf install dovecot</b> - to install <br/>
<b>$sudo systemctl start/enable dovecot</b> - to start/enable <br/>
<b>$sudo firewall-cmd --add-service=imap --permanent</b> - to allow via firewall <br/>
`;

let DNSHTML =
`DNS <br/>
<b>$sudo dnf install bind bind-utils</b> - for Caching DNS server <br/>
<b>$sudo vim /etc/named.conf</b> - to configure Caching DNS server <br/>
<b>$sudo systemctl start named.service</b> - to start the named server <br/>
<b>$sudo systemctl enable named.service</b> - to enable the named server so that it will run on login <br/>
`;

let sshHTML =
`SSH server - sshd<br/>
<b>$sudo vim /etc/ssh/sshd_config</b> - to configure ssh server <br/>
SSH client - ssh <br/>
<b>$sudo vim /etc/ssh/ssh_config</b> - to configure ssh client <br/>
`;

let HTTPHTML =
`HTTP Proxy Server - squid <br/>
<b>$sudo dnf install squid </b> - to install squid <br/>
<b>$sudo systemctl start/enable squid </b> - to start/enable squid <br/>
<b>$sudo firewall-cmd --add-service=squid --permanent</b> - to allow via firewall <br/>
<b>$sudo vim /etc/squid/squid.conf </b> - to configure squid <br/>
HTTP server - httpd <br/>
<b>$sudo dnf install httpd </b> - to install apache server <br/>
<b>$sudo firewall-cmd --add-service=http --permanent</b> - to allow via firewall <br/>
<b>$sudo firewall-cmd --add-service=https --permanent</b> - to allow via firewall <br/>
<b>$sudo vim /etc/httpd/conf/httpd.conf</b> - to configure HTTP server <br/>
<b>$apachectl configtest</b> - to check the configurations <br/>

HTTPS server - mod_ssl <br/>
<b>$sudo dnf install mod_ssl </b> - to install mod_ssl <br/>
<b>$sudo vim /etc/httpd/conf.d/ssl.conf</b> - to configure SSL <br/>

`;

let dockerHTML =
`Docker - Container service <br/>
<b>$sudo dnf install docker </b> - to install docker <br/>
<b>$sudo systemctl start docker </b> - to start the docker daemon<br/>
<b>$sudo systemctl enable docker </b> - to add to target so that it will start on boot<br/>
<b>$docker search nginx</b> - to search for an image<br/>
<b>$docker pull nginx</b> - to pull a image<br/>
<b>$docker run --detach --publish 8080:80 --name mywebserver nginx</b> - to run a process <br/>
<b>$docker ps -a</b> - to see all processes by docker<br/>
<b>$docker stop nameOfContainer </b> - to stop a process <br/>
<b>$docker rm/rmi nameOfContainer </b> - to remove a container/image<br/>
<b>$docker build --tag myCustomImg1.0 myDir</b> - to build an image<br/>
`;

let vmHTML =
`Virtual Machine - libvirt (utility to communicate with vm), qemu-kvm (to create and run vm) <br/>
<b>$sudo dnf install libvirt qemu-kvm </b> - to install vm and utilities <br/>
<b>$virsh list --all  </b> - lists all vms <br/>
<b>$virsh define TestMachine </b> - create VM <br/>
<b>$virsh start/reboot/reset/shutdown/destroy TestMachine </b> - to start/reboot/reset/shutdown/destroy the vm  <br/>
<b>$virsh undefine --remove-all-storage TestMachine </b> - to delete VM  <br/>
<b>$virsh autostart TestMachine </b> - to auto start on boot <br/>
<b>$virsh dominfo TestMachine </b> - to get resources info of TestMachine<br/>
<b>$virsh setvcups/setmaxmem/ </b> - to set virtual cpus/maximum memory<br/>
<b>$</b> <br/>
<b>$</b> <br/>
<b>$</b> <br/>
`;

let ioMgmtHTML =
`
`;

let deviceDriversHTML =
`Each device in system has device controller containing buffer and set of registers. <br/>
Device driver understands device controller and presents unified interface to OS <br/>
To start an IO operation, device driver loads the registers within the device controller <br/>
Device controller take an action based on the contents in registers <br/>
Device controller uses buffer for small amount of data, DMA(direct memory access) for large data <br/>

`;

let procfsHTML =
`Process Info by procfs at /proc <br/>
procfs is just something to store the immediate info regarding the processes running in the system <br/>
procfs is a filesystem, used not only to view kernel data structures <br/>
but it also allows some of them to be changed on the fly <br/>
sysctl used to change the parameters of procfs <br/>
procinfo will give nice summary of system state <br/>`;


let devfsHTML =
`All the devices that are connected to system, are automatically creates file under /dev.
Device Info by udev at /dev <br/>
udev replaces devfs (which was used to create device nodes in /dev by using kernel for naming) <br/>
udev gives more control to admins, by allowing the use of udev rules <br/>
udev runs in user space, and can change device names using udev rules(/etc/udev/rules.d) <br/>
udev is responsible for the dynamic device management needed for hot plugging devices <br/>
we can find device information in your /dev file system.
When a device is added or removed from the system, the kernel sends an event to <br/>
systemd-udevd.service daemon, which unmount from /dev file system.
With udev we can assign meaningful names to devices <br/>
udemadm monitor - monitor events those are related to udev <br/>
<br/>
lsusb, usb-devices commands to manage usb devices <br/>
<br/>
lspci - to show pci information <br/>
lscpu - to show information about cpu <br/>
`;

let sysfsHTML =
`System Info by sysfs at /sys <br/>
sysfs is in memory file system, that the kernel uses to provide information about the system <br/>
to userspace applications like udev <br/>
It was created, as procfs was not structured, and was becoming cluttered <br/>
sysfs is always mounted to /sys, but we dont find a mount point in /etc/fstab <br/>`;

let modulesHTML =
`Module <br/>
A pice of software that can be loaded/unloaded using configuration from kernel without restart <br/>
It extends the functionality of the kernel <br/>

lsmod - to show all the modules in the system <br/>
modinfo usb-storage|less - to show usb-storage module information <br/>
sudo modprobe -rv usb-storage - to remove a module <br/>
`;

let packageManagerHTML =
`Package - is list of files that a group of applications/libraries to be distributed by package management system <br/>`;

let debianHTML =
`Debian  - apt-get high level package manager - dpkg low level package manager - .tar / .deb <br/>
            -DEBIAN        <br/>
            ---control     <br/>
            -user/bin      <br/>
            ---appFile   <br/>
$dpckg-deb --build appName   (for packaging) <br/>     
$dpckg -i appName          (for install) <br/>
$apt info appName         (to get the status) <br/>
$/usr/bin/appFile         (to execute) <br/>
$which appName            (to locate in local VFS) <br/>
$sudo apt remove appName  (to remove) <br/>`;

let rpmHTML =
`Fedora/Redhat  - yum high level package manager - rpm low level package manager - rpm <br/>
$sudo dnf install -y rpmdevtools rpmlint                      <br/>
$rmpdev-setuptree             (to create package structure) <br/>
$tar --create --file appName.tar.gz appName    (to create tar) <br/>
$mv appName.tar.gz rpmbuild/SOURCES                               <br/>
$rpmdev-newspec specFile          (to create new spec file) <br/>
$vi specFile                      (to edit the spec file) <br/>
$cp specFile rpmbuild/SPECS         <br/>
$rpmlint rpmbuild/SPECS          (to verify the package is proper <br/>
$rpmbuild -bs rpmbuild/SPECS       (to build) <br/>
$sudo dnf install appName.tar.gz   (to install) <br/>
$dnf info appName                 (to view the info) <br/>
$dnf search appName              (to view the info ) <br/>
$which appName                   (to locate) <br/>
$./usr/bin/appFile               (to execute) <br/>`;

let securityHTML =
`Linux provides system security using users, groups. <br/>
`;

let usersHTML =
`Every user who logs into linux system needs a user account. <br/>
User accounts are intended for people <br/>
This allows to have personnel files, directories with proper permissions. <br/>
Operations : <br/>
<b>$sudo useradd user1</b> -   adds user to the system(ganesh), with home directory (/home/ganesh) <br/>
            and default shell(/bin/bash) to run after login. <br/>
            and all the files from (/etc/skel) directory copied to (/home/ganesh) <br/>
And other defaults related to account creation are stored in /etc/login.defs <br/>
<b>$sudo passwd user1</b> -    used to change password for user <br/>
<b>$sudo usermod --login modifiedName user1 </b>- to change the username, usermod used to modify user account. <br/>
<b>$sudo userdel user1</b> - used to delete user and group from system <br/>
                      but home directory will still be present <br/>
<b>$sudo userdel -r user1</b> - to delete user, group, home directory, and mail spool from system <br/>    
All info of user, group, userId, groupId, home directory, default shell, stored at /etc/passwd <br/>
<b>$cat /etc/passwd </b> - this will show all users present in local</br>
<b>$id</b> - this will show all info of the users who logged in now <br/>  
<b>$sudo chage --lastday 0 user1</b> - to set the password expiration date (change age), -1 to un-expire <br/>                         
`;

let systemsHTML =
`$sudo useradd --system sysacc1  - We can create system accounts <br/>
 System accounts are intended for programs <br/>
 No home directory will be created as it's not needed <br/>
 Daemons normally use system accounts <br/>
`;

let groupsHTML =
`Each user belongs to one or more groups <br/>
It allows to assign permissions to group of users/systems. <br/>
In linux - sudo/wheel group has special root permission temporarily. <br/>
            sudo - used to make changes to the important parts of the linux <br/>
         - docker group to maintain docker containers <br/>
Every user will have primary group or login group, as it's the default group when login <br/>
If a user runs a program, that program runs under that user and group permissions, it will have same permissions like user <br/>    
$sudo groupadd developrs - to add group to system <br/>
$sudo gpasswd --add user1 developers - to add user to a group <br/>
$sudo gasswd --delete user1 developers - to delete user from a group <br/>
$sudo groupmod --new-name programmers developers - to modify a group <br/>     
$sudo groupdel programmers - to delete a group <br/>
`;

let environmentsHTML =
`$env - to show the current user/system environment or profile <br/>
These values/variables used by programs/applications while running <br/>
$vi /home/ganesh/.bashrc - to edit the environment files of a user <br/>
$vi /etc/environment - to edit environment variables for all users. <br/>
If you want to run something everytime a users login use /etc/profile.d, add your scripts to run at login <br/>
`;

let resourceLimitsHTML =
`$vi /etc/security/limits.conf - to set the resource limits to default/user/group <br/>
@Domain - specify * - default, user1, group1 <br/>
@type - specify soft (min), hard (max), - (soft,hard) <br/>
@item - nproc, fsize, maxlogins, cpu <br/>
@value <br/>
$ulimit - used to view and set the resource limits for a user <br/>
We can only lower the limie using ulimit <br/>
`;

let privilegesHTML =
`To give more specific privileges to sudoers we can edit  /etc/sudoers <br/>
$visudo = But we will edit /etc/sudoers file suing visudo, to eliminate errors. <br/>
user/group host=(run_as_user) commnadlist <br/>
$sudo --login - to login as root, if the user has sudo access <br/>
$su --login - to login as root, if the user has no sudo access, but know root password <br/>
`;

let pamHTML =
`Pluggable authentication modules <br/>
/etc/pam.d - directory contains the configuration files for pam <br/>
$pam pam.conf - for configuration details <br/>
@account/@auth/@password/@session <br/>
@required/@sufficient  <br/>
$cat /etc/nsswitch.conf - contains the methods to use for authentication <br/>
$cat /etc/nslcd.conf - contains the configuration of LDAP server <br/>
$getent passwd/group - to get all entries that system can look up for authentication of users/groups <br/>

`;

let storageMgmtHTML =
`<b>$sudo lsblk</b> - lists all blocks devices attached to system <br/>
<b>$sudo fdisk --list </b> - format disk (a command line disk manipulation utility) <br/>
<b>$sudo cfdisk </b> - to format/create partitions using cursor based Interface <br/>
<b>$df </b> - disk file system to show disk usage <br/>
<b>$ncdu </b> - nCurses disk usage <br/>
<b>$sudo mkswap /dev/xvda2 </b> - to format it as swap <br/>
<b>$sudo swapon /dev/xvda2 </b> - to enable swap <br/>
<b>$swapon --show </b> - will show swap partions <br/>
<b>$sudo swapoff /dev/xvda2 </b> - to swap off <br/>
We can create swap space using raw file instead of partitions <br/>
File Systems <br/>
<b>$sudo mkfs.xfs /dev/xvda3 </b> - to format the disk using xfs file system <br/>
<b>$sudo tune2fs -l /dev/xvda3 </b>- to display all properties of the file system <br/>
Mounting - means plugging file system to one of directory <br/>
<b>$sudo mount /dev/xvda3 /mnt/ </b> - to mount a file system <br/>
Use /media - for temporary /mnt - for permanent devices <br/>
<b>$sudo umount /mnt/ </b> - to unmount a file system <br/>
/etc/fstab - is used to define block device name, mount point, file system type and mount them automatically when system start <br/>
<b>$mount </b> - to display all mounted devices on system <br/>
<b>$sudo blkid /dev/xvda3</b> - to get the block UUID <br/>
We can auto mount and unmount file systems on demand <br/>
<b>$sudo dnf install autofs </b> - to install autofs <br/>
<b>$sudo systemctl start autofs.service </b><br/>
<b>$sudo systemctl enable autofs.service </b><br/>
`;

let linuxNodeDataArray = [

    {key: "Linux", desc: "Linux", color: "LightSteelBlue", isGroup: true, category: "tree", img: "assets/img/linux.png", expand: true, toolTipHTML: linuxOverviewHTML},

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