function sortBy(arr, opts) {
    const { key, descending } = opts;

    const sortFunc = (locationA, locationB) => {
        const valA = locationA[key];
        const valB = locationB[key];

        switch(typeof valA) {
            case 'number':
                return descending ? valB - valA : valA - valB;
            case 'string':
                if (valA.toUpperCase() < valB.toUpperCase()) {
                    return descending ? -1 : 1;
                }
                if (valA.toUpperCase() > valB.toUpperCase()) {
                    return descending ? 1 : -1;
                }
                return 0; // strings must be equal
        }
    };


    return arr.sort(sortFunc);
}

export default sortBy;
