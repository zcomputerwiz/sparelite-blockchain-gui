const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('Creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(rootPath, 'Renameme Light Wallet-win32-x64'),
    authors: 'Renameme Network',
    version: process.env.RENAMEME_INSTALLER_VERSION,
    noMsi: true,
    iconUrl: 'https://raw.githubusercontent.com/Renameme-Network/renameme-blockchain/master/electron-react/src/assets/img/renamemelite.ico',
    outputDirectory: path.join(outPath, 'windows-installer'),
    
    
    exe: 'Renamemelite.exe',
    setupExe: 'RenamemeliteSetup-' + process.env.RENAMEME_INSTALLER_VERSION + '.exe',
    setupIcon: path.join(rootPath, 'src', 'assets', 'img', 'renamemelite.ico')
  })
}
