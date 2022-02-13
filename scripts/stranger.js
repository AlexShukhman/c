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
    I am to see to it that I do not lose you.`;

    const id = 'stranger';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='poem'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();