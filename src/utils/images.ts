// Configuration for Image Delivery
// TODO: Replace with actual Bunny.net Storage Zone CDN URL when available
const BUNNY_CDN_HOSTNAME = "https://marco-gutierezz.b-cdn.net";
const USE_CDN = true; // Set to true to enable CDN delivery

/**
 * Generates the full URL for an image asset.
 * Handles switching between local paths and Bunny.net CDN.
 * 
 * @param path - The local path of the image (e.g., "/images/projects/foo.png")
 * @return The full URL to use in <img> tags
 */
export const getImageUrl = (path: string): string => {
    if (!path) return "";

    // If it's already a full URL, return it
    if (path.startsWith("http")) return path;

    // If we are using CDN, construct the CDN URL
    if (USE_CDN) {
        // Remove leading slash if present to avoid double slashes
        const cleanPath = path.startsWith("/") ? path.slice(1) : path;
        return `${BUNNY_CDN_HOSTNAME}/${cleanPath}`;
    }

    // Otherwise return local path
    return path;
};
