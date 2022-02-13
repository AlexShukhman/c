(function () {
    const title = 'To a Stranger';

    const author = 'by Walt Whitman';

    const body = `Passing stranger! you do not know how longingly I look upon you,
    You must be he I was seeking, or she I was seeking, (it comes to me as of a dream,)
    I have somewhere surely lived a life of joy with you,
    All is recall’d as we flit by each other, fluid, affectionate, chaste, matured,
    You grew up with me, were a boy with me or a girl with me,
    I ate with you and slept with you, your body has become not yours only nor left my body mine only,
    You give me the pleasure of your eyes, face, flesh, as we pass, you take of my beard, breast, hands, in return,
    I am not to speak to you, I am to think of you when I sit alone or wake at night alone,
    I am to wait, I do not doubt I am to meet you again,
    I am to see to it that I do not lose you.
    There it was I saw what I shall never forget
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

    const id = 'stranger';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='poem'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();