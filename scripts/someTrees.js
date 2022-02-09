(function () {
    const title = 'Some Trees';

    const author = 'by John Ashbury';

    const body = `These are amazing: each
    Joining a neighbor, as though speech
    Were a still performance.
    Arranging by chance

    To meet as far this morning
    From the world as agreeing
    With it, you and I
    Are suddenly what the trees try

    To tell us we are:
    That their merely being there
    Means something; that soon
    We may touch, love, explain.

    And glad not to have invented
    Such comeliness, we are surrounded:
    A silence already filled with noises,
    A canvas on which emerges

    A chorus of smiles, a winter morning.
    Placed in a puzzling light, and moving,
    Our days put on such reticence
    These accents seem their own defense.`;

    const id = 'someTrees';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce((acc, line) => `${acc}<p class='poem'>${line}</p>`, '');
})();