export function Icons({ icon, className }) {
  if (!icon) return "";
  const IconMap = {
    hourglasstop: HourGlassTop,
    positionbottomright: PositionBottomRight,
    positiontopright: PositionTopRight,
    positionbottomleft: PositionBottomLeft,
    person: Person,
    search: Search,
    cart: Cart,
    logout: Logout,
    hamburger: Hamburger,
    arrowdropdown: ArrowDropDown,
    arrowdropup: ArrowDropUp,
    arrowright: ArrowRight,
    arrowleft: ArrowLeft,
    close: Close,
    expandmore: ExpandMore,
    expandless: ExpandLess,
    chevronright: ChevronRight,
    chevronleft: ChevronLeft,
    rotateright: RotateRight,
    rotateleft: RotateLeft,
    zoom: Zoom,
    van: Van,
    arrowrange: ArrowRange,
    settings: Settings,
    link: Link,
  };
  const IconExport = IconMap[icon];
  return <IconExport className={className ? className : "h-12 w-12 p-2"} />;
}

export function Link({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
    </svg>
  );
}

export function Swap({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z" />
    </svg>
  );
}

export function Settings({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z" />
    </svg>
  );
}
export function ArrowRange({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M280-280 80-480l200-200 56 56-103 104h494L624-624l56-56 200 200-200 200-56-56 103-104H233l103 104-56 56Z" />
    </svg>
  );
}

export function Van({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 212.41 106.59"
    >
      <path d="M174.01 90.34c-2.77 4.31-4.68 9.68-8.47 12.71-9.78 7.82-23.38 1.93-25.32-10.48-.42-2.71-1.35-3.68-4.07-3.67-23.82.07-47.65-.01-71.47.17-1.36.01-3.82 1.83-3.87 2.89-.35 7.99-8.75 14.95-16.9 14.51-8.5-.46-14.34-6.32-15.6-15.91-.04-.31-.24-.61-.68-1.68-5.44 0-11.21-.03-16.98.01-4.44.03-7.72-1.91-9.71-5.81-2-3.91-.76-7.38 2.81-9.82 1.24-.85 2.79-2.69 2.66-3.9-1.7-15.41 2.39-29.92 6.44-44.48 1.43-5.13 2.46-10.36 3.68-15.55C18.51.93 28.11-2.68 35.26 2.2c.9.61 2.59.96 3.48.53 6.29-3.1 20.45-3.11 26.78.07.75.38 2.11.45 2.75.02C75.44-2.05 83.42 1.74 90.92.58c3.35 4.51 6.62.4 10.02.1 5.95-.52 11.98-.22 17.98-.09 1.19.03 2.32 1.05 3.54 1.26 1.51.27 3.42.77 4.57.12 3.69-2.09 21.09-2.01 24.82.36.85.54 2.28.94 3.11.6 11.69-4.78 18.12-2.5 24.65 8.18 6.25 10.22 12.93 20.17 19.5 30.18.77 1.18 1.94 2.43 3.2 2.89 5.05 1.84 6.89 5.28 6.21 10.49-.52 3.96-.77 7.96-1 11.95-.19 3.39-.6 6.38 3.19 9.01 3.9 2.71.57 8.96-4.55 11.05-8.55 3.49-17.33 1.76-26.01 2.22-2.45.13-4.9.02-7.36.02.41.47.82.95 1.22 1.42zm-61.72-48.46v-.03c7.65 0 15.31-.04 22.96.01 3.93.03 5.86-1.79 5.83-5.74-.03-4.66 0-9.32 0-13.98 0-3.56-1.52-5.65-5.36-5.65-15.64.03-31.28.02-46.93.02-3.8 0-5.34 2-5.27 5.66.08 4.49.16 8.99-.02 13.48-.19 4.56 1.98 6.3 6.31 6.24 7.5-.08 14.99-.01 22.48-.01zm-52.88-.03v.04c4.99 0 9.98.04 14.96-.01 3.81-.04 5.82-1.84 5.73-5.86-.11-4.65-.04-9.31-.02-13.97.02-3.67-1.75-5.55-5.46-5.55-10.14.01-20.28.03-30.43-.01-3.78-.01-5.46 1.92-5.47 5.53-.02 4.67.02 9.32-.02 13.98-.03 3.89 1.8 5.87 5.74 5.86 4.99-.02 9.98-.01 14.97-.01zm98.43-25.34c-2.66 0-5.32.08-7.98-.02-3.93-.15-5.91 1.61-5.9 5.58.02 4.82.02 9.64 0 14.46-.01 3.49 1.73 5.24 5.17 5.28 3.32.04 6.65-.02 9.97.02 12.69.17 12.11.37 12.06-11.81-.04-14.63 1.19-13.56-13.32-13.51zm25.13 25.32v-.08c2.15 0 4.47.49 6.39-.18 1.19-.41 2.83-3.22 2.45-3.87-3.85-6.54-7.98-12.93-12.3-19.17-.72-1.04-2.9-1.72-4.2-1.48-.81.15-1.69 2.35-1.73 3.66-.19 5.46-.07 10.93-.07 16.39 0 3.33 1.77 4.79 4.99 4.74 1.49-.03 2.98-.01 4.47-.01zM53.25 90.79c.03-4.41-4.12-8.44-8.66-8.42-4.69.03-8.57 3.96-8.46 8.56.12 4.42 3.88 8.15 8.33 8.24 4.52.1 8.76-3.95 8.79-8.38zm102.7-8.41c-4.62.04-8.55 4.03-8.44 8.57.11 4.53 4.24 8.36 8.87 8.2 4.48-.15 8.11-3.89 8.12-8.37.01-4.68-3.82-8.44-8.55-8.4zm-6.78-38.46c-2.23 1.98-3.68 3.27-5.14 4.56 1.87.84 3.73 2.3 5.6 2.33 1.63.02 3.29-1.58 4.94-2.47-1.52-1.24-3.05-2.49-5.4-4.42zm-13.65 8.46c2.38-1.75 5.23-2.81 5.34-4.13.31-3.45-2.96-2.99-5.04-2.64-1.88.32-3.59 1.64-5.37 2.51 1.48 1.25 2.95 2.49 5.07 4.26z" />
    </svg>
  );
}

