export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 12px 0px 12px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <span
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#ff5f56",
        }}
      />
      <span
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#ffbd2e",
        }}
      />
      <span
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#27c93f",
        }}
      />
    </div>
  );
};
