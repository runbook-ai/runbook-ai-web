const STORAGE_KEY = 'runbookai_discord_agent_v1';

/** Load the persisted settings object from localStorage (never throws). */
export function loadSettings() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

/** Persist the settings object to localStorage. */
export function saveSettings(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}


/** Return the configured proxy URL (Discord REST only - no LLM). */
export function getProxyUrl() {
  const s = loadSettings();
  return (s.proxyUrl || 'http://localhost:8082').replace(/\/$/, '');
}