export function Zoom({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Zm-40-60v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
    </svg>
  );
}

export function HourGlassTop({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z" />
    </svg>
  );
}

export function PositionBottomRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M360-280h360v-120H360v120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </svg>
  );
}

export function PositionTopRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M360-560h360v-120H360v120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </svg>
  );
}

export function PositionBottomLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M240-280h360v-120H240v120Zm-40 160q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </svg>
  );
}

export function Person({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
    </svg>
  );
}

export function Search({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </svg>
  );
}

export function Cart({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
    </svg>
  );
}

export function Logout({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
    </svg>
  );
}

export function Hamburger({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}

export function ArrowDropDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
}

export function ArrowDropUp({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  );
}

export function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M400-280v-400l200 200-200 200Z" />
    </svg>
  );
}

export function ArrowLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M560-280 360-480l200-200v400Z" />
    </svg>
  );
}

export function Close({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
}

export function ExpandMore({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
}

export function ExpandLess({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
    </svg>
  );
}

export function ChevronRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}

export function ChevronLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}

export function RotateRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M522-80v-82q34-5 66.5-18t61.5-34l56 58q-42 32-88 51.5T522-80Zm-80 0Q304-98 213-199.5T122-438q0-75 28.5-140.5t77-114q48.5-48.5 114-77T482-798h6l-62-62 56-58 160 160-160 160-56-56 64-64h-8q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-162v82Zm322-134-58-56q21-29 34-61.5t18-66.5h82q-5 50-24.5 96T764-214Zm76-264h-82q-5-34-18-66.5T706-606l58-56q32 39 51 86t25 98Z" />
    </svg>
  );
}

export function RotateLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path d="M440-80q-50-5-96-24.5T256-156l56-58q29 21 61.5 34t66.5 18v82Zm80 0v-82q104-15 172-93.5T760-438q0-117-81.5-198.5T480-718h-8l64 64-56 56-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-438q0 137-91 238.5T520-80ZM198-214q-32-42-51.5-88T122-398h82q5 34 18 66.5t34 61.5l-58 56Zm-76-264q6-51 25-98t51-86l58 56q-21 29-34 61.5T204-478h-82Z" />
    </svg>
  );
}
