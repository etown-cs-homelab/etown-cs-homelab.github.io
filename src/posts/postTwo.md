# Hardware and Software Setup

![Hardware Setup](/images/computers.jpg) ![Hardware Setup](/images/switch.jpg)


## Hardware
Two Desktops, a Router, a Raspberry Pi, and a Switch


## Software
PFSense, Pi-hole, VirtualBox, Windows 11, Ubuntu, Linux

## How we are Using this Hardare/Software
We used an old computer (Dell OptiPlex), and installed the program PFSense to use it as a router.
PFSense is a FreeBSD distribution which is Linux based and set it up so that we only need to access it remotely. The router is connected to the outer internet from an ethernet port. We alse have an ethernet adapter that connects to a switch. The Raspberry Pi connects to the switch. The Pi acts as the DNS server. It is running Pi-hole. The router itself manages DHCP and NTP. We have two desktops connected to the switch running Windows 11. They were given ip addresses through DHCP and they have internet access.

## Process of Software Setup