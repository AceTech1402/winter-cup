export const HomeIcon: React.FC<{ selected: boolean }> = (selected) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M9.02 2.95842L3.63 7.33342C2.73 8.06259 2 9.61467 2 10.7918V18.5105C2 20.9272 3.89 22.9063 6.21 22.9063H17.79C20.11 22.9063 22 20.9272 22 18.5209V10.9376C22 9.67717 21.19 8.06259 20.2 7.34384L14.02 2.83342C12.62 1.81259 10.37 1.86467 9.02 2.95842Z"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 18.7395V15.6145"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CupIcon: React.FC<{ selected: boolean }> = (selected) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.1499 16.5V18.6"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.1499 22H17.1499V21C17.1499 19.9 16.2499 19 15.1499 19H9.1499C8.0499 19 7.1499 19.9 7.1499 21V22V22Z"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M6.1499 22H18.1499"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.47004 11.6501C4.72004 11.4101 4.06004 10.9701 3.54004 10.4501C2.64004 9.4501 2.04004 8.2501 2.04004 6.8501C2.04004 5.4501 3.14004 4.3501 4.54004 4.3501H5.19004C4.99004 4.8101 4.89004 5.3201 4.89004 5.8501V8.8501C4.89004 9.8501 5.10004 10.7901 5.47004 11.6501Z"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.53 11.6501C19.28 11.4101 19.94 10.9701 20.46 10.4501C21.36 9.4501 21.96 8.2501 21.96 6.8501C21.96 5.4501 20.86 4.3501 19.46 4.3501H18.81C19.01 4.8101 19.11 5.3201 19.11 5.8501V8.8501C19.11 9.8501 18.9 10.7901 18.53 11.6501Z"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FieldIcon: React.FC<{ selected: boolean }> = (selected) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
    >
      <rect
        x="1.33325"
        y="1.33325"
        width="17.3333"
        height="21.3333"
        rx="7"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
      />
      <circle
        cx="10"
        cy="12"
        r="4"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
      />
      <line
        x1="18.6665"
        y1="12.0833"
        x2="1.33317"
        y2="12.0833"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
      />
      <rect
        x="6"
        y="19.3333"
        width="8"
        height="3.33333"
        rx="1.66667"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
      />
      <rect
        x="6"
        y="1.33325"
        width="8"
        height="3.33333"
        rx="1.66667"
        stroke={selected ? "#FFCB00" : "white"}
        stroke-width="1.5"
      />
    </svg>
  );
};

export const Plus: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M1 9H17"
        stroke="#FFEA00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 17V1"
        stroke="#FFEA00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
