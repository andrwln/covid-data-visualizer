function sortBy(arr, key) {
    let sortFunc;
    switch (key) {
        default:
            sortFunc = (locationA, locationB) => {
                // sort by confirmed deaths
                // sort descending, or highest to lowest value

                return locationB.confirmed - locationA.confirmed;
            };
    }

    return arr.sort(sortFunc);
}

export default sortBy;
