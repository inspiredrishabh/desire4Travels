// Professional travel image collection and optimization

// Premium travel destinations images
export const travelImages = {
  hero: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070",
  beach:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
  mountain:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070",
  cityscape:
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064",
  culture:
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2087",
  adventure:
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070",
  cuisine:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
  resort:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
};

// Optimize images for web display
export const optimizeImage = (url, width = 1200) => {
  if (!url) return "";

  // Handle Unsplash images
  if (url.includes("unsplash.com")) {
    return `${url}?q=80&w=${width}&auto=format,compress`;
  }

  // Handle Cloudinary images
  if (url.includes("cloudinary.com")) {
    return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
  }

  return url;
};

// Create srcset for responsive images
export const createSrcSet = (url) => {
  if (!url) return "";

  const widths = [480, 768, 1024, 1280, 1536, 2048];
  return widths.map((w) => `${optimizeImage(url, w)} ${w}w`).join(", ");
};

// Get dominant color from image for loading placeholders
export const getImagePlaceholder = (imageUrl) => {
  // This would typically be a server-side function
  // For client-side, we're returning fallback colors based on image type

  if (imageUrl.includes("beach") || imageUrl.includes("ocean")) {
    return "#c2e0f4"; // Light blue for beaches
  } else if (imageUrl.includes("mountain")) {
    return "#3c7346"; // Green for mountains
  } else if (imageUrl.includes("city")) {
    return "#8c8c8c"; // Gray for cities
  } else if (imageUrl.includes("cuisine") || imageUrl.includes("food")) {
    return "#e6c9a8"; // Warm tone for food
  } else {
    return "#e0e0e0"; // Default light gray
  }
};
