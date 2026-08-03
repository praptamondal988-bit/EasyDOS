const STORAGE_KEY = "easydos_watch_history";

export function getWatchHistory() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveWatch(video) {

  let history = getWatchHistory();

  history = history.filter(
    (item) => item.youtubeId !== video.youtubeId
  );

  history.unshift(video);

  history = history.slice(0, 10);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}