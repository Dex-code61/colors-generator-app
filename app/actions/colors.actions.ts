
const GetColors = async ({number, hue, mode}: {number?: number, hue?: string, mode?: string}) => {
    try {
        const params = <{number?: number, hue?: string, mode: string}>{}
    if(number) params.number = number
    if(hue) params.hue = hue
    if(mode) params.mode = mode
    const colors = await fetch(`https://x-colors.yurace.pro/api/random/${params?.hue}?number=${params?.number}&type=${params?.mode}`);
    return colors.json();
    } catch (error) {
        console.log(error)
        return[]

    }
};

export { GetColors }
