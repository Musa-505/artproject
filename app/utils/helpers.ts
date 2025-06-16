// src/utils/helpers.ts

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const target = e.target as HTMLImageElement;
  target.onerror = null;
  target.src =
    "https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found";
};