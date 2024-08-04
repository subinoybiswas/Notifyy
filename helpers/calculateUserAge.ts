export const calculateUserAge = (createdAt: Date) => {
    const createdDate = new Date(createdAt.getTime());
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMilliseconds = currentDate.getTime() - createdDate.getTime();

    // Convert the difference to months
    const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30);

    // Round down to get the whole number of months
    const months = Math.floor(diffInMonths);

    return months;
};