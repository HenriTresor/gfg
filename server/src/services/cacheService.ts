import NodeCache from 'node-cache';
import logger from '../config/logger';

// Cache TTL in seconds
export const CACHE_TTL = {
    STATISTICS: 300,           // 5 minutes
    CASUAL_WORKERS: 120,       // 2 minutes
    USER_DATA: 600,            // 10 minutes
    NOTIFICATION_COUNT: 60,    // 1 minute
    REPORTS: 900,              // 15 minutes
    WORK_ENTRIES: 180,         // 3 minutes
    DAILY_REQUESTS: 120,       // 2 minutes
    SUPERVISORS: 300,          // 5 minutes
};

// Cache keys
export const CACHE_KEYS = {
    STATISTICS: 'statistics',
    CASUAL_WORKERS: (page: number, limit: number) => `casual_workers:${page}:${limit}`,
    CASUAL_BY_ID: (id: string) => `casual:${id}`,
    USER_BY_ID: (id: string) => `user:${id}`,
    USER_BY_EMAIL: (email: string) => `user:email:${email}`,
    NOTIFICATION_COUNT: (userId: string) => `notification_count:${userId}`,
    NOTIFICATIONS: (userId: string, limit: number) => `notifications:${userId}:${limit}`,
    WORK_ENTRIES: (params: string) => `work_entries:${params}`,
    DAILY_REQUESTS: (params: string) => `daily_requests:${params}`,
    SUPERVISORS: 'supervisors',
    PENDING_REQUESTS: 'pending_requests',
};

class CacheService {
    private cache: NodeCache;
    private defaultTTL: number;

    constructor() {
        // Create cache instance with default settings
        this.cache = new NodeCache({
            stdTTL: 300,              // Default TTL: 5 minutes
            checkperiod: 120,         // Check for expired keys every 2 minutes
            useClones: false,         // Don't clone objects (better performance)
            deleteOnExpire: true,     // Delete expired keys
        });

        this.defaultTTL = 300;

        // Event listeners for monitoring
        this.cache.on('set', (key) => {
            logger.debug(`Cache SET: ${key}`);
        });

        this.cache.on('del', (key) => {
            logger.debug(`Cache DEL: ${key}`);
        });

        this.cache.on('expired', (key) => {
            logger.debug(`Cache EXPIRED: ${key}`);
        });

        logger.info('Cache service initialized');
    }

    /**
     * Get value from cache
     */
    get<T>(key: string): T | undefined {
        try {
            const value = this.cache.get<T>(key);
            if (value !== undefined) {
                logger.debug(`Cache HIT: ${key}`);
            } else {
                logger.debug(`Cache MISS: ${key}`);
            }
            return value;
        } catch (error) {
            logger.error(`Error getting from cache: ${key}`, error);
            return undefined;
        }
    }

    /**
     * Set value in cache with optional TTL
     */
    set<T>(key: string, value: T, ttl?: number): boolean {
        try {
            const success = this.cache.set(key, value, ttl || this.defaultTTL);
            if (success) {
                logger.debug(`Cache SET: ${key} (TTL: ${ttl || this.defaultTTL}s)`);
            }
            return success;
        } catch (error) {
            logger.error(`Error setting cache: ${key}`, error);
            return false;
        }
    }

    /**
     * Delete a specific key from cache
     */
    delete(key: string): number {
        try {
            const deleted = this.cache.del(key);
            if (deleted > 0) {
                logger.debug(`Cache DEL: ${key}`);
            }
            return deleted;
        } catch (error) {
            logger.error(`Error deleting from cache: ${key}`, error);
            return 0;
        }
    }

    /**
     * Delete multiple keys from cache
     */
    deleteMultiple(keys: string[]): number {
        try {
            const deleted = this.cache.del(keys);
            logger.debug(`Cache DEL MULTIPLE: ${deleted} keys`);
            return deleted;
        } catch (error) {
            logger.error('Error deleting multiple keys from cache', error);
            return 0;
        }
    }

    /**
     * Clear all cache
     */
    flush(): void {
        try {
            this.cache.flushAll();
            logger.info('Cache flushed');
        } catch (error) {
            logger.error('Error flushing cache', error);
        }
    }

    /**
     * Get cache statistics
     */
    getStats() {
        return this.cache.getStats();
    }

    /**
     * Check if key exists in cache
     */
    has(key: string): boolean {
        return this.cache.has(key);
    }

    /**
     * Get or set pattern (cache-aside pattern)
     */
    async getOrSet<T>(
        key: string,
        fetchFn: () => Promise<T>,
        ttl?: number
    ): Promise<T> {
        // Try to get from cache
        const cached = this.get<T>(key);
        if (cached !== undefined) {
            return cached;
        }

        // Cache miss - fetch data
        try {
            const data = await fetchFn();
            this.set(key, data, ttl);
            return data;
        } catch (error) {
            logger.error(`Error in getOrSet for key: ${key}`, error);
            throw error;
        }
    }

    /**
     * Invalidate cache by pattern
     */
    invalidatePattern(pattern: string): number {
        try {
            const keys = this.cache.keys();
            const matchingKeys = keys.filter(key => key.includes(pattern));

            if (matchingKeys.length > 0) {
                return this.deleteMultiple(matchingKeys);
            }
            return 0;
        } catch (error) {
            logger.error(`Error invalidating pattern: ${pattern}`, error);
            return 0;
        }
    }

    /**
     * Invalidate user-related cache
     */
    invalidateUser(userId: string): void {
        this.invalidatePattern(`user:${userId}`);
        this.invalidatePattern(`notification_count:${userId}`);
        this.invalidatePattern(`notifications:${userId}`);
    }

    /**
     * Invalidate casual worker cache
     */
    invalidateCasual(): void {
        this.invalidatePattern('casual');
        this.invalidatePattern('statistics');
    }

    /**
     * Invalidate work entries cache
     */
    invalidateWorkEntries(): void {
        this.invalidatePattern('work_entries');
        this.invalidatePattern('statistics');
    }

    /**
     * Invalidate daily requests cache
     */
    invalidateDailyRequests(): void {
        this.invalidatePattern('daily_requests');
        this.invalidatePattern('pending_requests');
        this.invalidatePattern('statistics');
    }
}

// Export singleton instance
export const cacheService = new CacheService();

