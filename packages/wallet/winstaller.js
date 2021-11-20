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
    name: "flaxlight-blockchain",
    appDirectory: path.join(rootPath, 'FlaxLight-win32-x64'),
    authors: 'Flax Network',
    version: process.env.FLAX_INSTALLER_VERSION,
    noMsi: true,
    iconUrl: 'https://raw.githubusercontent.com/Flax-Network/flax-blockchain/master/electron-react/src/assets/img/flaxlight.ico',
    outputDirectory: path.join(outPath, 'windows-installer'),
    
    
    exe: 'flaxlight-blockchain.exe',
    setupExe: 'FlaxLightSetup-' + process.env.FLAX_INSTALLER_VERSION + '.exe',
    setupIcon: path.join(rootPath, 'src', 'assets', 'img', 'flaxlight.ico')
  })
}
