export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
export const getInitials = (fullName) => {
    if (!fullName) return "";
    const words = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0].toUpperCase();
    }
    return initials;
}
