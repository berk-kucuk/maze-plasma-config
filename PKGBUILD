# Maintainer: Berk Küçük <dev.berkkucukk@gmail.com>
#
# maze-plasma-config — the Maze Linux KDE Plasma desktop preset: the panel /
# dock layout, widget configs, kwin/kdeglobals defaults and bundled third-party
# plasmoids, plus the default .zshrc. All seeded through /etc/skel, so every new
# user inherits the Maze desktop out of the box.
#
# Extracted from the ISO's airootfs overlay. Payload lives verbatim under
# ./maze-plasma-config/ (a mirror of the target filesystem); package() copies it
# into $pkgdir. These are /etc/skel templates (copied into new users' homes),
# not live config, so they are not marked backup.
#
# The "Install Maze Linux" (maze-calamares.desktop) dock pin is deliberately
# NOT in this skel any more (1.2.1-2). It used to be, and deploy-to-target.sh
# stripped it with sed at install time — which pacman undid on the very next
# upgrade of this package, putting an installer icon back into /etc/skel on an
# installed machine (seen on real hardware, 10 Sep 2026). The live medium adds
# the pin to the live user's own panel config in setup-live-user.sh instead.

pkgname=maze-plasma-config
pkgver=1.2.1
pkgrel=3
pkgdesc="Maze Linux KDE Plasma desktop preset (panel layout, widgets, defaults, .zshrc) seeded via /etc/skel"
arch=('any')
url="https://mazelinux.berkkucukk.com.tr"
license=('GPL3')
depends=('inter-font')
optdepends=(
  'plasma-desktop: the KDE Plasma session these presets configure'
  'zsh: the shell the shipped /etc/skel/.zshrc targets'
)
source=()

package() {
  cp -a "${startdir}/maze-plasma-config/etc" "${pkgdir}/etc"
  # The .zshrc is shipped STAGED at /usr/local/share/maze/skel-zshrc — NOT as
  # /etc/skel/.zshrc — because grml-zsh-config already owns that path (installing
  # both would file-conflict during the ISO's pacstrap). deploy-to-target.sh and
  # setup-live-user.sh copy it into place after install, exactly as before.
  cp -a "${startdir}/maze-plasma-config/usr" "${pkgdir}/usr"
}
