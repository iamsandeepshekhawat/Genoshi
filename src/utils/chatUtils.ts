// Get a random item from an array
export const getRandomResponse = <T>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

// Determine if it's a new day compared to the previous message
export const isNewDay = (
  current: Date, 
  previous: Date | null
): boolean => {
  if (!previous) return true;
  
  return (
    current.getDate() !== previous.getDate() ||
    current.getMonth() !== previous.getMonth() ||
    current.getFullYear() !== previous.getFullYear()
  );
};

// Check if enough time has passed to show a timestamp between messages
export const shouldShowTimestamp = (
  current: Date, 
  previous: Date | null
): boolean => {
  if (!previous) return true;
  
  // Show timestamp if more than 5 minutes have passed
  const fiveMinutes = 5 * 60 * 1000;
  return current.getTime() - previous.getTime() > fiveMinutes;
};