const adminDatabaseCache = new Map();

export function cacheAdminDatabaseUri(ownerId, databaseUri) {
  adminDatabaseCache.set(ownerId, databaseUri);
}

export function getAdminDatabaseUri(ownerId) {
  return adminDatabaseCache.get(ownerId);
}
