export const analyze = (text) =>{

    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
    {
        return 'Hii, How can I help you?';
    }
    else if(text.includes("Thank you"))
    {
        return "Thank you connect with us for more information.";
    }
    else if(text.includes("What are some good exercises for building upper body strength?")){
        return "Push-ups, Pull-ups, Bench Press, Overhead press, Dummbbell Rows";
    }
    return "I can't get it"
}