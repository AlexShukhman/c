(function () {
    const title = 'Autumn Daybreak';

    const author = 'by Edna St. Vincent Millay';

    const body = `Cold wind of autumn, blowing loud
    At dawn, a fortnight overdue,
    Jostling the doors, and tearing through
    My bedroom to rejoin the cloud,
    I know-for I can hear the hiss
    And scrape of leaves along the floor-
    How may boughs, lashed bare by this,
    Will rake the cluttered sky once more.
    Tardy, and somewhat south of east,
    The sun will rise at length, made known
    More by the meagre light increased
    Than by a disk in splendour shown;
    When, having but to turn my head,
    Through the stripped maple I shall see,
    Bleak and remembered, patched with red,
        The hill all summer hid from me.`;

    const id = 'autumn';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='poem'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();