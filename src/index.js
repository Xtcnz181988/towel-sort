module.exports = function towelSort (matrix) {
    let x = [];
    if (matrix == null) {
        return x;
    } else {
        matrix.forEach(function(e, i) {
            if (i % 2 == 0) {
                x.push(e);
            } else {
                x.push(e.reverse());
            }
        })
        return x.flat();
    }
    }



  
