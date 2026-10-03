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

## Installation

> **Part of Maze Linux.** Every Maze Linux system already has it (pulled in by `maze-meta`). It is built around Maze's own system layout, so installing it on another distribution is not supported.

### From the Maze repository

**On Maze Linux** the repository is already configured:

```bash
sudo pacman -S maze-plasma-config
```

**On Arch Linux and Arch-based distributions**, add the repository once:

1. Import and trust the Maze signing key:

   ```bash
   curl -O https://mazerepo.berkkucukk.com.tr/packages/mazelinux.gpg
   gpg --show-keys --with-fingerprint mazelinux.gpg
   sudo pacman-key --add mazelinux.gpg
   sudo pacman-key --lsign-key 7C4D515A6B930CB04794CEF6147C8159B3E2EE5F
   ```

   The fingerprint `gpg` prints must be `7C4D 515A 6B93 0CB0 4794  CEF6 147C 8159 B3E2 EE5F`.

2. Add the repository to the end of `/etc/pacman.conf`:

   ```ini
   [mazelinux]
   SigLevel = Required DatabaseOptional
   Server = https://mazerepo.berkkucukk.com.tr/packages
   ```

3. Sync and install:

   ```bash
   sudo pacman -Syu maze-plasma-config
   ```

Optionally install `mazelinux-keyring` as well; it keeps the signing key up to date through pacman.

Remove with `sudo pacman -Rns maze-plasma-config`.

### Build from source

```bash
sudo pacman -S --needed base-devel git
git clone https://github.com/berk-kucuk/maze-plasma-config.git
cd maze-plasma-config
makepkg -si
```

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

## License

Copyright © 2026 Berk Küçük

Released under the GNU General Public License v3.0 — see [LICENSE](LICENSE).
