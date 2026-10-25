/*
 * Maze OLED — desktop layout applied when the Global Theme is selected WITH
 * "Use desktop layout from theme". Without this file Plasma falls back to its
 * stock layout (wiping the Maze panel), which is what made selecting the theme
 * look like it "reset KDE to stock". Only CORE Plasma 6 widgets are used here so
 * applying the layout can never fail on a missing third-party plasmoid.
 *
 * The richer shipped panel (system monitors, netspeed, thermal, etc.) lives in
 * the user's plasma-org.kde.plasma.desktop-appletsrc; this is the safe, always-
 * valid reconstruction of the Maze top panel + bottom dock.
 */

// Every screen gets a desktop with Maze Wallpaper (com.mazelinux.wallpaper,
// from the maze-wallpaper package, which maze-branding pulls in): the Maze
// wallpaper with active blur, plus live wallpapers and media mode from the
// Maze Wallpaper app. If the plugin were ever missing Plasma simply shows no
// wallpaper (it never aborts the layout the way a missing applet would).
for (var i = 0; i < screenCount; ++i) {
    var desktop = new Activity;
    desktop.name = "Maze";
    desktop.wallpaperPlugin = "com.mazelinux.wallpaper";
    desktop.currentConfigGroup = ["Wallpaper", "com.mazelinux.wallpaper", "General"];
    desktop.writeConfig("Kind", "image");
    desktop.writeConfig("Source", "/usr/share/wallpapers/Maze-Dust/contents/images/2560x1440.png");
    desktop.writeConfig("ActiveBlur", true);
    desktop.writeConfig("BlurRadius", 32);
    desktop.writeConfig("ActiveDim", 10);
}

// --- Top panel: launcher, clock and a system tray -------------------------
var top = new Panel;
top.location = "top";
top.height = Math.round(gridUnit * 1.6);

var kickoff = top.addWidget("org.kde.plasma.kickoff");
kickoff.currentConfigGroup = ["General"];
kickoff.writeConfig("icon", "/usr/share/pixmaps/maze-simple-logo.png");
// Same favorites as the skel layout: every default Maze app with a window
// (optional apps are left out), then the terminal, browser and VPN.
// Maze Panic Mode is deliberately left out — it is one keystroke away on
// Ctrl+Alt+P and should not sit where a stray click launches it.
kickoff.writeConfig("favorites", [
    "maze-welcome.desktop",
    "maze-control-center.desktop",
    "maze-store.desktop",
    "maze-guard.desktop",
    "maze-cloak.desktop",
    "entropy-shield.desktop",
    "qlam.desktop",
    "maze-ai.desktop",
    "maze-connect.desktop",
    "haze.desktop",
    "hazedrop.desktop",
    "maze-hardware.desktop",
    "maze-kernel.desktop",
    "maze-wallpaper.desktop",
    "maze-donate.desktop",
    "org.kde.konsole.desktop",
    "firefox.desktop",
    "proton.vpn.app.gtk.desktop",
]);

top.addWidget("org.kde.plasma.panelspacer");
var clock = top.addWidget("org.kde.plasma.digitalclock");
top.addWidget("org.kde.plasma.panelspacer");
top.addWidget("org.kde.plasma.systemtray");

// --- Bottom dock: window task bar ----------------------------------------
var dock = new Panel;
dock.location = "bottom";
dock.height = Math.round(gridUnit * 2.6);
dock.addWidget("org.kde.plasma.icontasks");
