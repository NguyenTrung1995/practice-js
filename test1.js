const obj = new Promise((res, rej) => {
    rej('asd');
})

const test = async () => {
    const result = await obj;
    console.log(result);
}