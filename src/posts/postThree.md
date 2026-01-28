# PC Layout

![PC Layout](/images/setup_12052025.jpg) \
##
After setting up our network [Post Two](https://etown-cs-homelab.github.io/posts/postTwo), we of course needed to add some actual machines to go with it. While there will be more added eventually, here's what we've got as of December 2025. Note that these lists do not reference the devices already covered by the aforementioned network article.


## Desktops

2x OptiPlex 7050 \
1x Aspire XC-705 \
1x IdeaCentre 90F1

## Laptops

1x Latitude 5480 \
1x EliteBook 1040 G4 \
1x EliteBook 1030 G2

## Details

The two OptiPlex desktops are both running Windows 11, while all three laptops are using Windows 10. These laptops do not have the capability to run Windows 11, and we also want to keep them on 10 in order to have some machines with older OSes around. Many systems found throughout various organizations are using "outdated" software and/or operating systems, so we want to include those too. That's why the Aspire desktop currently has Windows Vista installed. This computer is not allowed to access the internet, as it would be a very easy target. The IdeaCentre, meanwhile, has an issue with it's drive that we still need to resolve, as we can't install anything onto it if the storage doesn't work. \
\
We may convert the Windows Vista PC and the currently nonfunctional PC to use Linux instead. Linux has lighter resource requirements, making it ideal for these older computers. We also don't have anything running Linux after converting the Linux server we had into the pfSense router. As for which distribution we would use, that has yet to be decided. For the sake of variety, it's likely that one PC will be Debian-based, and the other Arch-based. That would give us five Windows and two Linux computers to start with. \
\
Each computer is hardwired directly to the switch we're using. The two EliteBooks don't have any ethernet ports, but we have USB adapters that allow them to connect: \
\
![USB Ethernet Adapter](/images/jeff.jpg) \
\
No computers have wireless internet enabled, nor is there even be an open network for them to access. This is done to ensure that every device is connected specifically to our network and has to use our configuration. This also keeps potentially vulnerable machines disconnected from the internet at large if we choose to isolate our network.