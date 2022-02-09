(function () {
    const title = 'The Fawn';

    const author = 'by Edna St. Vincent Millay';

    const body = `There it was I saw what I shall never forget
    And never retrieve.
    Monstrous and beautiful to human eyes, hard to
    believe,
    He lay, yet there he lay,
    Asleep on the moss, his head on his polished cleft
    small ebony hoves,
    The child of the doe, the dappled child of the deer.
    
    Surely his mother had never said, "Lie here
    Till I return," so spotty and plain to see
    On the green moss lay he.
    His eyes had opened; he considered me.
    
    I would have given more than I care to say
    To thrifty ears, might I have had him for my friend
    One moment only of that forest day:
    
    Might I have had the acceptance, not the love
    Of those clear eyes;
    Might I have been for him in the bough above
    Or the root beneath his forest bed,
    A part of the forest, seen without surprise.
    
    Was it alarm, or was it the wind of my fear lest he
    depart
    That jerked him to his jointy knees,
    And sent him crashing off, leaping and stumbling
    On his new legs, between the stems of the white
    trees?`;

    const id = 'fawn';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='poem'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();