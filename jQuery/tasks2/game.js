
function generateSudokuGrid2(data) {
    let colms = [];
    for (let i = 0; i < 9; i++) {
        for (let y = 0; y < 9; y++) {

            let $tmpElement = $('<input class="input-box" type="text"></input>');

            if (data[i][y] != 0) {
                $tmpElement.val(data[i][y]).prop( "disabled", true );
            }
            colms.push($tmpElement);
        }
    }

    return colms;
}

function throwMessage(messageString, type) {

    if (type == 1) {
        $('.error-message').html('<div class="alert alert-success" role="alert">' + messageString + '</div>');
    } else if (type == 2) {
        $('.error-message').html('<div class="alert alert-warning" role="alert">' + messageString + '</div>');
    } else {
        $('.error-message').html('<div class="alert alert-danger" role="alert">' + messageString + '</div>');
    }
}

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '');

const encodeParams = (params) =>Object.keys(params)
                    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
                    .join('&');

function checkSolved(data) {

    fetch('https://sugoku.herokuapp.com/validate', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.status);
        if (response.status == 'solved') {
            $('.error-message').html('<div class="alert alert-success" role="alert">Sudoku is solved</div>');
        } else if (response.status == 'broken') {
            $('.error-message').html('<div class="alert alert-danger" role="alert">Sudoku is wrong</div>');
        } else {
            $('.error-message').html('<div class="alert alert-warning" role="alert">Sudoku is not fully filled</div>');
        }
    })
    .catch(console.warn)
}

$('.btn-submit').click(function() {
    if (!$('#difficulty').children("option:selected").val()) {
        $('.game-container').html('');
        $('.btn-submit-sudoku').remove();
        throwMessage('Error wrong difficulty', 3);
        return;
    }
    const source = 'https://sugoku.herokuapp.com/board?difficulty=' + $('#difficulty').children("option:selected").val();

    fetch(source, {
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => response.json())
    .then(response => {
        $('.error-message').html('');
        $('.game-container').html(generateSudokuGrid2(response.board));
        $('<button type="button" class="btn btn-primary btn-submit-sudoku">Submit sudoku</button>').insertAfter($('.game-container'));

        $('.input-box').keyup(function(e)
        {
            if (/\D/g.test(this.value)) {
                this.value = this.value.replace(/\D/g, '');
            }

            if (!(/^\d{1}$/g.test(this.value))) {
                this.value = this.value.replace(/\d{1}$/g, '');
            }

        });

        $('.btn-submit-sudoku').click(function() {
            const data = {
                board:[]
            };

            let tmpCounterRow = 0;
            let tmpCounterColum = 0;
            $('.game-container > input').each( function () {
                if (!data.board[tmpCounterRow]) {
                    data.board[tmpCounterRow] = [];
                }

                if (parseInt($(this).val()) > 0 && parseInt($(this).val()) <= 9) {
                    data.board[tmpCounterRow][tmpCounterColum] = parseInt($(this).val());
                } else {
                    data.board[tmpCounterRow][tmpCounterColum] = 0;
                }

                if (tmpCounterColum < 8) {
                    tmpCounterColum++;
                } else {
                    tmpCounterColum = 0;
                    tmpCounterRow++;
                }

            });

            checkSolved(data);
        });
    })
    .catch(console.warn)

});


