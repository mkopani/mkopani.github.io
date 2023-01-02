const makePhotoSrc = (projectName: string, index: number) => {
  return `/images/projects/screenshots/${projectName}/${index}.png`;
};

export type Photo = {
  height: number;
  width: number;
  src: string;
};

const screenshots: { [key: string]: Photo[] } = {
  safer: Array(7)
    .fill({ height: 5, width: 3 })
    .map((photo, index) => ({
      ...photo,
      src: makePhotoSrc('safer', index),
    })),

  arc: [
    ...Array(3).fill({ height: 3, width: 4 }),
    { height: 1, width: 3 },
    { height: 1, width: 1 },
    { height: 2, width: 5 },
    { height: 4, width: 3 },
  ].map((photo, index) => ({
    ...photo,
    src: makePhotoSrc('arc', index),
  })),
};

export default screenshots;
