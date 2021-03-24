const data = [
    {
        name: 'Do nam',
        subItem:[
            {
                name: 'Giay nam',
            },
            {
                name: 'Ao nam',
                subItem: [
                    {
                        name: 'Ao nam size M'
                    }
                ]
            }
        ]
    },
    {
        name: 'Do nu',
        subItem: [
            {
                name: 'Giay nu',
                subItem: [
                    {
                        name: 'Giay nu size M'
                    }
                ]
            }
        ]
    }
]

const parseData = data => {
    const queue = [data];
    const result = [];
    while(queue.length) {
        const data = queue.shift();
        data.map(item => {
            result.push(item.name);
            if (item.subItem) {
                queue.push(item.subItem);
            }
        })
    }
    return result;
}

console.log(parseData(data));