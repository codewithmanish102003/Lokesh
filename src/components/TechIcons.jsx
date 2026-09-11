import React from "react";

// Flutter Official Brand SVG
export const FlutterIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.685 0z" />
    <path fill="#0175C2" d="M14.286 9.686L6.871 17.1 14.3 24.529h7.414l-7.429-7.429 7.429-7.414z" />
    <path fill="#29B6F6" d="M6.871 17.1l3.715 3.714 3.714-3.714-3.714-3.715z" />
  </svg>
);

// Dart Official Brand SVG
export const DartIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <path fill="#01579B" d="M4.1 3.2L0 12.3l4.6 7.5 14.8-1.5L24 12.4 17.2 4.1z" opacity="0.1"/>
    <path fill="#0081CB" d="M4.1 3.2L0 12.3l11.4 7.5 7.9-1.5L24 12.4 17.2 4.1z"/>
    <path fill="#00B4AB" d="M11.4 19.8L4.6 19.8 0 12.3l11.4 7.5z"/>
    <path fill="#29B6F6" d="M24 12.4L19.3 18.3 11.4 19.8 24 12.4z"/>
    <path fill="#00E5FF" d="M17.2 4.1L4.1 3.2 12.3 8.2 24 12.4z"/>
    <path fill="#00B0FF" d="M12.3 8.2L4.1 3.2 0 12.3l11.4 7.5 0.9-11.6z"/>
  </svg>
);

// Android Official Brand SVG
export const AndroidIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path fill="#3DDC84" d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1568-.2716.064-.6185-.2076-.7753-.2716-.1568-.6185-.064-.7753.2076l-2.0234 3.5046a11.96 11.96 0 0 0-4.8712-.9993c-1.748 0-3.3982.3553-4.8712.9993L5.1094 5.3042c-.1568-.2716-.5037-.3644-.7753-.2076-.2716.1568-.3644.5037-.2076.7753l1.996 3.4572C2.6397 11.0827.4237 14.654 0 18.918h24c-.4237-4.264-2.6397-7.8353-6.1185-9.5966"/>
  </svg>
);

// Apple / iOS Official SVG
export const AppleIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.66-.8 1.1-1.92.98-3.04-1 .04-2.17.67-2.85 1.47-.58.68-1.1 1.77-.96 2.87 1.11.09 2.19-.58 2.83-1.3z"/>
  </svg>
);

// VS Code Official SVG
export const VSCodeIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <path fill="#0065A9" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.44-3.4a1.05 1.05 0 0 0-1.325.04l-1.02.86a.915.915 0 0 0-.04 1.34l3.58 3.54-3.58 3.54a.915.915 0 0 0 .04 1.34l1.02.86a1.05 1.05 0 0 0 1.325.04l4.44-3.4 9.46 8.63a1.49 1.49 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 21.05V2.95a1.5 1.5 0 0 0-.85-1.363z"/>
    <path fill="#007ACC" d="M18 4.72v14.56l-8.08-7.28L18 4.72z"/>
    <path fill="#1F9CF0" d="M23.15 2.587a1.5 1.5 0 0 0-1.15.363L9.92 12l12.08 9.05a1.5 1.5 0 0 0 2-1.42V2.95a1.5 1.5 0 0 0-.85-.363z"/>
  </svg>
);

// Postman Official SVG
export const PostmanIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="12" fill="#FF6C37"/>
    <path fill="#FFF" d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm3.8 5.7l-2.1 2.1a.5.5 0 0 1-.7 0l-.8-.8a.5.5 0 0 1 0-.7l2.1-2.1a2.8 2.8 0 0 1 4 0 2.8 2.8 0 0 1 0 4l-4.2 4.2a2.8 2.8 0 0 1-4 0l-.8-.8a.5.5 0 0 1 0-.7l.8-.8a.5.5 0 0 1 .7 0l.8.8a1.4 1.4 0 0 0 2 0l4.2-4.2a1.4 1.4 0 0 0 0-2 1.4 1.4 0 0 0-2 0z"/>
  </svg>
);

// Git Official SVG
export const GitIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path fill="#F05032" d="M23.546 10.93L13.067.452a1.505 1.505 0 0 0-2.128 0L8.87 2.52l2.927 2.927a1.777 1.777 0 0 1 2.174 2.184l2.816 2.816a1.77 1.77 0 0 1 1.954 1.964l3.805-3.805a1.503 1.503 0 0 0 0-2.126l-8.995-8.995zM9.912 18.08a1.77 1.77 0 0 1-2.28-2.28l-2.82-2.82a1.77 1.77 0 0 1-1.953-1.954L.454 13.43a1.503 1.503 0 0 0 0 2.126l10.48 10.48a1.503 1.503 0 0 0 2.126 0l2.404-2.404-2.927-2.927a1.778 1.778 0 0 1-2.625-2.625z"/>
  </svg>
);

// Android Studio Official SVG
export const AndroidStudioIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="11" fill="#3DDC84"/>
    <path fill="#073042" d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm-2 11.5l-3-4 1.5-1.5 2 2.5 4.5-5 1.5 1.5z"/>
  </svg>
);

// REST API SVG
export const RestApiIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

// JSON Parsing SVG
export const JsonIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);
