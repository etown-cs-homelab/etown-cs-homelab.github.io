# Network Setup

![Network Setup](/images/computers.jpg) ![Network Setup](/images/switch.jpg)

### Hardware
- Dell OptiPlex 3050
- Raspberry Pi 5
- 3Com 4400 Switch

### Software
- Raspberry Pi OS (Debian based)
- Pi-hole 6.2.2
- pfSense 2.8.1 (FreeBSD based)

## Constructing the Network
The first thing we did was install Pi-hole. Since we installed this on an actual Raspberry Pi, we already had Raspberry Pi OS (Debian-based). Installing Pi-hole itself was quite simple, and Pi-hole provides documentation on their [Github](https://github.com/pi-hole/pi-hole/#one-step-automated-install). We first downloaded the installer via `wget -O basic-install.sh https://install.pi-hole.net` and then ran it with `sudo bash basic-install.sh`. Downloading the installer manually allowed for review of the code prior to execution.

pi-hole installer

The next major step was to get a working router. We had a Ubuntu Server, but that does not function as a router without significant changes, nor does it seem that secure. Instead, we downloaded pfSense. pfSense is an open source, FreeBSD-based OS intended for usage as a router. Shoutout to [this guide](https://wiki.futo.org/index.php/Introduction_to_a_Self_Managed_Life:_a_13_hour_%26_28_minute_presentation_by_FUTO_software#Step_1:_Downloading_pfSense_and_Preparing_a_Bootable_USB_Drive) for providing very helpful reference information!

The computer we used (and are using) for the router is an old Dell OptiPlex 3050 desktop. We first acquired a pfSense image from the [mirror site](https://atxfiles.netgate.com/mirror/downloads/), as the standard pfSense website requires "buying" the image and providing billing information. The exact file we downloaded was `pfSense-CE-memstick-2.7.2-RELEASE-amd64.img.gz` (we may or may not have downloaded the wrong file initially, but we got there eventually). This file was then unzipped and flashed to a USB. This was actually done from MacOS, so the commands looked like this:
`diskutil list`
`sudo dd if=pfSense-CE-memstick-2.7.2-RELEASE-amd64.img of=/dev/disk4 bs=1M status=progress`
Note that if you're following along you'll need to update the *if* and *of* arguments for dd.

After that, we ensured that Secure Boot was disabled on the machine about to become a router and then booted from the flashed USB. pfSense's installer then started. We chose the ZFS filesystem and stripe with no redundancy, as this machine only has one drive. Perhaps in the future we could add another, but for now, the goal is just to have a working setup. The rest of the installation process was very straightforward: Install on the right disk (there was only one besides the USB), shutdown, remove the USB, and continue.

Before starting the device up again, we had to set up some ethernet cables. The computer, or router, only had a single ethernet port, so we connected a USB-to-ethernet adapter in order to get a second ethernet port. The built-in port was then connected to the wider internet, while the other was connected directly to a machine that was going to become the first member of our local network. Initially though, we needed this second computer to finish setting up pfSense.

Then it was time to power up our newly created router. There was a lot of text being output, but that was expected. Eventually, we were asked if we wanted to configure VLANs. The answer to that was no. Then we were asked to configure our network interfaces. The two interfaces shown to use were *re0* and *ue0*, the former of which had been assigned an IP address. This means that *re0* was the one connected to the upstream router. *re0* became the WAN interface, meanwhile, *ue0* became the LAN interface.

The room we're building our setup in already uses 192.168.1.0/24 for its network, so we changed our LAN IP to 192.168.2.1 in order to avoid conflicts. We also enabled DHCP. The last step was to enable SSH (option 14 on the pfSense menu) so that we could access this router remotely. After that, we were able to disconnect the monitor and keyboard we had wired to the router and return that equipment to the random computer we had stolen it from. The machine hardwired to pfSense would be used to access the web console, and SSH was turned on in case we needed it.

From the connected computer, we could get to the pfSense web console by going to `192.168.2.1` in a browser. After signing in with the default credentials (*admin* and *pfSense*), the initial configuration wizard opened. The options were fairly straightforward. We set a custom hostname and domain, which we won't be revealing here for the sake of security, and set the DNS to `8.8.8.8` (this will get changed later). The important step was to uncheck the "Allow DNS server list to be overridden" box. Next we set the timezone, left the WAN and LAN pages alone, and set a better password. Once everything was set up, we visited a random website and verified that we did indeed have internet access!

Remember Pi-hole? Now it's time to use it.
set dns
done