// Complete the timeInWords function below.
function timeInWords(h, m) {
    const getText = number => {
        switch (number) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
            case 20:
                return 'twenty';
            default:
                break;
        }
    }

    let minutes = m - 30;
    if (m === 15) return `quarter past ${getText(h)}`;
    if (m === 45) return `quarter to ${getText(h + 1)}`;
    if (minutes === -30) return `${getText(h)} o' clock`;
    if (minutes === 0) return `half past ${getText(h)}`;
    if (minutes < 0) {
        if (m > 20) return `${getText(20)} ${getText(m % 20)} minutes past ${getText(h)}`;
        return `${getText(m)} ${m === 1 ? 'minute' : 'minutes'} past ${getText(h)}`;
    }
    if (minutes > 0) {
        minutes = 30 - minutes;
        if (minutes > 20) return `${getText(20)} ${getText(minutes % 20)} minutes to ${getText(h + 1)}`;
        return `${getText(minutes)} ${minutes === 1 ? 'minute' : 'minutes'} to ${getText(h + 1)}`;
    }
}

console.log(timeInWords(5, 59))
