const companyEmailAddresses = {
    finance: ["jill@companyx.com", "frank@companyx.com"],
    engineering: {
        qa: ["ahmed@companyx.com", "taylor@companyx.com"],
        development: ["cletus@companyx.com", "bojangles@companyx.com", "bibi@companyx.com"],
    },
    management: {
        directors: ["tanya@companyx.com", "odell@companyx.com", "amin@companyx.com"],
        projectLeaders: [
            "bobby@companyx.com",
            "jack@companyx.com",
            "harry@companyx.com",
            "oscar@companyx.com",
        ],
        hr: ["mo@companyx.com", "jag@companyx.com", "ilaria@companyx.com"],
    },
    sales: {
        business: {
            senior: ["larry@companyx.com", "sally@companyx.com"],
        },
        client: {
            senior: ["jola@companyx.com", "amit@companyx.com"],
            exec: ["asha@companyx.com", "megan@companyx.com"],
        },
    },
};

const result = [];

const recursion = obj => {
    if (Array.isArray(obj)) return result.push(obj);
    Object.keys(obj).forEach(key => {
        return recursion(obj[key]);
    });
}

recursion(companyEmailAddresses);

console.log(result.concat.apply([], result));
