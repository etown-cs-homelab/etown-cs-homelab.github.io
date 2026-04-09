# The Silver Slayer (TSS)
*by Martin Ratchford*

## Overview
The Silver Slayer is a text-based RPG created to teach students about cybersecurity concepts. The game itself is cybersecurity themed because of the different puzzles and ideas that the player will come across.\
\
Players will be able to unlock different paths, discover items, solve puzzles, and generally get through the game by using different concepts in their cybersecurity field. Some of these different concepts are SQL injection, phishing, CSRF, and forensics.\
\
There are two versions of TSS, a Java version, and a C version. These two versions of the game will implement different locations that the player can move to and explore. The Java version is used on a computer with a desktop environment with a terminal inspired experience, while the C version is entirely terminal based.

![Java Game](/images/JavaScreen.png)
## Java
This version of the game is where the players begin. It uses the Java Swing library to create a terminal inspired GUI. The black background, green text, and text font are meant to mimic an older style terminal. The player inputs commands into the "terminal" to interact with the game. The statistics of the player can be seen on the left of the screen while the enemy stats (if one has spawned) are on the right. Some of the statistics of a player are the character name, health, attack, defense, and inventory. On the right the enemies health, attack, and defense will be shown.

![Map](/images/Map.png)
##

Another plus of using the Java libraries is that we can include a map so that the player can see where they need to travel to next.

## C
This version of the game is played in an actual terminal. It can be run on computers that don't have a desktop environment. The inspiration for this part of the game being in a terminal is because it is in the "dark zone". The dark zone of the game includes the Mine and Cave locations. The terminal-based experience of the C version help reinforce the darker areas. Unlike the Java version, there are no graphics or pop up windows. Everything in this version of the game is presented to the user as text. This gives the user a more simplified or stripped down experience. \
In the "dark zones," players are going to be heavily reliant on their knowledge of the commands and system. Not having anything to look at on the screen other than the terminal prompts makes this part of the game more difficult then the rest. This can be seen in real world applications where someone would need to use a terminal to find threats and fix problems.

## Game Wiki
Check out the full game wiki here:
[The Silver Slayer Wiki](https://github.com/Etown-CS/the-silver-slayer/wiki)