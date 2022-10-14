export function toBase64 (imgUrl) {
  let bimg = "data:image/png;base64," + wx.getFileSystemManager().readFileSync(imgUrl, "base64")
  return bimg
}