export const getConfig = () => {
    const PORT = process.env.PORT;
    if (!PORT) {
        throw new Error('PORT environment variable is missing');
    }

    return {
        PORT
    };
};