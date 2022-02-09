(function () {
    const title = 'Wakefulness';

    const author = 'by John Ashbury';

    const body = `An immodest little white wine, some scattered seraphs,
    recollections of the Fall—tell me,
    has anyone made a spongier representation, chased
    fewer demons out of the parking lot
    where we all held hands?
    
    Little by little the idea of the true way returned to me.
    I was touched by your care,
    reduced to fawning excuses.
    Everything was spotless in the little house of our desire,
    the clock ticked on and on, happy about
    being apprenticed to eternity. A gavotte of dust motes
    came to replace my seeing. Everything was as though
    it had happened long ago
    in ancient peach-colored funny papers
    wherein the law of true opposites was ordained
    casually. Then the book opened by itself
    and read to us: “You pack of liars,
    of course tempted by the crossroads, but I like each
    and every one of you with a peculiar sapphire intensity.
    Look, here is where I failed at first.
    The client leaves. History natters on,
    rolling distractedly on these shores. Each day, dawn
    condenses like a very large star, bakes no bread,
    shoes the faithless. How convenient if it’s a dream.”
    
    In the next sleep car was madness.
    An urgent languor installed itself
    as far as the cabbage-hemmed horizons. And if I put a little
    bit of myself in this time, stoppered the liquor that is our selves’
    truant exchanges, brandished my intentions
    for once? But only I get
    something out of this memory.
    A kindly gnome
    of fear perched on my dashboard once, but we had all
    been instructed
    to ignore the conditions of the chase. Here, it
    seems to grow lighter with each passing century. No matter
    how you twist it,
    life stays frozen in the headlights.
    Funny, none of us heard the roar.`;

    const id = 'wakefulness';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='poem'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();