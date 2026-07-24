# maze-plasma-config

The **Maze Linux KDE Plasma desktop preset**, extracted from the ISO's
`airootfs` overlay into a pacman package. Everything is seeded through
`/etc/skel`, so each new user inherits the Maze desktop out of the box.

## What's inside

| Path | Contents |
| ---- | -------- |
| `etc/skel/.config/` | Plasma panel/dock layout (`plasma-org.kde.plasma.desktop-appletsrc`), `kwinrc`, `kdeglobals`, `konsolerc`, shortcuts, splash, autostart, … |
| `etc/skel/.local/share/plasma/plasmoids/` | Bundled third-party widgets — latte separator, netspeed, thermal monitor, plasmusic toolbar |
| `usr/local/share/maze/skel-zshrc` | Default Z-shell config, shipped **staged** (not as `/etc/skel/.zshrc`) because `grml-zsh-config` owns that path — `deploy-to-target.sh` / `setup-live-user.sh` copy it into place after install |

These are `/etc/skel` templates (copied into new users' homes at account
creation), not live config, so they are not marked `backup` — existing users are
untouched; only newly created users pick them up.

## Layout & building

```
maze-plasma-config/
├── PKGBUILD  build.sh  README.md
└── maze-plasma-config/   # payload — verbatim mirror of the target filesystem
    └── etc/skel/...
```

```sh
./build.sh
./build.sh --repo ../MazeLinux/localrepo
```

## Notes

- The bundled plasmoids are third-party pure-QML widgets shipped for
  convenience (same as the current ISO). They could later move to their own
  packages if you prefer to track them upstream.
- The `autostart/maze-apply-wallpaper.desktop` entry references the
  `maze-apply-wallpaper` tool from the **maze-tools** package.
