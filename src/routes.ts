/**
 * An array of routes that are accessible to the public
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
]

export const authRoutes = [
    "/auth/login",
    "/auth/register"
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
/**
 *  The default redirect path after logging in
 *  @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";

