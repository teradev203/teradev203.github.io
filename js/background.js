
chrome.app.runtime.onLaunched.addListener(function (launchData) {
  var isWindows = typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.match(/windows/i) ? true : false
  chrome.app.window.create('../index.html', {
    id: 'webogram-chat',
    innerBounds: {
      width: 1000,
      height: 700
    },
    minWidth: 320,
    minHeight: 400,
    frame: isWindows ? { color: '#5682a3' } : 'chrome'
  })
})
