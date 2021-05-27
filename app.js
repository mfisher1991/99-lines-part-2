document.addEventListener('DOMContentLoaded', function() {
            let container = document.createElement('div');
            container.className = 'header-container';
            document.body.appendChild(container);
            let liBitn = document.getElementsByClassName('li-btn')[0];
            let friends = ['Chad', 'James', 'Mike', 'Ray', 'Lisa'];

            //for(starting point, run condition (when to stop); increment/decrement)
            function codeSong() {
                for (let j = 0; j < myFriends.length; j++) {
                    var lines;
                    var linesleft;
                    let div = document.createElement('div')
                    let h3 = document.createElement('h3')
                    h3.innerText = myFriends[j];
                }


            }
        }
        for (let i = 0; i < friends.length; i++) {
            //get #'s going from
            for (let j = 99; j > 0; j--) {
                //for if j doesn't == 1 and doesn't == 2
                if (j !== 1 && j !== 2) {
                    console.log(
                        j + ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' more lines of code in the file.'
                    );
                } else if (j == 2) {
                    console.log(j + ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' more line of code in the file.');

                    //when j == 1
                } else {
                    console.log(j + ' line of code in the file, ' + j + ' line of code. ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.');
                }
            }
        }