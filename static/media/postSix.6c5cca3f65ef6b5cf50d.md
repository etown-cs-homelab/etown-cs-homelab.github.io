# Wuzah Server Installation


![Wuzah](/images/wazuh.png)

## Setting up the Linux Server
To setup the Wuzah server, we first needed a computer to put it on. We pulled a new computer, that we got that ITS was recycling for it being too old. It was installed with Ubuntu Server LTS 24.04, it was given the name the silver server, since that was our original server's name. We had originally installed Ubuntu on a different computer that we had to use it as a wuzah server, but it's networking was corrupted, as it didn't connect to the internet on our network, so the easyiest thing to do was to pull a new computer.
------------------------------
## Installing Wuzah
The process to install Wuzah on the server was thankfully fairly easy. We installed it from [this guide](https://documentation.wazuh.com/current/quickstart.html) on the wuzah website. It helped us quickly set up the server with a single command. The only problem was that the next week when we came back to install the clients, we tried to turn the server on again, and it failed to come to life. The dashboard wouldn't work, and we could only ssh into the silver server. This puzzled us to why, and attempted to troubleshoot it, then we decided that it might have been from the fact that at the end of last week we turned it off suddenly, which might have corrupted Wuzah, so we re-installed it. As part of this process, and since this is a server, we gave it a DHCP reservation in the pfsense portal. It is now permanantly at 192.168.2.3, which will make it much easier to find the dashboard at all times.
## Installing the Client Agents
The process was similarly easy for deploying the client on our agents. We only have 5, the two main desktops with VMs, and the "standard user" laptops that are our endpoint devices. There is also a windows server in the works, but since it wasn't up by the time of the wuzah server, it didn't get the client. The Wuzah server makes the installation very easy. There is a link on the wuzah server dashboard about deploying agents, since the whole agent software is installed on the server. all that had to happen is one command in an admin powershell window, and it automatically installed and enrolled our devices with the Wuzah agent.
## Current Agents
We now have the 5 agents mentioned earlier enrolled in wuzah. We also are going to deploy syslog on the computers for better logging functionality.