// @Function(Number) => return Number
export const ageCalculator = (timestamp) => {
    const today = new Date();
    const todayTimestamp = today.getTime();
    const userAgeTimestamp = todayTimestamp - timestamp;
    const userAge = Math.floor(userAgeTimestamp / 31536000000);
    return userAge;
};
