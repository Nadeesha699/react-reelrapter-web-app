export const formatDuration = (seconds: number | null): string => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h > 0) {
    return [
      h,
      m.toString().padStart(2, "0"),
      s.toString().padStart(2, "0"),
    ].join(":");
  }
  return [m.toString().padStart(2, "0"), s.toString().padStart(2, "0")].join(
    ":"
  );
};

export const setSafeFileName = (title: any) => {
  const safeFilename = (title || "video")
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .trim()
    .replace(/\s+/g, "_");
  return safeFilename;
};
