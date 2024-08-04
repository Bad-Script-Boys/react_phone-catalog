export const visuallyHidden: React.CSSProperties = {
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  border: '0',
  padding: '0',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'inset(50%)',
  margin: '-1px',
};

export const categoriesColorsStyle: React.CSSProperties = {
  position: 'relative',
};

export const afterStyle: React.CSSProperties = {
  content: "''",
  position: 'absolute',
  left: 0,
  bottom: 0,
  maxWidth: '320px',
  minWidth: '237px',
  width: '100%',
  height: '1px',
  backgroundColor: '#e2e6e9',
};
