// src/utils/fileUtils.js
import { FiArchive, FiMusic, FiBook, FiCode, FiCpu, FiImage, FiFileText, FiVideo, FiGlobe, FiFile } from 'react-icons/fi';

const fileIcons = {
  archive: FiArchive,
  audio: FiMusic,
  book: FiBook,
  code: FiCode,
  exec: FiCpu,
  font: FiFileText,
  image: FiImage,
  sheet: FiFileText,
  slide: FiFileText,
  text: FiFileText,
  video: FiVideo,
  web: FiGlobe
};

const fileTypes = {
  archive: ['7z', 'a', 'apk', 'ar', 'bz2', 'cab', 'cpio', 'deb', 'dmg', 'egg', 'gz', 'iso', 'jar', 'lha', 'mar', 'pea', 'rar', 'rpm', 's7z', 'shar', 'tar', 'tbz2', 'tgz', 'tlz', 'war', 'whl', 'xpi', 'zip', 'zipx', 'xz', 'pak'],
  audio: ['aac', 'aiff', 'ape', 'au', 'flac', 'gsm', 'it', 'm3u', 'm4a', 'mid', 'mod', 'mp3', 'mpa', 'pls', 'ra', 's3m', 'sid', 'wav', 'wma', 'xm'],
  book: ['mobi', 'epub', 'azw1', 'azw3', 'azw4', 'azw6', 'azw', 'cbr', 'cbz'],
  code: ['ada', 'adb', 'ads', 'asm', 'bas', 'bash', 'bat', 'c', 'cpp', 'cbl', 'cc', 'class', 'clj', 'cob', 'cs', 'csh', 'cxx', 'd', 'diff', 'el', 'f', 'f77', 'f90', 'fish', 'for', 'fth', 'ftn', 'go', 'groovy', 'h', 'hh', 'hpp', 'hs', 'html', 'htm', 'hxx', 'java', 'js', 'jsx', 'jsp', 'ksh', 'kt', 'lhs', 'lisp', 'lua', 'm', 'm4', 'nim', 'patch', 'php', 'pl', 'po', 'pp', 'py', 'r', 'rb', 'rs', 'scala', 'sh', 'swg', 'swift', 'v', 'vb', 'vcxproj', 'xcodeproj', 'xml', 'zsh', 'plist',],
  exec: ['exe', 'msi', 'bin', 'command', 'sh', 'bat', 'crx', 'bash', 'csh', 'fish', 'ksh', 'zsh'],
  font: ['eot', 'otf', 'ttf', 'woff', 'woff2'],
  image: ['3dm', '3ds', 'max', 'bmp', 'dds', 'gif', 'jpg', 'jpeg', 'png', 'psd', 'xcf', 'tga', 'thm', 'tif', 'tiff', 'yuv', 'ai', 'eps', 'ps', 'svg', 'dwg', 'dxf', 'gpx', 'kml', 'kmz', 'webp'],
  sheet: ['ods', 'xls', 'xlsx', 'csv', 'ics', 'vcf'],
  slide: ['ppt', 'odp'],
  text: ['doc', 'docx', 'ebook', 'log', 'md', 'msg', 'odt', 'org', 'pages', 'pdf', 'rtf', 'rst', 'tex', 'txt', 'wpd', 'wps', 'json'],
  video: ['3g2', '3gp', 'aaf', 'asf', 'avchd', 'avi', 'drc', 'flv', 'm2v', 'm4p', 'm4v', 'mkv', 'mng', 'mov', 'mp2', 'mp4', 'mpe', 'mpeg', 'mpg', 'mpv', 'mxf', 'nsv', 'ogg', 'ogv', 'ogm', 'qt', 'rm', 'rmvb', 'roq', 'srt', 'svi', 'vob', 'webm', 'wmv', 'yuv'],
  web: ['html', 'htm', 'css', 'js', 'jsx', 'less', 'scss', 'wasm', 'php']
};

export const getFileType = (extension) => {
  for (const [type, extensions] of Object.entries(fileTypes)) {
    if (extensions.includes(extension)) {
      return type;
    }
  }
  return 'file';
};

export const getFileIcon = (fileType) => {
  return fileIcons[fileType] || FiFile;
};
