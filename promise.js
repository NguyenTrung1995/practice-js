const obj = new Promise((res, rej) => {
    res('ha')
    rej('asd');
})

const test = async () => {
    try {
        const result = await obj;
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

test();