import { EyeCatch } from "./microcms";

/**
 * Custom loader for microcms
 * @see https://ebisu.com/note/next-image-ssg/
 */
export const microCMSLoader = ({
  src,
  width,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

export const fallbackEyecatch = (
  eyecatch: EyeCatch | undefined,
  fileName: string
): string => {
  return eyecatch ? eyecatch.url : `/fallback/${fileName}.jpg`;
};
