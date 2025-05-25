class TailwindButtonGenerator {
    static createButton(color,text,size){
        const button =`
            <button class='bg-${color}-500 hover:bg-${color}-700 font-bold py-${size} px-${size} rounded text-white'>
            ${text}
            </button>
        `
        return button;
    }
}